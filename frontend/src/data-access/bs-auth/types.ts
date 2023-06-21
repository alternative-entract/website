import { UserRole } from "../../types/user";
import { t } from "../../utils/i18n/i18n";

export enum ApiEndpoint {
    VERIFY_ENDPOINT = "auth/verify-email",
    LOGIN_ENDPOINT = "auth/login",
    RESET_PASSWORD_ENDPOINT = "auth/reset-password",

    // TODO: is it better to use DELETE or POST on API side ?
    LOGOUT_ENDPOINT = "auth/logout",

    // TODO: we will have to add those endpoints on the API
    REVOKE_ENDPOINT = "token/_revoke",
    REFRESH_ENDPOINT = "token/_refresh",
    UPDATE_PASSWORD_WITH_TOKEN_ENDPOINT = "_update_password_with_token",
}

export type AuthUser = {
    name: string;
    userId: string;
    role: UserRole;
};

export enum LoginErrorKeys {
    BAD_REQUEST_ERROR = "BAD_REQUEST_ERROR",
    INVALID_CREDENTIALS_USER = "INVALID_CREDENTIALS_USER",
    INVALID_CREDENTIALS_PASSWORD = "INVALID_CREDENTIALS_PASSWORD",
    UNVERIFIED_EMAIL = "UNVERIFIED_EMAIL",
    INVALID_TOKEN = "INVALID_TOKEN",
}

export const loginErrorTranslated: Record<LoginErrorKeys, string> = {
    [LoginErrorKeys.BAD_REQUEST_ERROR]: t(
        "form.notificationError.BAD_REQUEST_ERROR"
    ),
    [LoginErrorKeys.INVALID_CREDENTIALS_USER]: t(
        "form.notificationError.INVALID_CREDENTIALS_USER"
    ),
    [LoginErrorKeys.INVALID_CREDENTIALS_PASSWORD]: t(
        "form.notificationError.INVALID_CREDENTIALS_PASSWORD"
    ),
    [LoginErrorKeys.UNVERIFIED_EMAIL]: t(
        "form.notificationError.UNVERIFIED_EMAIL"
    ),
    [LoginErrorKeys.INVALID_TOKEN]: t("form.notificationError.INVALID_TOKEN"),
};

export type LoginApiResponse = {
    msg?: LoginErrorKeys;
    user?: AuthUser;
};

export type LoginReply = {
    token?: string;
    errorMessage?: LoginErrorKeys;
};
