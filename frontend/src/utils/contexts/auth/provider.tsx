import { FC, ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./context";
import { loginAPI } from "../../../data-access/bs-auth/login";
import { loginErrorTranslated } from "../../../data-access/bs-auth/types";

type AuthProviderProps = {
    children: ReactNode;
};

const TOKEN_KEY = "userToken";

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState<string | null>(null);

    const getStoredItem = (token: string) => localStorage.getItem(token);
    const removeStoredItem = (token: string) => localStorage.removeItem(token);

    const storeToken = (tokenToStore: string) => {
        if (getStoredItem(TOKEN_KEY)) {
            removeStoredItem(TOKEN_KEY);
        }
        localStorage.setItem(TOKEN_KEY, tokenToStore);
    };

    const login = async (email: string, password: string): Promise<void> => {
        const { token, errorMessage } = await loginAPI(email, password);

        if (errorMessage) {
            throw new Error(loginErrorTranslated[errorMessage]);
        }

        if (token) {
            setIsAuthenticated(true);
            setToken(token);
            storeToken(token);
        }
    };

    const logout = () => {
        removeStoredItem(TOKEN_KEY);
        setIsAuthenticated(false);
        setToken(null);
    };

    useEffect(() => {
        const existingToken = getStoredItem(TOKEN_KEY);
        if (existingToken) {
            setIsAuthenticated(true);
            setToken(existingToken);
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login,
                isLoading: loading,
                logout,
                token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
