import React from "react";
import {Button, Spin} from "antd";
import styles from "./styles.scss";
import {Link} from "react-router-dom";
import {getPath, PATH} from "jsConstants";
import {useGetMe} from "api/queries/user";
import {useGetWishLists} from "api/queries/wishlists";
import {Login} from "../../index";
import avatarDefault from "/src/files/avatarDefault.png"

const DefaultContent: React.FC = () => {
    const { data: user, isLoading: isUserLoading } = useGetMe();

    const params = user ? new URLSearchParams({ request_user_id: user.data.id.toString() }) : null;
    const { data: wishLists, isLoading: isWishListsLoading } = useGetWishLists(params ?? new URLSearchParams(), {
        enabled: !!user
    });

    if (isUserLoading || isWishListsLoading) {
        return (
            <div className={styles.loader}>
                <Spin size="large" />
            </div>
        );
    }

    if (!user) {
        return <Login />;
    }

    return (
        <div className={styles.defaultContent}>
            <div className={styles.profile}>
                <div className={styles.profileHeader}>
                    <img
                        src={avatarDefault}
                        className={styles.profileAvatar}
                        alt="Avatar"
                    />
                    <div className={styles.profileInfo}>
                        <h1 className={styles.profileName}>{user.data.email}</h1>
                        <div className={styles.profileStats}>
                            <div className={styles.statsItem}>
                                <span className={styles.statsText}>Количество друзей, нужна ручка</span>
                            </div>
                        </div>
                        <div className={styles.profileActions}>
                            <Button className={styles.profileButton} icon={<svg viewBox="0 0 24 24"/>}>
                                Редактировать
                            </Button>
                            <Button className={styles.profileButton} icon={<svg viewBox="0 0 24 24"/>}>
                                Поделиться
                            </Button>
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
                <ul className={styles.wishListItems}>
                    {wishLists?.data?.length ? (
                        wishLists.data.map((wishlist) => (
                            <li key={wishlist.id} className={styles.wishListItem}>
                                <Link to={getPath.wishlistDetail(wishlist.id)} className={styles.wishListLink}>
                                    {wishlist.title}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p className={styles.noWishListsText}>На данный момент у вас нет вишлистов</p>
                    )}
                </ul>
            </div>

        </div>
    );
};

export default DefaultContent;
