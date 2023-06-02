import {useCallback, useEffect, useMemo, useState} from "react";
import {WizardContextType, WizardProps} from "./types";
import {WizardContext} from "./context";
import {useNavigateToHome} from "../../../features/navigation/useNavigateTo";

export const WizardProvider = ({
   children,
   onFinish,
   header,
}: WizardProps) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [wizardData, setWizardData] = useState<Record<string, unknown>>({});
    const navigateToHome = useNavigateToHome()

    const stepsCount = useMemo(
        () => children.length,
        [children]
    );
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === stepsCount - 1;

    const previousStep = useCallback(() => {
        if (isFirstStep) {
            navigateToHome()
        }
        setCurrentStep((previousValue) => previousValue - 1);
    }, [isFirstStep]);

    const nextStep = useCallback(
        (newData: Record<string, unknown>, merge = true) => {
            if (merge) {
                setWizardData((previousData) => ({ ...previousData, ...newData }));
            } else {
                setWizardData({ ...newData });
            }
            setCurrentStep((previousValue) => previousValue + 1);
        },
        []
    );

    const goToStep = useCallback(
        (stepToGo: number) => {
            if (stepToGo >= 0 && stepToGo < stepsCount) {
                setCurrentStep(stepToGo);
            }
        },
        [stepsCount]
    );

    useEffect(() => {
        if (currentStep === stepsCount) {
            onFinish(wizardData);
        }
    }, [currentStep, stepsCount, wizardData, onFinish]);

    const contextValue = useMemo<WizardContextType>(
        () => ({
            currentStepIndex: currentStep,
            nextStep,
            wizardData,
            previousStep,
            goToStep,
            isFirstStep,
            isLastStep,
        }),
        [
            currentStep,
            nextStep,
            wizardData,
            previousStep,
            goToStep,
            isFirstStep,
            isLastStep,
        ]
    );

    return (
        <WizardContext.Provider value={contextValue}>
            <div className="flex flex-col gap-16 mx-8">
                {header}
                <div>
                    {children[currentStep]}
                </div>
            </div>
        </WizardContext.Provider>
    );
};