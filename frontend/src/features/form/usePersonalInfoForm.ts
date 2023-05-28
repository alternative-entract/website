import {ChangeEvent, useState} from "react";

interface SecurityInfoFormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

export const useSecurityInfoForm = () => {
    const [values, setValues] = useState<SecurityInfoFormValues>({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return {
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        handleChange,
    };
};