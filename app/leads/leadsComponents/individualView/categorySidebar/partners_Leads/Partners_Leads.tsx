import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LuSearch } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import UsersData from "@/public/data/users";
import PartnerContacts from "./PartnerContacts";
import PartnerActivity from "./PartnerActivity";
import History_partner from "./history_partner/History_partner";

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

const PartnersLeads = () => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(UsersData);

  return (
    <Tabs defaultValue="activity" className="w-full ">
      <TabsList className="flex flex-row justify-between items-center py-6 px-2 w-full bg-white mb-betweenComponents rounded-sm  ">
        <div>
          <TabsTrigger
            value="activity"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            Activity
            
          </TabsTrigger>

          <TabsTrigger
            value="partnerContacts"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            Partner Contacts
           
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            History
            
          </TabsTrigger>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <Button variant="outline" className="border-none px-2">
            <FiPlus className="cursor-pointer " size={20} />
          </Button>
          <div className="w-[150px]">
            <div className="cursor-default flex border rounded-md border-[#B2B2B2] items-center justify-center px-2 py-1 w-[150px] ">
              <LuSearch size={25} className="text-gray-500" />

              <input
                className="px-2 w-full outline-none text-gray-600 text-sm placeholder-gray-500"
                placeholder="Search"
                type="text"
              />
            </div>
          </div>
        </div>
      </TabsList>
      <TabsContent
        className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar rounded-sm "
        value="activity"
      >
                <PartnerActivity/>

      </TabsContent>
      <TabsContent
        className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar rounded-sm "
        value="partnerContacts"
      >
                <PartnerContacts users={filteredUsers}/>

        </TabsContent>
      <TabsContent
        className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar rounded-sm "
        value="history"
      >
        <History_partner/>
        </TabsContent>
    </Tabs>
  );
};

export default PartnersLeads;
