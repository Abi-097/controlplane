import React from "react";
import { BsThreeDots, BsTicket } from "react-icons/bs";
import { MdInfoOutline } from "react-icons/md";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { MdOutlineHistory } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiDeleteBin5Line, RiExpandUpDownLine, RiShareForwardLine } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Delete from "../common/Delete";
import { CiExport } from "react-icons/ci";
import { FaRegFolderOpen } from "react-icons/fa";
import AssignFolder from "./AssignFolder";
import { BiSolidEdit } from "react-icons/bi";
export type TemplateTableColumn = {
  id: number;
  name: string;
  content: string;
  createdBy: string;
  createdOn: string;
  modifiedBy: string;
  modifiedOn: string;
  status: boolean;
  folder: string;
};
const handleMenuItemClick = (event: React.MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
};

export const TemplateTableColumns: ColumnDef<TemplateTableColumn>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "folder",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Folder
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "createdBy",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created By
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
                  <Avatar className="w-6 h-6 rounded-3xl">
                    <AvatarImage src={`/users/1.jpg`} alt="@shadcn" />
                  </Avatar>
                  <div className="capitalize text-sm">Alexandra Cox</div>
                </div>
      )
      
    }
  },
  {
    accessorKey: "createdOn",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created On
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },

  {
    accessorKey: "modifiedBy",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Modified By
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
    // cell: ({ row }) => {
    //   return (
    //     <div className="flex gap-2 items-center">
    //               <Avatar className="w-6 h-6 rounded-3xl">
    //                 <AvatarImage src={`/users/1.jpg`} alt="@shadcn" />
    //               </Avatar>
    //               <div className="capitalize text-sm">Alexandra Cox</div>
    //             </div>
    //   )
      
    // }
  },
  {
    accessorKey: "modifiedOn",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Modified On
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },




  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      return(
        <div>
           {row ? (
        <FaCircleCheck className="text-green-800 text-[16px] lg:text-[20px]" />
      ) : (
        <IoMdCloseCircle className="text-red-700 text-[16px] lg:text-[20px]" />
      )}
        </div>
      )
     
    }
  },

  {
    id: "actions",
    header: () => {
      return (
        <div className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs">
          Action
        </div>
      );
    },
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer rounded-full hover:bg-gray-200 h-8 w-8 p-0 flex items-center justify-center">
                      <BsThreeDots className="h-4 w-4" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      className="cursor-pointer"
                      // onClick={handleMenuItemClick}
                    >
                      <span
                        // onClick={() => openModal(template)}
                        className="pl-2 gap-3 flex items-center justify-start"
                      >
                        <BiSolidEdit className="text-black" size={20} />
                        Edit
                      </span>
                    </DropdownMenuItem>

                    {/* <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={handleMenuItemClick}
                    >
                      <AssignFolder
                        trigger={
                          <span className="pl-2 gap-3 flex items-center justify-start">
                            <FaRegFolderOpen className="text-black" size={18} />
                            Assign
                          </span>
                        }
                        // onSaveFolder={handleSaveFolder}
                      />
                    </DropdownMenuItem> */}
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={handleMenuItemClick}
                    >
                      <span className="pl-2 gap-3 flex items-center justify-start">
                        <RiShareForwardLine className="text-black" size={18} />
                        Share
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span
                        // onClick={() => handleExport(template)}
                        className="pl-2 gap-3 flex items-center justify-start"
                      >
                        <CiExport className="text-black" size={20} />
                        Export
                      </span>
                    </DropdownMenuItem>
                  
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={handleMenuItemClick}
                    >
                      <Delete
                        trigger={
                          <span className="pl-2 gap-3 flex items-center justify-start">
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
      );
    },
  },
];
