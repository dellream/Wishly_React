import React from "react";
import { Layout } from "antd";
import {Outlet} from "react-router-dom";
import {Navbar} from "./Navbar";
import {useAppSelector} from "store";

const { Content, Footer } = Layout;

const AppLayout: React.FC = () => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)

    return (
        <Layout>
            <Navbar isAuthenticated={isAuthenticated} />
            <Layout>
                <Content style={{ padding: '20px', backgroundColor: '#fff' }}>
                    <Outlet /> {/* Вложенные маршруты будут рендериться здесь */}
                </Content>
            </Layout>
            <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: '#fff' }}>
                Здесь будут ссылки
            </Footer>
        </Layout>
    );
};

export default AppLayout;
