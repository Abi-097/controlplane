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
import { BsThreeDots } from "react-icons/bs";
import AddAccountAccessDialog from "./AddAccountAccess";
import { FillButton } from "@/components/libs/buttons";
import { GoShieldLock } from "react-icons/go";
import History from "@/app/components/History/History";
import Delete from "@/app/components/common/Delete";
// import AuditLogs from "@/app/components/History/AuditLogs/AuditLogs";

export type AccountAccessTableColumnProps = {
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
export const columns: ColumnDef<AccountAccessTableColumnProps>[] = [
  {
    accessorKey: "approved",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Approved By
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "from",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          From
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },

  {
    accessorKey: "duration",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Duration (Days)
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "to",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          To
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "ticket",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ticket #
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <BsThreeDots className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(UsersData.id)}
            >
              Copy user ID
            </DropdownMenuItem> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={handleMenuItemClick}
            >
              <AddAccountAccessDialog
                mode="addAccess"
                trigger={
                  <FillButton className="px-2 py-1">
                    <p className="text-sm">Add Account Access</p>
                  </FillButton>
                }
              />
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              // onClick={handleMenuItemClick}
            >
              <GoShieldLock />
              Security
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={handleMenuItemClick}
            >
              <History
                trigger={
                  <span className="flex items-center justify-center">
                    <MdOutlineHistory className="mr-2" size={20} /> History
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
                  <span className="flex items-center justify-center">
                    <RiDeleteBin5Line className="mr-2 text-red-500" size={20} />{" "}
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
