import { FC } from "react";
import {useForm} from 'react-hook-form';
import {IFormStep} from "../multiStepForm/multiStepForm.component"
import {InputText} from "../input";
import {Form} from "../form/form.component";
import {ContactInfoFormData} from "./registerForm.types";

export const ContactStep: FC<IFormStep> = ({ setFormData, register, errors }) => {
    const { handleSubmit } = useForm<ContactInfoFormData>();

    const handleFormSubmit = (data: ContactInfoFormData) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            contactInfo: data,
        }));
    };

    return (
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <InputText
                label="Nom"
                placeholder="Petland"
                error={errors.contactLastName}
                {...register("associationName", {required: true, pattern: /^\S+@\S+$/i})}
            />

            <InputText /* InputAddress */
                label="Prénom"
                placeholder="1 rue des Champs Elysées"
                error={errors.contactFirstName}
                {...register("associationLocation", {required: true, pattern: /^\S+@\S+$/i})}
            />

            <InputText /* InputPhone */
                label="N° de téléphone"
                placeholder="0112589645"
                error={errors.contactPhoneNumber}
                {...register("associationPhoneNumber", {required: true, pattern: /^\S+@\S+$/i})}
            />
        </Form>
    );
};