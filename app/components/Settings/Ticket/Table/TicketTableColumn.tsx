import React from "react";
import { BsTicket } from "react-icons/bs";
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
import { RiDeleteBin5Line, RiExpandUpDownLine } from "react-icons/ri";
export type TicketTableColumn = {
  id: string;
  objectType: string;
  objectServer: string;
  activity: string;
  createdAt: string;
};
const handleMenuItemClick = (event: React.MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
};

export const columns: ColumnDef<TicketTableColumn>[] = [
  {
    accessorKey: "ticketId",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ticket ID
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "ticketNo",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ticket Number
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "ticketName",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ticket Name
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "ticketDescription",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ticket Description
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
    accessorKey: "issueState",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Issue State
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "priority",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Priority
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

      // // Format the date
      // const dateFormatter = new Intl.DateTimeFormat("en-GB", {
      //   day: "numeric",
      //   month: "long",
      //   year: "numeric",
      // });
      // const formattedDate = dateFormatter.format(date);

      // // Format the time
      // const timeFormatter = new Intl.DateTimeFormat("en-GB", {
      //   hour: "2-digit",
      //   minute: "2-digit",
      //   second: "2-digit",
      //   hour12: true,
      // });
      // const formattedTime = timeFormatter.format(date);
      // const formattedDateTime = `${formattedDate} ${formattedTime}`;

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
    accessorKey: "updatedBy",

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
    accessorKey: "updatedAt",

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
    cell: ({ row }) => {
      const date = new Date(row.getValue("updatedAt"));

      // // Format the date
      // const dateFormatter = new Intl.DateTimeFormat("en-GB", {
      //   day: "numeric",
      //   month: "long",
      //   year: "numeric",
      // });
      // const formattedDate = dateFormatter.format(date);

      // // Format the time
      // const timeFormatter = new Intl.DateTimeFormat("en-GB", {
      //   hour: "2-digit",
      //   minute: "2-digit",
      //   second: "2-digit",
      //   hour12: true,
      // });
      // const formattedTime = timeFormatter.format(date);
      // const formattedDateTime = `${formattedDate} ${formattedTime}`;

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
    accessorKey: "ownerID",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Owner ID
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "ownerName",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Owner Name
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "assignName",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Assigned To Name
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "label",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Label
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "productisse",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product Issue or Bug
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "startDate",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Start Date
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "dueDate",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Due Date
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "module",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Module
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "moduleID",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Module ID
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "cycle",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cycle
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "parentTicket",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ParentTicket
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "notifiedDate",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          DateNue Notified Date
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
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy user ID
            </DropdownMenuItem> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem onClick={handleMenuItemClick}>
              {/* <HistoryData /> */}
              {/* </span> */}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleMenuItemClick}></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
