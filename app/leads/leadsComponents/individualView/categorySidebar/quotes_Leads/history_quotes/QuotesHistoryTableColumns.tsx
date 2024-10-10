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
import HistoryData from "@/app/components/History/HistoryDetails/HistoryData";
import { useRouter } from "next/navigation";
import { MdOutlineHistory } from "react-icons/md";

type ProductData = {
    product: string;
    billing_start_date: string;
    price: number;
    quantity: number;
    discount: number;
    tax: number;
    amount: number;
  };
const handleMenuItemClick = (event: React.MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
};

const ActionCell = ({ row }: { row: any }) => {
  const router = useRouter();
  const user = row.original;

  const handleAuditLogsClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    router.push("/settingsmain/audit-logs");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* <DropdownMenuItem>
          <HistoryData
            trigger={
              <span className="pl-2 gap-1 flex items-center justify-center">
                <MdOutlineHistory className="mr-2" size={20} /> History Details
              </span>
            }
          />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleAuditLogsClick}>
          <span className="pl-2 gap-1 flex items-center justify-center">
            <RiDeleteBin5Line className="mr-2" size={20} /> Audit Logs
          </span>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const QuotesHistoryTablecolumns: ColumnDef<ProductData>[] = [
  {
    accessorKey: "product",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Products
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "billing_start_date",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Billing Start Date
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "price",

    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
//   {
//     accessorKey: "createdAt",

//     header: ({ column }) => {
//       return (
//         <div
//           className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Created At
//           <RiExpandUpDownLine className="ml-2 h-4 w-4" />
//         </div>
//       );
//     },
//     cell: ({ row }) => {
//       const date = new Date(row.getValue("createdAt"));

//       // Function to get ordinal suffix
//       const getOrdinalSuffix = (day: number) => {
//         if (day > 3 && day < 21) return "th"; // Catch-all for 4-20
//         switch (day % 10) {
//           case 1:
//             return "st";
//           case 2:
//             return "nd";
//           case 3:
//             return "rd";
//           default:
//             return "th";
//         }
//       };
//       // Format the date
//       const monthFormatter = new Intl.DateTimeFormat("en-GB", {
//         month: "short",
//       });
//       const day = date.getDate();
//       const year = date.getFullYear();
//       const formattedMonth = monthFormatter.format(date);
//       const ordinalSuffix = getOrdinalSuffix(day);

//       const formattedDate = `${formattedMonth} ${day}${ordinalSuffix} ${year}`;

//       // Format the time
//       const timeFormatter = new Intl.DateTimeFormat("en-GB", {
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: true,
//       });
//       const formattedTime = timeFormatter.format(date);
//       const formattedDateTime = `${formattedDate} ${formattedTime}`;
//       return (
//         <div className="font-medium">
//           <span>{formattedDateTime}</span>
//         </div>
//       );
//     },
//   },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Quantity
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "discount",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Discount
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "tax",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tax
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => (
      <div className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs">
        Action
      </div>
    ),
    enableHiding: false,
    cell: ({ row }) => <ActionCell row={row} />, // Use the ActionCell component
  },
];
