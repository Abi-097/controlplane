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
import { MdOutlineHistory, MdOutlineSave } from "react-icons/md";
import { Checkbox } from "@/components/ui/checkbox";
import { IoSaveOutline } from "react-icons/io5";
// import AuditLogs from "@/app/components/History/AuditLogs/AuditLogs";

export type UserManagementPermissionColumnProps = {
  id: string;
  corporateName: string;
  corporateDesc: string;
  activity: string;
  createdAt: string;
  country: string;
  corporateType: string;
  state: string;
  workWeek: string;
  createdby: string;
  updatedby: string;
  updatedat: string;
  status: string;
};
const handleMenuItemClick = (event: React.MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
};
export const columns: ColumnDef<UserManagementPermissionColumnProps>[] = [
  {
    accessorKey: "PermissionRole",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Permission Role
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "Create",
    header: ({ column }) => {
      return (
        <div
          // className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Create
        </div>
      );
    },
    cell: ({ getValue }) => (
      <Checkbox
        className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] data-[state=unchecked]:border-[#7b808c]"
        checked={getValue() === "true"}
      />
    ),
  },
  {
    accessorKey: "UpdateEditModify",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          // className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Update/Edit/Modify
        </div>
      );
    },
    cell: ({ getValue }) => (
      <Checkbox
        className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] data-[state=unchecked]:border-[#7b808c]"
        checked={getValue() === "active"}
      />
    ),
  },
  {
    accessorKey: "Delete",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          // className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Delete
        </div>
      );
    },
    cell: ({ getValue }) => (
      <Checkbox
        className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] data-[state=unchecked]:border-[#7b808c]"
        checked={getValue() === "active"}
      />
    ),
  },
  {
    accessorKey: "CloneCopy",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          // className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Clone/Copy
        </div>
      );
    },
    cell: ({ getValue }) => (
      <Checkbox
        className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] data-[state=unchecked]:border-[#7b808c]"
        checked={getValue() === "active"}
      />
    ),
  },
  {
    accessorKey: "ViewDisplay",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          // className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          View/Display
        </div>
      );
    },
    cell: ({ getValue }) => (
      <Checkbox
        className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] data-[state=unchecked]:border-[#7b808c]"
        checked={getValue() === "active"}
      />
    ),
  },
  {
    accessorKey: "Share",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          // className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Share
        </div>
      );
    },
    cell: ({ getValue }) => (
      <Checkbox
        className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] data-[state=unchecked]:border-[#7b808c]"
        checked={getValue() === "active"}
      />
    ),
  },
  {
    accessorKey: "Download",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          // className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Download
        </div>
      );
    },
    cell: ({ getValue }) => (
      <Checkbox
        className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] data-[state=unchecked]:border-[#7b808c]"
        checked={getValue() === "active"}
      />
    ),
  },
  {
    accessorKey: "MetaData",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          // className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Meta Data
        </div>
      );
    },
    cell: ({ getValue }) => (
      <Checkbox
        className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] data-[state=unchecked]:border-[#7b808c]"
        checked={getValue() === "active"}
      />
    ),
  },
  {
    accessorKey: "PreviousData",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          // className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Previous Data
        </div>
      );
    },
    cell: ({ getValue }) => (
      <Checkbox
        className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] data-[state=unchecked]:border-[#7b808c]"
        checked={getValue() === "active"}
      />
    ),
  },
  {
    accessorKey: "Schedule",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          // className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Schedule
        </div>
      );
    },
    cell: ({ getValue }) => (
      <Checkbox
        className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] data-[state=unchecked]:border-[#7b808c]"
        checked={getValue() === "active"}
      />
    ),
  },
  {
    accessorKey: "Execute",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          // className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Execute
        </div>
      );
    },
    cell: ({ getValue }) => (
      <Checkbox
        className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] data-[state=unchecked]:border-[#7b808c]"
        checked={getValue() === "active"}
      />
    ),
  },
  {
    accessorKey: "Credentials",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          // className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Credentials
        </div>
      );
    },
    cell: ({ getValue }) => (
      <Checkbox
        className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] data-[state=unchecked]:border-[#7b808c]"
        checked={getValue() === "active"}
      />
    ),
  },
  {
    accessorKey: "createdby",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created By
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));

      // Function to get ordinal suffix
      const getOrdinalSuffix = (day: number) => {
        if (day > 3 && day < 21) return "th"; // Catch-all for 4-20
        switch (day % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      };
      // Format the date
      const monthFormatter = new Intl.DateTimeFormat("en-GB", {
        month: "short",
      });
      const day = date.getDate();
      const year = date.getFullYear();
      const formattedMonth = monthFormatter.format(date);
      const ordinalSuffix = getOrdinalSuffix(day);

      const formattedDate = `${formattedMonth} ${day}${ordinalSuffix} ${year}`;

      // Format the time
      const timeFormatter = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      const formattedTime = timeFormatter.format(date);
      const formattedDateTime = `${formattedDate} ${formattedTime}`;
      return (
        <div className="font-medium">
          <span>{formattedDateTime}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "updatedby",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Updated By
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "updatedat",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Updated At
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    id: "actions",
    // header: "Action",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
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
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy user ID
            </DropdownMenuItem> */}

            <DropdownMenuItem>
              <span className="pl-2 gap-1 flex items-center justify-center ">
                <IoSaveOutline className="mr-2 " size={20} />
                Save
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
