"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { GrUserSettings } from "react-icons/gr";
import { BsBell, BsLightbulbOff } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { RiDeleteBinLine, RiLockPasswordLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import Image from "next/image";
import CompanyDetails from "@/app/components/Settings/AccountSettings/CompanyDetails";
import AccountAddress from "@/app/components/Settings/AccountSettings/AccountAddress";
import AccountEnvironment from "@/app/components/Settings/AccountSettings/AccountEnvironment";
import AccountRegion from "@/app/components/Settings/AccountSettings/AccountRegion";
import Password from "@/app/components/Settings/MyProfile/Password";
import CorporateDetails from "@/app/components/Settings/AccountSettings/CoperateTable/CorporateDetails";
import AlertsNotifications from "@/app/components/Settings/AccountSettings/Alerts";
import AccountingAccess from "@/app/components/Settings/AccountSettings/AccountingAccess";
import TermsCondition from "@/app/components/Settings/AccountSettings/TermsCondition";
import DeleteAccount from "@/app/components/Settings/AccountSettings/DeleteAccount";
import {
  Bell,
  CalendarFold,
  CircleCheck,
  LockKeyhole,
  MapPin,
} from "lucide-react";

const menuItems = [
  {
    name: "Company Details",
    icon: <HiOutlineBuildingOffice2 size={20} />,
    component: <CompanyDetails />,
  },
  {
    name: "Address",
    icon: <MapPin size={20} />,
    component: <AccountAddress />,
  },
  {
    name: "Environment",
    icon: <GoDatabase size={20} />,
    component: <AccountEnvironment />,
  },
  {
    name: "Region",
    icon: <BiWorld size={20} />,
    component: <AccountRegion />,
  },
  {
    name: "Password Change",
    icon: <LockKeyhole size={20} />,
    component: <Password />,
  },
  {
    name: "Corporate Calender",
    icon: <CalendarFold size={20} />,
    component: <CorporateDetails />,
  },
  {
    name: "Alerts & Notification",
    icon: <Bell size={20} />,
    component: <AlertsNotifications UserSettings={false} />,
  },
  {
    name: "Account Action & Permission",
    icon: <CircleCheck size={20} />,
    component: <AccountingAccess />,
  },
  {
    name: "Terms & Privacy Policy",
    icon: <IoDocumentTextOutline size={20} />,
    component: <TermsCondition />,
  },
  {
    name: "Delete Account",
    icon: <RiDeleteBinLine className="text-red-500 cursor-pointer" size={20} />,
    component: <DeleteAccount />,
  },
];

const AccountSetupPage = () => {
  const [activeMenu, setActiveMenu] = useState(menuItems[0]);

  return (
    <div className="flex h-[84vh] overflow-hidden bg-fullbg">
      {/* Left-side menu */}
      <div className="border-r pb-3 rounded-md bg-white overflow-hidden w-[18%] h-fit">
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
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right-side component */}
      <div className="w-full pl-2 pr-2 overflow-auto h-full">
        <div className="h-full bg-gray-50 rounded shadow-md overflow-y-auto">
          {activeMenu.component}
        </div>
      </div>
    </div>
  );
};

export default AccountSetupPage;
