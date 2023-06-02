import {WizardProvider} from "../../utils/wizard/provider";
import {WizardStepperHeader} from "../wizard";
import {useWizard} from "../../utils/wizard/useWizard";
import {ContactStep} from "./steps/contactStep";
import {SecurityStep} from "./steps/securityStep";
import {AssociationInfoStep} from "./steps/associationInfoStep";
import {ConfirmationStep} from "./steps/confirmationStep";

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
            onFinish={() => console.log("envoyer un mail")}
        >
            <AssociationInfoStep/>
            <ContactStep/>
            <SecurityStep/>
            <ConfirmationStep/>
            <>Cliquez sur le lien que nous vous avons envoyé par mail.</>
        </WizardProvider>
    )
}