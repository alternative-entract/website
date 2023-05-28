import {forwardRef} from "react";
import {NumberFieldProps} from "./input.types";
import {InputField} from "./inputField.component";

export const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(
    ({ ...rest }) =>
    <InputField type="number"{...rest}/>
)