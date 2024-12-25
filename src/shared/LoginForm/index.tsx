import React from "react";
import {Button, Form, Input, message} from "antd";
import styles from "./styles.scss";
import {useLogin} from "api/queries/auth";
import {UserCredentialsIn} from "api/types/auth";

const LoginForm: React.FC = () => {
    const { mutate } = useLogin();

    const onFinish = (values: UserCredentialsIn) => {
        mutate(values, {
            onSuccess: () => {
                message.success("Успешный вход!");
            },
            onError: (error) => {
                message.error("Ошибка при входе: " + error.message);
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
                label="Логин"
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