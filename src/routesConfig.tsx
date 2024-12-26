import {createBrowserRouter, RouteObject} from 'react-router-dom';

import {PATH} from 'jsConstants';
import {AppLayout} from 'shared';

import {Main, NotFound, Login, Registration} from './pages';

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
            },
            {
                path: PATH.REGISTRATION,
                element: <Registration />
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