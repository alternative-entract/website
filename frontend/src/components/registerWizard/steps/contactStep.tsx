import {Controller, useForm} from 'react-hook-form';
import {TextField} from "../../input";
import {Form} from "../../form";
import {
    CONTACT_FORM_KEYS,
    ContactFormData,
    FORM_ERROR,
    FORM_PATTERN,
    RegisterFormData
} from "../registerWizard.types";
import {WizardStepperFooter} from "../../wizard";
import {useWizard} from "../../../utils/contexts/wizard/useWizard";
import {t} from "../../../utils/i18n/i18n";

export const ContactStep = () => {
    const { previousStep, nextStep, wizardData, isFirstStep, isLastStep } = useWizard<RegisterFormData>();

    const {
        control,
        handleSubmit,
    } = useForm({ defaultValues: wizardData.contactInfo, mode: "onSubmit" });

    const handlePreviousAction = () => {
        return previousStep()
    }

    const saveData = (data: ContactFormData) => {
        nextStep({contactInfo: data}, true)
    };

    return (
        <div className="flex flex-col w-full items-center gap-16">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                {t("registration.contact.title")}
            </h1>

            <Form onSubmit={handleSubmit(saveData)}>
                <Controller
                    name={CONTACT_FORM_KEYS.firstName}
                    defaultValue=""
                    control={control}
                    rules={{
                        required: FORM_ERROR.EMPTY_ERROR,
                        pattern: {
                            value: FORM_PATTERN.TEXT,
                            message: FORM_ERROR.INVALID_FIRSTNAME_ERROR,
                        },
                    }}
                    render={({field, formState}) =>
                        <TextField
                            label={t("registration.contact.firstNameField.label")}
                            placeholder={t("registration.contact.firstNameField.placeholder")}
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
                        required: FORM_ERROR.EMPTY_ERROR,
                        pattern: {
                            value: FORM_PATTERN.TEXT,
                            message: FORM_ERROR.INVALID_LASTNAME_ERROR,
                        },
                    }}
                    render={({field, formState}) =>
                        <TextField
                            label={t("registration.contact.lastNameField.label")}
                            placeholder={t("registration.contact.lastNameField.placeholder")}
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
                        required: FORM_ERROR.EMPTY_ERROR,
                        pattern: {
                            value: FORM_PATTERN.PHONE_NUMBER,
                            message: FORM_ERROR.INVALID_PHONE_NUMBER_ERROR,
                        }
                    }}
                    render={({field, formState}) =>
                        <TextField
                            label={t("registration.contact.phoneNumberField.label")}
                            placeholder={t("registration.contact.phoneNumberField.placeholder")}
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