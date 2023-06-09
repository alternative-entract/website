import {Controller, useForm} from 'react-hook-form';
import {TextField} from "../../input";
import {Form} from "../../form";
import {
	CONTACT_FORM_KEYS,
	ContactFormData,
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
    } = useForm({ defaultValues: wizardData.contactInfo as ContactFormData, mode: "onSubmit" });

    const handlePreviousAction = () => previousStep()

    const saveData = (data: ContactFormData) =>
        nextStep({contactInfo: data}, true)

    return (
        <div className="flex flex-col w-full items-center gap-16">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                {t("registration.contactInfo.title")}
            </h1>

            <Form onSubmit={handleSubmit(saveData)}>
                <Controller
                    name={CONTACT_FORM_KEYS.firstName}
                    defaultValue=""
                    control={control}
                    rules={{
                        required: t("registration.error.EMPTY_ERROR"),
                        pattern: {
                            value: FORM_PATTERN.TEXT,
                            message: t("registration.error.INVALID_FIRSTNAME_ERROR"),
                        },
                    }}
                    render={({field, formState}) =>
                        <TextField
                            label={t("registration.contactInfo.firstName.label")}
                            placeholder={t("registration.contactInfo.firstName.placeholder")}
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
                        required: t("registration.error.EMPTY_ERROR"),
                        pattern: {
                            value: FORM_PATTERN.TEXT,
                            message: t("registration.error.INVALID_LASTNAME_ERROR"),
                        },
                    }}
                    render={({field, formState}) =>
                        <TextField
                            label={t("registration.contactInfo.lastName.label")}
                            placeholder={t("registration.contactInfo.lastName.placeholder")}
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
                        required: t("registration.error.EMPTY_ERROR"),
                        pattern: {
                            value: FORM_PATTERN.PHONE_NUMBER,
                            message: t("registration.error.INVALID_PHONE_NUMBER_ERROR"),
                        }
                    }}
                    render={({field, formState}) =>
                        <TextField
                            label={t("registration.contactInfo.phoneNumber.label")}
                            placeholder={t("registration.contactInfo.phoneNumber.placeholder")}
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
