import {Controller, useForm} from 'react-hook-form';
import {TextField} from "../../input";
import {Form} from "../../form";
import {ContactInfoFormData, FORM_ERROR, FORM_PATTERN, RegisterFormData} from "../registerWizard.types";
import {WizardStepperFooter} from "../../wizard";
import {useWizard} from "../../../utils/wizard/useWizard";

export const ContactStep = () => {
    const { previousStep, nextStep, wizardData, isFirstStep, isLastStep } = useWizard<RegisterFormData>();

    const {
        control,
        handleSubmit,
    } = useForm({ defaultValues: wizardData.contactInfo, mode: "onSubmit" });

    const handlePreviousAction = () => {
        return previousStep()
    }

    const saveData = (data: ContactInfoFormData) => {
        nextStep({contactInfo: data}, true)
    };

    return (
        <div className="flex flex-col w-full items-center gap-16">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                Coordonnées de Contact
            </h1>

            <Form onSubmit={handleSubmit(saveData)}>
                <Controller
                    name="firstName"
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
                            label="Prénom"
                            placeholder="Jean"
                            error={formState.errors.firstName}
                            {...field}
                        />
                    }
                />

                <Controller
                    name="lastName"
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
                            label="Nom"
                            placeholder="Dupond"
                            error={formState.errors.lastName}
                            {...field}
                        />
                    }
                />

                <Controller
                    name="phoneNumber"
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
                            label="N° de téléphone"
                            placeholder="0612589645"
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