import { FC } from "react";
import { BreadcrumbItemData } from "../breadcrumb.type";
import { ChevronRightIcon } from "../../icon";

interface IBreadcrumbItem {
    item: BreadcrumbItemData;
    index: number;
}

export const BreadcrumbItem: FC<IBreadcrumbItem> = ({ item, index }) => {
    const isFirstItem = index === 0;

    const renderIcon = () => {
        if (isFirstItem) {
            return null;
        }
        return <ChevronRightIcon />;
    };

    const renderLink = () => {
        if (item.href) {
            return (
                <a
                    href={item.href}
                    className={`inline-flex items-center text-sm font-medium ${
                        isFirstItem ? "text-gray-700" : "text-gray-500"
                    } hover:text-blue-600 md:ml-2`}
                >
                    {item.title}
                </a>
            );
        }
        return (
            <span
                className={`ml-1 text-sm font-medium ${
                    isFirstItem ? "text-gray-700" : "text-gray-500"
                } md:ml-2`}
            >
                {item.title}
            </span>
        );
    };

    return (
        <li className="inline-flex items-center">
            {renderIcon()}
            {renderLink()}
        </li>
    );
};
