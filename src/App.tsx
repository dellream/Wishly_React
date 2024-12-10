import React from "react";
import routesConfig from './routesConfig';
import {RouterProvider} from 'react-router-dom';

function App() {
    return (
        <RouterProvider router={routesConfig}/>
    );
}

export default App;
