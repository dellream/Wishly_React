import React from 'react';
import { useAppSelector } from "store";
import Landing from "../landing";
import {Link, Outlet} from "react-router-dom";
import styles from './styles.scss';
import { PATH } from "jsConstants";

const Main: React.FC = () => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

    return isAuthenticated ? (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <nav className={styles.menu}>
                    <div className={styles.menuItem}>
                        <Link to={PATH.PROFILE} className={styles.menuLink}>
                            <span className={styles.menuText}>Моя страница</span>
                        </Link>
                    </div>
                    <div className={styles.menuItem}>
                        <Link to={PATH.FRIENDS} className={styles.menuLink}>
                            <span className={styles.menuText}>Друзья</span>
                        </Link>
                    </div>
                </nav>
            </div>

            <div className={styles.content}>
                <Outlet />
            </div>

        </div>
    ) : (
        <Landing />
    );
};

export default Main;
