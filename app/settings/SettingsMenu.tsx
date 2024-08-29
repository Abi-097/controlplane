"use client";
import React, { useState } from "react";
import MyProfile from "./Myprofile";
import { CgProfile } from "react-icons/cg";

const SettingsMenu = () => {
  // specific keys for the contentMap
  const options = [
    "My Profile",
    "Account Setup",
    "User Management",
    "Invoice & Billing",
    "Audit Logs",
    "Ticket & Support",
    "System Outage",
  ] as const;
  type OptionType = (typeof options)[number];

  // State to keep track of the active option
  const [activeOption, setActiveOption] = useState<OptionType>("My Profile");

  // Content corresponding to each option
  const contentMap: Record<OptionType, React.ReactNode> = {
    "My Profile": <MyProfile />,
    "Account Setup": "Content for Account setup",
    "User Management": "Content for User Management",
    "Invoice & Billing": "Content for Invoice & Billing",
    "Audit Logs": "",
    "Ticket & Support": "",
    "System Outage": "",
  };
  const iconsMap: Record<OptionType, React.ReactNode> = {
    "My Profile": <CgProfile size={20} />,
    "Account Setup": <CgProfile size={20} />,
    "User Management": <CgProfile size={20} />,
    "Invoice & Billing": <CgProfile size={20} />,
    "Audit Logs": <CgProfile size={20} />,
    "Ticket & Support": <CgProfile size={20} />,
    "System Outage": <CgProfile size={20} />,
  };
  return (
    <div className="flex flex-wrap gap-2 my-2 h-[90vh] w-full">
      {/* Left Side - Menu */}
      <div
        className="
          w-full 
          sm:w-full sm:mb-2
          md:w-[100%] 
          lg:w-[13%] 
          xl:w-[13%]
          p-1 bg-white shadow-md rounded-md
        "
      >
        {options.map((option) => (
          <div
            key={option}
            className={`cursor-pointer py-2 pl-4 mb-2 rounded-md text-sm flex items-center gap-3 ${
              activeOption === option
                ? "bg-gray-300 text-black border-l-4 border-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveOption(option)}
          >
            {iconsMap[option]}
            {option}
          </div>
        ))}
      </div>

      {/* Right Side - Content */}
      <div
        className="
          w-full 
          sm:w-full
          md:w-[100%]
          lg:w-[86%]
          xl:w-[86%]
          p-1 bg-green-200 shadow-md rounded-md
        "
      >
        {contentMap[activeOption]}
      </div>
    </div>
  );
};

export default SettingsMenu;
