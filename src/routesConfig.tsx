import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { PATH } from 'jsConstants';
import { Layout } from 'shared';

import {
    Main,
    NotFound,
} from './pages';

const routes: RouteObject[] = [
    {
        element: <Layout />,
        children: [
            {
                path: PATH.MAIN,
                element: <Main />
            },
            {
                path: PATH.NOT_FOUND,
                element: <NotFound />
            },
            // {
            //     path: '/',
            //     element: <ProtectedRoute />,
            //     children: protectedRoutes
            // }
        ]
    }
];

export default createBrowserRouter(routes);