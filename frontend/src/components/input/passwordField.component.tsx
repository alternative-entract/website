import { forwardRef } from "react";
import { PasswordFieldProps } from "./input.types";
import { InputField } from "./inputField.component";
import { EyeIcon, EyeSlashIcon } from "../icon";

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
	({ showPassword = false, onEyeClick, ...rest }, ref) => {
		const inputType = showPassword ? "text" : "password";
		const getTrailingIcon = () => {
			return (
				<div
					className="absolute right-3 top-1/2 transform cursor-pointer text-gray-500"
					onClick={onEyeClick}
				>
					{showPassword ? <EyeSlashIcon /> : <EyeIcon />}
				</div>
			);
		};

		return (
			<InputField
				ref={ref}
				type={inputType}
				{...rest}
				trailingIcon={getTrailingIcon()}
			/>
		);
	}
);
