import {ChangeEvent, FC} from "react";
import {InputProps} from "./input.types";

export const Input: FC<InputProps> = ({ value, onChange, ...props }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const newValue = e.target.value;
            onChange(newValue);
        }
    };

    return <input className="border border-gray-300" value={value} onChange={handleChange} {...props} />;
};