import {TextFieldProps} from "./input.types";
import {InputField} from "./inputField.component";
import {forwardRef} from "react";

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ ...rest }, ref) =>
    <InputField ref={ref} type="text"{...rest}/>
)