import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import UsersData from "@/public/data/users";
import Tasks_Engagement from "./TasksEngagement/Tasks_Engagement";
import Email_Engagement from "./Email_Engagement";
import MeetingContent from "@/app/components/MeetingContent/MeetingContent";
import { FaRegStickyNote, FaSearch, FaTasks } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaTimeline } from "react-icons/fa6";
import { FiPhone, FiPlus } from "react-icons/fi";
import NotesEngagement from "./NotesEngagement";
import ChatsEngagement from "./ChatsEngagement";
import PhoneCallsEngagement from "./PhoneCallsEngagement";
import { PiChatCircleDotsBold } from "react-icons/pi";
import MeetingEngagement from "./MeetingEngagement";
import { Input } from "@/components/ui/input";
import { TiThSmall } from "react-icons/ti";
import AllEngagement from "./AllEngagement";
import { ListChecks, Logs, Mail, Phone } from "lucide-react";

const callData = [
  {
    id: 1,
    from: "John Doe",
    to: "Nolan",
    phoneNumber: "+421 254 365 862",
    time: "01:30 - 01:40",
    duration: "00:00:10",
    recording: true,
  },
  {
    id: 2,
    from: "John Doe",
    to: "Nolan",
    phoneNumber: "+421 254 365 862",
    time: "01:30 - 01:40",
    duration: "00:00:10",
    recording: false,
  },
  {
    id: 3,
    from: "John Doe",
    to: "Nolan",
    phoneNumber: "+421 254 365 862",
    time: "01:30 - 01:40",
    duration: "00:00:10",
    recording: false,
  },
  {
    id: 4,
    from: "John Doe",
    to: "Nolan",
    phoneNumber: "+421 254 365 862",
    time: "01:30 - 01:40",
    duration: "00:00:10",
    recording: false,
  },
  {
    id: 5,
    from: "John Doe",
    to: "Nolan",
    phoneNumber: "+421 254 365 862",
    time: "01:30 - 01:40",
    duration: "00:00:10",
    recording: false,
  },
];

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
const Engagement_Leads = () => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(UsersData);

  return (
    <Tabs defaultValue="all" className="w-full overflow-y-scroll no-scrollbar ">
      <TabsList className="flex flex-row justify-between items-center py-6 px-2 w-full bg-white mb-betweenComponents rounded-sm ">
        <div>
          <TabsTrigger
            value="all"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex flex-row gap-1 items-center">
              <TiThSmall size={16} />
              All
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="tasks"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex flex-row gap-1 items-center">
              {/* <FaTasks/> */}
              <ListChecks size={16} />
              Tasks
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="emails"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex flex-row gap-1 items-center">
              <Mail size={16} />
              Emails
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="chats"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex flex-row gap-1 items-center">
              <PiChatCircleDotsBold size={16} />
              Chats
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="notes"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex flex-row gap-1 items-center">
              <FaRegStickyNote size={16} />
              Notes
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="meetings"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex flex-row gap-1 items-center">
              <FaTimeline size={16} />
              Meetings
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="phoneCalls"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex flex-row gap-1 items-center">
              <Phone size={16} />
              Phone Calls
            </div>
          </TabsTrigger>
        </div>

        {/* <div>
          <FiPlus size={24} className="pr-2 text-gray-700 cursor-pointer"/>
        </div> */}
      </TabsList>

      <TabsContent
        className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar rounded-sm pb-[150px]"
        value="all"
      >
        <AllEngagement />
      </TabsContent>
      <TabsContent
        className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar bg-white rounded-sm pb-[150px]"
        value="tasks"
      >
        <Tasks_Engagement />
      </TabsContent>
      <TabsContent
        className="m-0 w-full h-[61vh] overflow-y-scroll no-scrollbar bg-white rounded-sm pb-[150px] "
        value="emails"
      >
        <Email_Engagement />
      </TabsContent>
      <TabsContent
        className="m-0 w-full h-[61vh] overflow-y-scroll no-scrollbar bg-white rounded-sm pb-[150px] "
        value="chats"
      >
        <ChatsEngagement />
      </TabsContent>
      <TabsContent
        className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar bg-white rounded-sm pb-[150px] "
        value="notes"
      >
        <NotesEngagement />
      </TabsContent>
      <TabsContent
        className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar bg-white rounded-sm pb-[150px]"
        value="meetings"
      >
        <MeetingEngagement />
      </TabsContent>
      <TabsContent
        className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar bg-white rounded-sm pb-[150px]"
        value="phoneCalls"
      >
        <PhoneCallsEngagement CallsData={callData} />
      </TabsContent>
    </Tabs>
  );
};

export default Engagement_Leads;
