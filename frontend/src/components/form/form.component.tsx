import { FC, FormEvent, ReactNode } from "react";

interface IForm {
    onSubmit: (event: FormEvent) => void;
    noValidate?: boolean;
    children: ReactNode;
}

export const Form: FC<IForm> = ({ onSubmit, noValidate, children }) => (
    <form
        action="#"
        className="flex flex-col w-full justify-center items-center gap-6"
        onSubmit={onSubmit}
        noValidate={noValidate}
    >
        {children}
    </form>
);
