import React, { useState } from "react";
import UserManagementUser from "./User/UserManagementUser";
import UserManagementGroup from "./Group/UserManagementGroup";
// import UserManagementUser from "./UserManagementUser";

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
    <div className="w-full">
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
      <div className="p-4">
        {/* <h1 className="text-2xl font-bold mb-4">{activeTab}</h1> */}
        <div className="w-full">
          {activeTab === "User" && <UserManagementUser />}
          {activeTab === "Group" && <UserManagementGroup />}
          {activeTab === "Permissions" && <p>Content for Permissions</p>}
          {activeTab === "Policy" && <p>Content for Policy</p>}
          {activeTab === "Roles" && <p>Content for Roles</p>}
          {activeTab === "Rules" && <p>Content for Rules</p>}
          {activeTab === "User Settings" && <p>Content for User Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
