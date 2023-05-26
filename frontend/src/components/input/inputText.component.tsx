import {InputTextProps} from "./input.types";
import {InputField} from "./input.component";
import {forwardRef} from "react";

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
    ({ error, isReadOnly, ...rest }, ref) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <InputField
                type="text"
                ref={ref}
                readOnly={isReadOnly}
                {...rest}
            />
            {error && <span>{error.message}</span>}
        </div>
    );
})