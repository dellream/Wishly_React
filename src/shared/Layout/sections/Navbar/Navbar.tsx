import {FC} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Layout, Menu, Row, theme} from "antd";
import {PATH} from "jsConstants";

interface NavbarProps {
    isAuthenticated: boolean
}

import styles from './styles.scss'

export const Navbar: FC<NavbarProps> = ({isAuthenticated}) => {
    const router = useNavigate();

    const location = useLocation();
    const isLoginPage = location.pathname === PATH.LOGIN;


    const menuAuthItems = [
        {
            key: PATH.LOGIN,
            label: 'Войти',
            onClick: () => router(PATH.LOGIN)
        }
    ]

    const menuNotAuthItems = [
        {
            key: PATH.LOGIN,
            label: 'Выйти',
            onClick: () => console.log('Нажата кнопка выйти авторизованным пользователем')
        }
    ]

    return (
        <Layout.Header className={`${styles.header} ${isLoginPage ? styles.loginPage : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo} onClick={() => router(PATH.MAIN)} role="button">
                    Wishly
                </div>
                <Row justify="end" align="middle" className={styles.navbar}>
                    {isAuthenticated ? (
                        <>
                            <div className={styles.username}>Имя пользователя</div>
                            <Menu
                                items={menuNotAuthItems}
                                className={styles.menu}
                                selectable={false}
                                mode="horizontal"
                            />
                        </>
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