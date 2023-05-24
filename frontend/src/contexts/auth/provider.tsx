import {FC, ReactNode, useEffect, useReducer, useState} from 'react';
import { AuthContext } from "./context";
import {AuthActionType, authReducer} from "./reducer";
import {userMock} from "../../userMock";
import {useNavigateToApp} from "../../features/navigation/useNavigateTo";

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const navigateToApp = useNavigateToApp()
    // const navigateToRoot = useNavigateToRoot()
    const [loading, setLoading] = useState(true)

    const [state, dispatch] = useReducer(authReducer, {
        isAuthenticated: false,
        user: null,
    });

    const login = (email: string) => {
        dispatch({ type: AuthActionType.LOGIN, user: userMock })
        localStorage.setItem('userEmail', email)
        navigateToApp()
    }

    const logout = () => {
        dispatch({ type: AuthActionType.LOGOUT })
        localStorage.removeItem("userEmail")
        // navigateToRoot()
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