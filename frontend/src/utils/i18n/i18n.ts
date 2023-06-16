import i18n from "i18next";
import translationFR from "../../assets/locales/fr/index.json";

const resources = {
	fr: {
		translation: translationFR,
	},
};

type Path<T, Prev = ""> = {
	[K in keyof T]: T[K] extends string
		? `${string & Prev}${string & K}`
		: Path<T[K], `${string & Prev}${string & K}.`>;
}[keyof T];

export type I18NPath = Path<typeof translationFR>;

type OptionValue = Scalar;

export const t = (key: I18NPath, options?: Record<string, OptionValue>) =>
	i18n.t(key, options ?? {});

i18n.init({
	resources,
	lng: "fr",
	returnEmptyString: true,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
