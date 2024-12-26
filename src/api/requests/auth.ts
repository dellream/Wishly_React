import wishlist from 'api/services/wishList';
import {TokenInfo, UserCredentialsIn} from "api/types/auth";
import {ApiResponse} from "api/apiService";

export const login = async (data: UserCredentialsIn) =>
    wishlist.post<TokenInfo>('/v1/login', { ...data });

export const registration = async (data: UserCredentialsIn) =>
    wishlist.post<TokenInfo>('/v1/registration', { ...data });

export const logout = async () =>
    wishlist.post<string>('/v1/logout', {});

export const refreshToken = async (): Promise<ApiResponse<TokenInfo>> =>
    wishlist.get<TokenInfo>('/v1/refresh_token', {withCredentials: true});
