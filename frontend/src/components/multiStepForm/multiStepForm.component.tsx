import {Dispatch, FC, memo, SetStateAction, useCallback, useState} from "react";
import {Stepper} from "../stepper/stepper.component";
import {useNavigateToHome} from "../../features/navigation/useNavigateTo";
import {FieldPath, FieldValues, RegisterOptions, useForm, UseFormRegisterReturn} from "react-hook-form";
import {MultiStepFormNextButton} from "./multiStepNextButton.component";
import {MultiStepFormBackButton} from "./multiStepBackButton.component";
import {StepData} from "../../types/form";

type TFieldName = FieldPath<FieldValues>

export interface IFormStep {
    formData: FormData;
    setFormData: Dispatch<SetStateAction<FormData>>;
    register: (name: TFieldName, options?: RegisterOptions<FieldValues, TFieldName>) => UseFormRegisterReturn<TFieldName>
    errors: Record<string, any>;
}

interface IMultiStepForm {
    steps: StepData[];
}

export const MultiStepForm: FC<IMultiStepForm> = memo(({ steps }) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [formData, setFormData] = useState<FormData>({} as FormData | (() => FormData));
    const { register, formState: { errors } } = useForm<FormData>();
    const navigateToHome = useNavigateToHome()
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === steps.length - 1;

    const handleNextStep = () => {
        setCurrentStepIndex(currentStepIndex + 1);
    };

    const handlePreviousStep = () => {
        setCurrentStepIndex(currentStepIndex - 1);
    };

    const handleNavigateToHome = useCallback(() => {
        navigateToHome()
    }, [navigateToHome])

    const renderStepComponent = (stepIndex: number) => {
        const StepComponent = steps[stepIndex].component;
        return (
            <StepComponent
                formData={formData}
                setFormData={setFormData}
                register={register as (name: string, options?: RegisterOptions<FieldValues, string>) => UseFormRegisterReturn<string>}
                errors={errors}
            />
        );
    };

    return (
        <div className="flex flex-col items-center w-full gap-16  px-8 md:px-4">
            <Stepper steps={steps} currentStepIndex={currentStepIndex} />

            <div className="flex flex-col w-full items-center gap-16">
                <h1 className="text-lg font-medium leading-none text-gray-900">
                    {steps[currentStepIndex].name}
                </h1>

                <div className="w-full md:w-1/2">
                    {renderStepComponent(currentStepIndex)}
                </div>

                <div className="flex flex-col-reverse md:flex-row w-full md:w-1/2 justify-between gap-6">
                    <MultiStepFormBackButton
                        isFirstStep={isFirstStep}
                        onBack={handlePreviousStep}
                        onExit={handleNavigateToHome}
                    />
                    <MultiStepFormNextButton
                        isLastStep={isLastStep}
                        onNext={handleNextStep}
                        onSubmit={() => console.log(formData)}
                    />
                </div>
            </div>
        </div>
    )
});