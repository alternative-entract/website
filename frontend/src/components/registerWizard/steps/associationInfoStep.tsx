import {useForm} from 'react-hook-form';
import {TextField} from "../../input";
import {Form} from "../../form/form.component";
import {AssociationInfoFormData, RegisterFormData} from "../registerWizard.types";
import {useWizard} from "../../../utils/wizard/useWizard";
import {WizardStepperFooter} from "../../wizard/wizardStepper.footer.component";

export const AssociationInfoStep = () => {
    const { previousStep, nextStep, wizardData, isFirstStep, isLastStep } = useWizard<RegisterFormData>();
    const {
        handleSubmit,
        register,
        formState: { errors, isValid },
    } = useForm({ defaultValues: wizardData.associationInfo, mode: "onSubmit" });

    const handlePreviousAction = () => {
        return previousStep()
    }

    const saveData = (data: AssociationInfoFormData) => {
        return nextStep(data, true)
    };

    return (
        <div className="flex flex-col w-full items-center gap-16">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                Informations de l'association
            </h1>
            <Form onSubmit={handleSubmit(saveData)}>
                <TextField
                    label="Nom de l'association"
                    placeholder="Petland"
                    error={errors.name}
                    {...register("name", {required: "Veuillez renseigner le nom de l'association."})}
                />

                <TextField /* InputAddress */
                    label="Adresse"
                    placeholder="1 rue des Champs Elysées"
                    error={errors.location}
                    {...register("location", {required: "Veuillez renseigner l'adresse de l'association."})}
                />

                <TextField /* InputPhone */
                    label="N° de téléphone"
                    placeholder="0112589645"
                    error={errors.phone}
                    {...register("phone", {required: "Veuillez renseigner le numéro de téléphone de l'association."})}
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