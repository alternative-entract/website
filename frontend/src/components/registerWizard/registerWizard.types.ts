import {getObjectKeys} from "../../utils/helpers/getObjectKeys";

export type ContactFormData = {
    firstName: string
    lastName: string
    phoneNumber: string
}

export const CONTACT_FORM_KEYS = getObjectKeys<ContactFormData>({
    firstName: "firstName",
    lastName: "lastName",
    phoneNumber: "phoneNumber"
})

export type SecurityFormData = {
    email: string
    password: string
    confirmPassword: string
}

export const SECURITY_FORM_KEYS = getObjectKeys<SecurityFormData>({
    email: "email",
    password: "password",
    confirmPassword: "confirmPassword"
})

export type AssociationFormData = {
    name: string
    location: string
    phone: string
}

export const ASSOCIATION_FORM_KEYS = getObjectKeys<AssociationFormData>({
    name: "name",
    location: "location",
    phone: "phone",
})

export type RegisterFormData = Partial<{
    contactInfo?: ContactFormData;
    securityInfo?: SecurityFormData;
    associationInfo?: AssociationFormData;
}>

export const FORM_PATTERN = {
    TEXT: /^[a-zA-Z]+$/,
    PHONE_NUMBER: /^[0-9]{10}$/,
    EMAIL: /^\S+@\S+$/i,
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
} as const

export const FORM_ERROR = {
    EMPTY_ERROR: "Ce champs ne doit pas être vide.",
    INVALID_PHONE_NUMBER_ERROR: "Veuillez entrer un numéro de téléphone valide.",
    INVALID_FIRSTNAME_ERROR: "Veuillez entrer un prénom valide (lettres uniquement).",
    INVALID_LASTNAME_ERROR: "Veuillez entrer un nom valide (lettres uniquement).",
    INVALID_EMAIL_ERROR: "Ce champs ne doit pas être vide.",
    INVALID_PASSWORD_ERROR: "Le mot de passe doit contenir au moins une majuscule, au moins une minuscule, au moins un chiffre et un caractère spécial.",
    INVALID_CONFIRMATION_PASSWORD_ERROR: "Ce champs ne doit pas être vide.",
    INVALID_LOCATION_ERROR: "Ce champs ne doit pas être vide.",
} as const

