import {useContext} from "react";
import {WizardContext} from "./context";

export const useWizard = <T = Record<string, unknown>>() => {
    const { wizardData, ...rest } = useContext(WizardContext);
    return {
        wizardData: wizardData as T,
        ...rest,
    };
}