import {FC} from "react";
import {useWizard} from "../../../utils/wizard/useWizard";
import {RegisterFormData} from "../registerWizard.types";
import {useForm} from "react-hook-form";
import {Form} from "../../form";
import {WizardStepperFooter} from "../../wizard";

export const ConfirmationStep: FC = () => {
    const { previousStep, nextStep, wizardData, isFirstStep, isLastStep } = useWizard<RegisterFormData>();
    const {
        handleSubmit,
    } = useForm({ defaultValues: wizardData, mode: "onSubmit" });

    const handlePreviousAction = () => {
        return previousStep()
    }

    const saveData = (data: RegisterFormData) => {
        return nextStep(data, true)
    };

    return (
        <div className="flex flex-col w-full items-center gap-16">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                Confirmation de demande d'inscription
            </h1>
            <Form onSubmit={handleSubmit(saveData)}>
                <WizardStepperFooter
                    isFirstStep={isFirstStep}
                    isLastStep={isLastStep}
                    onPreviousAction={handlePreviousAction}
                />
            </Form>
        </div>
    );
}