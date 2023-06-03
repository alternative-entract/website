import {InputHTMLAttributes, RefObject} from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    ref?: RefObject<HTMLInputElement>;
    label: string;
    name: string;
    placeholder?: string;
    error?: { message: string };
    isReadonly?: boolean;
    [key: string]: unknown;
}

export type EmailFieldProps = InputFieldProps

export type TextFieldProps = InputFieldProps

export type PasswordFieldProps = InputFieldProps

export type NumberFieldProps = InputFieldProps