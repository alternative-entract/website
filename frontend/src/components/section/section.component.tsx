import {FC, ReactNode} from "react";

interface ISection {
    children: ReactNode
}

export const Section: FC<ISection> = ({ children }) =>
    <section className="flex flex-col flex-grow h-[85vh] w-full py-8">
        {children}
    </section>