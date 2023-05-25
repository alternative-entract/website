import {Step} from "./step.component";
import {FC} from "react";

export type StepData = {
    isAchieved?: boolean
    name: string
}

interface IStepper {
    steps: StepData[]
}

export const Stepper: FC<IStepper> = ({ steps }) => {
    return (
        <ol className="flex text-sm font-medium text-gray-500 sm:text-base">
            {steps.map((step, index) => (
                <Step
                    id={index + 1}
                    step={step}
                    isLastStep={index === steps.length - 1}
                />
            ))}
        </ol>
    )
}