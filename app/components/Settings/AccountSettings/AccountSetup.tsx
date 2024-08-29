import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiDeleteBinLine, RiLockPasswordLine } from "react-icons/ri";

import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import CompanyDetails from "./CompanyDetails";
import AccountAddress from "./AccountAddress";
import AccountEnvironment from "./AccountEnvironment";
import AccountRegion from "./AccountRegion";
import { FiDatabase } from "react-icons/fi";
import Password from "../MyProfile/Password";
import CorporateDetails from "./CoperateTable/CorporateDetails";
import AlertsNotifications from "./Alerts";
import { FaRegBell } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import AccountingAccess from "./AccountingAccess";
import Image from "next/image";
import TermsCondition from "./TermsCondition";
import { IoDocumentTextOutline } from "react-icons/io5";
import DeleteAccount from "./DeleteAccount";

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
    "Company Details": <CompanyDetails />,
    Address: <AccountAddress />,
    Environment: <AccountEnvironment />,
    Region: <AccountRegion />,
    "Password Change": <Password />,
    "Corporate Calender": <CorporateDetails />,
    "Alerts & Notification": <AlertsNotifications />,
    "Account Action & Permission": <AccountingAccess />,
    "Terms & Privacy Policy": <TermsCondition />,
    "Delete Account": <DeleteAccount />,
  };
  const iconsMap: Record<OptionType, React.ReactNode> = {
    "Company Details": <HiOutlineBuildingOffice2 size={20} />,
    Address: <CiLocationOn size={20} />,
    Environment: <FiDatabase size={20} />,
    Region: <BiWorld size={20} />,
    "Password Change": <RiLockPasswordLine size={20} />,
    "Corporate Calender": <CiCalendar size={20} />,
    "Alerts & Notification": <BsBell size={20} />,
    "Account Action & Permission": (
      <Image
        src="/icons/checkmark.png"
        alt="checkmark.png"
        width={20}
        height={20}
      />
    ),
    "Terms & Privacy Policy": <IoDocumentTextOutline size={20} />,
    "Delete Account": (
      <RiDeleteBinLine className="text-red-500 cursor-pointer" size={20} />
    ),
  };
  return (
    // <div id="profile">
    <div className="flex flex-wrap gap-2 w-full bg-gray-100">
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
          p-1 bg-white rounded-md
        "
      >
        {contentMap[activeOption]}
      </div>
    </div>
  );
};

export default AccountSetup;
