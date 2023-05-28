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