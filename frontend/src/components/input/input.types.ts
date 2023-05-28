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

export interface EmailFieldProps extends InputFieldProps {}

export interface TextFieldProps extends InputFieldProps {}

export interface PasswordFieldProps extends InputFieldProps {}

export interface NumberFieldProps extends InputFieldProps {}