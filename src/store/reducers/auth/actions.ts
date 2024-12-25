import {AuthActionsEnum, AuthAction} from './types';

export const setAuth = (isAuthenticated: boolean): AuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: isAuthenticated,
});
