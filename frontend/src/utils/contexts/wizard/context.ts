import {createContext} from "react";
import {WizardContextType} from "./types";

export const WizardContext = createContext<WizardContextType>({
    currentStepIndex: 0,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    nextStep: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    previousStep: () => {},
    wizardData: {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    goToStep: () => {},
    isFirstStep: false,
    isLastStep: false,
});