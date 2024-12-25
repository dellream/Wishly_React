import {AuthState, AuthAction, AuthActionsEnum} from "actions/auth/types";
import {User} from "types";

type UserState = User & AuthState

const initialState: UserState = {
    id: undefined,
    email: '',
    is_email_activated: false,
    activation_link: null,
    isAuthenticated: false,
};

export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuthenticated: action.payload}
        default:
            return state
    }
}

