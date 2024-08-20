"use client";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";

const SettingsMenu = () => {
  const [activeOption, setActiveOption] = useState(null);
  const [expandedOption, setExpandedOption] = useState(null);

  const handleExpand = (option) => {
    setExpandedOption(expandedOption === option ? null : option);
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="grid grid-cols-12 gap-2 m-2 h-[90vh]">
      {/* Left Side - Menu */}
      <div className="col-span-12 md:col-span-12 lg:col-span-2 xl:col-span-2 p-4 bg-slate-100 rounded-md">
        <div
          className={`cursor-pointer p-2 mb-2 rounded-md text-sm flex items-center gap-3 ${
            activeOption === "userDetails"
              ? "bg-gray-300 text-black border-l-4 border-black"
              : "text-gray-600"
          }`}
          onClick={() => {
            handleExpand("userDetails");
            handleOptionClick("userDetails");
          }}
        >
          <CgProfile className="text-lg" />
          User Details
        </div>
        {expandedOption === "userDetails" && (
          <div className="pl-4 overflow-hidden transition-all duration-300 ease-in-out transform scale-y-100">
            {["Name & Image", "Address", "Region"].map((option) => (
              <div
                key={option}
                className={`cursor-pointer p-2 mb-2 rounded-md text-sm flex items-center gap-3 ${
                  activeOption === option
                    ? "bg-gray-300 text-black border-l-4 border-black"
                    : "text-gray-600"
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
        <div
          className={`cursor-pointer p-2 mb-2 rounded-md text-sm flex items-center gap-3 ${
            activeOption === "companyDetails"
              ? "bg-gray-300 text-black border-l-4 border-black"
              : "text-gray-600"
          }`}
          onClick={() => handleOptionClick("companyDetails")}
        >
          <FiSettings className="text-lg" />
          Company Details
        </div>
        <div
          className={`cursor-pointer p-2 mb-2 rounded-md text-sm flex items-center gap-3 ${
            activeOption === "history"
              ? "bg-gray-300 text-black border-l-4 border-black"
              : "text-gray-600"
          }`}
          onClick={() => handleOptionClick("history")}
        >
          <AiOutlineHistory className="text-lg" />
          History
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="col-span-12 md:col-span-12 lg:col-span-10 xl:col-span-10 p-4 bg-slate-100 rounded-md">
        {activeOption && (
          <div className="p-4">
            <h2 className="text-xl font-semibold">{activeOption}</h2>
            {/* Add content based on the selected option */}
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsMenu;
