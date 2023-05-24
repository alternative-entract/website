import {FC, ReactNode} from "react";

interface IFooter {
    children: ReactNode | ReactNode[]
}

export const Footer: FC<IFooter> = ({ children }) => (
    <footer className="bottom-0 left-0 z-20 w-full p-4 shadow md:flex md:items-center md:justify-center md:p-6">
        <span className="text-sm text-gray-500 sm:text-center">
            {children}
        </span>
    </footer>
);
