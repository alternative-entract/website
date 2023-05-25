import {FC} from "react";
import {InputProps} from "./input.types";
import {Input} from "./input.component";

export const InputPassword: FC<InputProps> = ({ value, onChange, ...props }) => {
    return <Input type="password" value={value} onChange={onChange} {...props} />;
};