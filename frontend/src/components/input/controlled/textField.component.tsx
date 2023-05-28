import {Control, Controller, FieldValues} from "react-hook-form";
import {TextField} from "../textField.component";
import {ControlledTextFieldProps} from "../input.types";

export const ControlledTextField = <T extends FieldValues>({
    name,
    control,
    rules,
    label,
    placeholder
}: ControlledTextFieldProps<T>) => {
    return (
        <Controller
            name={name}
            defaultValue=""
            control={control as Control}
            rules={rules}
            render={({field, formState}) =>
                <TextField
                    label={label}
                    placeholder={placeholder}
                    error={formState.errors.firstName}
                    {...field}
                />
            }
        />
    );
};