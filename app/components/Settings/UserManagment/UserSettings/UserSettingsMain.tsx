import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";

import { CiLocationOn } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import UserPasswordChange from "./UserPasswordChange";
import TwoFactAuth from "./TwoFactorAuth";
import SingleSignOn from "./SingleSignOn";
import SAMLConfiguration from "./SAMLConfiguration";
import AlertsNotifications from "../../AccountSettings/Alerts";
import CurrentSession from "./CurrentSession";
import SwitchUser from "./SwitchUser";
import APIKeys from "./apiKeys/APIMain";

const UserSettings = () => {
  // specific keys for the contentMap
  const options = [
    "Password Change",
    "Two Factor Authentication",
    "Single Sign-On (SSO)",
    "SAML Configuration",
    "Alerts & Notifications",
    "Current Sessions",
    "Switch User (Proxy)",
    "API Keys",
  ] as const;
  type OptionType = (typeof options)[number];

  // State to keep track of the active option
  const [activeOption, setActiveOption] =
    useState<OptionType>("Password Change");

  // Content corresponding to each option
  const contentMap: Record<OptionType, React.ReactNode> = {
    "Password Change": <UserPasswordChange />,
    "Two Factor Authentication": <TwoFactAuth />,
    "Single Sign-On (SSO)": <SingleSignOn />,
    "SAML Configuration": <SAMLConfiguration />,
    "Alerts & Notifications": <AlertsNotifications UserSettings={true} />,
    "Current Sessions": <CurrentSession />,
    "Switch User (Proxy)": <SwitchUser />,
    "API Keys": <APIKeys />,
  };
  const iconsMap: Record<OptionType, React.ReactNode> = {
    "Password Change": <CgProfile size={20} />,
    "Two Factor Authentication": <CiLocationOn size={20} />,
    "Single Sign-On (SSO)": <BiWorld size={20} />,
    "SAML Configuration": <RiLockPasswordLine size={20} />,
    "Alerts & Notifications": <CgProfile size={20} />,
    "Current Sessions": <CgProfile size={20} />,
    "Switch User (Proxy)": <CgProfile size={20} />,
    "API Keys": <CgProfile size={20} />,
  };
  return (
    // <div id="profile">
    // <div
    //   className={`flex flex-wrap gap-3 w-full ${
    //     activeOption === "Alerts & Notifications" ? "bg-white" : "bg-gray-100"
    //   } `}
    // >
    <div className="flex flex-wrap gap-3 w-full h-[92vh] bg-gray-100 pt-2">
      {/* Left Side - Menu */}

      <div
        className="
          w-full 
          sm:w-full
          md:w-[100%] 
          lg:w-[15%] 
          xl:w-[15%]
         h-fit xl:h-fit lg:h-fit md:h-full sm:h-full p-1 bg-white rounded-md"
      >
        {options.map((option) => (
          <div
            key={option}
            className={`cursor-pointer  py-2 pl-4 mb-2 rounded-sm text-sm flex items-center gap-3 ${
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
        className="h-full overflow-auto
          w-full 
          sm:w-full
          md:w-[100%]
          lg:w-[84%]
          xl:w-[84%]
         p-1 bg-white
        "
      >
        {contentMap[activeOption]}
      </div>
    </div>
  );
};

export default UserSettings;
