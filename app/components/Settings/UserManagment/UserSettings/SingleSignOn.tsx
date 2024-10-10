import History from "@/app/components/History/History";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";
import React, { useState } from "react";
import { MdInfoOutline, MdOutlineHistory } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import Switch from "react-switch";

const SingleSignOn = () => {
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
            <LogIn size={24} />
            <p className="font-semibold">Single Sign-On (SSO)</p>
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
          <p className="font-semibold text-sm mb-2">Single Sign-On (SSO)</p>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm">
              Single sign-on (SSO) is an authentication method that enables
              users to securely authenticate with multiple applications and
              websites by using just one set of credentials.
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

export default SingleSignOn;
