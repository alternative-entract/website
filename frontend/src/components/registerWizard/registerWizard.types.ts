export type ContactInfoFormData = {
    firstName: string
    lastName: string
    phoneNumber: string
}

export type SecurityInfoFormData = {
    email: string
    password: string
    confirmPassword: string
}

export type AssociationInfoFormData = {
    name: string
    location: string
    phone: string
}

export type RegisterFormData = Partial<{
    contactInfo?: ContactInfoFormData;
    securityInfo?: SecurityInfoFormData;
    associationInfo?: AssociationInfoFormData;
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

