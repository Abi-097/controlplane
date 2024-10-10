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
} from "@/components/ui/select"
import { CgSandClock } from "react-icons/cg";
import { IoMdTime } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TbProgress } from "react-icons/tb";
import Image from "next/image";
import CreateNewTasksDialog from "@/app/components/Task/CreateNewTasksDialog";

export type TaskEngagementTableColumnsProps = {
  id: string;
  done:boolean;
  tasks:string;
  status: string; 
  dueDate: string;
  action: string;
  
};
const handleMenuItemClick = (event: React.MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
};
export const TaskEngagementTableColumns: ColumnDef<TaskEngagementTableColumnsProps>[] = [
  // done
  {
    accessorKey: "done",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
        >
          Done
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <Checkbox
            className="border-gray-300"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />       
          <Image
              className="rounded-full transition-all group-hover:scale-110"
              alt="profile"
              src={`/users/8.jpg`}
              width={24}
              height={24}
            />
        </div>
      );
    },
  },
    // tasks
    {
      accessorKey: "tasks",
      header: ({ column }) => {
        return (
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs w-[250px]"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            tasks
            <RiExpandUpDownLine className="ml-2 h-4 w-4" />
          </div>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="overflow-hidden text-ellipsis whitespace-nowrap w-[300px]">{row.getValue("tasks")}</div>
        )
      }

    },

    
    // Due Date
  {
    accessorKey: "dueDate",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Due Date
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

        <Select defaultValue={row.getValue("status")} >
      <SelectTrigger  className="w-[150px]">
        <SelectValue  />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Not started" className="text-sm text-gray-600 "><div className="flex flex-row items-center gap-2"><IoMdTime className="text-blue-500"/>Not Started</div></SelectItem>
          <SelectItem value="In progress" className="text-sm text-gray-600 "><div className="flex flex-row items-center gap-2"><TbProgress className="text-yellow-500"/>In Progress</div></SelectItem>
          <SelectItem value="Completed" className="text-sm text-gray-600 "><div className="flex flex-row items-center gap-2"><IoMdCheckmarkCircleOutline className="text-green-500"/>Completed</div></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
      </div>
    ),
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
    cell: ({ row }) => {

      return (
        <div className="flex flex-row gap-2 text-gray-600">
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
                    <CreateNewTasksDialog
                        mode="add"
                        trigger={
                          <span className="pl-2 gap-3 flex items-center justify-center">
                          <BiSolidEdit className="text-black" size={20} />              
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
      );
    },
  },
];
