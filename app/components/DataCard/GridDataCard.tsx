import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import {
  BsThreeDots,
  BsGenderFemale,
  BsGenderMale,
  BsGenderTrans,
} from "react-icons/bs";
import Image from "next/image";

import UsersData from "@/public/data/users";
import { usePanel } from "../content/UserInfoPanel/UserPanelContext";

import clsx from "clsx";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline, MdOutlineHistory } from "react-icons/md";
import { SiConvertio } from "react-icons/si";
import { GrContactInfo } from "react-icons/gr";
import { BiSolidEdit, BiTransfer } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoFemale, IoMailOpenOutline, IoMale } from "react-icons/io5";

import ConvertContact from "../convertContact/ConvertContact";
import History from "@/app/components/History/History";
import Delete from "@/app/components/common/Delete";
import { useState } from "react";

import { FiPhone } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
// import { User } from "@/public/data/users";
import dynamic from "next/dynamic";
import LogCallDialog from "../Call/LogCallDialog";
import AddContactDialog from "../ContactTable/AddContact";
import AddData from "../NodataComponent/AddData";
import CreateNewChat from "../Chat/CreateNewChat";
import { VscSend } from "react-icons/vsc";
import {
  Mail,
  MapPin,
  NotebookPen,
  Phone,
  Plus,
  Projector,
} from "lucide-react";
import AddNewMeeting from "../MeetingContent/AddNewMeeting";
import LogDialog from "../Log/LogDialog";
import AddNoteDialog from "../NotesContent/NewNote";
const EmailDialog = dynamic(() => import("../EmailContent/Email"), {
  ssr: false,
});

type Activity = {
  id: number;
  remainder: string;
  task_priority: string;
  assigned_to: string;
};

type Note = {
  id: number;
  time: string;
  note: string;
};

type User = {
  id: number;
  name: string;
  gender: string;
  email: string;
  contact: string;
  job_title: string;
  annual_revenue: number;
  status: string;
  location: string;
  company: string;
  country: string;
  category: string;
  image?: string;
  activities: Activity[];
  notes: Note[];
};

type GridCardProps = {
  users: User[];
};
const GridCard: React.FC<GridCardProps> = ({ users }) => {
  const [isCardOpen, setIsCardOpen] = useState<boolean>(false);
  const { setPanelVisible, setPanelData, setExtendedUserInfoPanelVisible } =
    usePanel();

  const handleAddCategoryClick = () => {
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };
  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <div>
      {users.length > 0 ? (
        <div className="px-4 py-2 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-start bg-fullbg">
          {users.map((user) => (
            <Card key={user.id} className="shadow-md w-full bg-white">
              <CardHeader>
                <div className="flex justify-between relative">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="relative">
                      <Avatar className="w-14 h-14">
                        <AvatarImage src={user.image} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>

                      <div className="absolute bottom-2 right-1 transform translate-x-1/2 translate-y-1/2">
                        <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full border border-gray-400 ">
                          {user.gender === "Male" && (
                            <IoMale size={11} className="text-gray-600" />
                          )}
                          {user.gender === "Female" && (
                            <IoFemale size={11} className="text-gray-600" />
                          )}
                          {user.gender !== "Male" &&
                            user.gender !== "Female" && (
                              <BsGenderTrans
                                size={11}
                                className="text-gray-600"
                              />
                            )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-[18px] text-textColor">
                        {user.name}
                      </CardTitle>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <MapPin size={14} />
                        <p>
                          {user.location}, {user.country}
                        </p>
                      </div>
                    </div>
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
                        <AddContactDialog
                          mode="edit"
                          trigger={
                            <span className="pl-2 gap-3 flex items-center justify-center">
                              <BiSolidEdit className="text-black" size={20} />{" "}
                              Edit{" "}
                            </span>
                          }
                        />
                      </DropdownMenuItem>
                      {/* <DropdownMenuItem
                        onClick={() => {
                          const tmp_data = UsersData.find(
                            (item) => item.id === user.id
                          );

                          setPanelData(tmp_data);
                          setPanelVisible(true);
                          setExtendedUserInfoPanelVisible(false);
                        }}
                        className="cursor-pointer"
                      >
                        <span className="pl-2 gap-3 flex items-center justify-center">
                          <GrContactInfo size={20} /> Contact View
                        </span>
                      </DropdownMenuItem> */}
                      <DropdownMenuItem
                        onClick={() => {
                          const tmp_data = UsersData.find(
                            (item) => item.id === user.id
                          );

                          setPanelData(tmp_data);
                          setPanelVisible(false);
                          setExtendedUserInfoPanelVisible(true);
                        }}
                        className="cursor-pointer"
                      >
                        <span className="pl-2 gap-3 flex items-center justify-center">
                          <GrContactInfo size={20} /> Contact View
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={handleMenuItemClick}
                      >
                        <ConvertContact
                          trigger={
                            <span className="pl-2 gap-3 flex items-center justify-center">
                              <BiTransfer size={20} />
                              Convert Contact
                            </span>
                          }
                        />
                      </DropdownMenuItem>

                      <DropdownMenuSeparator />
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
                        <LogDialog
                          trigger={
                            <span className="pl-2 gap-3 flex items-center justify-center">
                              <Plus size={17} /> Logs
                            </span>
                          }
                        />
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={handleMenuItemClick}
                      >
                        <CreateNewChat
                          trigger={
                            <span className="pl-2 gap-3 flex items-center justify-center">
                              <VscSend className="" size={20} /> Chat
                            </span>
                          }
                        />
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={handleMenuItemClick}
                      >
                        <LogCallDialog
                          trigger={
                            <span className="pl-2 gap-3 flex items-center justify-center">
                              <FiPhone className="" size={20} /> Call
                            </span>
                          }
                        />
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={handleAddCategoryClick}
                      >
                        <span className="pl-2 gap-3 flex items-center justify-center">
                          <HiOutlineMailOpen size={20} /> Mail
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={handleMenuItemClick}
                      >
                        <History
                          trigger={
                            <span className="pl-2 gap-3 flex items-center justify-center">
                              <MdOutlineHistory size={20} /> History
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
                              <RiDeleteBin5Line
                                className="text-red-500"
                                size={20}
                              />
                              Delete
                            </span>
                          }
                        />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {isCardOpen && <EmailDialog onClose={handleCloseCard} />}
                <div className="flex items-center">
                  <p
                    className={clsx(
                      "mt-1 p-1 cursor-default rounded-md text-sm font-semibold",
                      user?.category === "Customers"
                        ? "text-[#4167ED] bg-[#4167ED20]"
                        : user?.category === "Employee"
                        ? "text-[#7F3E9F] bg-[#7F3E9F20]"
                        : "text-[#C5873D] bg-[#C5873D20]"
                    )}
                  >
                    {user.category}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-textColor text-sm">
                  <Mail size={14} className="mt-1" />{" "}
                  <p className="mt-1"> {user.email}</p>
                </div>
                <div className="flex items-center gap-2 text-textColor text-sm">
                  <Phone size={14} className="mt-1" />{" "}
                  <p className="mt-1">{user.contact}</p>
                </div>
                <div className="flex items-center gap-2 text-textColor text-sm mb-1">
                  <Image
                    className="rounded-full transition-all group-hover:scale-110 mt-1"
                    alt="profile"
                    src=""
                    width={24}
                    height={24}
                  />
                  <p className="mt-1">{user.company}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <AddData buttonText="Add Contact" />
        </div>
      )}
    </div>
  );
};

export default GridCard;
