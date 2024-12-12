import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Layout, Menu, Row} from "antd";

enum HeaderItemIds {
    MAIN = 'MAIN',
    CHAT = 'CHAT',
    MENU = 'MENU',
    PROFILE = 'PROFILE',
    AUTH = 'AUTH'
}

interface NavbarProps {
    isAuthenticated: boolean
}

export const Navbar: FC<NavbarProps> = ({isAuthenticated}) => {
    const router = useNavigate();

    const menuAuthItems = [
        {
            key: HeaderItemIds.AUTH,
            label: 'Войти',
            onClick: () => router(HeaderItemIds.AUTH)
        }
    ]

    const menuNotAuthItems = [
        {
            key: HeaderItemIds.AUTH,
            label: 'Выйти',
            onClick: () => console.log('Нажата кнопка выйти авторизованным пользователем')
        }
    ]

    return (
        <Layout.Header>
            <Row justify={"end"}>
                {isAuthenticated
                    ?
                    <>
                        <div style={{color: 'white'}}>
                            Имя пользователя
                        </div>
                        <Menu theme="dark" mode="horizontal" selectable={false} items={menuNotAuthItems}/>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false} items={menuAuthItems}/>
                }
            </Row>
        </Layout.Header>
    )
}