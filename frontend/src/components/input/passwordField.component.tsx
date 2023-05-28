import {forwardRef} from "react";
import {PasswordFieldProps} from "./input.types";
import {InputField} from "./inputField.component";

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
    ({ ...rest }, ref) =>
    <InputField ref={ref} type="password"{...rest}/>
)