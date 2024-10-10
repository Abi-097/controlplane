import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { MdInfoOutline, MdMonitor, MdOutlineHistory } from "react-icons/md";
import Switch from "react-switch";
import { BsBell, BsThreeDots } from "react-icons/bs";
import History from "@/app/components/History/History";

const SwitchUser = () => {
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
          <div className="flex items-center gap-3 ">
            <BsBell size={20} />
            <p className="font-semibold">Current Sessions</p>
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
          <div className="my-7">
            <p className="font-semibold mb-2 text-sm">
              Where you are logged in
            </p>
            <div className="flex items-center justify-between mr-4">
              <p className="text-sm">
                Proxy user is a user that acts as a substitute for another user
                to complete tasks. Periodic based access will be allowed to have
                as back-up user to <br /> support in absence of another user.
                This will be switched based on approvals and certain process.
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
        </div>
      </form>
    </div>
  );
};

export default SwitchUser;
