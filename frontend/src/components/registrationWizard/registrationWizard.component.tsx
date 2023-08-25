import { WizardProvider } from "../../utils/contexts/wizard/provider";
import { WizardStepperHeader } from "../wizard";
import { ContactStep } from "./steps/contactStep";
import { SecurityStep } from "./steps/securityStep";
import { AssociationInfoStep } from "./steps/associationInfoStep";
import { ConfirmationStep } from "./steps/confirmationStep";
import {
    REGISTER_FORM_STEPS,
    RegisterFormData,
} from "./registrationWizard.types";
import { useState } from "react";
import { RegistrationSuccess } from "./steps/registrationSuccess";
import { registerAndCreateAssoAPI } from "../../data-access/bs-auth/registerAndCreateAsso";
import { NotificationType } from "../../components/notification";
import { useNotification } from "../../utils/contexts/notification/context";
import { t } from "i18next";
import{ UserInfo,AssociationInfo} from "../../data-access/bs-auth/types"



export const RegisterWizard = () => {
    const { notify } = useNotification();
    const [formData, setFormData] = useState<RegisterFormData>();

const registerUserAndCreateAssociation = async (data:RegisterFormData)=>{
const {contactInfo,securityInfo,associationInfo} = data
const user:UserInfo={
    name:`${contactInfo?.firstName} ${contactInfo?.lastName}`,
    phoneNumber:`${contactInfo?.phoneNumber}` ,
    email:`${securityInfo?.email}`,
    password:`${securityInfo?.password}`,
}
const association:AssociationInfo={
    name:`${associationInfo?.brand}`,
    phoneNumber:`${associationInfo?.phoneNumber}`,
    address:`${associationInfo?.location}`
}

    try {
        registerAndCreateAssoAPI(user,association);
        


    } catch (error) {
            if (error instanceof Error) {
                const notification = {
                    type: NotificationType.error,
                    title: t("form.notificationError.REGISTER_ERROR"),
                    description: error.message,
                    dismissMode: {
                        manually: true,
                        onPageChange: true,
                        afterTimeout: 3000,
                    },
                };
                notify(notification);
            }
        }
}
    const handleFinishForm = (data: RegisterFormData) => {
        setFormData(data);
        registerUserAndCreateAssociation(data)


        // TODO: Send verification email to user
        // TODO: Save formData to database, with "unverified" status
    };

    return (
        <WizardProvider
            header={<WizardStepperHeader stepNames={REGISTER_FORM_STEPS} />}
            onFinish={(wizardData) => handleFinishForm(wizardData)}
        >
            <AssociationInfoStep />
            <ContactStep />
            <SecurityStep />
            <ConfirmationStep />
            <RegistrationSuccess
                userEmail={formData?.securityInfo?.email ?? ""}
            />
        </WizardProvider>
    );
};
