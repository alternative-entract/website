import { useCallback } from "react";
import { useNavigate } from "react-location";

const HOME_PATH = "/home";
const LOGIN_MEMBER_PATH = "/login/member";
const RESET_PASSWORD_PATH = "/reset_password";
const REGISTER_MEMBER_PATH = "/register/member";
const LOGIN_ADMIN_PATH = "/login/admin";
const APP_PATH = "/app";
const PROFILE_PATH = `${APP_PATH}/profile`;
const PRODUCT_PATH = `${APP_PATH}/products`;

export const useNavigateTo = (path: string, replace = false) => {
	const navigate = useNavigate();

	return useCallback(
		() => navigate({ to: path, replace }),
		[path, replace, navigate]
	);
};

export const useNavigateToApp = (replace = false) =>
	useNavigateTo(APP_PATH, replace);

export const useNavigateToHome = (replace = false) =>
	useNavigateTo(HOME_PATH, replace);

export const useNavigateToLoginMember = (replace = false) =>
	useNavigateTo(LOGIN_MEMBER_PATH, replace);

export const useNavigateToRegisterMember = (replace = false) =>
	useNavigateTo(REGISTER_MEMBER_PATH, replace);

export const useNavigateToLoginAdmin = (replace = false) =>
	useNavigateTo(LOGIN_ADMIN_PATH, replace);

export const useNavigateToProfile = (replace = false) =>
	useNavigateTo(PROFILE_PATH, replace);

export const useNavigateToProduct = (replace = false) =>
	useNavigateTo(PRODUCT_PATH, replace);

export const useNavigateToResetPassword = (replace = false) =>
	useNavigateTo(RESET_PASSWORD_PATH, replace);
