import {Controller, useForm} from 'react-hook-form';
import {TextField} from "../../input";
import {Form} from "../../form";
import {AssociationInfoFormData, FORM_ERROR, FORM_PATTERN, RegisterFormData} from "../registerWizard.types";
import {useWizard} from "../../../utils/wizard/useWizard";
import {WizardStepperFooter} from "../../wizard";

export const AssociationInfoStep = () => {
    const { previousStep, nextStep, wizardData, isFirstStep, isLastStep } = useWizard<RegisterFormData>();
    const {
        control,
        handleSubmit,
    } = useForm({ defaultValues: wizardData.associationInfo, mode: "onSubmit" });

    const handlePreviousAction = () => {
        return previousStep()
    }

    const saveData = (data: AssociationInfoFormData) => {
        return nextStep({associationInfo: data}, true)
    };

    return (
        <div className="flex flex-col w-full items-center gap-16">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                Identité de l'association
            </h1>
            <Form onSubmit={handleSubmit(saveData)}>
                <Controller
                    name="name"
                    defaultValue=""
                    control={control}
                    rules={{ required: FORM_ERROR.EMPTY_ERROR }}
                    render={({field, formState}) =>
                        <TextField
                            label="Nom de l'association"
                            placeholder="Petland"
                            error={formState.errors.name}
                            {...field}
                        />
                    }
                />

                <Controller
                    name="location"
                    defaultValue=""
                    control={control}
                    rules={{ required: FORM_ERROR.EMPTY_ERROR }}
                    render={({field, formState}) =>
                        <TextField
                            label="Adresse"
                            placeholder="1 rue des Champs Elysées"
                            error={formState.errors.location}
                            {...field}
                        />
                    }
                />

                <Controller
                    name="phone"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: FORM_ERROR.EMPTY_ERROR,
                        pattern: {
                            value: FORM_PATTERN.PHONE_NUMBER,
                            message: FORM_ERROR.INVALID_PHONE_NUMBER_ERROR,
                        }
                    }}
                    render={({field, formState}) =>
                        <TextField
                            label="N° de téléphone"
                            placeholder="0112589645"
                            error={formState.errors.phone}
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