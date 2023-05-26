export type ContactInfoFormData = {
    firstName: string
    lastName: string
    phoneNumber: number
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

export interface FormData {
    contactInfo?: ContactInfoFormData;
    securityInfo?: SecurityInfoFormData;
    associationInfo?: AssociationInfoFormData;
}