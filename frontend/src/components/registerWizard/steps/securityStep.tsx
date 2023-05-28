import {useForm} from 'react-hook-form';
import {EmailField} from "../../input/emailField.component";
import {PasswordField} from "../../input";
import {Form} from "../../form/form.component";
import {RegisterFormData, SecurityInfoFormData} from "../registerWizard.types";
import {useWizard} from "../../../utils/wizard/useWizard";
import {WizardStepperFooter} from "../../wizard/wizardStepper.footer.component";

export const SecurityStep = () => {
    const { previousStep, nextStep, wizardData, isFirstStep, isLastStep } = useWizard<RegisterFormData>();
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors, isValid },
    } = useForm({ defaultValues: wizardData.securityInfo, mode: "onSubmit" });
    const watchPassword = watch("password");

    console.log(wizardData)

    const handlePreviousAction = () => {
        return previousStep()
    }

    const saveData = (data: SecurityInfoFormData) => {
        return nextStep(data, true)
    };

    return (
        <div className="flex flex-col w-full items-center gap-16">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                Informations de sécurité
            </h1>
            <Form onSubmit={handleSubmit(saveData)}>
                <EmailField
                    label="Adresse e-mail"
                    placeholder="jean.dupond@gmail.com"
                    error={errors.email}
                    {...register("email", {required: "Veuillez renseigner votre adresse e-mail.", pattern: /^\S+@\S+$/i})}
                />

                <PasswordField
                    label="Mot de passe"
                    error={errors.password}
                    {...register("password", {required: "Veuillez renseigner un mot de passe."})}
                />

                <PasswordField
                    label="Confirmation du mot de passe"
                    error={errors.confirmPassword}
                    {...register("confirmPassword", {required: "Confirmez le mote de passe.", validate: (value: string) => value === watchPassword || 'Les deux mots de passe ne sont pas identiques.'})}
                />

                <WizardStepperFooter
                    isFirstStep={isFirstStep}
                    isLastStep={isLastStep}
                    onPreviousAction={handlePreviousAction}
                    canClickNext={isValid}
                />
            </Form>
        </div>
    );
};