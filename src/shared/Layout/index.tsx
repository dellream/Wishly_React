import React from "react";
import {Layout} from "antd";
import {Outlet, useLocation} from "react-router-dom";
import {Navbar} from "./sections/Navbar/Navbar";
import {useAppSelector} from "store";
import {PATH} from "jsConstants";
import {Footer} from "./sections/Footer/Footer";

const {Content} = Layout;

const AppLayout: React.FC = () => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
    const location = useLocation();

    const isLoginPage = location.pathname === PATH.LOGIN;

    return (
        <Layout>
            <Navbar isAuthenticated={isAuthenticated}/>
            <Layout>
                <Content style={{padding: '20px', backgroundColor: '#fff'}}>
                    <Outlet/> {/* Вложенные маршруты будут рендериться здесь */}
                </Content>
            </Layout>
            {/* Убираем футер на странице логина */}
            {!isLoginPage && (
                <Footer />
            )}
        </Layout>
    );
};

export default AppLayout;
