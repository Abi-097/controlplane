import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiFilter, FiPhone, FiPlus } from "react-icons/fi";
import { FaRegStickyNote, FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { IoMdAdd, IoMdSend } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import { PiPhoneLight } from "react-icons/pi";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import AudioPlayer from "@/app/components/common/AudioPlayer/AudioPlayer";
import AddNoteDialog from "@/app/components/NotesContent/NewNote";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import Delete from "@/app/components/common/Delete";
import { Textarea } from "@/components/ui/textarea";
import { TiArrowBackOutline } from "react-icons/ti";

// Define the UserData interface
interface CallsData {
  id: number;
  from: string;
  to: string;
  phoneNumber: string;
  time: string;
  duration: string;
  recording: boolean;
}

// Define the Props type to accept UserData array
interface EngagementPhoneCallsProps {
  CallsData: CallsData[];
}

// Component accepts props of type CustomerContactsProps
const PhoneCallsEngagement: React.FC<EngagementPhoneCallsProps> = ({
  CallsData,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const [isReplayboxOpen, setIsReplayboxOpen] = useState<{
    [key: number]: boolean;
  }>({});
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
    <div className="">
      <div className="flex flex-col px-0 rounded-sm shadow-sm bg-white">
        <div className="flex gap-2 items-start font-[500] py-6 pb-2 px-2 text-gray-600">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row gap-1 items-center">
              <span onClick={toggleSection} className="cursor-pointer">
                {isOpen ? (
                  <MdOutlineKeyboardArrowUp size={21} />
                ) : (
                  <MdKeyboardArrowDown size={21} />
                )}
              </span>
              <FiPhone className="text-gray-800 font-semibold" />

              <div className="font-semibold flex items-left text-gray-800 text-sm flex-row gap-2 items-center">
                Phone Calls
                <div className="px-2 py-0 rounded-sm border-[1px] text-gray-800 font-semibold items-start">
                  5
                </div>
              </div>
            </div>
            {/* 
            <div className="flex flex-row gap-1 items-center">
              <button className="bg-transparent border-none pr-2 text-gray-800">
                <FiPlus size={18} />
              </button>
            </div> */}
          </div>
        </div>

        <div>
          {/* Content */}
          {CallsData.map((call) => (
            <div
              key={call.id}
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="m-2 border-[1px]  ">
            
                <div className="flex justify-between items-center">
                    <div className="flex p-4 gap-2 items-center text-gray-800">
                      <Avatar className="w-[32px] h-[32px]">
                        <AvatarImage src="users/7.jpg" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>

                      <div className="font-semibold flex items-left text-gray-800 text-sm flex-col">
                      Jenny Wilson
                      <div className="text-xs font-normal text-gray-500">
                        to Jernam ball
                      </div>
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
                                onClick={() => handleReplayClick(call.id)}
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


                <div className="py-2 px-4">
                  {/* Body */}
                  <div className="flex flex-col gap-3 text-sm text-gray-500 pt-3 items-start justify-start">
                    <div className="flex flex-row gap-3 items-center">
                      <div className="flex flex-row gap-2 items-center">
                        <PiPhoneLight size={16} /> {call.phoneNumber}
                      </div>
                      <span className="hidden md:block">|</span>
                      <div className="flex flex-row gap-2 items-center">
                        <IoMailOpenOutline size={16} /> {call.time}
                      </div>
                      <span className="hidden md:block">|</span>
                      <div className="flex flex-row gap-2 items-center">
                        <IoMailOpenOutline size={16} /> {call.duration}
                      </div>
                    </div>
                    <div>
                      {call.recording && (
                        <div className="flex flex-row items-center gap-2">
                          Recording : <AudioPlayer />
                        </div>
                      )}
                    </div>
                    
                  </div>
                  <div
                      className={`px-4 pb-4 mt-1 transition-opacity duration-300 ease-in-out ${
                        isReplayboxOpen[call.id]
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneCallsEngagement;

// import React, { useState } from "react";
// import { AiOutlineExclamationCircle } from "react-icons/ai";
// import { FiFilter, FiPhone, FiPlus } from "react-icons/fi";
// import { FaRegStickyNote, FaSearch } from "react-icons/fa";
// import { Input } from "@/components/ui/input";
// import { IoMdAdd } from "react-icons/io";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { BiSolidEdit } from "react-icons/bi";
// import { PiPhoneLight } from "react-icons/pi";
// import { IoMailOpenOutline } from "react-icons/io5";
// import { IoLocationOutline } from "react-icons/io5";
// import AudioPlayer from "@/app/components/common/AudioPlayer/AudioPlayer";
// import AddNoteDialog from "@/app/components/NotesContent/NewNote";
// import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

// // Define the UserData interface
// interface CallsData {
//   id: number;
//   from: string;
//   to: string;
//   phoneNumber: string;
//   time: string;
//   duration: string;
//   recording: boolean;
// }

// // Define the Props type to accept UserData array
// interface EngagementPhoneCallsProps {
//   CallsData: CallsData[];
// }

// // Component accepts props of type CustomerContactsProps
// const PhoneCallsEngagement: React.FC<EngagementPhoneCallsProps> = ({
//   CallsData,
// }) => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSection = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="border-gray-300 pb-10 ">
//       <div className="flex flex-col px-0 mb-5 border-[1px] border-gray-300 rounded-sm shadow-sm">
//         <div className="flex gap-2 items-start font-[500] py-4 px-2 text-gray-600">
//           <div className="flex flex-row justify-between items-center w-full">
//             <div className="flex flex-row gap-1 items-center">
//               <span onClick={toggleSection} className="cursor-pointer">
//                 {isOpen ? (
//                   <MdOutlineKeyboardArrowUp size={21} />
//                 ) : (
//                   <MdKeyboardArrowDown size={21} />
//                 )}
//               </span>
//               <FiPhone className="text-gray-800 font-semibold" />

//               <div className="font-semibold flex items-left text-gray-800 text-sm flex-row gap-2 items-center">
//                 Phone Calls
//                 <div className="px-2 py-0 rounded-sm border-[1px] text-gray-800 font-semibold items-start">
//                   3
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-row gap-1 items-center">
//               <button className="bg-transparent border-none pr-2 text-gray-800">
//                 <FiPlus size={18} />
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="mt-5">
//           {/* Content */}
//           {CallsData.map((call) => (
//             <div
//               key={call.id}
//               className={`px-2 md:px-5 flex flex-col md:flex-row gap-3 transition-max-height duration-300 ease-in-out overflow-hidden ${
//                 isOpen ? "max-h-screen" : "max-h-0"
//               }`}            >

//               <Avatar className="w-7 h-7 mt-1">
//                 <AvatarImage src={`/users/1.jpg`} alt="User avatar" />
//                 <AvatarFallback></AvatarFallback>
//               </Avatar>

//               <div className="border-[1px] flex flex-col w-full p-3 mb-5 gap-0 rounded-sm">
//                 {/* Header */}
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm">
//                   <div className="text-gray-500 text-sm mb-2 md:mb-0">
//                     from{" "}
//                     <span className="text-gray-800">Agent: {call.from}</span> on
//                     Mar 04,2021 to{" "}
//                     <span className="text-gray-800">Contact: {call.to}</span>
//                   </div>
//                   <div className="flex flex-row items-center text-sm gap-3 text-[#0284c7] cursor-pointer">
//                     Show Details
//                   </div>
//                 </div>

//                 {/* Body */}
//                 <div className="flex flex-col gap-5 text-sm text-gray-500 pt-3 items-start justify-start">
//                   <div className="flex flex-row gap-3 items-center">
//                     <div className="flex flex-row gap-2 items-center">
//                       <PiPhoneLight size={16} /> {call.phoneNumber}
//                     </div>
//                     <span className="hidden md:block">|</span>
//                     <div className="flex flex-row gap-2 items-center">
//                       <IoMailOpenOutline size={16} /> {call.time}
//                     </div>
//                     <span className="hidden md:block">|</span>
//                     <div className="flex flex-row gap-2 items-center">
//                       <IoMailOpenOutline size={16} /> {call.duration}
//                     </div>
//                   </div>
//                   <div>
//                     {call.recording && (
//                       <>
//                         <div className="flex flex-row items-center gap-2">
//                           Recording : <AudioPlayer />
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhoneCallsEngagement;
