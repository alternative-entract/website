import { TelephoneFieldProps } from "./input.types";
import { InputField } from "./inputField.component";
import { forwardRef } from "react";

export const TelField = forwardRef<HTMLInputElement, TelephoneFieldProps>(
    ({ ...rest }, ref) => <InputField ref={ref} type="tel" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" {...rest} />
);