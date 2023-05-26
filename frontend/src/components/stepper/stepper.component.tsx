import {Step} from "./step.component";
import {FC, Fragment} from "react";
import {StepData} from "../../types/form";

interface IStepper {
    steps: StepData[]
    currentStepIndex: number
}

export const Stepper: FC<IStepper> = ({ steps, currentStepIndex }) => {
    const updatedSteps = steps.map((step, index) => {
        const isAchieved = index < currentStepIndex;
        return { ...step, isAchieved };
    });

    return (
        <ol className="flex w-full justify-center items-center text-sm font-medium text-gray-500 sm:text-base">
            {updatedSteps.map((step, index) => (
                <Fragment key={`step-${step.name}-${index}`}>
                    <Step id={index + 1} step={step} />
                    {index !== updatedSteps.length - 1 && <li className="w-full flex justify-center items-center border-b border-gray-300" />}
                </Fragment>
            ))}
        </ol>
    );
};