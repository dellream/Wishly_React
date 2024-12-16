import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import { Layout } from "antd";
import {PATH} from "jsConstants";


import styles from './styles.scss'

export const Footer: FC = () => {
    return (
        <Layout.Footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <p>© 2024 Wishly. Все права защищены.</p>
                <div className={styles.footerLinks}>
                    <a href="/privacy-policy">Политика конфиденциальности</a>
                    <a href="/terms-of-service">Условия использования</a>
                </div>
            </div>
        </Layout.Footer>
    )
}