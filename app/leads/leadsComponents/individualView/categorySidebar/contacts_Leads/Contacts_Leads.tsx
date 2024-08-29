import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OpportunityContacts from "./OpportunityContacts";
import { useState } from "react";
import UsersData from "@/public/data/users";
import { FillButton, OutlineButton } from "@/components/libs/buttons";
import { CgProfile } from "react-icons/cg";
import { Link } from "lucide-react";

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
    <Tabs defaultValue="opportunityContacts" className="w-full px-5">
      <TabsList className="flex flex-row justify-between w-full bg-white px-[3%] py-12 rounded-none ">
        <div>
          <TabsTrigger
            value="opportunityContacts"
            className="rounded-none h-12  data-[state=active]:border-b-2 data-[state=active]:border-gray-700 pb-0"
          >
            Opportunity Contacts
          </TabsTrigger>
          <TabsTrigger
            value="partnerContacts"
            className="rounded-none h-12 data-[state=active]:border-b-2 data-[state=active]:border-gray-700 pb-0"
          >
            Partner Contacts
          </TabsTrigger>
          <TabsTrigger
            value="teamContacts"
            className="rounded-none h-12  data-[state=active]:border-b-2 data-[state=active]:border-gray-700 pb-0 "
          >
            Team Contacts
          </TabsTrigger>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <Link href={"/"}>
            <CgProfile size={24} />
          </Link>
          <FillButton>
            <div className="text-sm">+ Create new contact</div>
          </FillButton>
        </div>
      </TabsList>
      <TabsContent className="m-0 w-full h-full" value="opportunityContacts">
        <OpportunityContacts users={filteredUsers} />
      </TabsContent>
      <TabsContent value="partnerContacts">
        <h1>partnerContacts</h1>
      </TabsContent>
      <TabsContent value="teamContacts">
        <h1>teamContacts</h1>
      </TabsContent>
    </Tabs>
  );
};

export default Contacts_Leads;
