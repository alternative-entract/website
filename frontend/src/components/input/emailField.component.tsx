import { EmailFieldProps } from "./input.types";
import { InputField } from "./inputField.component";
import { forwardRef } from "react";

export const EmailField = forwardRef<HTMLInputElement, EmailFieldProps>(
    ({ ...rest }, ref) => <InputField ref={ref} type="email" {...rest} />
);
