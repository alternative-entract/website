import {Controller, useForm} from 'react-hook-form';
import {TextField} from "../../input";
import {Form} from "../../form";
import {
	CONTACT_FORM_KEYS,
	ContactInfo,
	FORM_PATTERN, RegisterFormData
} from "../registrationWizard.types";
import {WizardStepperFooter} from "../../wizard";
import {useWizard} from "../../../utils/contexts/wizard/useWizard";
import {t} from "../../../utils/i18n/i18n";

export const ContactStep = () => {
    const { previousStep, nextStep, wizardData, isFirstStep, isLastStep } = useWizard<RegisterFormData>();

    const {
        control,
        handleSubmit,
    } = useForm({ defaultValues: wizardData.contactInfo as ContactInfo, mode: "onSubmit" });

    const handlePreviousAction = () => previousStep()

    const saveData = (data: ContactInfo) =>
        nextStep({contactInfo: data}, true)

    return (
        <div className="flex flex-col w-full items-center gap-16">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                {t("form.title.contactInfo")}
            </h1>

            <Form onSubmit={handleSubmit(saveData)}>
                <Controller
                    name={CONTACT_FORM_KEYS.firstName}
                    defaultValue=""
                    control={control}
                    rules={{
                        required: t("form.error.EMPTY_ERROR"),
                        pattern: {
                            value: FORM_PATTERN.TEXT,
                            message: t("form.error.INVALID_FIRSTNAME_ERROR"),
                        },
                    }}
                    render={({field, formState}) =>
                        <TextField
                            label={t("form.firstNameLabel")}
                            placeholder={t("form.firstNamePlaceholder")}
                            error={formState.errors.firstName}
                            {...field}
                        />
                    }
                />

                <Controller
                    name={CONTACT_FORM_KEYS.lastName}
                    defaultValue=""
                    control={control}
                    rules={{
                        required: t("form.error.EMPTY_ERROR"),
                        pattern: {
                            value: FORM_PATTERN.TEXT,
                            message: t("form.error.INVALID_LASTNAME_ERROR"),
                        },
                    }}
                    render={({field, formState}) =>
                        <TextField
                            label={t("form.lastNameLabel")}
                            placeholder={t("form.lastNamePlaceholder")}
                            error={formState.errors.lastName}
                            {...field}
                        />
                    }
                />

                <Controller
                    name={CONTACT_FORM_KEYS.phoneNumber}
                    control={control}
                    defaultValue=""
                    rules={{
                        required: t("form.error.EMPTY_ERROR"),
                        pattern: {
                            value: FORM_PATTERN.PHONE_NUMBER,
                            message: t("form.error.INVALID_PHONE_NUMBER_ERROR"),
                        }
                    }}
                    render={({field, formState}) =>
                        <TextField
                            label={t("form.phoneNumberLabel")}
                            placeholder={t("form.phoneNumberPlaceholder")}
                            error={formState.errors.phoneNumber}
                            {...field}
                        />
                    }
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
