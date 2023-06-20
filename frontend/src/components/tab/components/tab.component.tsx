import { FC, useMemo } from "react";
import { TabData } from "../tabs.types";
import { capitalizeFirstLetter } from "../../../utils/helpers/capitalizeFirstLetter";

interface ITab {
    tab: TabData;
    onClick: () => void;
}

export const Tab: FC<ITab> = ({ tab, onClick }) => {
    const activeClass = useMemo(() => {
        return tab.isActive
            ? "border-blue-600 text-blue-600 active"
            : "border-transparent hover:text-gray-600 hover:border-gray-300";
    }, [tab.isActive]);

    return (
        <li className="mr-2">
            <div
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeClass}`}
                onClick={onClick}
            >
                {capitalizeFirstLetter(tab.title)}
            </div>
        </li>
    );
};
