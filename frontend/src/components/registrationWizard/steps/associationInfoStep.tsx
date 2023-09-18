import { Controller, useForm } from "react-hook-form";
import { TextField } from "../../input";
import { Form } from "../../form";
import {
    ASSOCIATION_FORM_KEYS,
    AssociationInfo,
    FORM_PATTERN,
    RegisterFormData,
} from "../registrationWizard.types";
import { useWizard } from "../../../utils/contexts/wizard/useWizard";
import { WizardStepperFooter } from "../../wizard";
import { t } from "../../../utils/i18n/i18n";

export const AssociationInfoStep = () => {
    const { previousStep, nextStep, wizardData, isFirstStep, isLastStep } =
        useWizard<RegisterFormData>();
    const { control, handleSubmit } = useForm({
        defaultValues: wizardData.associationInfo as AssociationInfo,
        mode: "onSubmit",
    });

    const handlePreviousAction = () => previousStep();

    const saveData = (data: AssociationInfo) =>
        nextStep({ associationInfo: data }, true);

    return (
        <div className="flex flex-col w-full items-center gap-16">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                {t("form.title.associationInfo")}
            </h1>
            <Form onSubmit={handleSubmit(saveData)}>
                <Controller
                    name={ASSOCIATION_FORM_KEYS.brand}
                    defaultValue=""
                    control={control}
                    rules={{ required: t("form.inputError.EMPTY_ERROR") }}
                    render={({ field, formState }) => (
                        <TextField
                            label={t("form.brandLabel")}
                            placeholder={t("form.brandPlaceholder")}
                            error={formState.errors.brand}
                            {...field}
                        />
                    )}
                />
                {/* Adresses */}
                <div className="flex flex-col w-full items-center">
                    <Controller
                        name={ASSOCIATION_FORM_KEYS.location}
                        defaultValue=""
                        control={control}
                        rules={{ required: t("form.inputError.EMPTY_ERROR") }}
                        render={({ field, formState }) => (
                            <TextField
                                label={t("form.locationLabel")}
                                placeholder={t("form.locationPlaceholder")}
                                error={formState.errors.location}
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name={ASSOCIATION_FORM_KEYS.address}
                        defaultValue=""
                        control={control}
                        rules={{ required: t("form.inputError.EMPTY_ERROR") }}
                        render={({ field, formState }) => (
                            <TextField
                                placeholder={t(
                                    "form.locationComplementPlaceholder"
                                )}
                                error={formState.errors.location}
                                {...field}
                            />
                        )}
                    />
                    <div className="flex flex-row w-full items-center">
                        <Controller
                            name={ASSOCIATION_FORM_KEYS.city}
                            defaultValue=""
                            control={control}
                            rules={{
                                required: t("form.inputError.EMPTY_ERROR"),
                            }}
                            render={({ field, formState }) => (
                                <TextField
                                    placeholder={t("form.city")}
                                    error={formState.errors.location}
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name={ASSOCIATION_FORM_KEYS.postalCode}
                            defaultValue=""
                            control={control}
                            rules={{
                                required: t("form.inputError.EMPTY_ERROR"),
                            }}
                            render={({ field, formState }) => (
                                <TextField
                                    placeholder={t("form.postalCode")}
                                    error={formState.errors.location}
                                    {...field}
                                />
                            )}
                        />
                    </div>
                </div>
                {/* Fin adresse */}
                <Controller
                    name={ASSOCIATION_FORM_KEYS.phoneNumber}
                    defaultValue=""
                    control={control}
                    rules={{
                        required: t("form.inputError.EMPTY_ERROR"),
                        pattern: {
                            value: FORM_PATTERN.PHONE_NUMBER,
                            message: t(
                                "form.inputError.INVALID_PHONE_NUMBER_ERROR"
                            ),
                        },
                    }}
                    render={({ field, formState }) => (
                        //à remettre le telField
                        //<TelField
                        <TextField
                            label={t("form.phoneNumberLabel")}
                            placeholder={t("form.phoneNumberPlaceholder")}
                            error={formState.errors.phoneNumber}
                            {...field}
                        />
                    )}
                />

                <WizardStepperFooter
                    isFirstStep={isFirstStep}
                    isLastStep={isLastStep}
                    onPreviousAction={handlePreviousAction}
                />
            </Form>
        </div>
    );
};
