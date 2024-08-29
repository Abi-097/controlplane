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
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import Switch from "react-switch";
const UserManagementUserDepartment = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };

  return (
    <div>
      <form className="space-y-4">
        <div
          className=" mb-4 w-full md:w-full 
          lg:w-[55%] 
          xl:w-[55%]"
        >
          <Label className="text-md mb-1 ">Department Name</Label>
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
          <Label className="text-md mb-1 ">Department Description</Label>

          <Textarea placeholder="" className="bg-[#f9fafb]" />
        </div>

        <div
          className=" mb-6 w-full md:w-full 
          lg:w-[55%] 
          xl:w-[55%]"
        >
          <Label className="text-md mb-1 ">Reporting Manager</Label>
          <Select>
            <SelectTrigger className="w-full bg-[#f9fafb]">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="abi">Abishek</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="pt-6 flex flex-col md:flex-row justify-end md:space-x-2">
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

export default UserManagementUserDepartment;
