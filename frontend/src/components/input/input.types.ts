import {InputHTMLAttributes, RefObject} from "react";
import {Control, FieldValues, RegisterOptions} from "react-hook-form";

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

export type ControlledTextFieldProps<T extends FieldValues> = TextFieldProps & {
    control: Control<T>;
    rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">;
}