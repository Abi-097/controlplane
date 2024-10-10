"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsLightbulbOff } from "react-icons/bs";
import { MdInfoOutline, MdOutlineHistory } from "react-icons/md";
import {
  RiDeleteBin5Line,
  RiDeleteBinLine,
  RiLockPasswordLine,
} from "react-icons/ri";
import Switch from "react-switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { GoPlus } from "react-icons/go";
import History from "@/app/components/History/History";
const SecurityRules = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [conditions, setConditions] = useState<{ id: number }[]>([]);

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };
  const handleAddCondition = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setConditions((prevConditions) => [
      ...prevConditions,
      { id: prevConditions.length + 1 }, // Add a new condition with a unique ID
    ]);
  };

  const handleDeleteCondition = (id: number) => {
    setConditions((prevConditions) =>
      prevConditions.filter((condition) => condition.id !== id)
    );
  };
  return (
    <form className="w-full p-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <BsLightbulbOff size={20} className=" cursor-pointer" /> */}
          <Image
            src="/icons/shield.png"
            alt="shield.png"
            width={20}
            height={20}
          />
          <p className="font-semibold">Security Rules</p>
        </div>
        <History
          trigger={
            <MdOutlineHistory
              className="text-gray-400 cursor-pointer hover:text-gray-700"
              size={24}
            />
          }
        />
      </div>
      <hr className="text-slate-300 my-4" />
      <div className="my-7">
        <p className="font-semibold mb-5 text-sm">Assign Principles:</p>
        {/* <div className="flex items-center justify-between mr-4"> */}
        <p className="mb-7 text-sm">Assign Users, Groups or Service Accounts</p>
        {/* </div> */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <SelectLabel>Fruits</SelectLabel> */}
              <SelectItem value="apple">Group1</SelectItem>
              {/* <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem> */}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="my-7">
        <p className="font-semibold mb-2 text-sm">Assign Roles:</p>
        {/* <div className="flex items-center justify-between mr-4"> */}
        <p className="mb-7 text-sm">
          Roles are combination of to define sets of permissions that determine
          what actions or operations a user or Groups or principal or Service
          Accounts can perform on a particular resource or within a specific
          area of the system.
        </p>
        {/* </div> */}
        <div className="max-h-[25rem] overflow-auto">
          {conditions.map((condition) => (
            <div
              key={condition.id}
              className="flex flex-col gap-2 md:flex-row md:gap-2 mb-6 "
            >
              <div className="flex-1">
                <Label className="text-sm mb-1">Resource Objects</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Group1</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Label className="text-sm mb-1">Role</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Group1</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Label className="text-sm mb-1">Resource Type</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Group1</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <button className="flex-1 flex items-center xl:pt-6 lg:pt-6 md:pt-0 xs:pt-0 sm:pt-0 mb-1 gap-2 text-[#2563eb]">
                <GoPlus
                  size={20}
                  className="xl:ml-6 lg:ml-6 md:ml-0 xs:ml-0 sm:ml-0"
                />
                <Label className="text-sm font-semibold cursor-pointer">
                  Add Security Condition
                </Label>
              </button>
              <button
                className="flex items-center xl:pt-6 lg:pt-6 md:pt-0 xs:pt-0 sm:pt-0"
                onClick={() => handleDeleteCondition(condition.id)}
              >
                <RiDeleteBin5Line className="text-red-500" size={20} />
              </button>
            </div>
          ))}
          <button
            className="flex-1 flex items-center xl:pt-6 lg:pt-6 md:pt-0 xs:pt-0 sm:pt-0 mb-1 gap-2 text-[#2563eb]"
            onClick={handleAddCondition}
          >
            <GoPlus
              size={20}
              className="xl:ml-6 lg:ml-6 md:ml-0 xs:ml-0 sm:ml-0"
            />
            <Label className="text-sm font-semibold cursor-pointer">
              Add Another Row
            </Label>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SecurityRules;
