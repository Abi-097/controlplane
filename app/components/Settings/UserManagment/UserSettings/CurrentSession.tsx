import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { MdInfoOutline, MdMonitor, MdOutlineHistory } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Switch from "react-switch";
import { BsBell, BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxExit } from "react-icons/rx";
import { CircleUser } from "lucide-react";
import History from "@/app/components/History/History";
const CurrentSession = () => {
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
            <CircleUser size={20} />
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
                If multiple users log in with the same user ID and password from
                different locations or different devices, the history is
                captured <br />
                (Location, Country, Date & Time, Browser, Time Zone, and IP
                Address). Users can choose to end the session or force it.
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

          <div className="border border-gray-300 p-2 rounded-md bg-gray-50 mt-2">
            <div className="flex items-center justify-between">
              <div className="p-3 flex items-center gap-3">
                <MdMonitor size={30} />
                <div>
                  <p className="text-sm font-semibold">
                    Windows, Colombo, Western Province, LK
                  </p>
                  <p className="text-sm">
                    Last Login: Sep 2nd, 2024 7:35:09 PM
                  </p>
                  <p className="text-sm">Google Chrome, 112.134.213.189</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="pr-6">
                  <BsThreeDots size={20} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <span className="gap-3 flex items-center">
                      <RxExit /> End Session
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CurrentSession;
