import React from "react";
import styles from "./styles.scss";
import heroGift from "/files/hero_gift.png";
import {useNavigate} from "react-router-dom";
import {PATH} from "jsConstants";

export const Hero: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.textContainter}>
                    <h1 className={styles.title}>Привет! Это Wishly - ваше приложение для списка желаний</h1>
                    <p className={styles.subtitle}>Поделись своими желаниями с друзьями и получай только «те самые»
                        подарки.
                        Это бесплатно и в неограниченном количестве.</p>
                    <button className={styles.ctaButton} onClick={() => navigate(PATH.LOGIN)}>
                        Создать свой список
                    </button>
                </div>
                <img className={styles.photo} src={heroGift} alt="hero_gift"/>
            </div>
        </div>
    );
};
