import { t } from "../i18n/i18n";

export const validatePassword = (value: string) => {
	const hasUpperCase = /^(?=.*?[A-Z])/.test(value);
	const hasLowerCase = /[a-z]/.test(value);
	const hasDigit = /(?=.*?[0-9])/.test(value);

	if (!hasUpperCase) {
		return t("form.password.rules.atLeast", { string: "masjuscule" });
	}

	if (!hasLowerCase) {
		return t("form.password.rules.atLeast", { string: "minuscule" });
	}

	if (!hasDigit) {
		return t("form.password.rules.atLeast", { string: "chiffre" });
	}
};
