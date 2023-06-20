import { forwardRef } from "react";
import { InputFieldProps } from "./input.types";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, name, hint, trailingIcon, error, isReadonly, ...rest }, ref) => {
        return (
            <div className="relative flex flex-col w-full">
                <div className="flex items-center block mb-2 gap-2">
                    <label
                        htmlFor={name}
                        className=" text-sm font-medium text-gray-900"
                    >
                        {label}
                    </label>
                    {hint && hint}
                </div>
                <input
                    id={name}
                    ref={ref}
                    {...rest}
                    readOnly={isReadonly}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                {trailingIcon && trailingIcon}

                {error && (
                    <span className="text-red-500 text-base italic">
                        {error.message}
                    </span>
                )}
            </div>
        );
    }
);
