import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Activity from "./Activity";
import { LuSearch } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { FiPhone, FiPlus } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddNoteDialog from "@/app/components/NotesContent/NewNote";
import CreateNewTasksDialog from "@/app/components/Task/CreateNewTasksDialog";
import dynamic from "next/dynamic";
import CreateNewChat from "@/app/components/Chat/CreateNewChat";
import { VscSend } from "react-icons/vsc";
import { FaRegStickyNote, FaTasks } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Projector } from "lucide-react";
import AddNewMeeting from "@/app/components/MeetingContent/AddNewMeeting";

const EmailDialog = dynamic(
  () => import("@/app/components/EmailContent/Email"),
  {
    ssr: false,
  }
);

const ActivityLeads = () => {
  const [isCardOpen, setIsCardOpen] = useState<boolean>(false);

  const handleAddEmailClick = () => {
    setIsCardOpen(true);
  };

  const handleEmailCloseCard = () => {
    setIsCardOpen(false);
  };

  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <>
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
              value="UpcomingActivity"
              className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
            >
              Upcoming Activity
            </TabsTrigger>
            <TabsTrigger
              value="activityHistory"
              className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
            >
              Activity History
            </TabsTrigger>
          </div>

          <div className="flex flex-row gap-1 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-none px-2">
                  <FiPlus className="cursor-pointer" size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleMenuItemClick}
                >
                  <CreateNewTasksDialog
                    mode="add"
                    trigger={
                      <span className="pl-2 gap-1 flex items-center justify-center">
                        <FaTasks size={18} className="mr-2" />
                        Add Task
                      </span>
                    }
                  />
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleAddEmailClick}
                >
                  <span className="pl-2 gap-1 flex items-center justify-center">
                    <HiOutlineMail size={18} className="mr-2" />
                    <p className="text-sm">Add Email</p>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleMenuItemClick}
                >
                  <CreateNewChat
                    trigger={
                      <span className="pl-2 gap-1 flex items-center justify-center">
                        <VscSend size={18} className="mr-2" />
                        Add Chat
                      </span>
                    }
                  />
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleMenuItemClick}
                >
                  <AddNoteDialog
                    mode="add"
                    trigger={
                      <span className="pl-2 gap-1 flex items-center justify-center">
                        <FaRegStickyNote className="mr-2 " size={16} />
                        Add Note
                      </span>
                    }
                  />
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleMenuItemClick}
                >
                  <AddNewMeeting
                    trigger={
                      <span className="pl-2 gap-1 flex items-center justify-center">
                        <Projector size={18} className="mr-2" />
                        Add Meeting
                      </span>
                    }
                  />
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleMenuItemClick}
                >
                  <span className="pl-2 gap-1 flex items-center justify-center">
                    <FiPhone size={18} className="mr-2" />
                    Add Phone call
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
          <Activity />
        </TabsContent>
        <TabsContent
          className="m-0 w-full overflow-y-scroll h-[60vh] no-scrollbar rounded-sm "
          value="UpcomingActivity"
        >
          <Activity />
        </TabsContent>
        <TabsContent
          className="m-0 w-full overflow-y-scroll h-[60vh] no-scrollbar rounded-sm "
          value="activityHistory"
        >
          <Activity />
        </TabsContent>
      </Tabs>
      {isCardOpen && <EmailDialog onClose={handleEmailCloseCard} />}
    </>
  );
};

export default ActivityLeads;
