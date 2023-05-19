import React, {useState, useContext, useEffect, ReactNode, FC, ReactElement} from 'react'
import Cookies from 'js-cookie'

import api from '../../utils/api';
import {User} from "@/types/user";
import {redirect} from "next/navigation";

type AuthProviderProps = {
    children: ReactNode;
};

type AuthWrapperProps = {
    children: ReactElement
}

export interface IAuthContext {
    isAuthenticated: boolean,
    user: User | null
    login: (email: string, password: string) => void
    loading: boolean
    logout: () => void
}

const AuthContext = React.createContext<IAuthContext>(
    {} as {
        isAuthenticated: false,
        user: null,
        login: () => {},
        loading: false,
        logout: () => {},
    }
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token')
            if (token) {
                console.log("Got a token in the cookies, let's see if it is valid")
                api.defaults.headers.Authorization = `Bearer ${token}`
                const { data: user } = await api.get('users/me')
                if (user) setUser(user);
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = async (email: string, password: string) => {
        const { data: token } = await api.post('auth/login', { email, password })
        if (token) {
            Cookies.set('token', token, { expires: 60 })
            api.defaults.headers.Authorization = `Bearer ${token.token}`

            const { data: user } = await api.post('auth/verify-email', { verificationToken: token.token, email})
            setUser(user)
        }
    }

    const logout = () => {
        api.delete('auth/logout')
            .then(() => {
                Cookies.remove('token')
                setUser(null)
                delete api.defaults.headers.Authorization

                window.location.pathname = '/login'
            })
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return children;
    }

    redirect('/login');
}