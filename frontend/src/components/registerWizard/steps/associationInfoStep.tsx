import {Controller, useForm} from 'react-hook-form';
import {TextField} from "../../input";
import {Form} from "../../form";
import {
    ASSOCIATION_FORM_KEYS,
    AssociationFormData,
    FORM_ERROR,
    FORM_PATTERN,
    RegisterFormData
} from "../registerWizard.types";
import {useWizard} from "../../../utils/contexts/wizard/useWizard";
import {WizardStepperFooter} from "../../wizard";
import {t} from "../../../utils/i18n/i18n";

export const AssociationInfoStep = () => {
    const { previousStep, nextStep, wizardData, isFirstStep, isLastStep } = useWizard<RegisterFormData>();
    const {
        control,
        handleSubmit,
    } = useForm({ defaultValues: wizardData.associationInfo, mode: "onSubmit" });

    const handlePreviousAction = () => {
        return previousStep()
    }

    const saveData = (data: AssociationFormData) => {
        return nextStep({associationInfo: data}, true)
    };

    return (
        <div className="flex flex-col w-full items-center gap-16">
            <h1 className="text-lg font-medium leading-none text-gray-900">
                {t("registration.association.title")}
            </h1>
            <Form onSubmit={handleSubmit(saveData)}>
                <Controller
                    name={ASSOCIATION_FORM_KEYS.name}
                    defaultValue=""
                    control={control}
                    rules={{ required: FORM_ERROR.EMPTY_ERROR }}
                    render={({field, formState}) =>
                        <TextField
                            label={t("registration.association.nameField.label")}
                            placeholder={t("registration.association.nameField.placeholder")}
                            error={formState.errors.name}
                            {...field}
                        />
                    }
                />

                <Controller
                    name={ASSOCIATION_FORM_KEYS.location}
                    defaultValue=""
                    control={control}
                    rules={{ required: FORM_ERROR.EMPTY_ERROR }}
                    render={({field, formState}) =>
                        <TextField
                            label={t("registration.association.locationField.label")}
                            placeholder={t("registration.association.locationField.placeholder")}
                            error={formState.errors.location}
                            {...field}
                        />
                    }
                />

                <Controller
                    name={ASSOCIATION_FORM_KEYS.phone}
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
                            label={t("registration.association.phoneField.label")}
                            placeholder={t("registration.association.phoneField.placeholder")}
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