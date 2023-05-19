import {FC, ReactNode} from "react";
import {ButtonSize, ButtonVariant} from "./button.types";

interface ButtonProps {
    size: ButtonSize
    variant: ButtonVariant
    onClick: () => void
    children: ReactNode
}

export const Button: FC<ButtonProps> = ({ size, variant, onClick, children }) => (
    <button type="button" onClick={onClick} className={`flex justify-between ${variant} hover:bg-blue-800 focus:ring-blue-300 focus:ring-4 focus:outline-none font-medium rounded-lg ${size} text-center inline-flex items-center`}>
        {children}
    </button>
)