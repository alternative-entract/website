import {ApiEndpoint, LoginApiResponse} from "./types";
import httpClient from "../../utils/httpClient";
import {t} from "../../utils/i18n/i18n";

export const loginAPI = async (
	email: string,
	password: string
): Promise<{token: string}> => {
		const { user, msg: errorMessage }: LoginApiResponse = await httpClient.post(
			ApiEndpoint.LOGIN_ENDPOINT,
			{ email, password },
			() => t('form.error.UNEXPECTED_ERROR')
		);

		if (user) {
			return { token: user.userId };
		}

		throw new Error(errorMessage);
}
