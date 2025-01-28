import React from "react";
import {useAppSelector} from "store";
import Landing from "../landing";
import {Link, Outlet, useNavigate} from "react-router-dom";
import styles from "./styles.scss";
import {PATH} from "jsConstants";
import {useLogout} from "api/queries/auth";
import {IdcardOutlined, TeamOutlined, SelectOutlined} from "@ant-design/icons";


const Main: React.FC = () => {
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
    const {mutate: logout} = useLogout();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate(PATH.LOGIN);
    };

    const currentPath = window.location.pathname;

    return isAuthenticated ? (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <nav className={styles.menu}>

                    <div className={styles.menuItem}>
                        <Link
                            to={PATH.PROFILE}
                            className={`${styles.menuLink} ${
                                currentPath === PATH.PROFILE ? "active" : ""
                            }`}
                        >
                            <span className={styles.menuText}>
                                <IdcardOutlined className={styles.icon}/>Моя страница
                            </span>
                        </Link>
                    </div>

                    <div className={styles.menuItem}>
                        <Link
                            to={PATH.FRIENDS}
                            className={`${styles.menuLink} ${
                                currentPath === PATH.FRIENDS ? "active" : ""
                            }`}
                        >
                            <span className={styles.menuText}>
                                <TeamOutlined className={styles.icon}/>Друзья
                            </span>
                        </Link>
                    </div>

                </nav>

                <div className={styles.menuItem}>
                  <span
                      className={styles.logout}
                      onClick={handleLogout}
                      role="button"
                  >
                    <SelectOutlined className={styles.icon}/>Выйти
                  </span>
                </div>

            </div>

            <div className={styles.content}>
                <Outlet/>
            </div>

        </div>
    ) : (
        <Landing/>
    );
};

export default Main;
