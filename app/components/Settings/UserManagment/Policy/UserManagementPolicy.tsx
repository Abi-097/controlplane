import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiDeleteBinLine, RiLockPasswordLine } from "react-icons/ri";

import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
// import CompanyDetails from "./CompanyDetails";
// import AccountAddress from "./AccountAddress";
// import AccountEnvironment from "./AccountEnvironment";
// import AccountRegion from "./AccountRegion";
import { FiDatabase } from "react-icons/fi";
// import Password from "../MyProfile/Password";
// import CorporateDetails from "./CoperateTable/CorporateDetails";
// import AlertsNotifications from "./Alerts";
import { FaRegBell } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
// import AccountingAccess from "./AccountingAccess";
import Image from "next/image";
// import TermsCondition from "./TermsCondition";
import { IoDocumentTextOutline } from "react-icons/io5";
import AddPolicyGroup from "./PolicyGroup/AddPolicyGroup";
import { PiPlugs } from "react-icons/pi";
import PolicyGroupMain from "./PolicyAction/PolicyActionMain";
import AddPolicyAuthType from "./PolicyAuthType/AddPolicyAuthType";
import AddPolicyPolicy from "./PolicyPolicy/AddPolicyPolicy";
// import DeleteAccount from "./DeleteAccount";

const UserManagementPolicy = () => {
  // specific keys for the contentMap
  const options = ["Group", "Action", "Authorization Type", "Policy"] as const;
  type OptionType = (typeof options)[number];

  // State to keep track of the active option
  const [activeOption, setActiveOption] = useState<OptionType>("Group");

  // Content corresponding to each option
  const contentMap: Record<OptionType, React.ReactNode> = {
    Group: <AddPolicyGroup />,
    Action: <PolicyGroupMain />,
    "Authorization Type": <AddPolicyAuthType />,
    Policy: <AddPolicyPolicy />,
  };
  const iconsMap: Record<OptionType, React.ReactNode> = {
    Group: <CiLocationOn size={20} />,
    Action: <PiPlugs size={20} />,
    "Authorization Type": <FiDatabase size={20} />,
    Policy: <BiWorld size={20} />,
  };
  return (
    // <div id="profile">
    <div className="flex flex-wrap gap-3 w-full h-[92vh] bg-gray-100 pt-2">
      {/* Left Side - Menu */}
      <div
        className="
          w-full 
          sm:w-full
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

export default UserManagementPolicy;
