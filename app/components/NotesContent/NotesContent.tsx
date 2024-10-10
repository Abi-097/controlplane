import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import {
  FaRegImage,
  FaRegStar,
  FaRegStickyNote,
  FaTasks,
} from "react-icons/fa";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { RiCalendarScheduleLine, RiDeleteBin5Line } from "react-icons/ri";
// import UpcomingActivityCard from "../comps/DataCard/UpcomingCard";
import {
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowUp,
  MdPushPin,
} from "react-icons/md";
import { upcomingData } from "@/public/data/users";
import clsx from "clsx";
import { Textarea } from "@/components/ui/textarea";
import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import Delete from "../../Delete";
import { IoMdAttach, IoMdSend } from "react-icons/io";
import { GoHistory } from "react-icons/go";
import { Button } from "@/components/ui/button";
import AddNoteDialog from "./NewNote";
import Delete from "../common/Delete";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FiPlus } from "react-icons/fi";
// import AddNoteDialog from "../comps/UserInfoPanel/NewNote";
interface Attachment {
  name: string;
  size: string;
  type: string;
}

const contentList = [
  {
    id: 1,
    avatar: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. n unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: 2,
    avatar: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. n unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];
const NotesContent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [reminderOpen, setReminderOpen] = useState(false);
  const [taskPriorityOpen, setTaskPriorityOpen] = useState(false);
  const [assignedToOpen, setAssignedToOpen] = useState(false);
  const [isSectionOpen, setIsSectionOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  const toggleReminderDropdown = () => setReminderOpen(!reminderOpen);
  const toggleTaskPriorityDropdown = () =>
    setTaskPriorityOpen(!taskPriorityOpen);
  const toggleAssignedToDropdown = () => setAssignedToOpen(!assignedToOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Function to handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newAttachments: Attachment[] = Array.from(files).map((file) => ({
        name: file.name,
        size: (file.size / 1024).toFixed(2) + " KB",
        type: file.type.split("/")[1],
      }));
      setAttachments((prevAttachments) => [
        ...prevAttachments,
        ...newAttachments,
      ]);
    }
  };

  // Remove attachment by index
  const removeAttachment = (index: number) => {
    setAttachments((prevAttachments) =>
      prevAttachments.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <div className="border-gray-300 border-b-[1px] pb-2 bg-white px-1">
        <div className="flex  py-2 items-center justify-between">
          <div className="flex gap-2 py-2 items-center text-gray-600 font-[500]">
            <span onClick={toggleSection} className="cursor-pointer">
              {isSectionOpen ? (
                <MdOutlineKeyboardArrowUp size={21} />
              ) : (
                <MdKeyboardArrowDown size={21} />
              )}
            </span>
            <FaRegStickyNote
              size={18}
              className="text-gray-600 font-semibold"
            />
            <div className="cursor-default font-semibold text-gray-800 text-sm">
              Notes
            </div>
            <div className="px-2 py-0 text-sm rounded-sm border-[1px] text-gray-800 font-semibold cursor-default">
              20
            </div>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <AddNoteDialog
                    mode="add"
                    trigger={
                      <button className="bg-transparent border-none">
                        <FiPlus size={18} />
                      </button>
                    }
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add Note</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
            isSectionOpen
              ? "overflow-y-auto max-h-[70vh] no-scrollbar"
              : "max-h-0"
          }`}
        >
          <div
            className="flex justify-between items-center py-2  cursor-pointer"
            onClick={toggleAccordion}
          >
            <div className="flex items-center gap-2">
              {/* {isOpen ? (
                <MdOutlineKeyboardArrowUp size={16} />
              ) : (
                <MdKeyboardArrowDown size={16} />
              )} */}

              <span className="flex items-center gap-2 text-sm text-gray-600">
                <Avatar className="w-[25px] h-[25px]">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-gray-600 text-sm">Note by Lucy Lockwood</p>
              </span>
            </div>

            <span className="hidden sm:flex items-center gap-2 text-sm">
              <CiCalendarDate className="text-gray-500" size={22} />
              <p>10/10/2021 10:10 AM</p>
            </span>
          </div>

          {/* <div
            className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
              isOpen ? "max-h-screen" : "max-h-0"
            }`}
          > */}
          <div
            className={`transition-max-height duration-300 ease-in-out overflow-hidden`}
          >
            <div
              className="border-[1px] border-gray-300 rounded-md shadow-lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex justify-between items-center">
                <div className="flex p-4 gap-3 ">
                  <Avatar className="w-[32px] h-[32px]">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="font-semibold flex items-center text-gray-600 text-sm">
                    Jenny Wilson
                  </div>
                </div>
                <div>
                  <span className="p-4 flex items-center">
                    <div className="text-gray-500 text-sm ">
                      10 June 2024 10:00AM
                    </div>
                    <Delete
                      trigger={
                        <span className="pl-2 gap-1 flex items-center justify-center cursor-pointer">
                          <RiDeleteBin5Line
                            className="text-red-500"
                            size={14}
                          />
                        </span>
                      }
                    />
                    {/* <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="cursor-pointer rounded-full hover:bg-gray-200 h-8 w-8 p-0 flex items-center justify-center">
                          <BsThreeDots className="h-4 w-4" />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        
                        <DropdownMenuItem
                          className="cursor-pointer"
                          onClick={handleMenuItemClick}
                        >
                          <Delete
                            trigger={
                              <span className="pl-2 gap-1 flex items-center justify-center">
                                <RiDeleteBin5Line
                                  className="mr-2 text-red-500"
                                  size={20}
                                />{" "}
                                Delete
                              </span>
                            }
                          />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu> */}
                  </span>
                </div>
              </div>{" "}
              <hr />
              <div className="p-4">
                <p className="text-sm mb-2 font-semibold">
                  Start a blog to reach your creative peak
                </p>
                <p className="text-sm text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                {/* <hr className="mt-2 border border-slate-100" /> */}
                {contentList.map((content, index) => (
                  <div key={index} className="border my-2 rounded-md px-2">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <Avatar className="w-[32px] h-[32px]">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="{content.text}"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="font-semibold flex items-center text-gray-600 text-sm">
                          John Wick
                        </div>
                      </div>
                      <div className="flex items-center py-4">
                        <div className="text-gray-500 text-sm">
                          10 June 2024 10:00AM
                        </div>
                        {/* <span>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <div className="cursor-pointer rounded-full hover:bg-gray-200 h-8 w-8 p-0 flex items-center justify-center">
                                <BsThreeDots className="h-4 w-4" />
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                className="cursor-pointer"
                                
                              >
                                <Delete
                                  trigger={
                                    <span className="pl-2 gap-1 flex items-center justify-center">
                                      <RiDeleteBin5Line
                                        className="mr-2 text-red-500"
                                        size={20}
                                      />
                                      Delete
                                    </span>
                                  }
                                />
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </span> */}
                        <Delete
                          trigger={
                            <span className="pl-2 gap-1 flex items-center justify-center cursor-pointer">
                              <RiDeleteBin5Line
                                className="text-red-500"
                                size={14}
                              />
                            </span>
                          }
                        />
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">{content.text}</div>
                    <hr className="mt-3" />
                  </div>
                ))}
                <div
                  className={`px-4 pb-4 mt-1 transition-opacity duration-300 ease-in-out ${
                    isHovered ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
                  }`}
                >
                  <div className="flex items-center space-x-2 mt-3">
                    <Avatar className="w-[32px] h-[32px]">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {/* <div className="flex-grow relative"> */}
                    <div className="relative w-full">
                      <div className="flex items-center space-x-2">
                        <Textarea
                          placeholder="Type your message here."
                          className="rounded-none pr-10 w-full"
                        />
                        <IoMdSend
                          className="absolute right-11 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                          size={20}
                        />
                        {/* Attachment Icon - Positioned outside the Textarea */}
                        <div className="flex items-center justify-end space-x-4">
                          <label className="text-gray-500 cursor-pointer">
                            <input
                              type="file"
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                            <IoMdAttach size={20} />
                          </label>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                {attachments.length > 0 && (
                  <div className="mt-2 w-full">
                    {attachments.map((attachment, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 p-4 mb-2 rounded-lg flex justify-between items-center"
                      >
                        <div className="text-sm text-gray-600">
                          {attachment.name} ({attachment.size})
                        </div>
                        <MdClose
                          className="cursor-pointer text-gray-500"
                          size={20}
                          onClick={() => removeAttachment(index)}
                        />
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex justify-between items-center pt-3">
                  <div className="flex items-center gap-3 ">
                    <div className="w-14 h-8 border border-gray-300 rounded-full flex items-center justify-center shadow-md gap-1">
                      <MdPushPin size={20} /> <p className="text-sm">+4</p>
                    </div>
                    <div className="w-14 h-8 border border-gray-300  rounded-full flex items-center justify-center shadow-md gap-1">
                      <FaRegImage size={20} /> <p className="text-sm">+4</p>
                    </div>
                  </div>
                  <FaRegStar size={20} className="shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesContent;
