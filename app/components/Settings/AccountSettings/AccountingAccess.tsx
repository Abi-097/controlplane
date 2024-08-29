import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { MdInfoOutline, MdOutlineHistory } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Switch from "react-switch";
import { BsBell } from "react-icons/bs";
import { AlertTable } from "./AlertsTable/AlertTable";

import Image from "next/image";
import { AccountingAccessTable } from "./AccountingAccessTable/AccountAccessTable";
import { columns } from "./AccountingAccessTable/AccountAccessTableColumn";

const AccountingAccess = () => {
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
            <Image
              src="/icons/checkmark.png"
              alt="checkmark.png"
              width={20}
              height={20}
            />
            <p className="font-semibold">Account Access & Permission</p>
          </div>
          <MdOutlineHistory size={24} />
        </div>
        <hr className="text-slate-300 my-4" />
        <div>
          <div className="my-7">
            <p className="font-semibold mb-2">Account Access & Permission</p>
            <div className="flex items-center justify-between mr-4">
              <p>
                DataNue Support team may require access to your environment and
                fix the issues that raised. This will allow to create ticket
                with approvals. This access is time bound and access to DataNue
                Support team will be automatically revoked after expiry of
                selected period.
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
          <AccountingAccessTable columns={columns} data={data} />
        </div>
        <div className="flex justify-end">
          <Button className="bg-[#57534e] text-white w-20 h-8">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default AccountingAccess;
