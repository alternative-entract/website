import { FC, useMemo, useState } from "react";
import { Tabs } from "../tab/tabs.component";
import { TabData } from "../tab/tabs.types";

interface ICategoryTabs {
    categories: string[];
    onCategoryTabChange: (category: string | null) => void;
}

export const CategoryTabs: FC<ICategoryTabs> = ({
    categories,
    onCategoryTabChange,
}) => {
    const [activeTab, setActiveTab] = useState(-1);

    const handleCategoryTabChange = (index: number) => {
        setActiveTab(index - 1);
        if (index === -1) {
            onCategoryTabChange(null);
        } else {
            onCategoryTabChange(categories[index - 1]);
        }
    };

    const categoryTabs: TabData[] = useMemo(() => {
        return [
            { id: -1, title: "Tous", isActive: activeTab === -1 },
            ...categories.map((category, index) => ({
                id: index,
                title: category,
                isActive: index === activeTab,
            })),
        ];
    }, [categories, activeTab]);

    return <Tabs tabs={categoryTabs} onTabChange={handleCategoryTabChange} />;
};
