import {SecurityStep} from "../components/registerForm/securityStep";
import {AssociationInfoStep} from "../components/registerForm/associationInfoStep";
import {ConfirmationStep} from "../components/registerForm/confirmationStep";
import {ContactStep} from "../components/registerForm/contactStep";
import {StepData} from "../types/form";

export const REGISTER_FORM_STEPS: StepData[] = [
    {
        name: "Contact",
        component: ContactStep,
        isAchieved: false,
    },
    {
        name: "Sécurité",
        component: SecurityStep,
        isAchieved: false,
    },
    {
        name: "Association",
        component: AssociationInfoStep,
        isAchieved: false,
    },
    {
        name: "Confirmation",
        component: ConfirmationStep,
        isAchieved: false,
    }
]