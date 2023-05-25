import {InputTextProps} from "./input.types";
import {Input} from "./input.component";
import {FC} from "react";

export const InputText: FC<InputTextProps> = ({ value, onChange, isReadonly, ...props }) => {
    const handleChange = (newValue: string) => {
        if (!isReadonly && onChange) {
            onChange(newValue);
        }
    };

    return <Input type="text" value={value} onChange={handleChange} readOnly={isReadonly} {...props} />;
};