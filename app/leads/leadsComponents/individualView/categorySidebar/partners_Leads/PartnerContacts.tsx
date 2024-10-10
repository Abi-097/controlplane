import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import { GrContactInfo } from "react-icons/gr";
import { useState } from "react";
import { MdDeleteOutline, MdOutlineHistory } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import Image from "next/image";
import clsx from "clsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { BiSolidEdit, BiTransfer } from "react-icons/bi";

import {
  BsThreeDots,
  BsGenderFemale,
  BsGenderMale,
  BsGenderTrans,
} from "react-icons/bs";
import AddContactDialog from "@/app/components/ContactTable/AddContact";
import ConvertContact from "@/app/components/convertContact/ConvertContact";
import History from "@/app/components/History/History";
import Delete from "@/app/components/common/Delete";
import LogCallDialog from "@/app/components/Call/LogCallDialog";
import dynamic from "next/dynamic";
const EmailDialog = dynamic(
  () => import("@/app/components/EmailContent/Email"),
  {
    ssr: false,
  }
);
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
};

type GridCardProps = {
  users: User[];
};


const PartnerContacts: React.FC<GridCardProps> = ({ users }) => {
  const [isCardOpen, setIsCardOpen] = useState<boolean>(false);

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
    <>
      <div className="flex flex-row text-sm justify-between items-center pb-0 w-full rounded-sm"></div>

      <div className="grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 justify-start">
        {users.map((user) => (
          <Card key={user.id} className="shadow-sm w-full bg-white">
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
                          <BsGenderMale size={11} className="text-gray-600" />
                        )}
                        {user.gender === "Female" && (
                          <BsGenderFemale className="text-gray-400" />
                        )}
                        {user.gender !== "Male" && user.gender !== "Female" && (
                          <BsGenderTrans className="text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-[18px] text-gray-700">
                      {user.name}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <SlLocationPin />{" "}
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
                    <DropdownMenuItem
                      // onClick={() => {
                      //   const tmp_data = UsersData.find(
                      //     (item) => item.id === user.id
                      //   );

                      //   setPanelData(tmp_data);
                      //   setPanelVisible(true);
                      //   setExtendedUserInfoPanelVisible(false);
                      // }}
                      className="cursor-pointer"
                    >
                      <span className="pl-2 gap-3 flex items-center justify-center">
                        <GrContactInfo size={20} /> Contact View
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      // onClick={() => {
                      //   const tmp_data = UsersData.find(
                      //     (item) => item.id === user.id
                      //   );

                      //   setPanelData(tmp_data);
                      //   setPanelVisible(false);
                      //   setExtendedUserInfoPanelVisible(true);
                      // }}
                      className="cursor-pointer"
                    >
                      <span className="pl-2 gap-3 flex items-center justify-center">
                        <GrContactInfo size={20} /> Contact Full View
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
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={handleMenuItemClick}
                    >
                      <LogCallDialog
                        trigger={
                          <span className="pl-2 gap-3 flex items-center justify-center">
                            <FiPhone size={20} /> Call
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
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              {isCardOpen && <EmailDialog onClose={handleCloseCard} />}
              {/* <div className="flex items-center">
                <p
                  className={clsx(
                    "mt-1 p-1 cursor-default rounded-md text-sm",
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
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <TfiEmail className="mt-1" />{" "}
                <p className="mt-1"> {user.email}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <PiPhoneLight className="mt-1" />{" "}
                <p className="mt-1">{user.contact}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <Image
                  className="rounded-full transition-all group-hover:scale-110 mt-1"
                  alt="profile"
                  src=""
                  width={24}
                  height={24}
                />
                <p className="mt-1">{user.company}</p>
              </div> */}
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
};

export default PartnerContacts;
