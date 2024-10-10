"use client";

import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GrUserSettings } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import AddPolicyGroup from "@/app/components/Settings/UserManagment/Policy/PolicyGroup/AddPolicyGroup";
import PolicyGroupMain from "@/app/components/Settings/UserManagment/Policy/PolicyAction/PolicyActionMain";
import AddPolicyAuthType from "@/app/components/Settings/UserManagment/Policy/PolicyAuthType/AddPolicyAuthType";
import AddPolicyPolicy from "@/app/components/Settings/UserManagment/Policy/PolicyPolicy/AddPolicyPolicy";
import { LockKeyhole, UserRound } from "lucide-react";

const menuItems = [
  {
    name: "Groups",
    icon: <CgProfile size={20} />,
    component: <AddPolicyGroup />,
  },
  {
    name: "Action",
    icon: <GrUserSettings size={20} />,
    component: <PolicyGroupMain />,
  },
  {
    name: "Authorization Type",
    icon: <UserRound size={20} />,
    component: <AddPolicyAuthType />,
  },
  {
    name: "Policy",
    icon: <CgProfile size={20} />,
    component: <LockKeyhole />,
  },
];

const PolicyPage = () => {
  const [activeMenu, setActiveMenu] = useState(menuItems[0]);

  return (
    <div className="flex h-[84vh] overflow-hidden bg-fullbg">
      {/* Left-side menu */}
      <div className="border-r ml-1 pb-3 shadow-md bg-white overflow-hidden w-[18%] h-fit">
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
              <span className="ml-2">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right-side component */}
      <div className="w-full pl-3 pr-2 overflow-auto h-full">
        <div className="h-full bg-gray-50 rounded shadow-md overflow-y-auto">
          {activeMenu.component}
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
