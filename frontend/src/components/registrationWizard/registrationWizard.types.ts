import {getObjectKeys} from "../../utils/helpers/getObjectKeys";
import {t} from "../../utils/i18n/i18n";

export const REGISTER_FORM_STEPS: string[] = [
	t("registration.associationInfo.stepName"),
	t("registration.contactInfo.stepName"),
	t("registration.securityInfo.stepName"),
	t("registration.confirmation.stepName")
]

export type SectionType = {
	[key: string]: string;
};

export type ContactFormData = SectionType | {
    firstName: string
    lastName: string
    phoneNumber: string
}

export type SecurityFormData = SectionType | {
    email: string
    password: string
}

export type AssociationFormData = SectionType | {
    brand: string
    location: string
    phoneNumber: string
}

export type RegisterFormData = {
	contactInfo?: ContactFormData;
	securityInfo?: SecurityFormData;
	associationInfo?: AssociationFormData;
};

export const SECURITY_FORM_KEYS = getObjectKeys<SecurityFormData>({
	email: "email",
	password: "password",
})

export const CONTACT_FORM_KEYS = getObjectKeys<ContactFormData>({
	firstName: "firstName",
	lastName: "lastName",
	phoneNumber: "phoneNumber"
})

export const ASSOCIATION_FORM_KEYS = getObjectKeys<AssociationFormData>({
    brand: "name",
    location: "location",
		phoneNumber: "phoneNumber"
})

export const REGISTER_FORM_SECTION_LABEL: Record<keyof RegisterFormData, Record<string, string>> = {
	associationInfo: {
		brand: t("registration.associationInfo.brand.label"),
		location: t("registration.associationInfo.location.label"),
		phoneNumber: t("registration.associationInfo.phoneNumber.label")
	},
	contactInfo: {
		firstName: t("registration.contactInfo.firstName.label"),
		lastName: t("registration.contactInfo.lastName.label"),
		phoneNumber: t("registration.contactInfo.phoneNumber.label")
	},
	securityInfo: {
		email: t("registration.securityInfo.email.label"),
		password: t("registration.securityInfo.password.label")
	}
} as const

export const FORM_PATTERN = {
    TEXT: /^[a-zA-Z]+$/,
    PHONE_NUMBER: /^[0-9]{10}$/,
    EMAIL: /^\S+@\S+$/i,
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
} as const
