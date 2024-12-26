import {useMutation} from '@tanstack/react-query';
import {login, registration, logout, refreshToken} from 'api/requests/auth';
import {UserCredentialsIn} from 'api/types/auth';
import queryClient from 'api/client';
import {QUERY_KEYS} from "api/queryKeys";
import {useAppDispatch} from "store";
import {logoutAction, setAuth, setUser} from "actions/auth/actions";


export const useLogin = () => {
    const dispatch = useAppDispatch();

    return useMutation({
        mutationFn: (data: UserCredentialsIn) => login(data),
        onSuccess: async ({data}) => {
            localStorage.setItem('access_token', data.access_token);
            dispatch(setAuth(true));
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER] });
        },
        onError: (error) => {
            console.error('Ошибка при логине:', error);
        },
    });
}

export const useRegistration = () => {
    const dispatch = useAppDispatch();

    return useMutation({
        mutationFn: (data: UserCredentialsIn) => registration(data),
        onSuccess: async ({data}) => {
            localStorage.setItem('access_token', data.access_token);
            dispatch(setAuth(true));
            await queryClient.invalidateQueries({queryKey: [QUERY_KEYS.USER]});
        },
        onError: (error) => {
            console.error('Ошибка при регистрации:', error);
        },
    });
}

export const useLogout = () => {
    const dispatch = useAppDispatch();

    return useMutation({
        mutationFn: () => logout(),
        onSuccess: () => {
            localStorage.removeItem("access_token");
            dispatch(logoutAction());
            queryClient.clear();
        },
        onError: (error) => {
            console.error('Ошибка при логауте:', error);
        },
    });
}

export const useRefreshToken = () => {
    return useMutation({
        mutationFn: () => refreshToken(),
        onSuccess: ({ data }) => {
            localStorage.setItem('access_token', data.access_token);
        },
        onError: (error) => {
            console.error('Ошибка при обновлении токена:', error.message);
        },
    });
};
