import { t } from "../../utils/i18n/i18n";

export const REGISTER_FORM_STEPS: string[] = [
    t("form.registrationStep.associationInfo"),
    t("form.registrationStep.contactInfo"),
    t("form.registrationStep.securityInfo"),
    t("form.registrationStep.confirmation"),
];

export type SectionType = Record<string, string>;

export type ContactInfo =
    | SectionType
    | {
          firstName: string;
          lastName: string;
          phoneNumber: string;
      };

export type SecurityInfo =
    | SectionType
    | {
          email: string;
          password: string;
      };

export type AssociationInfo =
    | SectionType
    | {
          brand: string;
          location: string;
          phoneNumber: string;
      };

export type RegisterFormData = {
    contactInfo?: ContactInfo;
    securityInfo?: SecurityInfo;
    associationInfo?: AssociationInfo;
};

export const SECURITY_FORM_KEYS: Record<keyof SecurityInfo, string> = {
    email: "email",
    password: "password",
};

export const CONTACT_FORM_KEYS: Record<keyof ContactInfo, string> = {
    firstName: "firstName",
    lastName: "lastName",
    phoneNumber: "phoneNumber",
};

export const ASSOCIATION_FORM_KEYS: Record<keyof AssociationInfo, string> = {
    brand: "brand",
    location: "location",
    phoneNumber: "phoneNumber",
};

export const REGISTER_FORM_SECTION_LABEL: Record<
    keyof RegisterFormData,
    SectionType
> = {
    associationInfo: {
        brand: t("form.brandLabel"),
        location: t("form.locationLabel"),
        phoneNumber: t("form.phoneNumberLabel"),
    },
    contactInfo: {
        firstName: t("form.firstNameLabel"),
        lastName: t("form.lastNameLabel"),
        phoneNumber: t("form.phoneNumberLabel"),
    },
    securityInfo: {
        email: t("form.emailLabel"),
        password: t("form.password.label"),
    },
} as const;

export const FORM_PATTERN = {
    TEXT: /^[a-zA-Z]+$/,
    PHONE_NUMBER: /^[0-9]{10}$/,
    EMAIL: /^\S+@\S+$/i,
    PASSWORD:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
} as const;
