import {FC} from "react";
import {useWizard} from "../../../utils/wizard/useWizard";
import {
    AssociationInfoFormData,
    ContactInfoFormData,
    RegisterFormData,
    SecurityInfoFormData
} from "../registerWizard.types";
import {WizardStepperFooter} from "../../wizard";
import {Form} from "../../form";
import {useForm} from "react-hook-form";

export const ConfirmationStep: FC = () => {
    const { previousStep, nextStep, wizardData, isFirstStep, isLastStep } = useWizard<RegisterFormData>();
    const { handleSubmit } = useForm({ defaultValues: wizardData.associationInfo, mode: "onSubmit" });

    const handlePreviousAction = () => {
        return previousStep()
    }

    const saveData = (data: AssociationInfoFormData) => {
        return nextStep({associationInfo: data}, true)
    };

    const renderSection = (sectionName: string, sectionData: ContactInfoFormData | SecurityInfoFormData | AssociationInfoFormData) => {
        return (
            <div key={sectionName} className="my-4">
                <h3 className="text-lg font-medium">{sectionName}</h3>
                <ul>
                    {Object.entries(sectionData).map(([fieldName, fieldValue]) => (
                        <li key={fieldName}>
                            <strong>{fieldName}:</strong> <>{fieldValue}</>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="flex flex-col w-full items-center gap-16">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                Confirmation du formulaire d'inscription
            </h1>

            <div>
                {Object.entries(wizardData).map(([sectionName, sectionData]) =>
                    renderSection(sectionName, sectionData)
                )}
            </div>

            <Form onSubmit={handleSubmit(saveData)} noValidate>
                <WizardStepperFooter
                    isFirstStep={isFirstStep}
                    isLastStep={isLastStep}
                    onPreviousAction={handlePreviousAction}
                />
            </Form>
        </div>
    );
}