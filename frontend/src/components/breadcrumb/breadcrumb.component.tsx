import {FC} from "react";
import {BreadcrumbItemData } from "./breadcrumb.type";
import {BreadcrumbItem} from "./components/breadcrumbItem.component";

interface IBreadCrumbs {
    items: BreadcrumbItemData[]
}

export const Breadcrumb: FC<IBreadCrumbs> = ({ items }) => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {items.map((item, index) => (
                    <BreadcrumbItem key={index} item={item} index={index} />
                ))}
            </ol>
        </nav>
    )
}