import React from "react";
import styles from "./styles.scss";
import {LoginForm} from "shared";
import vk_svg from "/files/vk.svg";
import {PATH} from "jsConstants";

const Login: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loginForm}>
                <div className={styles.title}>
                    <h2>Привет!</h2>
                    <span>Рады тебя видеть c:</span>
                </div>
                <LoginForm isLogin={true}/>
                <div className={styles.anotherEntry}>
                    <span>Или войти с помощью</span>
                    <img src={vk_svg} alt="vk"></img>
                </div>
            </div>

            <div className={styles.newUser}>
                <span>Новый пользователь? </span>
                <a href={PATH.REGISTRATION}>Зарегистрироваться</a>
            </div>
        </div>
    );
};

export default Login;
