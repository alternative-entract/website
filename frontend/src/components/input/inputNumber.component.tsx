import {FC} from "react";
import {InputProps} from "./input.types";
import {InputField} from "./input.component";

export const InputNumber: FC<InputProps> = ({ value, onChange, ...props }) => {
    return <InputField type="number" value={value} onChange={onChange} {...props} />;
};