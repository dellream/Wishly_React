import {createBrowserRouter, RouteObject} from 'react-router-dom';

import {PATH} from 'jsConstants';
import {AppLayout} from 'shared';

import {Main, NotFound, Login, Registration} from './pages';
import DefaultContent from "./pages/main/defaultContent";
import CreateWishListForm from "./shared/createWithListForm";

const routes: RouteObject[] = [
    {
        element: <AppLayout />,
        children: [
            {
                path: PATH.MAIN,
                element: <Main />,
                children: [
                    {
                        index: true, // Маршрут по умолчанию для Main
                        element: <DefaultContent />
                    },
                    {
                        path: PATH.CREATE_WISHLIST,
                        element: <CreateWishListForm />
                    }
                ]
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