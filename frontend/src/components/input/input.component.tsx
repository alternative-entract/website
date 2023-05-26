import {forwardRef} from "react";
import {InputFieldProps} from "./input.types";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, name, ...rest }, ref) => {
        return (
            <div className="mb-6">
                <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
                <input id={name} ref={ref} {...rest} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>
        );
    }
);