import {FC, ReactNode, useEffect, useReducer, useState} from 'react';
import { AuthContext } from "./context";
import {AuthActionType, authReducer} from "./reducer";
import {userMock} from "../../../data/userMock";

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(true)

    const [state, dispatch] = useReducer(authReducer, {
        isAuthenticated: false,
        user: null,
    });

    const login = (email: string, password: string) => {
        dispatch({ type: AuthActionType.LOGIN, user: userMock })
        localStorage.setItem('userEmail', email)
    }

    const logout = () => {
        dispatch({ type: AuthActionType.LOGOUT })
        localStorage.removeItem("userEmail")
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("userEmail");
        if (loggedInUser) {
            dispatch({ type: AuthActionType.LOGIN, user: userMock })
        }
        setLoading(false)
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated: state.isAuthenticated, login, isLoading: loading, logout, user: state.user }}>
            {children}
        </AuthContext.Provider>
    );
};
