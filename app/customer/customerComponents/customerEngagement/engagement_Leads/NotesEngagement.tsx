import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiCalendarDate, CiStar } from "react-icons/ci";
import {
  FaRegImage,
  FaRegNewspaper,
  FaRegStar,
  FaRegStickyNote,
  FaTasks,
} from "react-icons/fa";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import {
  RiAttachment2,
  RiCalendarScheduleLine,
  RiDeleteBin5Line,
} from "react-icons/ri";
// import UpcomingActivityCard from "../comps/DataCard/UpcomingCard";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineFileDownload,
  MdOutlineKeyboardArrowUp,
  MdPushPin,
} from "react-icons/md";
import { upcomingData } from "@/public/data/users";
import clsx from "clsx";
import { Textarea } from "@/components/ui/textarea";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import Delete from "../../Delete";
import { IoIosClose, IoMdSend } from "react-icons/io";
import { GoHistory } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { PiDotsThreeBold } from "react-icons/pi";
import { BsPencil, BsThreeDots } from "react-icons/bs";
import Delete from "@/app/components/common/Delete";
import { FiPlus } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
import { FaRegFileAlt } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RiShareForwardLine } from "react-icons/ri";
import { TiArrowBackOutline } from "react-icons/ti";
import { MdOutlineFileUpload } from "react-icons/md";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { BiSolidEdit } from "react-icons/bi";
import AddNoteDialog from "@/app/components/NotesContent/NewNote";
import AvatarGroup from "@/components/ui/AvatarGroup";
const EmailDialog = dynamic(
  () => import("../../../../components/EmailContent/Email"),
  {
    ssr: false,
  }
);
const contentList = [
  {
    id: 1,
    avatar: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting  industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. n unknown printer took a galley of type and scrambled it to make a type specimen book",
    text2: "Lorem Ipsum is simply dummy text of the printing and typesetting ",
  },
  {
    id: 2,
    avatar: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. n unknown printer took a galley of type and scrambled it to make a type specimen book",
    text2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting simply dummy text of the printing and typesetting industry ",
  },
  {
    id: 3,
    avatar: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting  industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. n unknown printer took a galley of type and scrambled it to make a type specimen book",
    text2: "Lorem Ipsum is simply dummy text of the printing and typesetting ",
  },
  {
    id: 4,
    avatar: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. n unknown printer took a galley of type and scrambled it to make a type specimen book",
    text2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting simply dummy text of the printing and typesetting industry ",
  },
];


const NotesEngagement = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isReplayboxOpen, setIsReplayboxOpen] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleReplayClick = (id: number) => {
    setIsReplayboxOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <div>
        <div className="flex flex-col rounded-sm bg-white">
          <div className="flex gap-2 items-start font-[500] py-4 px-2 pb-2 text-gray-600 ">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row gap-1 items-center">
                <span onClick={toggleSection} className="cursor-pointer">
                  {isOpen ? (
                    <MdOutlineKeyboardArrowUp size={21} />
                  ) : (
                    <MdKeyboardArrowDown size={21} />
                  )}
                </span>
                <FaRegStickyNote />

                <div className="font-semibold flex items-left text-gray-800 text-sm flex-row gap-2 items-center">
                  Notes
                  <div className="px-2 py-0 rounded-sm border-[1px] text-gray-800 font-semibold items-start">
                    4
                  </div>
                </div>
              </div>

              <div>
                <span className="flex flex-row gap-1 text-gray-600 items-center">
                  <CiCalendarDate size={18} />

                  <div className="text-gray-600 text-sm pr-1">
                    10 June 2024 10:00AM
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="cursor-pointer rounded-full hover:bg-gray-200 h-8 w-8 p-0 flex items-center justify-center">
                        <BsThreeDots className="h-4 w-4" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
                      <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={handleMenuItemClick}
                      >
                        <AddNoteDialog
                          mode="add"
                          trigger={
                            <span className="pl-2 gap-1 flex items-center justify-center text-gray-600">
                              <FiPlus className="mr-2 " size={18} />
                              Add Note
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
                            <span className="pl-2 gap-1 flex items-center justify-center text-red-500">
                              <RiDeleteBin5Line className="mr-2 " size={18} />
                              Delete
                            </span>
                          }
                        />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </span>
              </div>
            </div>
          </div>

          {contentList.map((content) => (
            <div
              key={content.id}
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                isOpen ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="m-2 border-[1px] border-gray-300 rounded-sm ">
                  <div className="flex justify-between items-center">
                    <div className="flex p-4 gap-2 items-center text-gray-800">
                      <Avatar className="w-[32px] h-[32px]">
                        <AvatarImage src="users/7.jpg" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>

                      <div className="font-semibold flex items-left text-gray-800 text-sm flex-col">
                        Notes by Jenny Wilson
                      </div>
                    </div>
                    <div>
                      <span className="p-4 flex flex-row gap-1 text-gray-600 items-center">
                        <CiCalendarDate size={18} />

                        <div className="text-gray-600 text-sm pr-1">
                          10 June 2024 10:00AM
                        </div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <TiArrowBackOutline
                                className="cursor-pointer"
                                onClick={() => handleReplayClick(content.id)}
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Replay</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <div className="cursor-pointer rounded-full hover:bg-gray-200 h-8 w-8 p-0 flex items-center justify-center">
                              <BsThreeDots className="h-4 w-4" />
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
                            <DropdownMenuItem
                              className="cursor-pointer"
                              onClick={handleMenuItemClick}
                            >
                              <AddNoteDialog
                                mode="edit"
                                trigger={
                                  <span className="pl-2 gap-1 flex items-center justify-center text-gray-600">
                                    <BiSolidEdit className="mr-2 " size={18} />
                                    Edit
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
                                  <span className="pl-2 gap-1 flex items-center justify-center text-red-500">
                                    <RiDeleteBin5Line
                                      className="mr-2 "
                                      size={18}
                                    />
                                    Delete
                                  </span>
                                }
                              />
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </span>
                    </div>
                  </div>
                  <hr className="border-1" />
                  <div className="py-4 px-6">
                    <p className="text-sm text-gray-400">{content.text}</p>

                    <div
                      className={`px-4 pb-4 mt-1 transition-opacity duration-300 ease-in-out ${
                        isReplayboxOpen[content.id]
                          ? "opacity-100 max-h-40"
                          : "opacity-0 max-h-0"
                      }`}
                    >
                      <div className="flex items-center space-x-2 mt-3">
                        <Avatar className="w-[32px] h-[32px]">
                          <AvatarImage src="users/7.jpg" alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow relative">
                          <Textarea
                            placeholder="Type your message here."
                            className="rounded-none pr-10 w-full"
                          />
                          <IoMdSend
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                            size={20}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotesEngagement;
