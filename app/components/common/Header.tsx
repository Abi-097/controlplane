"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";
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
import SearchBar from "./SearchBar";
import Notifications from "../Notifications/Notifications";
import { GoBell, GoQuestion } from "react-icons/go";
import { useRouter } from "next/navigation";
import CustomTooltip from "./Tooltip/CustomTooltip";
import { Button } from "@/components/ui/button";
const Header = () => {
  const router = useRouter();

  // Handle logout
  const handleLogout = () => {
    // Clear session/local storage
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");

    router.push("/");
  };

  const handleProfile = () => {
    router.push("/settingsmain/my-profile/name-image");
  };

  const handleSettings = () => {
    router.push("/settingsmain/user-management/user");
  };
  return (
    <div className="flex px-10 py-3 justify-between items-center">
      <SearchBar />
      <div className="flex gap-4 items-center mr-3">
        <Popover>
          <PopoverTrigger>
            <CustomTooltip
              text="Notifications"
              trigger={
                <div>
                  <Button variant="outline" className="border-none px-2">
                    <GoBell size={24} />
                  </Button>
                </div>
              }
            />
          </PopoverTrigger>
          <PopoverContent className="w-[450px]">
            <div className="flex items-center justify-between">
              <p className="text-sm text-black">Notifications</p>
              <p className="text-sm text-gray-600">Mark all as read</p>
            </div>
            <Notifications />
          </PopoverContent>
        </Popover>

        <CustomTooltip
          text="Help Center"
          trigger={
            <div>
              <Button variant="outline" className="border-none px-2">
                <GoQuestion size={24} />
              </Button>
            </div>
          }
        />
        {/* Profile Menu */}
        <div className="group cursor-pointer flex justify-center items-center text-gray-600 transition-all ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CustomTooltip
                text="Dana Morris"
                trigger={
                  <div>
                    <Button variant="outline" className="border-none px-2">
                      <Avatar className="w-8 h-8 cursor-pointer">
                        <AvatarImage src="/users/dp.jpg" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </Button>
                  </div>
                }
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="p-3 gap-2 text-sm"
                onClick={handleProfile}
              >
                <CgProfile size={20} />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 gap-2 text-sm md:hidden">
                <Popover>
                  <PopoverTrigger>
                    <div className="flex items-center gap-2">
                      <FaRegBell size={20} />
                      Notifications
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-[450px]">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-black">Notifications</p>
                      <p className="text-sm text-gray-600">Mark all as read</p>
                    </div>
                    <Notifications />
                  </PopoverContent>
                </Popover>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 gap-2 text-sm md:hidden">
                <MdHelpOutline size={20} />
                Help Center
              </DropdownMenuItem>
              <DropdownMenuItem
                className="p-3 gap-2 text-sm"
                onClick={handleSettings}
              >
                <IoMdSettings size={20} />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                className="p-3 gap-2 text-sm"
                onClick={handleLogout}
              >
                <RiLogoutBoxLine size={20} />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
