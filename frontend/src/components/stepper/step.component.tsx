import {CheckIcon} from "../icon";
import {FC} from "react";
import {StepData} from "../../types/form";

interface IStep {
    id: number
    step: StepData
}

export const Step: FC<IStep> = ({ id, step }) => {
    const { isAchieved, name } = step
    const achievedClass = isAchieved ? "text-blue-600" : ""

    return (
        <li className={`flex items-center md:mx-4 ${achievedClass}`}>
            <span className="flex items-center ">
            {isAchieved ? <CheckIcon /> : <span className="mr-2">{id}.</span>}
            {name}
            </span>
        </li>
    );
}