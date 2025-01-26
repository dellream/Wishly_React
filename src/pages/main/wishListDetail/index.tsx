import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Spin} from "antd";
import {useGetWishList} from "api/queries/wishlists";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import styles from "./styles.scss";

dayjs.locale("ru");

export const WishListDetail: React.FC = () => {
    const navigate = useNavigate();
    const {id} = useParams<{id: string}>();

    const {data: wishList, isLoading, error} = useGetWishList(Number(id));

    if (isLoading) {
        return (
            <div className={styles.loader}>
                <Spin size="large" />
            </div>
        );
    }

    if (error) {
        return <p className={styles.errorText}>Не удалось загрузить информацию о вишлисте</p>;
    }

    if (!wishList) {
        return <p className={styles.noWishListText}>Вишлист не найден</p>;
    }

    const formattedDate = dayjs(wishList.data.event_date).format("D MMMM YYYY");

    return (
        <div className={styles.wishListDetail}>
            <Button onClick={() => navigate(-1)}>Назад</Button>

            <h1 className={styles.title}>{wishList.data.title}</h1>
            <p className={styles.description}>{wishList.data.description}</p>
            <div className={styles.meta}>
                <div>
                    <span className={styles.metaLabel}>Публичный:</span>{" "}
                    {wishList.data.is_public ? "Да" : "Нет"}
                </div>
                <div>
                    <span className={styles.metaLabel}>Дата события:</span>{" "}
                    {formattedDate}
                </div>
            </div>
        </div>
    );
};
