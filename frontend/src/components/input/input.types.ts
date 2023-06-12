import {InputHTMLAttributes, ReactNode, RefObject} from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    ref?: RefObject<HTMLInputElement>;
    label?: string;
    name: string;
		hint?: ReactNode;
		trailingIcon?: ReactNode;
    placeholder?: string;
    error?: { message: string };
    isReadonly?: boolean;
    [key: string]: unknown;
}

export type EmailFieldProps = InputFieldProps

export type TextFieldProps = InputFieldProps

export type PasswordFieldProps = InputFieldProps & {
	showPassword: boolean
	onEyeClick: () => void
}

export type NumberFieldProps = InputFieldProps
