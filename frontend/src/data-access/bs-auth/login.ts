import { ApiEndpoint, LoginApiResponse, LoginReply } from "./types";
import httpClient from "../../utils/httpClient";
import { t } from "../../utils/i18n/i18n";

export const loginAPI = async (
    email: string,
    password: string
): Promise<LoginReply> => {
    try {
        const { user, msg }: LoginApiResponse = await httpClient.post(
            ApiEndpoint.LOGIN_ENDPOINT,
            { email, password }
        );

        if (user) {
            return { token: user.userId };
        }

        return { errorMessage: msg };
    } catch (error) {
        throw new Error(t("form.notificationError.SERVOR_ERROR"));
    }
};
