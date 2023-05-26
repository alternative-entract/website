import {InputHTMLAttributes, RefObject} from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    [key: string]: unknown;
}

export interface InputEmailProps extends InputFieldProps {
    ref?: RefObject<HTMLInputElement>;
    error?: { message: string };
}

export interface InputTextProps extends InputFieldProps {
    isReadonly?: boolean;
    ref?: RefObject<HTMLInputElement>;
    error?: { message: string };
}

export interface InputPasswordProps extends InputFieldProps {
    ref?: RefObject<HTMLInputElement>;
    error?: { message: string };
}