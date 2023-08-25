import { UserRole } from "../../types/user";
import { t } from "../../utils/i18n/i18n";

export enum ApiEndpoint {
    //Transaction of register user
    CREATE_ASSOTIATION ="assosiation/create",
    REGISTER_USER="auth/register",



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
    OK = "OK",
    INVALID_CREDENTIALS_USER = "Invalid Credentials user",
    INVALID_CREDENTIALS_PASSWORD = "Invalid Credentials password",
    UNVERIFIED_EMAIL = "Please verify your email",
    INVALID_TOKEN = "Invalid Credentials",
}

export const loginErrorTranslated: Record<LoginErrorKeys, string> = {
    [LoginErrorKeys.OK]: "OK",
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

export type UserInfo ={
    name:string,
    phoneNumber:string ,
    email:string ,
    password:string,

}

export type AssociationInfo = {
    name:string,
    phoneNumber:string,
    address:string
}

export type RegisterReply ={
    msg?: string;
    user?: Record<string, unknown>
}

