import { FC } from "react";
import { useWizard } from "../../../utils/contexts/wizard/useWizard";
import {
    AssociationInfo,
    ContactInfo,
    REGISTER_FORM_SECTION_LABEL,
    REGISTER_FORM_STEPS,
    RegisterFormData,
    SecurityInfo,
} from "../registrationWizard.types";
import { WizardStepperFooter } from "../../wizard";
import { Form } from "../../form";
import { useForm } from "react-hook-form";
import { t } from "../../../utils/i18n/i18n";
import { PencilIcon } from "../../icon";

export const ConfirmationStep: FC = () => {
    const {
        previousStep,
        nextStep,
        wizardData,
        isFirstStep,
        isLastStep,
        goToStep,
    } = useWizard<RegisterFormData>();
    const { handleSubmit } = useForm({
        defaultValues: wizardData,
        mode: "onSubmit",
    });

    const handlePreviousAction = () => previousStep();

    const saveData = (data: RegisterFormData) => nextStep(data, true);

    const renderSection = (
        sectionName: keyof RegisterFormData,
        sectionData: ContactInfo | SecurityInfo | AssociationInfo
    ) => {
        const handleUpdate = () => {
            const sectionStepName = t(`form.registrationStep.${sectionName}`);
            const stepToGo = REGISTER_FORM_STEPS.findIndex(
                (step) => step === sectionStepName
            );
            goToStep(stepToGo);
        };
        return (
            <div
                key={sectionName}
                className="flex justify-between border border-gray-200 rounded-lg mb-4 p-4"
            >
                <div>
                    <h3 className="text-lg font-medium">
                        {t(`form.title.${sectionName}`)}
                    </h3>
                    <ul>
                        {Object.entries(sectionData).map(
                            ([fieldName, fieldValue]) => (
                                <li key={fieldName}>
                                    {fieldName === "password" ? (
                                        <>
                                            <strong>
                                                {
                                                    REGISTER_FORM_SECTION_LABEL[
                                                        sectionName
                                                    ][fieldName]
                                                }
                                                :
                                            </strong>{" "}
                                            <>{t("form.password.masked")}</>{" "}
                                        </>
                                    ) : (
                                        <>
                                            <strong>
                                                {
                                                    REGISTER_FORM_SECTION_LABEL[
                                                        sectionName
                                                    ][fieldName]
                                                }
                                                :
                                            </strong>{" "}
                                            <>{fieldValue}</>
                                        </>
                                    )}
                                </li>
                            )
                        )}
                    </ul>
                </div>
                <div
                    className="cursor-pointer"
                    onClick={handleUpdate}
                    title={t("form.actions.updateSection")}
                >
                    <PencilIcon />
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col w-full items-center gap-8">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                {t("form.title.registrationConfirmation")}
            </h1>

            <div>
                {Object.entries(wizardData).map(([sectionName, sectionData]) =>
                    renderSection(
                        sectionName as keyof RegisterFormData,
                        sectionData
                    )
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
};
