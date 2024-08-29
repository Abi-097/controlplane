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

export type UserManagementUserColumnProps = {
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
export const columns: ColumnDef<UserManagementUserColumnProps>[] = [
  {
    accessorKey: "UserID",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User ID
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "FirstName",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "LastName",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Name
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "Group",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Group
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "Role",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Role
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "Email",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "Status",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "Photo",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Photo
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "DepartmentDesc",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Department Desc
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "Reporting Manager",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Reporting Manager
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },

  {
    accessorKey: "createdby",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
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
          className="flex items-center gap-2 cursor-pointer select-none"
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
          className="flex items-center gap-2 cursor-pointer select-none"
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
          className="flex items-center gap-2 cursor-pointer select-none"
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
    header: "Action",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          {/* <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span className="pl-2 gap-1 flex items-center justify-center">
                <MdOutlineHistory className="mr-2" size={20} /> Pending !!!
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleMenuItemClick}>
              <AuditLogs
                trigger={
                  <span className="pl-2 gap-1 flex items-center justify-center">
                    <RiDeleteBin5Line className="mr-2" size={20} /> Audit Logs
                  </span>
                }
              />
            </DropdownMenuItem>
          </DropdownMenuContent> */}
        </DropdownMenu>
      );
    },
  },
];
