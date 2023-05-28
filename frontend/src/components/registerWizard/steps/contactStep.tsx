import {useForm} from 'react-hook-form';
import {Form} from "../../form";
import {ContactInfoFormData, RegisterFormData} from "../registerWizard.types";
import {WizardStepperFooter} from "../../wizard";
import {useWizard} from "../../../utils/wizard/useWizard";
import {ControlledTextField} from "../../input/controlled/textField.component";

export const ContactStep = () => {
    const { previousStep, nextStep, wizardData, isFirstStep, isLastStep } = useWizard<RegisterFormData>();

    const {
        control,
        handleSubmit,
    } = useForm({ defaultValues: wizardData.contactInfo, mode: "onSubmit" });

    const handlePreviousAction = () => {
        return previousStep()
    }

    const onSubmit = (data: ContactInfoFormData) => {
        nextStep({contactInfo: data}, true)
    };

    return (
        <div className="flex flex-col w-full items-center gap-16">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                Informations de Contact
            </h1>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <ControlledTextField
                    name="firstName"
                    label="Prénom"
                    placeholder="Jean"
                    control={control}
                    rules={{
                        required: "Veuillez renseigner le prénom du contact.",
                        pattern: {
                            value: /^[a-zA-Z]+$/,
                            message: "Veuillez entrer un prénom valide (lettres uniquement).",
                        },
                    }}
                />

                <ControlledTextField
                    name="lastName"
                    label="Nom"
                    placeholder="Dupond"
                    control={control}
                    rules={{
                        required: "Veuillez renseigner le nom du contact.",
                        pattern: {
                            value: /^[a-zA-Z]+$/,
                            message: "Veuillez entrer un nom valide (lettres uniquement).",
                        },
                    }}
                />

                <ControlledTextField
                    name="phoneNumber"
                    label="N° de téléphone"
                    placeholder="0612589645"
                    control={control}
                    rules={{
                        required: "Veuillez renseigner le numéro de téléphone du contact.",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Veuillez entrer un numéro de téléphone valide.",
                        }
                    }}
                />

                <WizardStepperFooter
                    isFirstStep={isFirstStep}
                    isLastStep={isLastStep}
                    onPreviousAction={handlePreviousAction}
                    canClickNext
                />
            </Form>
        </div>
    );
};