import React from 'react';
import {Row} from "antd";

import styles from './styles.scss'

console.log(styles); // Проверьте, что объект не `undefined` и содержит ключ `h100`

const Login = () => {
    return (
        <Row justify={"center"} align={"middle"} className={ styles.h100 }>
            <h1>Login page</h1>
        </Row>
    )
};
export default Login;
