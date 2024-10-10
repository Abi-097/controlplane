import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { FaRegImage, FaRegStar } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  MdClose,
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdPushPin,
} from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";
import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Delete from "../common/Delete";
import { IoMdAttach, IoMdSend } from "react-icons/io";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineDescription,
  TimelineContent,
} from "@/components/ui/timeline";
import { Check, SquareActivity } from "lucide-react";
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
const dropdownItems: { [key: string]: ReactNode[] } = {
  reminder: ["Reminder", "No Reminder"],
  tasks: [
    <div key="high" className="flex items-center justify-center">
      <span className="inline-flex h-4 w-4 rounded-full bg-green-400 mr-2" />
      High
    </div>,
    <div key="low" className="flex items-center justify-center">
      <span className="inline-flex h-4 w-4 rounded-full bg-red-400 mr-2" />
      Low
    </div>,
  ],
  assigned: ["Admin", "Lucy", "Kesy"],
};
// import upcomingData
const ActivityHistory = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSectionOpen, setIsSectionOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [selectedItems, setSelectedItems] = useState({
    reminder: dropdownItems.reminder[0],
    tasks: dropdownItems.tasks[0],
    assigned: dropdownItems.assigned[0],
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    reminder: false,
    tasks: false,
    assigned: false,
  });

  // Define the box type (keys of dropdownItems or dropdownOpen)
  type BoxType = keyof typeof dropdownOpen;

  // Refs for each dropdown box to detect clicks outside
  const boxRefs = {
    reminder: useRef<HTMLDivElement>(null),
    tasks: useRef<HTMLDivElement>(null),
    assigned: useRef<HTMLDivElement>(null),
  };

  // Toggle the dropdown for the specific box
  const toggleDropdown = (box: BoxType) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [box]: !prevState[box], // Toggle the clicked box dropdown
    }));
  };

  // Select an item for a specific box
  const selectItem = (box: BoxType, item: ReactNode) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [box]: item,
    }));
    toggleDropdown(box);
  };

  // Handle clicks outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.keys(boxRefs).forEach((box) => {
        const boxKey = box as BoxType;
        if (
          boxRefs[boxKey].current &&
          !boxRefs[boxKey].current!.contains(event.target as Node)
        ) {
          setDropdownOpen((prevState) => ({
            ...prevState,
            [boxKey]: false, // Close the dropdown if clicked outside
          }));
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
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
    <div className="bg-white px-1">
      <div className="flex gap-2 py-2 items-center text-gray-600 font-[500] my-2 ">
        <span onClick={toggleSection} className="cursor-pointer">
          {isSectionOpen ? (
            <MdOutlineKeyboardArrowUp size={21} />
          ) : (
            <MdKeyboardArrowDown size={21} />
          )}
        </span>
        <SquareActivity size={18} className="text-gray-600 font-semibold" />
        <div className="cursor-default font-semibold text-gray-800 text-sm">
          Activity History
        </div>
        <div className="px-2 py-0 text-sm rounded-sm border-[1px] text-gray-800 font-semibold cursor-default">
          20
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isSectionOpen
            ? "overflow-y-auto max-h-[64vh] no-scrollbar"
            : "max-h-0"
        }`}
      >
        <Timeline className="mt-2">
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon />
            </TimelineHeader>
            <TimelineContent>
              <TimelineDescription className="">
                <div className="border-gray-300 border-b-[1px] pb-2">
                  <div>
                    <div
                      className="flex justify-between items-center cursor-pointer mb-2"
                      onClick={toggleAccordion}
                    >
                      <div className="flex items-center gap-2">
                        {/* {isOpen ? (
                          <MdOutlineKeyboardArrowUp size={16} />
                        ) : (
                          <MdKeyboardArrowDown size={16} />
                        )} */}
                        <p className="cursor-default font-semibold text-gray-600 text-sm">
                          20 June 2024
                        </p>
                      </div>
                      <p className="cursor-default font-semibold text-gray-600 text-sm">
                        Today 10:10 AM
                      </p>
                    </div>

                    {/* <div
                      className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-screen" : "max-h-0"
                      }`}
                    > */}
                    <div
                      className={`transition-max-height duration-300 ease-in-out overflow-hidden `}
                    >
                      <div
                        className=" border-[1px] border-gray-300 rounded-md shadow-lg"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex p-4 gap-3">
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
                          <Delete
                            trigger={
                              <span className="flex items-center justify-center cursor-pointer m-2">
                                <RiDeleteBin5Line
                                  className="text-red-500"
                                  size={14}
                                />
                              </span>
                            }
                          />
                          {/* <div className="text-gray-500 text-sm p-4">
                            10 June 2024 10:00AM
                          </div> */}
                          {/* <span className="p-4">
                            <DropdownMenu>
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
                            </DropdownMenu>
                          </span> */}
                        </div>
                        <hr />
                        <div className="px-4 pb-4 mt-2">
                          <p className="text-sm mb-2 font-semibold">
                            Start a blog to reach your creative peak
                          </p>{" "}
                          {/*  */}
                          <p className="text-sm text-gray-400">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          {/*  */}
                          <div className="flex w-full justify-between shadow-lg mt-4">
                            {/* Box 1 */}
                            <div
                              ref={boxRefs.reminder}
                              className="relative w-1/3 text-center p-4 border border-gray-300 cursor-pointer"
                            >
                              <label className="block text-sm font-medium text-gray-600 mb-2">
                                Reminder
                              </label>
                              <div
                                onClick={() => toggleDropdown("reminder")}
                                className="text-sm"
                              >
                                {selectedItems.reminder}
                              </div>
                              {dropdownOpen.reminder && (
                                <div className="absolute top-full left-0 w-full text-left bg-white border mt-1 shadow-lg z-10 rounded-sm">
                                  {dropdownItems.reminder.map((item, index) => (
                                    <div
                                      key={index}
                                      className="p-2 m-1 hover:bg-gray-100 rounded-sm text-sm flex items-center justify-left"
                                      onClick={() =>
                                        selectItem("reminder", item)
                                      }
                                    >
                                      {selectedItems.reminder === item && (
                                        <Check
                                          size={12}
                                          className="text-black mr-2"
                                        />
                                      )}
                                      <span>{item}</span>

                                      {/* Display the Check icon if the item is selected */}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Box 2 */}
                            <div
                              ref={boxRefs.tasks}
                              className="relative w-1/3 text-center p-4 border border-gray-300 cursor-pointer"
                            >
                              <label className="block text-sm font-medium text-gray-600 mb-2">
                                Task Priority
                              </label>
                              <div
                                onClick={() => toggleDropdown("tasks")}
                                className="text-sm flex items-center justify-center"
                              >
                                {selectedItems.tasks}
                              </div>
                              {dropdownOpen.tasks && (
                                <div className="absolute top-full left-0 w-full bg-white border mt-1 shadow-lg z-10 rounded-sm">
                                  {dropdownItems.tasks.map((item, index) => (
                                    <div
                                      key={index}
                                      className="p-2 hover:bg-gray-100 rounded-sm text-sm flex items-center justify-left"
                                      onClick={() => selectItem("tasks", item)}
                                    >
                                      {selectedItems.tasks === item && (
                                        <Check
                                          size={12}
                                          className="text-black mr-2"
                                        />
                                      )}
                                      <span>{item}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Box 3 */}
                            <div
                              ref={boxRefs.assigned}
                              className="relative w-1/3 text-center p-4 border border-gray-300 cursor-pointer"
                            >
                              <label className="block text-sm font-medium text-gray-600 mb-2">
                                Assigned to
                              </label>
                              <div
                                onClick={() => toggleDropdown("assigned")}
                                className="text-sm flex items-center justify-center"
                              >
                                {selectedItems.assigned}
                              </div>
                              {dropdownOpen.assigned && (
                                <div className="absolute top-full left-0 w-full bg-white border mt-1 shadow-lg z-10 rounded-sm">
                                  {dropdownItems.assigned.map((item, index) => (
                                    <div
                                      key={index}
                                      className="p-2 hover:bg-gray-100 rounded-sm text-sm flex items-center justify-left"
                                      onClick={() =>
                                        selectItem("assigned", item)
                                      }
                                    >
                                      {" "}
                                      {selectedItems.assigned === item && (
                                        <Check
                                          size={12}
                                          className="text-black mr-2"
                                        />
                                      )}
                                      <span>{item}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                            {/* Box 4 */}
                            <div
                              // ref={boxRefs.assigned}
                              className="relative w-1/3 text-center p-4 border border-gray-300 cursor-pointer"
                            >
                              <label className="block text-sm font-medium text-gray-600 mb-2">
                                Due Date
                              </label>
                              {/* <div
                      onClick={() => toggleDropdown("assigned")}
                      className="text-sm"
                    >
                      {selectedItems.assigned}
                    </div> */}
                              {/* {dropdownOpen.assigned && (
                      <div className="absolute top-full left-0 w-full bg-white border mt-1 shadow-lg z-10 rounded-sm">
                        {dropdownItems.assigned.map((item, index) => (
                          <div
                            key={index}
                            className="p-2 hover:bg-gray-100 rounded-sm text-sm"
                            onClick={() => selectItem("assigned", item)}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )} */}
                            </div>
                          </div>
                          {/* {contentList.map((content, index) => (
                            <div key={index}>
                              <div className="flex items-start space-x-2 mt-4 relative">
                                <div className="relative flex flex-col items-center">
                                  <Avatar className="w-[32px] h-[32px]">
                                    <AvatarImage
                                      src="https://github.com/shadcn.png"
                                      alt="@shadcn"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                </div>
                                <p className="text-sm text-gray-400">
                                  {content.text}
                                </p>
                              </div>
                              <hr className="mt-2 border border-slate-100" />
                            </div>
                          ))} */}
                          {contentList.map((content, index) => (
                            <div
                              key={index}
                              className="border my-2 rounded-md px-2"
                            >
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
                              <div className="text-sm text-gray-400">
                                {content.text}
                              </div>
                              <hr className="my-3" />
                            </div>
                          ))}
                          <div
                            className={`px-4 pb-4 mt-1 transition-opacity duration-300 ease-in-out ${
                              isHovered
                                ? "opacity-100 max-h-40"
                                : "opacity-0 max-h-0"
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
                                <MdPushPin size={20} />{" "}
                                <p className="text-sm">+4</p>
                              </div>
                              <div className="w-14 h-8 border border-gray-300  rounded-full flex items-center justify-center shadow-md gap-1">
                                <FaRegImage size={20} />{" "}
                                <p className="text-sm">+4</p>
                              </div>
                            </div>
                            <FaRegStar size={20} className="shadow-md" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default ActivityHistory;
