import {useEffect} from 'react';
import {useAppDispatch} from 'store';
import {setAuth} from 'actions/auth/actions';
import Cookies from 'js-cookie';
import {refreshToken} from 'api/requests/auth';

export const useCheckAuthStatus = () => {
    const dispatch = useAppDispatch();
    console.log('useCheckAuthStatus has been called');

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { data } = await refreshToken();
                localStorage.setItem('access_token', data.access_token);
                dispatch(setAuth(true));
            } catch (error) {
                console.error('Ошибка обновления токена:', error);
                dispatch(setAuth(false));
            }
        };

        checkAuth();
    }, [dispatch]);
};

