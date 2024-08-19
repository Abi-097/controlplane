"use client";
import React, { useState } from "react";
import MyProfile from "./Myprofile";

const SettingsMenu = () => {
  // Define the specific keys for the contentMap
  const options = ["My Profile", "Option 2", "Option 3", "Option 4"] as const;
  type OptionType = (typeof options)[number]; // Union type of the options

  // State to keep track of the active option
  const [activeOption, setActiveOption] = useState<OptionType>("My Profile");

  // Content corresponding to each option
  const contentMap: Record<OptionType, React.ReactNode> = {
    "My Profile": <MyProfile />,
    "Option 2": "Content for Option 2",
    "Option 3": "Content for Option 3",
    "Option 4": "Content for Option 4",
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4 md:grid-cols-12">
      {/* Left Side - Options */}
      <div className="col-span-1 md:col-span-3 p-4">
        {options.map((option) => (
          <div
            key={option}
            className={`cursor-pointer p-2 mb-2 ${
              activeOption === option
                ? "bg-gray-300 text-black border-l-4 border-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveOption(option)}
          >
            {option}
          </div>
        ))}
      </div>

      {/* Right Side - Content */}
      <div className="col-span-1 md:col-span-9  p-4">
        {contentMap[activeOption]}
      </div>
    </div>
  );
};

export default SettingsMenu;
