// components/VerticalTabs.tsx
import React from 'react';
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

interface VerticalTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const VerticalTabs: React.FC<VerticalTabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex flex-col w-[11vw] bg-white rounded-sm h-[63.5vh]">
      <h2 className="font-bold mb-4 text-sm pl-10 pt-5 text-primaryBlue">Categories</h2>
      <ul className="pt-0">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={cn(
              "cursor-pointer text-sm pl-10 py-2.5  hover:bg-[#CCE7FF] transition-colors",
              activeTab === tab.id ? "bg-[#CCE7FF] font-semibold" : ""
            )}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalTabs;