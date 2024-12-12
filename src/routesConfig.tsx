import {createBrowserRouter, RouteObject} from 'react-router-dom';

import {PATH} from 'jsConstants';
import {AppLayout} from 'shared';

import {Main, NotFound, Login} from './pages';

const routes: RouteObject[] = [
    {
        element: <AppLayout />,
        children: [
            {
                path: PATH.MAIN,
                element: <Main />
            },
            {
                path: PATH.NOT_FOUND,
                element: <NotFound />
            },
            {
                path: PATH.LOGIN,
                element: <Login />
            }
            // {
            //     path: '/',
            //     element: <ProtectedRoute />,
            //     children: protectedRoutes
            // }
        ]
    }
];

export default createBrowserRouter(routes);