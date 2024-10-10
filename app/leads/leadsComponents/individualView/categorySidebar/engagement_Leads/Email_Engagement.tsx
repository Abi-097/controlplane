import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useEffect, useState } from "react";
import { CiCalendarDate, CiStar } from "react-icons/ci";
import { FaRegImage, FaRegNewspaper, FaRegStar, FaTasks } from "react-icons/fa";
import {
  RiAttachment2,
  RiDeleteBin5Line,
} from "react-icons/ri";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineFileDownload,
  MdOutlineKeyboardArrowUp,
  MdOutlineStar,
  MdPushPin,
} from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosClose, IoMdSend } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import {  BsThreeDots } from "react-icons/bs";
import Delete from "@/app/components/common/Delete";
import { FiPlus } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
import { FaRegFileAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { TiArrowBackOutline } from "react-icons/ti";
import dynamic from "next/dynamic";
import AvatarGroup from "@/components/ui/AvatarGroup";
import CustomTooltip from "@/app/components/common/Tooltip/CustomTooltip";

const EmailDialog = dynamic(
  () => import("@/app/components/EmailContent/Email"),
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
    priority:"High"
  },
  {
    id: 2,
    avatar: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. n unknown printer took a galley of type and scrambled it to make a type specimen book",
    text2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting simply dummy text of the printing and typesetting industry ",
    priority:"Low"

  },
  {
    id: 3,
    avatar: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting  industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. n unknown printer took a galley of type and scrambled it to make a type specimen book",
    text2: "Lorem Ipsum is simply dummy text of the printing and typesetting ",
    priority:"High"

  },
  {
    id: 4,
    avatar: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. n unknown printer took a galley of type and scrambled it to make a type specimen book",
    text2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting simply dummy text of the printing and typesetting industry ",
      priority:"Medium"

  },
];

const Email_Engagement = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isReplayboxOpen, setIsReplayboxOpen] = useState<{
    [key: number]: boolean;
  }>({});
  const [isCardOpen, setIsCardOpen] = React.useState<boolean>(false);

  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const handleAddEmailClick = () => {
    setIsCardOpen(true);
  };
  const handleReplayClick = (id: number) => {
    setIsReplayboxOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleEmailCloseCard = () => {
    setIsCardOpen(false);
  };

  const onDrop = (acceptedFiles: File[]) => {
    setAttachments((prevAttachments) => [...prevAttachments, ...acceptedFiles]);
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Remove attachment by index
  const removeAttachment = (index: number) => {
    setAttachments((prevAttachments) =>
      prevAttachments.filter((_, i) => i !== index)
    );
  };
  const handleDownloadAttachment = (file: File) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="overflow-y-scroll no-scrollbar bg-white rounded-sm">
        <div className="flex flex-col rounded-sm  overflow-y-scroll no-scrollbar ">
          <div className="flex gap-2 items-start font-[500] py-4 px-2 pb-2 text-gray-600 overflow-y-scroll no-scrollbar">
            <div className="flex flex-row justify-between items-start w-full">
              <div className="flex flex-row gap-1 items-start">
                <span onClick={toggleSection} className="cursor-pointer">
                  {isOpen ? (
                    <MdOutlineKeyboardArrowUp size={21} />
                  ) : (
                    <MdKeyboardArrowDown size={21} />
                  )}
                </span>
                <HiOutlineMail
                  size={20}
                  className="text-gray-600 font-semibold pt-0.5"
                />

                <div className="font-semibold flex items-left text-gray-800 text-sm flex-col gap-2">
                  <div className="font-semibold flex items-left text-gray-800 text-sm flex-row gap-2 items-center">
                    Your Invoice
                    <div className="px-2 py-0 rounded-sm border-[1px] text-gray-800 font-semibold items-start">
                      2
                    </div>
                  </div>
                  <div className="text-xs font-normal text-gray-600">
                    By Christoper Nolan
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-1 items-center">
                {/* <CalendarPlus2 size={18} /> */}
                <CiCalendarDate size={18} />
                <div className="text-gray-600 text-sm pr-4">
                  10 June 2024 10:00AM
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer rounded-full flex items-center justify-center">
                      <CustomTooltip
                        text="More options"
                        trigger={
                          <div>
                            <BsThreeDots className="h-4 w-4" />
                          </div>
                        }
                      />{" "}
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={handleAddEmailClick}
                    >
                      <span className="pl-2 gap-1 flex items-center justify-center">
                        <FiPlus size={16} className="mr-2" />
                        <p className="text-sm">Add</p>
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={handleMenuItemClick}
                    >
                      <Delete
                        trigger={
                          <span className="pl-2 gap-1 flex items-center justify-center">
                            <RiDeleteBin5Line
                              className="mr-2 text-red-500"
                              size={16}
                            />
                            <p className="text-sm">Delete</p>
                          </span>
                        }
                      />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {contentList.map((content) => (
            <div
              key={content.id}
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                isOpen ? "overflow-y-auto max-h-[70vh] no-scrollbar" : "max-h-0"
              }`}
            >
              {/* <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-screen" : "max-h-0"
                }`}
              > */}
              <div className="m-2 border-[1px] border-gray-300 rounded-sm ">
                <div className="flex justify-between items-center">
                  <div className="flex p-4 gap-3 items-center">
                    <Avatar className="w-[32px] h-[32px]">
                      <AvatarImage src="users/7.jpg" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="font-semibold flex items-left text-gray-800 text-sm flex-col">
                    <div className="flex flex-row gap-1">
                        Jenny Wilson
                        {<MdOutlineStar className={
                           content.priority === "High" ? "text-red-500" :
                           content.priority === "Medium" ? "text-blue-500" :
                           "text-gray-500"
                         } size={12}/> }
                        </div>
                      <div className="text-xs font-normal text-gray-500">
                        to Jernam ball
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="p-4 flex flex-row gap-1 text-gray-500 items-center">
                      <div className="text-gray-500 text-sm pr-3">
                        10 June 2024 10:00AM
                      </div>
                      <CustomTooltip
                        text="Replay"
                        trigger={
                          <div>
                            <TiArrowBackOutline
                              className="cursor-pointer"
                              onClick={() => handleReplayClick(content.id)}
                            />
                          </div>
                        }
                      />    
                      
                      <CustomTooltip
                        text="Forward"
                        trigger={
                          <div>
                            <RiShareForwardLine className="cursor-pointer " />
                          </div>
                        }
                      />                          

                      <div className="flex items-center gap-2">
                        <div {...getRootProps()} className="cursor-pointer">
                          <input {...getInputProps()} />
                          <RiAttachment2 size={18} />
                        </div>
                      </div>

                      <Delete
                        trigger={
                          <span className=" gap-1 flex items-center justify-center">
                            <RiDeleteBin5Line
                              className="text-gray-500 cursor-pointer"
                              size={14}
                            />
                          </span>
                        }
                      />
                    </span>
                  </div>
                </div>
                <hr className="border-1" />
                <div className="py-4 pb-0 px-6">
                  <p className="text-sm text-gray-400">{content.text}</p>
                  <p> .</p>
                  <p className="text-sm text-gray-400">{content.text2}</p>

                  <div
                    className={`px-4 pb-0 mt-1 transition-opacity duration-300 ease-in-out ${
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

                  <div className="flex flex-col gap-2 w-full">
                    {attachments.map((file, index) => (
                      <div
                        key={index}
                        className="w-full p-4 mb-1 bg-gray-100 rounded-sm flex items-center justify-between text-sm text-gray-600"
                      >
                        <div className=" flex flex-row gap-2 items-center">
                          <FaRegFileAlt />
                          {file.name}
                        </div>

                        <div className=" flex flex-row gap-2 items-center">
                          <button
                            type="button"
                            className="text-gray-600 hover:text-blue-800 cursor-pointer"
                            onClick={() => handleDownloadAttachment(file)}
                          >
                            <MdOutlineFileDownload size={20} />
                          </button>
                          <button
                            type="button"
                            className="text-gray-600 hover:text-red-800 cursor-pointer"
                            onClick={() => removeAttachment(index)}
                          >
                            <IoIosClose size={20} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-3">
                    <div className="flex items-center gap-3">
                      <div className="py-1 px-2 gap-1 border border-gray-300 rounded-full flex flex-row items-center justify-center text-gray-600">
                        <MdPushPin size={16} /> <p className="text-xs">+4</p>
                      </div>
                      <div className="py-1 px-2 gap-1 border border-gray-300 rounded-full flex flex-row items-center justify-center text-gray-600">
                        <FaRegImage size={16} /> <p className="text-xs">+4</p>
                      </div>
                    </div>
                    <div className=" flex flex-row gap-2 items-center">
                      <div className="mr-[105px] mt-5 mb-0">
                        <AvatarGroup />
                      </div>
                      <FaRegStar
                        size={20}
                        className="shadow-md text-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isCardOpen && <EmailDialog onClose={handleEmailCloseCard} />}
    </>
  );
};

export default Email_Engagement;
