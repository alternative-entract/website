import { FC } from "react";
import {useForm} from 'react-hook-form';
import {IFormStep} from "../multiStepForm/multiStepForm.component"
import {InputText} from "../input";
import {Form} from "../form/form.component";
import {AssociationInfoFormData} from "./registerForm.types";

export const AssociationInfoStep: FC<IFormStep> = ({ setFormData, register, errors }) => {
    const { handleSubmit } = useForm<AssociationInfoFormData>();

    const handleFormSubmit = (data: AssociationInfoFormData) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            associationInfo: data,
        }));
    };

    return (
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <InputText
                label="Nom de l'association"
                placeholder="Petland"
                error={errors.associationName}
                {...register("associationName", {required: true, pattern: /^\S+@\S+$/i})}
            />

            <InputText /* InputAddress */
                label="Adresse de l'association"
                placeholder="1 rue des Champs Elysées"
                error={errors.associationLocation}
                {...register("associationLocation", {required: true, pattern: /^\S+@\S+$/i})}
            />

            <InputText /* InputPhone */
                label="N° de téléphone de l'association"
                placeholder="0112589645"
                error={errors.associationPhoneNumber}
                {...register("associationPhoneNumber", {required: true, pattern: /^\S+@\S+$/i})}
            />
        </Form>
    );
};