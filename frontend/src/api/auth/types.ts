import { UserRole } from "../../types/user";

export enum ApiEndpoint {
	REFRESH_ENDPOINT = "token/_refresh",
	VERIFY_ENDPOINT = "token/_verify",
	REVOKE_ENDPOINT = "token/_revoke",
	LOGIN_ENDPOINT = "auth/login",
	RESET_PASSWORD_ENDPOINT = "user/_reset_password",
	UPDATE_PASSWORD_WITH_TOKEN_ENDPOINT = "_update_password_with_token",
}

export type AuthUser = {
	name: string;
	userId: string;
	role: UserRole;
};

export type LoginApiResponse = {
	user?: AuthUser;
	msg?: string;
};

export type LoginSuccess = {
	email: string;
	token: string;
};

export enum LoginError {
	INVALID_CREDENTIALS_USER = "Invalid Credentials user",
	INVALID_CREDENTIALS_PASSWORD = "Invalid Credentials password",
	BAD_REQUEST_ERROR = "Please provide email and password",
	UNVERIFIED_EMAIL = "Please verify your email",
	TOKEN_INVALID = "Invalid Credentials",
}
