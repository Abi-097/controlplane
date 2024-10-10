import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiDeleteBin5Line, RiExpandUpDownLine } from "react-icons/ri";
import { MoreHorizontal } from "lucide-react";
import { MdOutlineHistory } from "react-icons/md";
// import AuditLogs from "@/app/components/History/AuditLogs/AuditLogs";
import clsx from "clsx";
import { RiDeleteBinLine, RiLockPasswordLine } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import Delete from "@/app/components/common/Delete";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsThreeDots } from "react-icons/bs";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CgSandClock } from "react-icons/cg";
import { IoMdCloseCircle, IoMdTime } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TbProgress } from "react-icons/tb";
import Image from "next/image";
import CreateNewTasksDialog from "@/app/components/Task/CreateNewTasksDialog";
import { FaCircleCheck } from "react-icons/fa6";

export type Current_approvalTableColumnsProps = {
  id: string;
  requestedBy: string;
  description: string;
  date: string;
  status: boolean;
  approvedBy: string;
  // action: string;
};
const handleMenuItemClick = (event: React.MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
};
export const Current_approvalTableColumns: ColumnDef<Current_approvalTableColumnsProps>[] =
  [
    // requestedBy
    {
      accessorKey: "requestedBy",
      header: ({ column }) => {
        return (
          <div className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs">
            Requested By
          </div>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="flex gap-2 items-center">          
            <Image
              className="rounded-full transition-all group-hover:scale-110"
              alt="profile"
              src={`/users/8.jpg`}
              width={24}
              height={24}
            />
            <div>{row.getValue("requestedBy")}</div>
          </div>
        );
      },
    },
    // description
    {
      accessorKey: "description",
      header: ({ column }) => {
        return (
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs w-[200px]"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Description
            <RiExpandUpDownLine className="ml-2 h-4 w-4" />
          </div>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="overflow-hidden text-ellipsis whitespace-nowrap w-[200px]">
            {row.getValue("description")}
          </div>
        );
      },
    },

      // Date
      {
        accessorKey: "date",
        header: ({ column }) => {
          return (
            <div
              className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Date
              <RiExpandUpDownLine className="ml-2 h-4 w-4" />
            </div>
          );
        },
      },

    // Status
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
      cell: ({ row }) => (
        <div>
         
          {row.getValue("status") === true ? (
            <div className="flex flex-row items-center gap-2">
            <FaCircleCheck className="text-green-800 text-[16px] lg:text-[20px]" />
            Approved
          </div>
          ) : (
            <div className="flex flex-row items-center gap-2">
            <IoMdCloseCircle className="text-red-700 text-[16px] lg:text-[20px]" />
            Rejected
          </div>
          )}
        </div>
      ),
    },

    // approvedBy
    {
      accessorKey: "approvedBy",
      header: ({ column }) => {
        return (
          <div className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs">
            Approved By
          </div>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="flex gap-2 items-center">
           
            <Image
              className="rounded-full transition-all group-hover:scale-110"
              alt="profile"
              src={`/users/6.jpg`}
              width={24}
              height={24}
            />
            <div>{row.getValue("approvedBy")}</div>

          </div>
        );
      },
    },

    // {
    //   id: "actions",
    //   header: () => {
    //     return (
    //       <div className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs">
    //         Action
    //       </div>
    //     );
    //   },
    //   cell: ({ row }) => {
    //     return (
    //       <div className="flex flex-row gap-2 text-gray-600">
    //         <DropdownMenu>
    //           <DropdownMenuTrigger asChild>
    //             <div className="cursor-pointer rounded-full hover:bg-gray-200 h-8 w-8 p-0 flex items-center justify-center">
    //               <BsThreeDots className="h-4 w-4" />
    //             </div>
    //           </DropdownMenuTrigger>
    //           <DropdownMenuContent align="end">
    //             {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
    //             <DropdownMenuItem
    //               className="cursor-pointer"
    //               onClick={handleMenuItemClick}
    //             >
    //               <CreateNewTasksDialog
    //                 mode="edit"
    //                 trigger={
    //                   <span className="pl-2 gap-3 flex items-center justify-center">
    //                     <BiSolidEdit className="text-black" size={20} />
    //                     Edit
    //                   </span>
    //                 }
    //               />
    //             </DropdownMenuItem>

    //             <DropdownMenuItem
    //               className="cursor-pointer"
    //               onClick={handleMenuItemClick}
    //             >
    //               <Delete
    //                 trigger={
    //                   <span className="pl-2 gap-3 flex items-center justify-center">
    //                     <RiDeleteBin5Line className="text-red-500" size={20} />
    //                     Delete
    //                   </span>
    //                 }
    //               />
    //             </DropdownMenuItem>
    //           </DropdownMenuContent>
    //         </DropdownMenu>
    //       </div>
    //     );
    //   },
    // },
  ];
