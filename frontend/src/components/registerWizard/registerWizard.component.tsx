import {WizardProvider} from "../../utils/wizard/provider";
import {WizardStepperHeader} from "../wizard";
import {useWizard} from "../../utils/wizard/useWizard";
import {ContactStep} from "./steps/contactStep";
import {SecurityStep} from "./steps/securityStep";
import {AssociationInfoStep} from "./steps/associationInfoStep";
import {ConfirmationStep} from "./steps/confirmationStep";

const REGISTER_FORM_STEPS: string[] = [
    "Contact",
    "Sécurité",
    "Association",
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
            onFinish={() => console.log()}
        >
            <ContactStep/>
            <SecurityStep/>
            <AssociationInfoStep/>
            <ConfirmationStep/>
        </WizardProvider>
    )
}