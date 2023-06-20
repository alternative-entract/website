import { FC, ReactNode } from "react";

interface ISection {
    className?: string;
    children: ReactNode;
}

export const Section: FC<ISection> = ({ className, children }) => (
    <section className={`flex flex-col w-full ${className}`}>
        {children}
    </section>
);
