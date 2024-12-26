import {User} from "types";

export interface AuthState {
    isAuthenticated: boolean;
    id: number | undefined;
    email: string;
    is_email_activated: boolean;
    activation_link: string | null;
}

export enum AuthActionsEnum {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    LOGOUT = 'LOGOUT',
}

export interface SetAuthAction {
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean;
}

export interface SetUserAction {
    type: AuthActionsEnum.SET_USER;
    payload: User;
}

export interface LogoutAction {
    type: AuthActionsEnum.LOGOUT;
}

export type AuthAction = SetAuthAction | SetUserAction | LogoutAction;
