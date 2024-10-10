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

export type PlaysTableColumnProps = {
  id: string;
  name: string;
  status: string;
  progress: string;
  milestones: string;
  startDate: string;
  dueDate: string;
  action: string;
};
const handleMenuItemClick = (event: React.MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
};
export const PlaysTableColumns: ColumnDef<PlaysTableColumnProps>[] = [
  // name
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs w-[400px]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
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
      <div
        className={clsx(
          "capitalize text-center p-[1px] px-2 rounded-sm w-fit",
          row.getValue("status") === "Completed"
            ? "text-white bg-green-500"
            : row.getValue("status") === "Running"
            ? "text-white bg-yellow-300"
            : "text-white bg-gray-400"
        )}
      >
        {row.getValue("status")}
      </div>
    ),
  },
  // progress
  {
    accessorKey: "progress",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Progress
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex  flex-col mx-0 px-0 w-[200px]">
        {/* {row.getValue("progress") === true ? (
          <FaCircleCheck className="text-green-800 text-[16px] lg:text-[20px]" />
        ) : (
          <IoMdCloseCircle className="text-red-700 text-[16px] lg:text-[20px]" />
        )} */}

        <div className="flex flex-col pb-1 ">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-[#0284c7]  h-3 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
        <div className="flex text-center justify-center">
          {row.getValue("progress")}
        </div>
      </div>
    ),
  },
  // milestone
  {
    accessorKey: "milestones",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Milestones
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  // Start Date
  {
    accessorKey: "startDate",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Start Date
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
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
          Due Dates
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
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
        <div className="flex flex-row gap-2 text-gray-600">
          <BiSolidEdit size={20} className="cursor-pointer"/>

          <Delete
            trigger={
              <span className="pl-2 gap-3 flex items-center justify-center">
                <RiDeleteBin5Line className="text-red-500 cursor-pointer" size={20} />
              </span>
            }
          />
        </div>
      );
    },
  },
];
