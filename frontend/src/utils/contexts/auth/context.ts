import {createContext} from 'react';
import {User} from "../../../types/user";

export interface IAuthContext {
    isAuthenticated: boolean,
    user: User | null
    login: (email: string, password: string) => void
    isLoading: boolean
    logout: () => void
}
export const AuthContext = createContext<IAuthContext>({
    isAuthenticated: false,
    user: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    login: () => {},
    isLoading: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    logout: () => {},
});
