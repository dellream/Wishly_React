import React from "react";
import {Button, Spin} from "antd";
import styles from "./styles.scss";
import {Link, useNavigate} from "react-router-dom";
import {getPath, PATH} from "jsConstants";
import {useGetMe} from "api/queries/user";
import {useGetWishList, useGetWishLists} from "api/queries/wishlists";
import {Login} from "../../index";
import avatarDefault from "/src/files/avatarDefault.png"
import presentDefault from "/src/files/presentDefault.png";
import {useQueries} from "@tanstack/react-query";
import {getWishList} from "api/requests/wishlists";

const DefaultContent: React.FC = () => {
    const {data: user, isLoading: isUserLoading} = useGetMe();
    const navigate = useNavigate();

    const params = user ? new URLSearchParams({request_user_id: user.data.id.toString()}) : null;
    const {data: wishLists, isLoading: isWishListsLoading} = useGetWishLists(params ?? new URLSearchParams(), {
        enabled: !!user
    });

    const wishListsQueries = useQueries({
        queries: (wishLists?.data ?? []).map((wishlist) => ({
            queryKey: ["wishList", wishlist.id],
            queryFn: ({signal}) => getWishList(wishlist.id, signal),
            enabled: !!wishlist.id,
        })),
    });


    if (isUserLoading || isWishListsLoading) {
        return (
            <div className={styles.loader}>
                <Spin size="large"/>
            </div>
        );
    }

    if (!user) {
        return <Login/>;
    }

    return (
        <div className={styles.defaultContent}>
            <div className={styles.profile}>
                <div className={styles.profileHeader}>
                    <img src={avatarDefault} className={styles.profileAvatar} alt="Avatar"/>
                    <div className={styles.profileInfo}>
                        <h1>{user.data.email}</h1>
                        <div className={styles.profileStats}>
                            <div className={styles.statsItem}>
                                <span className={styles.statsText}>Количество друзей, нужна ручка</span>
                            </div>
                        </div>
                        <div className={styles.profileActions}>
                            <Button className={styles.profileButton}>Редактировать</Button>
                            <Button className={styles.profileButton}>Поделиться</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.wishList}>
                <div className={styles.wishListHeader}>
                    <h3>Мои вишлисты</h3>
                    <Link to="/create-wishlist">
                        <Button className={styles.profileButton}>Создать новый</Button>
                    </Link>
                </div>

                <div className={styles.wishListItems}>
                    {wishListsQueries.length ? (
                        wishListsQueries.map(({data: wishListData, isLoading}, index) => {
                                const wishlist = wishLists?.data[index];
                                if (!wishlist) return null;

                                return (
                                    <div
                                        key={wishlist.id}
                                        className={styles.wishListItem}
                                        onClick={() => navigate(getPath.wishlistDetail(wishlist.id))}
                                    >
                                        <div className={styles.wishListItemHeader}>
                                            <h4>{wishlist.title}</h4>
                                            <p>Количество вещей: {wishListData?.data?.things.length ?? 0}</p>
                                        </div>

                                        {isLoading ? (
                                            <Spin/>
                                        ) : (
                                            <div className={styles.wishListGrid}>
                                                {wishListData?.data?.things?.slice(0, 5).map((thing, idx) => (
                                                    <div key={thing.id || idx} className={styles.wishListItemImage}>
                                                        <img
                                                            src={thing.image_link || presentDefault}
                                                            alt={thing.title}
                                                            onError={(e) => (e.currentTarget.src = presentDefault)}
                                                        />
                                                    </div>
                                                ))}
                                                {(wishListData?.data?.things ?? []).length > 5 && (
                                                    <div className={styles.moreItems}>...</div>
                                                )}
                                            </div>
                                        )}

                                    </div>
                                );
                            }
                        )
                    ) : (
                        <p className={styles.noWishListsText}>На данный момент у вас нет вишлистов</p>
                    )}
                </div>


            </div>
        </div>
    );
};

export default DefaultContent;
