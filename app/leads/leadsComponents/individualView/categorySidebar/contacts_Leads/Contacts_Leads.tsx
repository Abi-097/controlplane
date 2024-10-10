import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OpportunityContacts from "./OpportunityContacts";
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
import { TbLayoutKanban } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";

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
const Contacts_Leads = () => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(UsersData);

  return (
    <Tabs defaultValue="leadsContacts" className="w-full ">
      <TabsList className="flex flex-row justify-between items-center py-6 px-2 w-full bg-white mb-betweenComponents rounded-sm  ">
        <div>
          <TabsTrigger
            value="leadsContacts"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            Leads Contacts
          </TabsTrigger>
          <TabsTrigger
            value="partnerContacts"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            Partner Contacts
          </TabsTrigger>
          <TabsTrigger
            value="teamContacts"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            Team Contacts
          </TabsTrigger>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <Link href={"/contact"}>
            <Button variant="outline" className="border-none px-2">
              <CgProfile className="cursor-pointer " size={20} />
            </Button>
          </Link>

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
        className="m-0 w-full overflow-y-scroll max-h-[61vh] rounded-sm shadow-sm no-scrollbar"
        value="leadsContacts"
      >
        <OpportunityContacts users={filteredUsers} />
      </TabsContent>
      <TabsContent
        className="m-0 w-full overflow-y-scroll max-h-[61vh] rounded-sm shadow-sm no-scrollbar"
        value="partnerContacts"
      >
        <OpportunityContacts users={filteredUsers} />
      </TabsContent>
      <TabsContent
        className="m-0 w-full overflow-y-scroll max-h-[61vh] rounded-sm shadow-sm no-scrollbar"
        value="teamContacts"
      >
        <OpportunityContacts users={filteredUsers} />
      </TabsContent>
    </Tabs>
  );
};

export default Contacts_Leads;
