import {forwardRef} from "react";
import {InputPasswordProps} from "./input.types";
import {InputField} from "./input.component";

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
    ({ error, ...rest }, ref) => {
        return (
            <div className="flex flex-col gap-2 w-full">
                <InputField
                    type="password"
                    ref={ref}
                    {...rest}
                />
                {error && <span>{error.message}</span>}
            </div>
        );
    })