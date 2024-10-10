import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { MdInfoOutline, MdOutlineHistory } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

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
import History from "@/app/components/History/History";
const TwoFactAuth = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };

  return (
    <div>
      <form className="w-full p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RiLockPasswordLine size={24} />
            <p className="font-semibold">Two Factor Authentication</p>
          </div>
          <History
            trigger={
              <MdOutlineHistory
                className="text-gray-400 cursor-pointer hover:text-gray-700"
                size={20}
              />
            }
          />
        </div>
        <hr className="text-slate-300 my-4" />
        <div>
          <p className="font-semibold text-sm mb-2">
            Two Factor Authentication
          </p>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm">
              Two-factor authentication (2FA) is a security process that
              requires users to provide two different authentication factors in
              order to access a system or service. <br />
              The two factors typically include something the user knows (such
              as a password) and something the user has (such as a smartphone
              (code) or a security token).
            </span>
            <span>
              <Switch
                onChange={handleSwitchChange}
                checked={isChecked}
                uncheckedIcon={false}
                checkedIcon={false}
                width={25}
                height={15}
              />
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TwoFactAuth;
