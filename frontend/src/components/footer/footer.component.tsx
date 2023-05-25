import {FC, ReactNode} from "react";

interface IFooter {
    children: ReactNode | ReactNode[]
}

export const Footer: FC<IFooter> = ({ children }) => (
    <footer className="flex flex-col w-full bottom-0 left-0 z-20 p-4 shadow md:p-6">
        <span className="text-sm text-gray-500 sm:text-center">
            {children}
        </span>
    </footer>
);
