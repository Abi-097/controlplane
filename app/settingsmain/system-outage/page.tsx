"use client";
import React, { useState } from "react";
import { BsLightbulbOff } from "react-icons/bs";
import { MdInfoOutline, MdOutlineHistory } from "react-icons/md";
import { RiDeleteBinLine, RiLockPasswordLine } from "react-icons/ri";
import Switch from "react-switch";

const SystemOutage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };
  return (
    <div>
      <form className="w-full p-4 bg-screenbg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BsLightbulbOff size={20} className=" cursor-pointer" />
            <p className="font-semibold">System Outage</p>
          </div>
          <MdOutlineHistory size={24} />
        </div>
        <hr className="text-slate-300 my-4" />
        <div className="my-7">
          <p className="font-semibold mb-2 text-sm">System Outage</p>
          <div className="flex items-center justify-between mr-4">
            <p className="text-sm">
              Receive a notification in email when there is a general DataNue
              outage. Follow outage status and details at status.DataNue.com
            </p>
            <Switch
              onChange={handleSwitchChange}
              checked={isChecked}
              uncheckedIcon={false}
              checkedIcon={false}
              width={25}
              height={15}
              className="mr-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SystemOutage;
