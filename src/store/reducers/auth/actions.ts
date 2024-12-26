import {AuthActionsEnum, LogoutAction, SetAuthAction, SetUserAction} from "./types";
import {User} from "types";
import {AppDispatch} from "store";

export const setAuth = (isAuthenticated: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: isAuthenticated,
});

export const setUser = (user: User): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
});

export const logoutAction = (): LogoutAction => ({
    type: AuthActionsEnum.LOGOUT,
});

// После успешного логина
export const loginSuccess = (accessToken: string, user: User) => (dispatch: AppDispatch) => {
    localStorage.setItem("access_token", accessToken);
    dispatch(setUser(user));
    dispatch(setAuth(true));
};