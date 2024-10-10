"use client";
import React, { useEffect, useState } from "react";
// import MyProfile from "../components/Settings/MyProfile/Myprofile";
import { CgProfile } from "react-icons/cg";
import MyProfile from "./MyProfile/Myprofile";
import Ticket from "./Ticket/Ticket";
import { GrUserSettings } from "react-icons/gr";
import AccountSetup from "./AccountSettings/AccountSetup";
import SystemOutage from "./SystemOutage/SystemOutage";
import { BsLightbulbOff } from "react-icons/bs";
import SettingsAuditLogs from "./AduitLogs/SettingsAuditLogs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import UserManagement from "./UserManagment/UserManagement";
import InvoiceBillingMain from "./InvoiceBilling/InvoiceBilling";
// import MyProfile from "@/app/settings/myprofile/page";
import { TfiEmail } from "react-icons/tfi";
import CreateEmailTemplate from "../emailTemplates/EmailTemplates";

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
    "Account Setup": <AccountSetup />,
    "User Management": <UserManagement />,
    "Invoice & Billing": <InvoiceBillingMain />,
    "Audit Logs": <SettingsAuditLogs />,
    "Ticket & Support": <Ticket />,
    "System Outage": <SystemOutage />,
  };
  const iconsMap: Record<OptionType, React.ReactNode> = {
    "My Profile": <CgProfile size={20} />,
    "Account Setup": <GrUserSettings size={20} />,
    "User Management": <FaRegUser size={20} />,
    "Invoice & Billing": <CgProfile size={20} />,
    "Audit Logs": <IoDocumentTextOutline size={20} />,
    "Ticket & Support": <CgProfile size={20} />,
    "System Outage": <BsLightbulbOff size={20} />,
  };
  return (
    <div className="flex flex-wrap gap-3 py-2 w-[100%] md:overflow-auto lg:overflow-hidden xl:overflow-hidden bg-gray-100">
      {/* // <div className="flex w-full py-2 gap-3 bg-gray-100"> */}
      {/* Left Side - Menu */}
      <div
        className="
        w-full 
        sm:w-full
        md:w-full 
        lg:w-[13%] 
        xl:w-[13%] 2xl:w-[13%] h-fit xl:h-fit lg:h-fit md:h-full sm:h-full
        p-1 bg-white rounded-md"
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
          md:w-full
          lg:w-[86%]
          xl:w-[86%]
          bg-white rounded-md
        "
      >
        {/* <div
        className="
  w-full 
  sm:w-full
  md:w-full
  lg:flex-1
  xl:flex-1
  2xl:flex-1
  bg-white 
  rounded-md 
  overflow-auto
"
      > */}
        {contentMap[activeOption]}
      </div>
    </div>
  );
};

export default SettingsMenu;
