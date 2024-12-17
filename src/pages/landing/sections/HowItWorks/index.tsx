import React from "react";
import styles from "./styles.scss";

import stepOne from "/files/step_one.png";
import stepTwo from "/files/step_two.png";
import stepThree from "/files/step_three.png";

export const HowItWorks: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Как это работает?</h2>
                <div className={styles.columns}>
                    <div className={styles.stepOne}>
                        <img src={stepOne} alt="step_one" className={styles.image} />
                        <span>Шаг 1</span>
                        <h3>Создай список желаний</h3>
                        <span>Добавляй нужные желания с ссылками на интернет-магазины</span>
                    </div>

                    <div className={styles.stepTwo}>
                        <img src={stepTwo} alt="step_two" className={styles.image} />
                        <span>Шаг 2</span>
                        <h3>Поделись с друзьями</h3>
                        <span>Отправь им ссылку и каждый сможет забронировать подарок без регистрации</span>
                    </div>

                    <div className={styles.stepThree}>
                        <img src={stepThree} alt="step_three" className={styles.image} />
                        <span className={styles.spanForSteps}>Шаг 3</span>
                        <h3>Готово! Наслаждайся!</h3>
                        <span>Ты получаешь крутые подарки, а друзья не задаются вопросом «Что дарить?»</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
