import React from "react";
import { Layout } from "antd";
import {Outlet} from "react-router-dom";

const { Header, Content, Footer } = Layout;

const AppLayout: React.FC = () => {
    return (
        <Layout>
            <Header style={{ backgroundColor: '#001529', color: '#fff', padding: '0 20px' }}>
                header
            </Header>
            <Layout>
                <Content style={{ padding: '20px', backgroundColor: '#fff' }}>
                    <Outlet /> {/* Вложенные маршруты будут рендериться здесь */}
                </Content>
            </Layout>
            <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: '#fff' }}>
                footer
            </Footer>
        </Layout>
    );
};

export default AppLayout;
