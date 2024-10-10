import React, { useState } from "react";
import { IoCallOutline, IoEllipsisHorizontal } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { GoBell, GoPlus } from "react-icons/go";
import dynamic from "next/dynamic";
import { HiOutlineMail } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import AddContactDialog from "../../../components/ContactTable/AddContact";
import { BiSolidEdit } from "react-icons/bi";
import History from "../../../components/History/History";
import { MdOutlineHistory } from "react-icons/md";
import Delete from "../../../components/common/Delete";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiPhone, FiPlus } from "react-icons/fi";
import LogCallDialog from "../../../components/Call/LogCallDialog";
import ConvertLeads from "../../../components/Convert_Leads/ConvertLeads";
import { BiTransfer } from "react-icons/bi";
import { TbCalendarDue } from "react-icons/tb";
import StageDueDilaogbox from "../../../components/dialogBoxes/StageDueDialogbox";
import CreateNewChat from "@/app/components/Chat/CreateNewChat";
import { VscSend } from "react-icons/vsc";
import Switch from "react-switch";
import AddNewMeeting from "@/app/components/MeetingContent/AddNewMeeting";
import { Mail, NotebookPen, Phone, Plus, Projector } from "lucide-react";
import AddNoteDialog from "@/app/components/NotesContent/NewNote";
import { FaRegStickyNote } from "react-icons/fa";
import LogDialog from "@/app/components/Log/LogDialog";
const EmailDialog = dynamic(
  () => import("../../../components/EmailContent/Email"),
  {
    ssr: false,
  }
);

const SocialIconsIndividualView = () => {
  const [isCardOpen, setIsCardOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleAddEmailClick = () => {
    setIsCardOpen(true);
  };

  const handleEmailCloseCard = () => {
    setIsCardOpen(false);
  };

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };

  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const icons = [
    { icon: <LogDialog trigger={<Plus size={17} />} />, label: "Log" },
    {
      icon: <LogCallDialog trigger={<Phone size={17} />} />,
      label: "Call",
    },
    {
      icon: <Mail size={17} onClick={handleAddEmailClick} />,
      label: "Email",
    },
    {
      icon: <CreateNewChat trigger={<VscSend size={17} />} />,
      label: "Chat",
    },

    {
      icon: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-center border border-gray-400 hover:bg-gray-200 hover:text-gray-700 transition rounded-full w-9 h-9 text-slate-500 cursor-pointer ">
              <BsThreeDots />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer">
              <span className="pl-2 gap-3 flex items-center justify-center">
                <GoBell size={20} className="text-black" /> Notification
              </span>

              <Switch
                onChange={handleSwitchChange}
                checked={isChecked}
                uncheckedIcon={false}
                checkedIcon={false}
                width={25}
                height={15}
                className="ml-2"
              />
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={handleMenuItemClick}
            >
              <AddContactDialog
                mode="edit"
                trigger={
                  <span className="pl-2 gap-3 flex items-center justify-center">
                    <BiSolidEdit className="text-black" size={20} />
                    {/* <Image
                            src="/icons/edit.png"
                            alt="edit.png"
                            // className="w-5 h-5"
                            width={18}
                            height={18}
                          /> */}
                    Edit
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
                  <span className="pl-2 gap-3 flex items-center justify-center">
                    <Projector size={20} /> Meetings
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
                  <span className="pl-2 gap-3 flex items-center justify-center">
                    <NotebookPen size={19} /> Notes
                  </span>
                }
              />
            </DropdownMenuItem>

            <DropdownMenuItem
              className="cursor-pointer"
              onClick={handleMenuItemClick}
            >
              <StageDueDilaogbox
                trigger={
                  <span className="pl-2 gap-3 flex items-center justify-center">
                    <TbCalendarDue className="" size={20} /> Stage Due
                  </span>
                }
              />
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={handleMenuItemClick}
            >
              <ConvertLeads
                trigger={
                  <span className="pl-2 gap-3 flex items-center justify-center">
                    <BiTransfer className="" size={20} /> Convert Leads
                  </span>
                }
              />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={handleMenuItemClick}
            >
              <History
                trigger={
                  <span className="pl-2 gap-3 flex items-center justify-center">
                    <MdOutlineHistory className="" size={20} /> History
                  </span>
                }
              />
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={handleMenuItemClick}
            >
              <Delete
                trigger={
                  <span className="pl-2 gap-3 flex items-center justify-center">
                    <RiDeleteBin5Line className="text-red-500" size={20} />
                    Delete
                  </span>
                }
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      label: "More",
    },
  ];

  return (
    <>
      <div className="flex space-x-4">
        {icons.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="flex items-center justify-center border border-gray-400 hover:bg-gray-200 hover:text-gray-700 transition rounded-full w-9 h-9 text-slate-500 cursor-pointer">
              {item.icon}
            </div>
            <p className="text-slate-500 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
      {isCardOpen && <EmailDialog onClose={handleEmailCloseCard} />}
    </>
  );
};

export default SocialIconsIndividualView;
