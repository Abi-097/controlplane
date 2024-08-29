import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { IoMdSettings } from "react-icons/io";
import UserManagementUserProfile from "./UserManagementUserProfile";
import UserManagementUserDepartment from "./UserManagementUserDepartment";
interface AddUserDialogProps {
  trigger: React.ReactNode;
}

const AddUserDialog: React.FC<AddUserDialogProps> = ({ trigger }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = ["Profile", "Department"];

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[1000px] max-h-screen overflow-x-auto">
        <DialogTitle className="text-lg font-medium">
          <span className="flex items-center gap-2">
            <IoMdSettings size={20} />
            Add User
          </span>
          <hr className="my-1" />
        </DialogTitle>
        <DialogDescription className="mt-2 mb-10 text-sm text-gray-500">
          {/* activate component */}
          <div className="w-full">
            <div className="border-b">
              <ul className="flex">
                {tabs.map((tab) => (
                  <li
                    key={tab}
                    className={`px-3 pb-3 cursor-pointer text-sm ${
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
                {activeTab === "Profile" && <UserManagementUserProfile />}
                {activeTab === "Department" && <UserManagementUserDepartment />}
              </div>
            </div>
          </div>
          {/*  */}
        </DialogDescription>

        {/* Add your form or other content here
        <div className="mt-4 flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-gray-200 text-black rounded-md w-full md:w-1/2">
              Cancel
            </button>
          </DialogClose>
          <button className="px-4 py-2 bg-black text-white rounded-md w-full md:w-1/2">
            Save
          </button>
        </div> */}
      </DialogContent>
      {/* </Dialog.Portal> */}
    </Dialog>
  );
};

export default AddUserDialog;
