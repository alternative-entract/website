import {InputEmailProps} from "./input.types";
import {InputField} from "./input.component";
import {forwardRef} from "react";

export const InputEmail = forwardRef<HTMLInputElement, InputEmailProps>(
    ({ error, ...rest }, ref) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <InputField
                type="email"
                ref={ref}
                {...rest}
            />
            {error && <span>{error.message}</span>}
        </div>
    );
})