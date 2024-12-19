import React from "react";
import {Button, Form, Input} from "antd";
import styles from "./styles.scss";

const LoginForm: React.FC = () => {
    const submit = () => {
        console.log("submit");
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 24 }}
            style={{ width: "100%", maxWidth: "100%" }} // Полная ширина родительского контейнера
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={submit}
        >

            <Form.Item
                label="Логин"
                name="username"
                rules={[{ required: true, message: 'Пожалуйста, введите логин!' }]}
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