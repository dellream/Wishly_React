import React from "react";
import routesConfig from './routesConfig';
import {RouterProvider} from 'react-router-dom';
import {useCheckAuthStatus} from "hooks";
import {ConfigProvider} from "antd";
import ruRU from 'antd/locale/ru_RU'; // Локаль Ant Design


function App() {
    useCheckAuthStatus();  // Когда пользователь только открыл приложение - проверяем, авторизован ли он

    return (
        <ConfigProvider locale={ruRU}>
            <RouterProvider router={routesConfig} />
        </ConfigProvider>
    );
}

export default App;
