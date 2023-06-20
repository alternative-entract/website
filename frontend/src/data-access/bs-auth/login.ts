import { ApiEndpoint, LoginApiResponse } from "./types";
import httpClient from "../../utils/httpClient";
import { t } from "../../utils/i18n/i18n";
import { CustomLoginError } from "./loginError";

export const loginAPI = async (
    email: string,
    password: string
): Promise<{ token: string }> => {
    const { user, msg }: LoginApiResponse = await httpClient.post(
        ApiEndpoint.LOGIN_ENDPOINT,
        { email, password }
    );

    if (user) {
        return { token: user.userId };
    }

    if (msg) {
        throw new CustomLoginError(msg);
    }

    throw new Error(t("form.notificationError.UNEXPECTED_ERROR"));
};
