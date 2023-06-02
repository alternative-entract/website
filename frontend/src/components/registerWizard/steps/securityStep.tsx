import {Controller, useForm} from 'react-hook-form';
import {EmailField} from "../../input/emailField.component";
import {PasswordField} from "../../input";
import {Form} from "../../form";
import {FORM_ERROR, FORM_PATTERN, RegisterFormData, SecurityInfoFormData} from "../registerWizard.types";
import {useWizard} from "../../../utils/wizard/useWizard";
import {WizardStepperFooter} from "../../wizard";

export const SecurityStep = () => {
    const { previousStep, nextStep, wizardData, isFirstStep, isLastStep } = useWizard<RegisterFormData>();
    const { control, watch, handleSubmit,} = useForm({ defaultValues: wizardData.securityInfo, mode: "onSubmit" });
    const watchPassword = watch("password");

    const handlePreviousAction = () => {
        return previousStep()
    }

    const saveData = (data: SecurityInfoFormData) => {
        return nextStep({ securityInfo: data}, true)
    };

    return (
        <div className="flex flex-col w-full items-center gap-16">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                Identifiants de connexion
            </h1>
            <Form onSubmit={handleSubmit(saveData)}>
                <Controller
                    name="email"
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
                    name="password"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: FORM_ERROR.EMPTY_ERROR,
                        minLength: { value: 8, message: "Le mot de passe doit contenir au moins 8 caractères."},
                        maxLength: { value: 20, message: "Le mot de passe ne doit pas dépasser 20 caractères."},
                        validate: (value) => {
                            const hasUpperCase = /^(?=.*?[A-Z])/.test(value)
                            const hasLowerCase = /[a-z]/.test(value)
                            const hasDigit = /(?=.*?[0-9])/.test(value)

                            if(!hasUpperCase) {
                                return "Doit contenir au moins une majuscule."
                            }

                            if(!hasLowerCase) {
                                return "Doit contenir au moins une minuscule."
                            }

                            if (!hasDigit) {
                                return "Doit contenir au moins un chiffre."
                            }
                        },
                    }}
                    render={({field, formState}) =>
                        <PasswordField
                            label="Mot de passe"
                            error={formState.errors.password}
                            {...field}
                        />
                    }
                />

                <Controller
                    name="confirmPassword"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: FORM_ERROR.EMPTY_ERROR,
                        validate: (value) => value === watchPassword || 'Les deux mots de passe ne sont pas identiques.'
                    }}
                    render={({field, formState}) =>
                        <PasswordField
                            label="Confirmation du mot de passe"
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