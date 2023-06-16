import {Navigate, Outlet} from "react-location";
import {useAuth} from "../../utils/contexts/auth/useAuth";
import {t} from "../../utils/i18n/i18n";

export const AuthWrapper = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isAuthenticated) {
        return <Outlet />;
    }

    if (!isLoading && !isAuthenticated) {
        return <Navigate to="/home" />;
    }

    return <div>{t("common.loading")}</div>;
}
