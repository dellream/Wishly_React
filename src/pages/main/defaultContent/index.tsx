import React from "react";
import { Button } from "antd";
import styles from "./styles.scss";
import {Link} from "react-router-dom";
import {PATH} from "jsConstants";

const DefaultContent: React.FC = () => {
    return (
        <div className={styles.defaultContent}>
            <div className={styles.profile}>
                <div className={styles.profileHeader}>
                    <img
                        src="/images/app/profile/avatarDefault.png"
                        className={styles.profileAvatar}
                        alt="Avatar"
                    />
                    <div className={styles.profileInfo}>
                        <h1 className={styles.profileName}>Какой-то пользователь, здесь нужна ручка</h1>
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
                <h3>Мои вишлисты</h3>
                <Link to="/create-wishlist">
                    <Button className={styles.profileButton}>Создать новый</Button>
                </Link>
            </div>

        </div>
    );
};

export default DefaultContent;
