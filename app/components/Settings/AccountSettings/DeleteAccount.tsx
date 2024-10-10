import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { MdInfoOutline, MdOutlineHistory } from "react-icons/md";
import { RiDeleteBinLine, RiLockPasswordLine } from "react-icons/ri";
import Switch from "react-switch";
import { BsBell } from "react-icons/bs";
import { AlertTable } from "./AlertsTable/AlertTable";
import { columns } from "./AlertsTable/AlertsTableColumn";
import History from "../../History/History";

const DeleteAccount = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };
  return (
    <div>
      <form className="w-full p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RiDeleteBinLine
              size={20}
              className="text-red-500 cursor-pointer"
            />
            <p className="font-semibold">Delete Account</p>
          </div>
          <History
            trigger={<MdOutlineHistory className="cursor-pointer" size={24} />}
          />
        </div>
        <hr className="text-slate-300 my-4" />
        <div className="my-7">
          <p className="font-semibold mb-2 text-sm">Delete Account</p>
          <div className="flex items-center justify-between mr-4">
            <p className="text-sm">
              Deleting your account will remove all settings and information
              associated with your client or organization permanently. DataNue
              will only keep <br /> your information for a maximum of 7 days
              before deleting it permanently. Please note that once your
              information is deleted, it cannot be recovered.
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

export default DeleteAccount;
