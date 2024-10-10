import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import UsersData from "@/public/data/users";
import { FillButton, OutlineButton } from "@/components/libs/buttons";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import AddContactDialog from "@/app/components/ContactTable/AddContact";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import StageDueDilaogbox from "@/app/components/dialogBoxes/StageDueDialogbox";
import History_approvalHistory from "./history_approvalHistory/History_approvalHistory";
import Current_approvalHistory from "./current_approvalHistory/Current_approvalHistory";


type User = {
  id: number;
  name: string;
  gender: string;
  email: string;
  contact: string;
  job_title: string;
  annual_revenue: number;
  status: string;
  location: string;
  company: string;
  country: string;
  category: string;
};
const ApprovalHistory_Leads = () => {

  return (
    <Tabs defaultValue="current" className="w-full ">
      <TabsList className="flex flex-row justify-between items-center py-6 px-2 w-full bg-white mb-betweenComponents rounded-sm  ">
        <div>
          <TabsTrigger
            value="current"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            Current
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            History
          </TabsTrigger>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <StageDueDilaogbox
            trigger={
              <Button variant="outline" className="border-none px-2">
                <FiPlus className="cursor-pointer " size={20} />
              </Button>
            }
          />
        </div>
      </TabsList>


      <TabsContent
        className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar rounded-sm bg-white "
        value="current"
      >
        <Current_approvalHistory/>
      </TabsContent>

      <TabsContent
        className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar rounded-sm "
        value="history"
      >
        <History_approvalHistory/>
      </TabsContent>
    </Tabs>
  );
};

export default ApprovalHistory_Leads;
