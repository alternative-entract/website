import { FC, MouseEvent, ReactNode } from "react";
import { ButtonSize, ButtonType, ButtonVariant } from "./button.types";

export interface IButton {
    size: ButtonSize;
    variant: ButtonVariant;
    onClick?: (event: MouseEvent) => void;
    type?: ButtonType;
    disabled?: boolean;
    rounded?: boolean;
    children: ReactNode;
}

export const Button: FC<IButton> = ({
    type = "button",
    size,
    variant,
    rounded = true,
    disabled,
    onClick,
    children,
    ...rest
}) => (
    <button
        type={type}
        onClick={onClick}
        className={`w-full flex justify-center ${
            disabled ? "bg-gray-400 opacity-30" : variant
        } focus:ring-4 focus:outline-none font-medium ${
            rounded ? "rounded-lg" : ""
        } ${size} text-center inline-flex items-center`}
        disabled={disabled}
        {...rest}
    >
        {children}
    </button>
);
