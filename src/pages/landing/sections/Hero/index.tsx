import React from "react";
import styles from "./styles.scss";
import heroGift from "/files/hero_gift.png";

export const Hero: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.textContainter}>
                    <h1 className={styles.title}>Привет! Это Wishly - ваше приложение для списка желаний</h1>
                    <p className={styles.subtitle}>Поделись своими желаниями с друзьями и получай только «те самые»
                        подарки.
                        Это бесплатно и в неограниченном количестве.</p>
                    <button className={styles.ctaButton}>Создать свой список</button>
                </div>
                <img className={styles.photo} src={heroGift} alt="hero_gift"/>
            </div>
        </div>
    );
};
