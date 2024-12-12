import {AuthState, AuthAction, AuthActionsEnum} from "actions/auth/types";

const initialState: AuthState = {
    isAuthenticated: false
};

export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuthenticated: action.payload}
        default:
            return state
    }
}

