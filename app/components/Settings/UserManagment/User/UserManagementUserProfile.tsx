import MultiSelect from "@/components/multipleCountry";
import MultiGroupSelect from "@/components/multiplegroup";
import MultiRoleSelect from "@/components/multiplerole";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import Switch from "react-switch";
const UserManagementUserProfile = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };

  return (
    <div>
      <form className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[55%] 
          xl:w-[55%]"
          >
            <Label className="text-md mb-1 ">First Name</Label>
            <Input
              className="bg-[#f9fafb]"
              type="text"
              id="name"
              placeholder=""
              name="name"
              defaultValue=""
            />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[55%] 
          xl:w-[55%]"
          >
            <Label className="text-md mb-1 ">Last Name</Label>
            <Input
              className="bg-[#f9fafb]"
              type="text"
              id="name"
              placeholder=""
              name="name"
              defaultValue=""
            />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
           lg:w-[55%] 
          xl:w-[55%]"
          >
            <div className="w-28 h-28 rounded-full bg-slate-100 ml-16" />
          </div>{" "}
        </div>

        {/*  */}
        <div className="flex items-center justify-between gap-4">
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[55%] 
          xl:w-[55%]"
          >
            <Label className="text-md mb-1 ">Groups</Label>
            <MultiGroupSelect />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[55%] 
          xl:w-[55%]"
          >
            <Label className="text-md mb-1 ">Role</Label>

            <MultiRoleSelect />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
           lg:w-[55%] 
          xl:w-[55%]"
          >
            <div className="flex items-center justify-center">
              <Switch
                onChange={handleSwitchChange}
                checked={isChecked}
                uncheckedIcon={false}
                checkedIcon={false}
                width={25}
                height={15}
                className="mr-2"
              />{" "}
              Change Password on First Login
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[55%] 
          xl:w-[55%]"
          >
            <Label className="text-md mb-1 ">Email</Label>
            <Input
              className="bg-[#f9fafb]"
              type="text"
              id="name"
              placeholder=""
              name="name"
              defaultValue=""
            />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[55%] 
          xl:w-[55%]"
          >
            <Label className="text-md mb-1 ">Password</Label>
            <Input
              className="bg-[#f9fafb]"
              type="text"
              id="name"
              placeholder=""
              name="name"
              defaultValue=""
            />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
           lg:w-[55%] 
          xl:w-[55%]"
          >
            <div className="flex items-center justify-center">
              <Switch
                onChange={handleSwitchChange}
                checked={isChecked}
                uncheckedIcon={false}
                checkedIcon={false}
                width={25}
                height={15}
                className="mr-2"
              />{" "}
              In Active
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-gray-200 text-black rounded-md w-full md:w-1/2">
              Cancel
            </button>
          </DialogClose>
          <button className="px-4 py-2 bg-black text-white rounded-md w-full md:w-1/2">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserManagementUserProfile;
