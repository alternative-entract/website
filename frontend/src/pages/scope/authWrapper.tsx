import {Navigate, Outlet} from "react-location";
import {useAuth} from "../../features/auth/useAuth";

export const AuthWrapper = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isAuthenticated) {
        return <Outlet />;
    }

    if (!isLoading && !isAuthenticated) {
        return <Navigate to="/home" />;
    }

    return <div>Loading...</div>;
}