import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface ApiResponse<T> {
    data: T;
    headers: Record<string, string>;
    status: number;
    statusText: string;
}

export interface DefaultError extends Error {
    response: {
        data: {
            errors?: { code: number; message: string }[];
            message?: string;
        };
        status: number;
        statusText: string;
        headers: Record<string, string>;
        config: Record<string, string>;
        message: string;
    };
}

export default class ApiService {
    private _api: AxiosInstance;

    constructor(baseURL: string) {
        this._api = axios.create({
            baseURL,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            },
            withCredentials: true,
        });

        this._api.interceptors.response.use((response) => response.data);
    }

    public get<T>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<ApiResponse<T>> {
        return this._api.get(url, config);
    }

    public post<T, R = Record<string, unknown>>(
        url: string,
        data: R,
        config?: AxiosRequestConfig
    ): Promise<ApiResponse<T>> {
        return this._api.post(url, data, config);
    }

    public patch<R, T>(
        url: string,
        data?: R,
        config?: AxiosRequestConfig
    ): Promise<ApiResponse<T>> {
        return this._api.patch(url, data, config);
    }

    public delete<T>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<ApiResponse<T>> {
        return this._api.delete(url, config);
    }

    public put<R, T>(
        url: string,
        data: R,
        config?: AxiosRequestConfig
    ): Promise<ApiResponse<T>> {
        return this._api.put(url, data, config);
    }
}
