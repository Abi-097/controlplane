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
import { FiPhone } from "react-icons/fi";
import NotesEngagement from "./NotesEngagement";
import ChatsEngagement from "./ChatsEngagement";
import PhoneCallsEngagement from "./PhoneCallsEngagement";
import { PiChatCircleDotsBold } from "react-icons/pi";
import MeetingEngagement from "./MeetingEngagement";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
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
    <Tabs
      defaultValue="tasks"
      className="w-full overflow-y-scroll no-scrollbar "
    >
      <TabsList className="flex flex-row justify-between items-center py-6 px-2 w-full bg-white mb-betweenComponents rounded-sm ">
        <div className=" p-0 flex flex-row">
          <TabsTrigger
            value="tasks"
            className="cursor-pointer  px-3 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex flex-row gap-1 items-center">
              <FaTasks size={14} />
              Tasks
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="emails"
            className="cursor-pointer  px-3 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex flex-row gap-1 items-center">
              <HiOutlineMail size={14} />
              Emails
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="chats"
            className="cursor-pointer  px-3 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex flex-row gap-1 items-center">
              <PiChatCircleDotsBold size={14} />
              Chats
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="notes"
            className="cursor-pointer  px-3 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex flex-row gap-1 items-center">
              <FaRegStickyNote size={14} />
              Notes
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="meetings"
            className="cursor-pointer  px-3 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex flex-row gap-1 items-center">
              <svg
                fill="#000000"
                version="1.1"
                viewBox="144 144 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-600 font-semibold pt-0.5"
                width={16}
                height={16}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M211.52 405.16c9.2031-56.027 42.684-104.72 91.855-133.61 3.5586-2.0898 8.125-0.89844 10.211 2.6562 2.0898 3.5547 0.89844 8.125-2.6484 10.211-45.336 26.641-76.207 71.531-84.688 123.17-0.60547 3.6562-3.7617 6.25-7.3516 6.25-0.40234 0-0.80859-0.03125-1.2188-0.10156-4.0781-0.67578-6.8281-4.5117-6.1602-8.5742zm277.55-120.75c45.336 26.641 76.207 71.531 84.688 123.17 0.60547 3.6562 3.7617 6.25 7.3516 6.25 0.40234 0 0.80859-0.03125 1.2188-0.10156 4.0664-0.66797 6.8164-4.5039 6.1523-8.5703-9.2031-56.023-42.684-104.72-91.855-133.61-3.5547-2.0898-8.125-0.89844-10.211 2.6484-2.082 3.5547-0.89062 8.125 2.6562 10.215zm-25.809 316.34c-20.168 7.7656-41.449 11.703-63.258 11.703-21.812 0-43.09-3.9375-63.258-11.703-3.8398-1.4805-8.1602 0.4375-9.6406 4.2812-1.4805 3.8477 0.4375 8.1602 4.2812 9.6406 21.883 8.4297 44.969 12.699 68.617 12.699s46.734-4.2734 68.617-12.699c3.8477-1.4805 5.7617-5.8008 4.2812-9.6406-1.4805-3.8477-5.7969-5.7617-9.6406-4.2812zm16.48-275.28c0 4.1211-3.3359 7.457-7.457 7.457h-144.56c-4.1211 0-7.457-3.3359-7.457-7.457 0-34.195 21.645-63.426 51.949-74.73-9.8867-8.0781-16.215-20.355-16.215-34.09 0-24.262 19.738-44.004 44.004-44.004s44.004 19.738 44.004 44.004c0 13.734-6.3281 26.016-16.215 34.09 30.301 11.305 51.945 40.527 51.945 74.73zm-108.82-108.82c0 16.039 13.047 29.086 29.086 29.086s29.086-13.047 29.086-29.086c-0.003907-16.035-13.051-29.082-29.086-29.082-16.039 0-29.086 13.047-29.086 29.082zm93.477 101.36c-3.7109-32.242-31.172-57.359-64.395-57.359-33.219 0-60.684 25.117-64.395 57.359zm174.32 258.02c0 4.1211-3.3359 7.457-7.457 7.457h-144.56c-4.1211 0-7.457-3.3359-7.457-7.457 0-34.195 21.645-63.426 51.949-74.73-9.8867-8.0781-16.215-20.355-16.215-34.09 0-24.262 19.738-44.004 44.004-44.004s44.004 19.738 44.004 44.004c0 13.734-6.3281 26.016-16.215 34.09 30.301 11.301 51.949 40.531 51.949 74.73zm-79.738-79.738c16.039 0 29.086-13.047 29.086-29.086 0-16.039-13.047-29.086-29.086-29.086-16.039 0-29.086 13.047-29.086 29.086 0 16.039 13.047 29.086 29.086 29.086zm64.391 72.281c-3.7109-32.242-31.172-57.359-64.395-57.359-33.219 0-60.684 25.117-64.395 57.359zm-302.6 7.457c0 4.1211-3.3359 7.457-7.457 7.457h-144.56c-4.1211 0-7.457-3.3359-7.457-7.457 0-34.195 21.645-63.426 51.949-74.73-9.8867-8.0781-16.215-20.355-16.215-34.086 0-24.262 19.738-44.004 44.004-44.004s44.004 19.738 44.004 44.004c0 13.734-6.3281 26.016-16.215 34.09 30.301 11.297 51.945 40.527 51.945 74.727zm-108.82-108.82c0 16.039 13.047 29.086 29.086 29.086s29.086-13.047 29.086-29.086c0-16.039-13.047-29.086-29.086-29.086s-29.086 13.047-29.086 29.086zm93.473 101.37c-3.7109-32.242-31.172-57.359-64.395-57.359-33.219-0.003906-60.68 25.113-64.391 57.359z"></path>
                </g>
              </svg>
              Meetings
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="phoneCalls"
            className="cursor-pointer  px-3 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex flex-row gap-1 items-center">
              <FiPhone size={14} />
              Phone Calls
            </div>
          </TabsTrigger>
        </div>

        <div className="w-[150px]">
          <div className="cursor-default flex border rounded-md border-[#B2B2B2] items-center justify-center px-2 py-1 w-[150px] ">
            <LuSearch size={25} color="#B2B2B2" />
            <input
              className="px-2 w-full outline-none text-gray-800 caret-gray-500 text-sm"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
      </TabsList>

      <TabsContent
        className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar rounded-sm "
        value="tasks"
      >
        <Tasks_Engagement />
      </TabsContent>
      <TabsContent
        className="m-0 w-full h-[61vh] overflow-y-scroll no-scrollbar rounded-sm "
        value="emails"
      >
        <Email_Engagement />
      </TabsContent>
      <TabsContent
        className="m-0 w-full h-[61vh] overflow-y-scroll no-scrollbar rounded-sm "
        value="chats"
      >
        <ChatsEngagement />
      </TabsContent>
      <TabsContent
        className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar rounded-sm "
        value="notes"
      >
        <NotesEngagement />
      </TabsContent>
      <TabsContent
        className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar rounded-sm"
        value="meetings"
      >
        <MeetingEngagement />
      </TabsContent>
      <TabsContent
        className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar rounded-sm"
        value="phoneCalls"
      >
        <PhoneCallsEngagement CallsData={callData} />
      </TabsContent>
    </Tabs>
  );
};

export default Engagement_Leads;
