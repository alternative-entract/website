import {FC, ReactNode} from "react";

interface IFooter {
    children: ReactNode | ReactNode[]
}

export const Footer: FC<IFooter> = ({ children }) => (
    <div className="flex flex-col text-center z-20 p-4 shadow md:p-6">
        <span className="text-sm text-gray-500 sm:text-center">
            {children}
        </span>
    </div>
);
