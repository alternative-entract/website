import {FC, FormEvent, ReactNode} from "react";

interface IForm {
    onSubmit: (event:  FormEvent) => void
    children: ReactNode
}

export const Form: FC<IForm> = ({ onSubmit, children }) => (
    <form
        action="#"
        className="flex flex-col w-full justify-center items-center gap-6"
        onSubmit={onSubmit}
    >
        {children}
    </form>
)