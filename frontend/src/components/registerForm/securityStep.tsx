import { FC } from "react";
import {useForm} from 'react-hook-form';
import {IFormStep} from "../multiStepForm/multiStepForm.component"
import {InputEmail} from "../input/InputEmail.component";
import {InputPassword} from "../input";
import {Form} from "../form/form.component";
import {FormData, SecurityInfoFormData} from "./registerForm.types";

export const SecurityStep: FC<IFormStep> = ({ formData, setFormData, register, errors }) => {
    const { handleSubmit } = useForm<SecurityInfoFormData>();

    const handleFormSubmit = (data: SecurityInfoFormData) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            securityInfo: data,
        }));
    };

    return (
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <InputEmail
                label="Adresse e-mail"
                placeholder="jean.dupond@gmail.com"
                error={errors.email}
                {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
            />

            <InputPassword
                label="Mot de passe"
                error={errors.password}
                {...register("password", {required: true, value: 6})}
            />

            <InputPassword
                label="Confirmation du mot de passe"
                error={errors.confirmPassword}
                {...register("confirmPassword", {required: true, validate: (value: string) => value === (formData as FormData).securityInfo?.password || 'Passwords do not match'})}
            />
        </Form>
    );
};