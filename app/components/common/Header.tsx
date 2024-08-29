"use client";
import { IoChevronDownSharp, IoHelpCircleOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";
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
import SearchBar from "./SearchBar";
import ActionItem from "./ActionItem";
import Notifications from "../Notifications/Notifications";
import { GoBell, GoQuestion } from "react-icons/go";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="flex px-10 py-3 justify-between items-center border-b-2">
      <SearchBar />
      <div className="flex gap-4 items-center mr-3">
        <Popover>
          <PopoverTrigger>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="hidden md:flex">
                    <GoBell size={24} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </PopoverTrigger>
          <PopoverContent className="w-[450px]">
            <div className="flex items-center justify-between">
              <p className="text-sm text-black">Notifications</p>
              <p className="text-sm text-gray-600">Mark all as read</p>
            </div>
            <Notifications />
          </PopoverContent>
        </Popover>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="hidden md:flex">
                <GoQuestion size={26} />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Help Center</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Profile Menu */}
        <div className="group cursor-pointer flex justify-center items-center text-gray-600 transition-all ">
          {/* <div className="rounded-full mr-3 w-[20px] h-[20px] overflow-hidden">
            <Image
              className="rounded-full transition-all group-hover:scale-110"
              alt="profile"
              src={"/users/dp.jpg"}
              width={24}
              height={24}
            />
          </div> */}

          <div className="relative">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar
                    className="w-8 h-8 cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <AvatarImage src="/users/dp.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Dana Morris</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Dropdown Menu */}
            {dropdownVisible && (
              <div
                ref={dropdownRef}
                className="absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg w-40"
              >
                <ul className="flex flex-col text-left p-2">
                  <li className="p-2 gap-3 hover:bg-gray-100 cursor-pointer text-sm flex items-center">
                    <CgProfile size={20} />
                    Profile
                  </li>
                  <li className="p-2 gap-3 hover:bg-gray-100 cursor-pointer text-sm flex items-center md:hidden">
                    <FaRegBell size={20} />
                    Notifications
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer text-sm flex items-center md:hidden">
                    <MdHelpOutline size={20} />
                    Help Center
                  </li>
                  <li className="p-2 gap-3 hover:bg-gray-100 cursor-pointer text-sm flex items-center">
                    <IoMdSettings size={20} />
                    Settings
                  </li>
                  <li className="p-2 gap-3 hover:bg-gray-100 cursor-pointer text-sm flex items-center">
                    <RiLogoutBoxLine size={20} />
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
