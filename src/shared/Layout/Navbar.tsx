import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Layout, Menu, Row} from "antd";
import {PATH} from "jsConstants";

interface NavbarProps {
    isAuthenticated: boolean
}

export const Navbar: FC<NavbarProps> = ({isAuthenticated}) => {
    const router = useNavigate();

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