import {FC, ReactNode} from "react";

interface SectionProps {
    children: ReactNode
}

export const Section: FC<SectionProps> = ({ children }) => <section className="flex flex-col flex-grow place-content-center items-center w-full py-8">
    {children}
</section>