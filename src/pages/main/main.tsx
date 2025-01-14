import React from 'react';
import { useAppSelector } from "store";
import Landing from "../landing";
import { Link } from "react-router-dom";
import { Button } from "antd";
import styles from './styles.scss';
import { PATH } from "jsConstants";

const Main: React.FC = () => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

    return isAuthenticated ? (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <nav className={styles.menu}>
                    <div className={styles.menuItem}>
                        <Link to={`${PATH.PROFILE}`} className={styles.menuLink}>
                            {/*<svg*/}
                            {/*    aria-hidden="true"*/}
                            {/*    focusable="false"*/}
                            {/*    viewBox="0 0 24 24"*/}
                            {/*    xmlns="http://www.w3.org/2000/svg"*/}
                            {/*    className={styles.menuIcon}*/}
                            {/*/>*/}
                            <span className={styles.menuText}>Моя страница</span>
                        </Link>
                    </div>
                    <div className={styles.menuItem}>
                        <Link to={`${PATH.FRIENDS}`} className={styles.menuLink}>
                            {/*<svg*/}
                            {/*    aria-hidden="true"*/}
                            {/*    focusable="false"*/}
                            {/*    viewBox="0 0 24 24"*/}
                            {/*    xmlns="http://www.w3.org/2000/svg"*/}
                            {/*    className={styles.menuIcon}*/}
                            {/*/>*/}
                            <span className={styles.menuText}>Друзья</span>
                        </Link>
                    </div>
                </nav>
            </div>

            <div className={styles.content}>
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
                                    {/*<svg*/}
                                    {/*    aria-hidden="true"*/}
                                    {/*    focusable="false"*/}
                                    {/*    viewBox="0 0 24 24"*/}
                                    {/*    xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*    className={styles.statsIcon}*/}
                                    {/*/>*/}
                                    <span className={styles.statsText}>Количество друзей, нужна ручка</span>
                                </div>
                            </div>
                            <div className={styles.profileActions}>
                                <Button className={styles.profileButton} icon={<svg viewBox="0 0 24 24" />}>
                                    Редактировать
                                </Button>
                                <Button className={styles.profileButton} icon={<svg viewBox="0 0 24 24" />}>
                                    Поделиться
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.wishList}>
                    <h3>Мои вишлисты</h3>
                    <Button className={styles.profileButton}>Создать новый</Button>
                </div>

            </div>
        </div>
    ) : (
        <Landing />
    );
};

export default Main;
