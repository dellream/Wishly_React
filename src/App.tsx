import React from "react";
import routesConfig from './routesConfig';
import {RouterProvider} from 'react-router-dom';
import {useCheckAuthStatus} from "hooks";

function App() {
    useCheckAuthStatus();  // Когда пользователь только открыл приложение - проверяем, авторизован ли он

    return (
        <RouterProvider router={routesConfig}/>
    );
}

export default App;
