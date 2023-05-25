import {FC} from "react";
import {InputProps} from "./input.types";
import {Input} from "./input.component";

export const InputNumber: FC<InputProps> = ({ value, onChange, ...props }) => {
    return <Input type="number" value={value} onChange={onChange} {...props} />;
};