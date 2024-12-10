import React from "react";
import routesConfig from './routesConfig';
import {RouterProvider} from 'react-router-dom';
import { DatePicker } from "antd";

function App() {
    return (
        <>
            <RouterProvider router={routesConfig} />
            <DatePicker />
        </>
    );
}

export default App;
