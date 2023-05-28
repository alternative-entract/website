import {Reducer} from "react";
import {User} from "../../types/user";

export enum AuthActionType {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"
}

export type AuthAction =
    | { type: AuthActionType.LOGIN; user: User }
    | { type: AuthActionType.LOGOUT };

export const authReducer: Reducer<{ isAuthenticated: boolean; user: User | null }, AuthAction> = (
    state,
    action
) => {
    switch (action.type) {
        case AuthActionType.LOGIN:
            return { isAuthenticated: true, user: action.user };
        case AuthActionType.LOGOUT:
            return { isAuthenticated: false, user: null };
        default:
            return state;
    }
};