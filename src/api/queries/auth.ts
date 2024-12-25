import {useMutation, useQuery} from '@tanstack/react-query';
import {login, registration, logout, refreshToken} from 'api/requests/auth';
import {UserCredentialsIn, TokenInfo} from 'api/types/auth';
import queryClient from 'api/client';
import {QUERY_KEYS} from "api/queryKeys";
import Cookies from 'js-cookie';
import {ApiResponse} from "api/apiService";


export const useLogin = () =>
    useMutation({
        mutationFn: (data: UserCredentialsIn) => login(data),
        onSuccess: async ({data}) => {
            localStorage.setItem('access_token', data.access_token);

            await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER] });
        },
        onError: (error) => {
            console.error('Ошибка при логине:', error);
        },
    });

export const useRegistration = () =>
    useMutation({
        mutationFn: (data: UserCredentialsIn) => registration(data),
        onSuccess: async ({data}) => {
            localStorage.setItem('access_token', data.access_token);

            await queryClient.invalidateQueries({queryKey: [QUERY_KEYS.USER]});
        },
        onError: (error) => {
            console.error('Ошибка при регистрации:', error);
        },
    });

export const useLogout = () =>
    useMutation({
        mutationFn: () => logout(),
        onSuccess: () => {
            localStorage.removeItem('access_token');

            queryClient.clear();
        },
        onError: (error) => {
            console.error('Ошибка при логауте:', error);
        },
    });

export const useRefreshToken = () => {
    useMutation({
        mutationFn: async () => {
            const refresh_token = Cookies.get('refresh_token');
            if (!refresh_token) {
                throw new Error('Refresh token отсутствует');
            }
            return refreshToken(refresh_token);
        },
        onSuccess: ({data}) => {
            localStorage.setItem('access_token', data.access_token);
        },
        onError: (error) => {
            console.error('Ошибка при обновлении токена:', error.message);
        },
    })
};