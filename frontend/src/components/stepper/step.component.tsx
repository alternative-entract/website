import {CheckIcon} from "../icon";
import {FC} from "react";
import {StepData} from "./stepper.components";

interface IStep {
    id: number
    step: StepData
    isLastStep?: boolean
}

export const Step: FC<IStep> = ({ id, step, isLastStep }) => {
    const { isAchieved, name } = step
    const afterStepClass = !isLastStep ? "sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:border-gray-300" : ""
    const achievedClass = isAchieved ? "text-blue-600" : ""

    return (
        <li className={`flex md:w-full items-center ${achievedClass} ${afterStepClass}`}>
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                {isAchieved
                    ? <CheckIcon />
                    : <span className="mr-2">{id}.</span>
                }
                {name.includes(" ")
                    ?
                        <>
                            <span className="hidden sm:inline-flex sm:mr-2">{name.split(" ")[0]} </span>
                            <span>{name.split(" ")[1]}</span>
                        </>
                    : name
                }
            </span>
        </li>
    )
}