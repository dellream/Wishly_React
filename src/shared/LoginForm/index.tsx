import React from "react";
import {Button, Form, Input, message} from "antd";
import styles from "./styles.scss";
import {useLogin, useRegistration} from "api/queries/auth";
import {UserCredentialsIn} from "api/types/auth";
import {DefaultError} from "api/apiService";
import {getErrorMessage} from "../../utils/getErrorMessage";
import {useNavigate} from "react-router-dom";
import {PATH} from "jsConstants";

interface Props {
    isLogin: boolean
}

const LoginForm: React.FC<Props> = ({ isLogin }) => {
    const navigate = useNavigate();
    const { mutate: login } = useLogin();
    const { mutate: register } = useRegistration();

    const onFinish = (values: UserCredentialsIn) => {
        const mutateFn = isLogin ? login : register;

        mutateFn(values, {
            onSuccess: () => {
                message.success("Успешный вход!");
                navigate(PATH.MAIN);
            },
            onError: (error) => {
                const errorMessage = getErrorMessage(error as DefaultError);
                message.error(errorMessage);
            },
        });
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 24 }}
            style={{ width: "100%", maxWidth: "100%" }} // Полная ширина родительского контейнера
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={onFinish}
        >

            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Пожалуйста, введите email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
                <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.customButton}
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm