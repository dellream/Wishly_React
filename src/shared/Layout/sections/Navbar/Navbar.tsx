import {FC} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Layout, Menu, Row, theme} from "antd";
import {PATH} from "jsConstants";
import { UserOutlined } from "@ant-design/icons";
import styles from './styles.scss'
import {useLogout} from "api/queries/auth";

interface NavbarProps {
    isAuthenticated: boolean
}

export const Navbar: FC<NavbarProps> = ({isAuthenticated}) => {
    const router = useNavigate();

    const isLandingPage = !isAuthenticated && useLocation().pathname === PATH.MAIN;

    const menuAuthItems = [
        {
            key: PATH.LOGIN,
            label: 'Войти',
            onClick: () => router(PATH.LOGIN)
        }
    ]

    return (
        <Layout.Header
            className={`${styles.header} ${isLandingPage ? styles.landingHeader : styles.authenticatedHeader}`}
        >
            <div className={styles.container}>
                <div className={styles.logo} onClick={() => router(PATH.MAIN)} role="button">
                    Wishly
                </div>
                <Row justify="end" align="middle" className={styles.navbar}>
                    {isAuthenticated ? (
                        <div
                            className={styles.profile}
                            onClick={() => router(PATH.MAIN)}
                            role="button"
                        >
                            <UserOutlined className={styles.icon} />Профиль
                        </div>
                    ) : (
                        <Menu
                            items={menuAuthItems}
                            className={styles.menu}
                            selectable={false}
                            mode="horizontal"
                        />
                    )}
                </Row>
            </div>
        </Layout.Header>
    )
}