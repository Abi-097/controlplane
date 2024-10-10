import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CustomTooltip from "@/app/components/common/Tooltip/CustomTooltip";
import { BsThreeDots } from "react-icons/bs";
import Delete from "@/app/components/common/Delete";
import { RiDeleteBin5Line } from "react-icons/ri";

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
  date: string;
  desBody: string;
  desHead: string;
};

type GridCardProps = {
  users: User[];
};

const StageHistoryGride: React.FC<GridCardProps> = ({ users }) => {
  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <>
      <div className="flex flex-row text-sm justify-between items-center pb-0 w-full rounded-sm"></div>

      <div className="grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 justify-start">
        {users.map((user) => (
          <Card
            key={user.id}
            className="shadow-sm w-full bg-white p-4 max-h-[15vh]"
          >
            <div className="flex justify-between flex-row">
              <div className="flex items-center gap-5 mb-1">
                <div>
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={`/users/${user.id}.jpg`} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col text-sm">
                  <div className=" text-gray-800"> {user.desHead}</div>

                  <div className=" text-gray-500"> {user.desBody}</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-800 flex flex-row gap-5">
                  <div> {user.date}</div>
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
          </Card>
        ))}
      </div>
    </>
  );
};

export default StageHistoryGride;
