import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";

import { CiLocationOn } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const AccountSetup = () => {
  // specific keys for the contentMap
  const options = [
    "Company Details",
    "Address",
    "Environment",
    "Region",
    "Password Change",
    "Corporate Calender",
    "Alerts & Notification",
    "Account Action & Permission",
    "Terms & Privacy Policy",
    "Delete Account",
  ] as const;
  type OptionType = (typeof options)[number];

  // State to keep track of the active option
  const [activeOption, setActiveOption] =
    useState<OptionType>("Company Details");

  // Content corresponding to each option
  const contentMap: Record<OptionType, React.ReactNode> = {
    "Company Details": "",
    Address: "",
    Environment: "",
    Region: "",
    "Password Change": "Password Change",
    "Corporate Calender": "Corporate Calender",
    "Alerts & Notification": "Alerts & Notification",
    "Account Action & Permission": "Account Action & Permission",
    "Terms & Privacy Policy": "Terms & Privacy Policy",
    "Delete Account": "Delete Account",
  };
  const iconsMap: Record<OptionType, React.ReactNode> = {
    "Company Details": <HiOutlineBuildingOffice2 size={20} />,
    Address: <CiLocationOn size={20} />,
    Environment: <BiWorld size={20} />,
    Region: <RiLockPasswordLine size={20} />,
    "Password Change": <CgProfile size={20} />,
    "Corporate Calender": <CgProfile size={20} />,
    "Alerts & Notification": <CgProfile size={20} />,
    "Account Action & Permission": <CgProfile size={20} />,
    "Terms & Privacy Policy": <CgProfile size={20} />,
    "Delete Account": <CgProfile size={20} />,
  };
  return (
    // <div id="profile">
    <div className="flex flex-wrap gap-2 w-full h-[90vh]">
      {/* Left Side - Menu */}
      <div
        className="
          w-full 
          sm:w-full sm:mb-2
          md:w-[100%] 
          lg:w-[18%] 
          xl:w-[18%] 
          p-1 bg-white rounded-md
        "
      >
        {options.map((option) => (
          <div
            key={option}
            className={`cursor-pointer py-2 pl-4 mb-2 rounded-sm text-sm flex items-center gap-3 ${
              activeOption === option
                ? "bg-[#e5e7eb] text-black border-l-4 border-black"
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
          lg:w-[81%]
          xl:w-[81%]
          p-1 bg-white shadow-md rounded-md
        "
      >
        {contentMap[activeOption]}
      </div>
    </div>
  );
};

export default AccountSetup;
