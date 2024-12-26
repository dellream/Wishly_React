import React from "react";
import styles from "./styles.scss";
import { LoginForm } from "shared";
import vk_svg from "/files/vk.svg";

const Login: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loginForm}>
                <div className={styles.title}>
                    <h2>Регистрация</h2>
                    <span>Добро пожаловать в наш сервис!</span>
                </div>
                <LoginForm isLogin={false}/>
            </div>
        </div>
    );
};

export default Login;
