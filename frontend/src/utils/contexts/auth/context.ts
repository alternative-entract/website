import {createContext} from 'react';

export interface IAuthContext {
    isAuthenticated: boolean,
    token: string | null
    login: (email: string, password: string) => unknown
    isLoading: boolean
    logout: () => void
}
export const AuthContext = createContext<IAuthContext>({
    isAuthenticated: false,
    token: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    login: () => {},
    isLoading: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    logout: () => {},
});
