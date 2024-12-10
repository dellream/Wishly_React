import {FC} from "react";
import {Layout, Row} from "antd";

enum HeaderItemIds {
    MAIN = 'MAIN',
    CHAT = 'CHAT',
    MENU = 'MENU',
    PROFILE = 'PROFILE',
    AUTH = 'AUTH'
}

export const Navbar: FC = () => {
    return (
        <Layout.Header>
            <Row justify={"end"}>
            </Row>
        </Layout.Header>
    )
}