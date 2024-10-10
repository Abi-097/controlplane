"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const tabs = [
  { name: "User", route: "/settingsmain/user-management/user" },
  { name: "Group", route: "/settingsmain/user-management/group" },
  { name: "Permissions", route: "/settingsmain/user-management/permissions" },
  { name: "Policy", route: "/settingsmain/user-management/policy" },
  { name: "Roles", route: "/settingsmain/user-management/roles" },
  { name: "Rules", route: "/settingsmain/user-management/rules" },
  {
    name: "User Settings",
    route: "/settingsmain/user-management/usersettings",
  },
];

const UserManagementLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    // <div className="w-full h-[92vh] py-1">
    <div className="w-full h-[92vh] py-1 flex flex-col overflow-hidden">
      {/* Tab Menu */}
      <div className="border-b overflow-x-auto">
        <ul className="flex whitespace-nowrap">
          {tabs.map((tab) => (
            <li key={tab.route} className="p-2 cursor-pointer text-sm">
              <Link href={tab.route}>
                <span
                  className={`${
                    pathname === tab.route
                      ? "border-b-[3px] border-tableBg text-tableBg font-semibold text-sm"
                      : "text-gray-500 text-sm"
                  }`}
                  style={{
                    paddingBottom: pathname === tab.route ? "6px" : "0",
                  }}
                >
                  {tab.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* This will render the content of the active page */}
      {/* <div className="h-full m-0 p-0 bg-screenbg"> */}
      <div className="flex-1 overflow-auto bg-screenbg my-2">{children}</div>
    </div>
  );
};

export default UserManagementLayout;
