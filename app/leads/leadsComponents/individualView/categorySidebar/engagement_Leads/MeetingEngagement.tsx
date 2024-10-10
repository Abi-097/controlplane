import React, { useEffect, useState } from "react";
import { CiCalendarDate, CiStar } from "react-icons/ci";
import { FaRegImage, FaRegNewspaper, FaRegStar, FaTasks } from "react-icons/fa";
import { RiAttachment2, RiDeleteBin5Line } from "react-icons/ri";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineFileDownload,
  MdOutlineKeyboardArrowUp,
  MdOutlineStar,
  MdPushPin,
} from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosClose, IoMdSend } from "react-icons/io";
import { BsPencil, BsThreeDots } from "react-icons/bs";
import Delete from "@/app/components/common/Delete";
import { FiPlus } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
import { FaRegFileAlt } from "react-icons/fa";
import AvatarGroup from "@/components/ui/AvatarGroup";
import CustomTooltip from "@/app/components/common/Tooltip/CustomTooltip";
import AddNewMeeting from "@/app/components/MeetingContent/AddNewMeeting";

const contentList = [
  {
    id: 1,
    avatar: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting  industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. n unknown printer took a galley of type and scrambled it to make a type specimen book",
    text2: "Lorem Ipsum is simply dummy text of the printing and typesetting ",
    priority: "High",
  },
  {
    id: 2,
    avatar: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. n unknown printer took a galley of type and scrambled it to make a type specimen book",
    text2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting simply dummy text of the printing and typesetting industry ",
    priority: "Low",
  },
  {
    id: 3,
    avatar: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting  industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. n unknown printer took a galley of type and scrambled it to make a type specimen book",
    text2: "Lorem Ipsum is simply dummy text of the printing and typesetting ",
    priority: "Medium",
  },
];

const MeetingEngagement = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const onDrop = (acceptedFiles: File[]) => {
    setAttachments((prevAttachments) => [...prevAttachments, ...acceptedFiles]);
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDeleteAttachment = (index: number) => {
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
                <svg
                  fill="#000000"
                  version="1.1"
                  viewBox="144 144 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-600 font-semibold pt-0.5"
                  width={18}
                  height={18}
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

                <div className="font-semibold flex items-left text-gray-800 text-sm flex-col gap-2">
                  <div className="font-semibold flex items-left text-gray-800 text-sm flex-row gap-2 items-center">
                    Meeting Title
                    <div className="px-2 py-0 rounded-sm border-[1px] text-gray-800 font-semibold items-start">
                      4
                    </div>
                  </div>
                  <div className="text-xs font-normal text-gray-600">
                    By Christoper Nolan
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-1 items-center">
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
                      onClick={handleMenuItemClick}
                    >
                      <AddNewMeeting
                        trigger={
                          <span className="pl-2 gap-1 flex items-center justify-center">
                            <FiPlus size={18} className="mr-2" />
                            Add Meeting
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
                          <span className="pl-2 gap-1 flex items-center justify-center">
                            <RiDeleteBin5Line
                              className="mr-2 text-red-500"
                              size={18}
                            />
                            Delete
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
                    <div className="flex p-4 gap-3 items-center">
                      <div className="font-semibold flex items-left text-gray-800 text-sm flex-row gap-1">
                        Monthly Product Discussion
                        {
                          <MdOutlineStar
                            className={
                              content.priority === "High"
                                ? "text-red-500"
                                : content.priority === "Medium"
                                ? "text-blue-500"
                                : "text-gray-500"
                            }
                            size={12}
                          />
                        }
                      </div>
                    </div>
                    <div>
                      <span className="p-4 flex flex-row gap-1 text-gray-500 items-center">
                        <div className="text-gray-500 text-sm pr-3">
                          10 June 2024 10:00AM
                        </div>

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

                    <div className="flex flex-col gap-2 w-full">
                      {attachments.map((file, index) => (
                        <div
                          key={index}
                          className="w-full py-2 px-4 bg-gray-200 rounded-sm flex flex-row justify-between text-sm text-gray-600"
                        >
                          <div className=" flex flex-row gap-2 items-center">
                            <FaRegFileAlt />
                            {file.name}
                          </div>

                          <div className=" flex flex-row gap-2 items-center">
                            <button
                              type="button"
                              className="text-gray-600 hover:text-blue-800"
                              onClick={() => handleDownloadAttachment(file)}
                            >
                              <MdOutlineFileDownload size={20} />
                            </button>
                            <button
                              type="button"
                              className="text-gray-600 hover:text-red-800"
                              onClick={() => handleDeleteAttachment(index)}
                            >
                              <IoIosClose size={20} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center -mt-3">
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MeetingEngagement;
