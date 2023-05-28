import {forwardRef} from "react";
import {InputFieldProps} from "./input.types";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, name, error, isReadonly, ...rest }, ref) => {
        return (
            <div className="flex flex-col w-full">
                <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
                <input id={name} ref={ref} {...rest} readOnly={isReadonly} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                {error && <span className="text-red-500 text-base italic">{error.message}</span>}
            </div>
        );
    }
);