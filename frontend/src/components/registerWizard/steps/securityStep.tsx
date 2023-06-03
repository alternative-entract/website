import {Controller, useForm} from 'react-hook-form';
import {EmailField} from "../../input/emailField.component";
import {PasswordField} from "../../input";
import {Form} from "../../form";
import {
    FORM_ERROR,
    FORM_PATTERN,
    RegisterFormData, SECURITY_FORM_KEYS,
    SecurityFormData
} from "../registerWizard.types";
import {useWizard} from "../../../utils/contexts/wizard/useWizard";
import {WizardStepperFooter} from "../../wizard";
import {t} from "../../../utils/i18n/i18n";

export const SecurityStep = () => {
    const { previousStep, nextStep, wizardData, isFirstStep, isLastStep } = useWizard<RegisterFormData>();
    const { control, watch, handleSubmit,} = useForm({ defaultValues: wizardData.securityInfo, mode: "onSubmit" });
    const watchPassword = watch("password");

    const handlePreviousAction = () => {
        return previousStep()
    }

    const saveData = (data: SecurityFormData) => {
        return nextStep({ securityInfo: data}, true)
    };

    const validatePassword = (value: string) => {
            const hasUpperCase = /^(?=.*?[A-Z])/.test(value)
            const hasLowerCase = /[a-z]/.test(value)
            const hasDigit = /(?=.*?[0-9])/.test(value)

            if(!hasUpperCase) {
                return t("registration.security.passwordField.rules.atLeast", { string: "masjuscule" })
            }

            if(!hasLowerCase) {
                return t("registration.security.passwordField.rules.atLeast", { string: "minuscule" })
            }

            if (!hasDigit) {
                return t("registration.security.passwordField.rules.atLeast", { string: "chiffre" })
            }
        }

    return (
        <div className="flex flex-col w-full items-center gap-16">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                Identifiants de connexion
            </h1>
            <Form onSubmit={handleSubmit(saveData)}>
                <Controller
                    name={SECURITY_FORM_KEYS.email}
                    defaultValue=""
                    control={control}
                    rules={{
                        required: FORM_ERROR.EMPTY_ERROR,
                        pattern: {
                            value: FORM_PATTERN.EMAIL,
                            message: FORM_ERROR.INVALID_EMAIL_ERROR,
                        },
                    }}
                    render={({field, formState}) =>
                        <EmailField
                            label="Adresse e-mail"
                            placeholder="jean.dupond@gmail.com"
                            error={formState.errors.email}
                            {...field}
                        />
                    }
                />

                <Controller
                    name={SECURITY_FORM_KEYS.password}
                    defaultValue=""
                    control={control}
                    rules={{
                        required: FORM_ERROR.EMPTY_ERROR,
                        minLength: { value: 8, message: t("registration.security.passwordField.rules.minLength", { number: 8})},
                        maxLength: { value: 20, message: t("registration.security.passwordField.rules.maxLength", { number: 20})},
                        validate: validatePassword
                    }}
                    render={({field, formState}) =>
                        <PasswordField
                            label={t("registration.security.passwordField.label")}
                            error={formState.errors.password}
                            {...field}
                        />
                    }
                />

                <Controller
                    name={SECURITY_FORM_KEYS.confirmPassword}
                    defaultValue=""
                    control={control}
                    rules={{
                        required: FORM_ERROR.EMPTY_ERROR,
                        validate: (value) => value === watchPassword || t("registration.security.confirmPasswordField.rules.mismatch")
                    }}
                    render={({field, formState}) =>
                        <PasswordField
                            id={"confirmPassword"}
                            label={t("registration.security.confirmPasswordField.label")}
                            error={formState.errors.confirmPassword}
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