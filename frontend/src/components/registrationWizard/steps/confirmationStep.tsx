import {FC} from "react";
import {useWizard} from "../../../utils/contexts/wizard/useWizard";
import {
	AssociationFormData,
	ContactFormData,
	REGISTER_FORM_SECTION_LABEL, REGISTER_FORM_STEPS,
	RegisterFormData,
	SecurityFormData
} from "../registrationWizard.types";
import {WizardStepperFooter} from "../../wizard";
import {Form} from "../../form";
import {useForm} from "react-hook-form";
import {t} from "../../../utils/i18n/i18n";
import {PencilIcon} from "../../icon";

export const ConfirmationStep: FC = () => {
    const { previousStep, nextStep, wizardData, isFirstStep, isLastStep, goToStep } = useWizard<RegisterFormData>();
    const { handleSubmit } = useForm({ defaultValues: wizardData, mode: "onSubmit" });

    const handlePreviousAction = () => previousStep()

    const saveData = (data: RegisterFormData) => nextStep(data, true)

		const renderSection = (sectionName: keyof RegisterFormData, sectionData: ContactFormData | SecurityFormData | AssociationFormData) => {
				const handleUpdate = () => {
					const sectionStepName = t(`registration.${sectionName}.stepName`)
					const stepToGo = REGISTER_FORM_STEPS.findIndex(step => step === sectionStepName)
					goToStep(stepToGo)
				}
        return (
            <div key={sectionName} className="flex justify-between border border-gray-200 rounded-lg mb-4 p-4">
							<div>
								<h3 className="text-lg font-medium">{t(`registration.${sectionName}.title`)}</h3>
								<ul>
									{Object.entries(sectionData).map(([fieldName, fieldValue]) => (
										<li key={fieldName}>
											<strong>{REGISTER_FORM_SECTION_LABEL[sectionName][fieldName]}:</strong> <>{fieldValue}</>
										</li>
									))}
								</ul>
							</div>
							<div className="cursor-pointer" onClick={handleUpdate} title={t("registration.updateSection")}>
								<PencilIcon />
							</div>
            </div>
        );
    };

    return (
        <div className="flex flex-col w-full items-center gap-8">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                {t("registration.confirmation.title")}
            </h1>

            <div>
                {Object.entries(wizardData).map(([sectionName, sectionData]) =>
                    renderSection(sectionName as keyof RegisterFormData, sectionData)
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
