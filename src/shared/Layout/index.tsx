import React from "react";
import {Layout, Menu} from "antd";
import {Outlet, useLocation} from "react-router-dom";
import {Navbar} from "./sections/Navbar/Navbar";
import {useAppSelector} from "store";
import {PATH} from "jsConstants";
import {Footer} from "./sections/Footer/Footer";

import styles from './styles.scss'
import {Main} from "pages";
import Sider from "antd/es/layout/Sider";

const {Content} = Layout;

const AppLayout: React.FC = () => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
    const location = useLocation();

    const PageWithoutFooter = location.pathname === PATH.LOGIN ||
        location.pathname === PATH.REGISTRATION ||
        location.pathname === PATH.MAIN;

    // Определяем, отображать ли сайдер
    const isMainPage = location.pathname === PATH.MAIN;

    return (
        <Layout>
            <div className={styles.layout}>
                <Navbar isAuthenticated={isAuthenticated}/>
                <div className={styles.content}>
                    {isMainPage ? (
                        <Main/>
                    ) : (
                        <Content>
                            <Outlet/> {/* Рендерим маршруты напрямую */}
                        </Content>
                    )}
                </div>
                {!PageWithoutFooter && <Footer/>} {/* Футер скрывается на странице логина */}
            </div>
        </Layout>
    );
};

export default AppLayout;
