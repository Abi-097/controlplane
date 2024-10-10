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

export type InvoiceBillingColumnProps = {
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
export const columns: ColumnDef<InvoiceBillingColumnProps>[] = [
  {
    accessorKey: "BudgetID",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Budget ID
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "Name",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "Workspace",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Workspace
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "Folder",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Folder
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "Scope",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Scope
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "TimeRange",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TimeRange
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "StartDate",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Start Date
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("StartDate"));

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
    accessorKey: "EndDate",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          End Date
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("EndDate"));

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
    accessorKey: "Budget",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Budget
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "BudgetType",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Budget Type
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "CurrentSpend",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Current Spend
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "Progress",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Progress
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
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
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
    accessorKey: "updatedAt",

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
    id: "actions",
    header: () => {
      return (
        <div className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap">
          Action
        </div>
      );
    },
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
