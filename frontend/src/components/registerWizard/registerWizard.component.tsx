import {WizardProvider} from "../../utils/contexts/wizard/provider";
import {WizardStepperHeader} from "../wizard";
import {useWizard} from "../../utils/contexts/wizard/useWizard";
import {ContactStep} from "./steps/contactStep";
import {SecurityStep} from "./steps/securityStep";
import {AssociationInfoStep} from "./steps/associationInfoStep";
import {ConfirmationStep} from "./steps/confirmationStep";
import {t} from "../../utils/i18n/i18n";

const REGISTER_FORM_STEPS: string[] = [
    "Association",
    "Contact",
    "Connexion",
    "Confirmation"
]

export const RegisterWizard = () =>  {
    const { currentStepIndex } = useWizard();
    return (
        <WizardProvider
            header={
                <WizardStepperHeader
                    stepNames={REGISTER_FORM_STEPS}
                    currentStepIndex={currentStepIndex}
                />
            }
            onFinish={(wizardData) => console.log(t("registration.sendEmail"), wizardData)}
        >
            <AssociationInfoStep/>
            <ContactStep/>
            <SecurityStep/>
            <ConfirmationStep/>
            <>{t("registration.postRegistrationInstruction")}</>
        </WizardProvider>
    )
}