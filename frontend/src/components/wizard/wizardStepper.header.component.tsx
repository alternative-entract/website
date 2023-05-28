import {FC, Fragment} from "react";
import {CheckIcon} from "../icon";
import {useWizard} from "../../utils/wizard/useWizard";

interface IWizardStepperHeader {
    stepNames: string[]
    currentStepIndex: number
}

interface IWizardStepIndicator {
    id: number
    step: StepData
}

export type StepData = {
    name: string
    isAchieved?: boolean
    isCurrent?: boolean
}

const WizardStepIndicator: FC<IWizardStepIndicator> = ({ id, step }) => {
    const { isAchieved, isCurrent, name } = step
    const achievedClass = isAchieved ? "text-green-700" : "text-gray-300"
    const currentClass = isCurrent ? "text-gray-800" : ""

    return (
        <li className={`flex items-center md:mx-4 ${achievedClass} ${currentClass}`}>
            <span className="flex items-center ">
            {isAchieved ? <CheckIcon /> : <span className="mr-2">{id}.</span>}
                {name}
            </span>
        </li>
    );
}

export const WizardStepperHeader: FC<IWizardStepperHeader> = ({ stepNames}) => {
    const { currentStepIndex } = useWizard()
    const updatedSteps = stepNames.map((name, index) => {
        const isAchieved = index < currentStepIndex;
        const isCurrent = index === currentStepIndex;
        return { ...{name}, isAchieved, isCurrent };
    });

    return (
        <ol className="flex w-full justify-center items-center text-sm font-medium sm:text-base md:text-xl">
            {updatedSteps.map((step, index) => (
                <Fragment key={`step-${step.name}-${index}`}>
                    <WizardStepIndicator id={index + 1} step={step} />
                    {index !== updatedSteps.length - 1 && <li className="w-full flex justify-center items-center border-b border-gray-300" />}
                </Fragment>
            ))}
        </ol>
    );
};