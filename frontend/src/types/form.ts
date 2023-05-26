import {FC} from "react";
import {IFormStep} from "../components/multiStepForm/multiStepForm.component";

export type StepData = {
    name: string
    component: FC<IFormStep>
    isAchieved?: boolean
}
