import { FC } from "react";
import { TabData } from "./tabs.types";
import { Tab } from "./components/tab.component";

interface ITabs {
	tabs: TabData[];
	onTabChange: (tabIndex: number) => void;
}

export const Tabs: FC<ITabs> = ({ tabs, onTabChange }) => (
	<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
		<ul className="flex flex-wrap -mb-px">
			{tabs.map((tab, index) => (
				<Tab
					key={`tab-${tab.title}-${index}`}
					tab={tab}
					onClick={() => onTabChange(index)}
				/>
			))}
		</ul>
	</div>
);
