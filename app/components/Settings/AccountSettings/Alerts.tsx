import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { MdInfoOutline, MdOutlineHistory } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Switch from "react-switch";
import { BsBell } from "react-icons/bs";
import { AlertTable } from "./AlertsTable/AlertTable";
import { columns } from "./AlertsTable/AlertsTableColumn";
import { Bell } from "lucide-react";
interface UserSettingsProps {
  UserSettings?: boolean;
}

const AlertsNotifications = ({ UserSettings }: UserSettingsProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };
  return (
    <div>
      <form className="w-full p-4">
        <div className="flex items-center gap-2">
          <Bell size={20} />
          <p className="font-semibold">Alerts & Notifications</p>
        </div>

        <hr className="text-slate-300 my-4" />
        <div>
          <div className="my-7">
            <p className="font-semibold mb-2 text-sm">Alerts & Notifications</p>
            <div className="flex items-center justify-between mr-4">
              <p className="text-sm">
                Alerts & Notification on/off choice will help user to choose the
                option to notify alerts or not.
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
          {/*  */}
          {!UserSettings && <AlertTable columns={columns} data={data} />}
        </div>
      </form>
    </div>
  );
};

export default AlertsNotifications;
