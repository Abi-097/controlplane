"use client";
import { IoChevronDownSharp, IoHelpCircleOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import Notifications from "../Notifications/Notifications";
import { GoBell, GoQuestion } from "react-icons/go";
import SearchBar from "@/app/components/common/SearchBar";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { useState } from "react";
import AddTagModal from "@/app/components/Tags/AddTag";

const CustomerHeader = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]); // Store multiple tags

  const handleSelectTag = (tag: string) => {
    // Prevent duplicate tags
    if (!selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => [...prevTags, tag]); // Append new tag
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setSelectedTags((prevTags) =>
      prevTags.filter((tag) => tag !== tagToRemove)
    ); // Remove tag
  };

  return (
    <div className="flex px-10 py-3 justify-between items-center border-b-[1px]">
      <div className="flex flex-row justify-between w-full">
        {/* Left */}
        <div className="flex gap-4 items-center mr-3">
          {/* Profile Menu */}
          <div className="group cursor-pointer flex justify-center items-center text-gray-600 transition-all ">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar className="w-8 h-8 cursor-pointer">
                    <AvatarImage
                      src="/companies/7.jpg"
                      className="bg-blue-500"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Dana Morris</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="text-base font-semibold">Global SpaceX</div>

          {/* tags */}
          <div className="bg-red-400 py-0.5 px-3 rounded-sm text-white text-sm">
            Churned
          </div>

          <div className="inline-block ">
              {selectedTags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-blue-300 py-0.5 px-3 rounded-sm text-sm flex flex-row gap-2 items-center"
                    >
                      <span>{tag}</span>
                      <RxCross2  onClick={() => handleRemoveTag(tag)} className="cursor-pointer"/>
                     
                    </div>
                  ))}
                </div>
              )}
            </div>
          <AddTagModal
            onSelectTag={handleSelectTag}
            existingTags={selectedTags} // Pass existing tags to the modal
            trigger={
              <div className="text-sm flex flex-row gap-2 items-center cursor-pointer">
                + Tag
              </div>
            }
          />

            


          

          {/* <div className="p-6">
            <AddTagModal
              onSelectTag={handleSelectTag}
              existingTags={selectedTags} // Pass existing tags to the modal
              trigger={<div>+ tag</div>}
            />

            <div className="inline-block ml-4">
              {selectedTags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-200 text-lg text-gray-700 px-3 py-1 rounded"
                    >
                      <span>{tag}</span>
                      <button
                        className="ml-2 text-red-500"
                        onClick={() => handleRemoveTag(tag)} // Remove tag on click
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div> */}
        </div>

        {/* Right */}
        <div className="flex gap-7 items-center mr-3">
          <div className="text-sm items-center">Tier 1</div>
          <div className="text-sm flex flex-row gap-1 items-center">
            Status <FaCircle className="text-green-500 text-sm" />
          </div>
          <div className="text-sm flex flex-row gap-1 items-center">
            Cloud Sevice
            {/* <Image
                alt="company logo"
                src="https://static-00.iconduck.com/assets.00/google-cloud-icon-1024x823-wiwlyizc.png"
                width={5}
                height={5}
              /> */}
          </div>
          <div className="text-base text-gray-500 font-semibold items-center">
            CSM :
          </div>

          {/* Profile Menu */}
          <div className="group cursor-pointer flex justify-center items-center text-gray-600 transition-all ">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Avatar className="w-8 h-8 cursor-pointer">
                        <AvatarImage src="/users/dp.jpg" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Dana Morris</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="p-3 gap-2 text-sm">
                  <CgProfile size={20} />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 gap-2 text-sm md:hidden">
                  <FaRegBell size={20} />
                  Notifications
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 gap-2 text-sm md:hidden">
                  <MdHelpOutline size={20} />
                  Help Center
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 gap-2 text-sm">
                  <IoMdSettings size={20} />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 gap-2 text-sm">
                  <RiLogoutBoxLine size={20} />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerHeader;
