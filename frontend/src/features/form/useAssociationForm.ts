import {ChangeEvent, useState} from "react";

interface AssociationFormValues {
    associationName: string;
    contactName: string;
}

export const useAssociationForm = () => {
    const [values, setValues] = useState<AssociationFormValues>({
        associationName: "",
        contactName: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return {
        associationName: values.associationName,
        contactName: values.contactName,
        handleChange,
    };
};