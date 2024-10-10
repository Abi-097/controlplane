"use client";

import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GrUserSettings } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import AddPolicyGroup from "@/app/components/Settings/UserManagment/Policy/PolicyGroup/AddPolicyGroup";
import PolicyGroupMain from "@/app/components/Settings/UserManagment/Policy/PolicyAction/PolicyActionMain";
import AddPolicyAuthType from "@/app/components/Settings/UserManagment/Policy/PolicyAuthType/AddPolicyAuthType";
import AddPolicyPolicy from "@/app/components/Settings/UserManagment/Policy/PolicyPolicy/AddPolicyPolicy";
import { CiLocationOn } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import UserPasswordChange from "@/app/components/Settings/UserManagment/UserSettings/UserPasswordChange";
import TwoFactAuth from "@/app/components/Settings/UserManagment/UserSettings/TwoFactorAuth";
import APIKeys from "@/app/components/Settings/UserManagment/UserSettings/apiKeys/APIMain";
import SwitchUser from "@/app/components/Settings/UserManagment/UserSettings/SwitchUser";
import CurrentSession from "@/app/components/Settings/UserManagment/UserSettings/CurrentSession";
import AlertsNotifications from "@/app/components/Settings/AccountSettings/Alerts";
import SAMLConfiguration from "@/app/components/Settings/UserManagment/UserSettings/SAMLConfiguration";
import SingleSignOn from "@/app/components/Settings/UserManagment/UserSettings/SingleSignOn";
import {
  ArrowLeftRight,
  Bell,
  CircleUser,
  KeyRound,
  LockKeyhole,
  LogIn,
  Webhook,
} from "lucide-react";

const menuItems = [
  {
    name: "Password Change",
    icon: <LockKeyhole size={20} />,
    component: <UserPasswordChange />,
  },
  {
    name: "Two Factor Authentication",
    icon: <KeyRound size={20} />,
    component: <TwoFactAuth />,
  },
  {
    name: "Single Sign-On (SSO)",
    icon: <LogIn size={20} />,
    component: <SingleSignOn />,
  },
  {
    name: "SAML Configuration",
    icon: <RiLockPasswordLine size={20} />,
    component: <SAMLConfiguration />,
  },
  {
    name: "Alerts & Notifications",
    icon: <Bell size={20} />,
    component: <AlertsNotifications UserSettings={true} />,
  },
  {
    name: "Current Sessions",
    icon: <CircleUser size={20} />,
    component: <CurrentSession />,
  },
  {
    name: "Switch User (Proxy)",
    icon: <ArrowLeftRight size={20} />,
    component: <SwitchUser />,
  },
  {
    name: "API Keys",
    icon: <Webhook size={20} />,
    component: <APIKeys />,
  },
];

const UserSettingsPage = () => {
  const [activeMenu, setActiveMenu] = useState(menuItems[0]);

  return (
    <div className="flex h-[84vh] overflow-hidden bg-fullbg">
      {/* Left-side menu */}
      <div className="border-r ml-1 pb-3 shadow-md bg-white overflow-hidden w-[19%] h-fit">
        <ul className="space-y-2 p-1">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer py-2 pl-4 mb-2 rounded-sm text-sm flex items-center gap-3 ${
                activeMenu.name === item.name
                  ? "bg-[#e5e7eb] text-black border-l-4 border-black"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveMenu(item)}
            >
              {item.icon}
              <span className="">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right-side component */}
      <div className="w-full pl-3 pr-2 overflow-auto h-full">
        <div className="h-full bg-gray-50 shadow-md overflow-y-auto">
          {activeMenu.component}
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;
