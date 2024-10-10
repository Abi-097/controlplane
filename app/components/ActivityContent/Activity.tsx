import React, { useState } from "react";
import UpcomingActivity from "./UpcomingActivity";
import ActivityHistory from "./ActivityHistory";
import clsx from "clsx";

const tabs = [
  {
    id: 1,
    title: "Upcoming Activity",
    component: <UpcomingActivity />,
  },
  {
    id: 2,
    title: "Activity History",
    component: <ActivityHistory />,
  },
];
const Activity = () => {
  const [isSelected, setIsSelected] = useState<number>(1);
  const handleNavClick = (id: number) => {
    setIsSelected(id);
  };

  const renderSelectedTab = () => {
    const activeTab = tabs.find((tab) => tab.id === isSelected);
    return activeTab?.component || null;
  };
  return (
    <div className="w-full">
      <div className="flex p-2 justify-between items-center bg-white w-full">
        {/* left headersection */}
        <div className="flex w-full space-x-4 justify-left ">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={clsx(
                "cursor-pointer px-4 py-2 rounded-full text-sm text-gray-500 font-bold",
                isSelected === tab.id
                  ? "bg-[#f4f2ee] text-gray-800"
                  : "hover:text-gray-800"
              )}
              onClick={() => handleNavClick(tab.id)}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="mt-2">
        {/* Render the selected tab content here */}
        {renderSelectedTab()}
      </div>
    </div>
  );
};

export default Activity;
