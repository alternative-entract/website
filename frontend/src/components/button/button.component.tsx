import {FC, ReactNode} from "react";
import {ButtonSize, ButtonType, ButtonVariant} from "./button.types";

export interface IButton {
    size: ButtonSize
    variant: ButtonVariant
    onClick: () => void
    type?: ButtonType
    rounded?: boolean
    children: ReactNode
}

export const Button: FC<IButton> = ({ type = "button", size, variant, rounded = true, onClick, children }) => (
    <button
        type={type}
        onClick={onClick}
        className={`w-full flex justify-center ${variant} focus:ring-4 focus:outline-none font-medium ${rounded ? "rounded-lg" : ""} ${size} text-center inline-flex items-center`}>
        {children}
    </button>
)