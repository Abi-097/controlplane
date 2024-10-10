import React, { useState } from "react";
import UserManagementUser from "./User/UserManagementUser";
import UserManagementGroup from "./Group/UserManagementGroup";
import UserManagementPermission from "./Permissions/UserManagementPermission";
import UserManagementPolicy from "./Policy/UserManagementPolicy";
import AddRolesMain from "./Roles/AddRolesMain";
import SecurityRules from "./SecurityRules/SecurityRules";
import UserSettings from "./UserSettings/UserSettingsMain";

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState("User");

  const tabs = [
    "User",
    "Group",
    "Permissions",
    "Policy",
    "Roles",
    "Rules",
    "User Settings",
  ];

  return (
    <div className="w-full h-[92vh] py-1 ">
      <div className="border-b">
        <ul className="flex">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`p-3 cursor-pointer text-sm ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                  : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full m-0 p-0">
        {activeTab === "User" && <UserManagementUser />}
        {activeTab === "Group" && <UserManagementGroup />}
        {activeTab === "Permissions" && <UserManagementPermission />}
        {activeTab === "Policy" && <UserManagementPolicy />}
        {activeTab === "Roles" && <AddRolesMain />}
        {activeTab === "Rules" && <SecurityRules />}
        {activeTab === "User Settings" && <UserSettings />}
        {/* </div> */}
      </div>
    </div>
  );
};

export default UserManagement;
