import {createContext} from "react";
import {WizardContextType} from "./types";

export const WizardContext = createContext<WizardContextType>({
    currentStepIndex: 0,
    nextStep: () => {},
    previousStep: () => {},
    wizardData: {},
    goToStep: () => {},
    isFirstStep: false,
    isLastStep: false,
});