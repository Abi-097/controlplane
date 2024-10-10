"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Flag from "react-world-flags";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiExpandUpDownLine, RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { IoFemale, IoMale } from "react-icons/io5";
import Image from "next/image";
import clsx from "clsx";
import UsersData from "@/public/data/users";
import { usePanel } from "../content/UserInfoPanel/UserPanelContext";
import { getCountryCode } from "@/public/data/countryCode";
import { FaAngleDown } from "react-icons/fa";
import AddContactDialog from "./AddContact";
import AddData from "../NodataComponent/AddData";
import { FaFilePen } from "react-icons/fa6";
import {
  MdDeleteOutline,
  MdOutlineHistory,
  MdViewColumn,
} from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { BiTransfer } from "react-icons/bi";
import ConvertContact from "../convertContact/ConvertContact";
import History from "@/app/components/History/History";
import Delete from "@/app/components/common/Delete";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiSolidEdit } from "react-icons/bi";
import dynamic from "next/dynamic";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LogCallDialog from "../Call/LogCallDialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import * as XLSX from "xlsx";
import AddProductsToLadsDialog from "../dialogBoxes/AddProductsToLead";
import { AiOutlineProduct } from "react-icons/ai";
import CreateNewChat from "../Chat/CreateNewChat";
import { VscSend } from "react-icons/vsc";
import { Mail, MapPin, Phone, Projector } from "lucide-react";
import AddNewMeeting from "../MeetingContent/AddNewMeeting";
const EmailDialog = dynamic(() => import("../EmailContent/Email"), {
  ssr: false,
});

const data: Users[] = UsersData;

export type Users = {
  id: number;
  name: string;
  gender: string;
  email: string;
  contact: string;
  job_title: string;
  annual_revenue: number;
  status: string;
  location: string;
  company: string;
  country: string;
  category: string;
  activities: {
    id: number;
    remainder: string;
    task_priority: string;
    assigned_to: string;
  }[];
  notes: {
    id: number;
    time: string;
    note: string;
  }[];
};
type DataTableProps = {
  users: Users[];
  sheetTriggerRef: React.RefObject<HTMLButtonElement>;
};
const DataTable: React.FC<DataTableProps> = ({ users, sheetTriggerRef }) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({ gender: false, location: false });
  const [rowSelection, setRowSelection] = React.useState({});
  const [isCardOpen, setIsCardOpen] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const { setPanelVisible, setPanelData, setExtendedUserInfoPanelVisible } =
    usePanel();

  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const columns: ColumnDef<Users>[] = [
    {
      accessorKey: "name",
      header: ({ table, column }) => {
        return (
          //<Checkbox
          //   checked={
          //     table.getIsAllPageRowsSelected() ||
          //     (table.getIsSomePageRowsSelected() && 'indeterminate')
          //   }
          //   onCheckedChange={(value) =>
          //     table.toggleAllPageRowsSelected(!!value)
          //   }
          //   aria-label="Select all"
          // />
          // <div
          //   className="flex items-center gap-2 cursor-pointer select-none"
          //   onClick={() =>
          //     column.toggleSorting(column.getIsSorted() === "asc")
          //   }
          // >
          //   Name
          //   <RiExpandUpDownLine />
          // </div>
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <RiExpandUpDownLine />
          </div>
        );
      },
      cell: ({ row }) => {
        const name = row.getValue("name") as string;
        const firstInitial = name.charAt(0).toUpperCase();
        return (
          <div className="flex gap-2 items-center whitespace-nowrap text-textColor">
            <Checkbox
              className="border-gray-300"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
            {/* <Image
            className="rounded-full transition-all group-hover:scale-110"
            alt="profile"
            src={`/users/${row.getValue("id")}.jpg`}
            width={24}
            height={24}
          /> */}
            <Avatar className="w-7 h-7">
              <AvatarImage
                src={`/users/${row.getValue("id")}.jpg`}
                alt="@shadcn"
              />
              <AvatarFallback>{firstInitial}</AvatarFallback>
            </Avatar>
            <div className="capitalize text-sm">{name}</div>
          </div>
        );
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          // <div
          //   className="flex items-center gap-2 cursor-pointer select-none"
          //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          // >
          //   Email
          //   <RiExpandUpDownLine />
          // </div>
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <RiExpandUpDownLine />
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="cursor-pointer lowercase flex gap-2 whitespace-nowrap text-textColor items-center">
          <Mail size={18} />
          <div>{row.getValue("email")}</div>
        </div>
      ),
    },
    {
      accessorKey: "contact",
      header: ({ column }) => {
        return (
          // <div
          //   className="flex items-center gap-2 cursor-pointer select-none"
          //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          // >
          //   <div>Phone</div>
          //   <RiExpandUpDownLine />
          // </div>
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Phone
            <RiExpandUpDownLine />
          </div>
        );
      },
      // This code for extension separation
      //   cell: ({ row }) => {
      //     const contact = row.getValue("contact") as string;
      //     const [mainContact, ext] = contact.split("x");
      //     return (
      //       <div className="flex flex-col gap-1 text-gray-500">
      //         <div className="flex gap-2 items-center">
      //           <PiPhoneLight className="text-[16px] lg:text-[20px]" />
      //           <div className="lowercase">{mainContact}</div>
      //         </div>
      //         {ext && <div className="text-gray-400">ext: {ext}</div>}
      //       </div>
      //     );
      //   },
      cell: ({ row }) => (
        <div className="flex gap-2 items-center whitespace-nowrap text-textColor">
          <Phone size={18} className="text-[16px] lg:text-[20px]" />
          <div className="lowercase">{row.getValue("contact")}</div>
        </div>
      ),
    },
    {
      accessorKey: "category",
      header: ({ column }) => (
        //   {
        //   return (
        //     <div
        //       className="flex items-center gap-2 cursor-pointer select-none"
        //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        //     >
        //       Category
        //       <RiExpandUpDownLine />
        //     </div>
        //   );
        // },
        // <div
        //   className="flex items-center gap-2 cursor-pointer select-none"
        //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        // >
        //   Category
        //   <RiExpandUpDownLine />
        // </div>
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <RiExpandUpDownLine />
        </div>
      ),

      cell: ({ row }) => (
        <div
          className={clsx(
            "capitalize text-center p-[1px] px-2 rounded-sm w-fit whitespace-nowrap",
            row.getValue("category") === "Customers"
              ? "text-[#4167ED] bg-[#4167ED20]"
              : row.getValue("category") === "Employee"
              ? "text-[#7F3E9F] bg-[#7F3E9F20]"
              : "text-[#C5873D] bg-[#C5873D20]"
          )}
        >
          {row.getValue("category")}
        </div>
      ),
    },
    {
      accessorKey: "country",
      header: ({ column }) => {
        return (
          // <div
          //   className="flex items-center gap-2 cursor-pointer select-none"
          //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          // >
          //   Country
          //   <RiExpandUpDownLine />
          // </div>
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Country
            <RiExpandUpDownLine />
          </div>
        );
      },

      cell: ({ row }) => {
        const countryName = row.getValue("country") as string;
        const countryCode = getCountryCode(countryName);
        return (
          <div className="flex items-center gap-2 whitespace-nowrap text-textColor">
            {countryCode && <Flag code={countryCode} className="h-3" />}
            <span>{countryName}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "company",
      header: ({ column }) => {
        return (
          // <div
          //   className="flex items-center gap-2 cursor-pointer select-none"
          //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          // >
          //   Company
          //   <RiExpandUpDownLine />
          // </div>
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Company
            <RiExpandUpDownLine />
          </div>
        );
      },

      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full transition-all group-hover:scale-110"
            alt="profile"
            src={`/users/${row.getValue("id")}.jpg`}
            width={26}
            height={26}
          />
          <div className="capitalize whitespace-nowrap text-textColor">
            {row.getValue("company")}
          </div>
        </div>
      ),
    },
    {
      accessorKey: "location",
      header: ({ column }) => {
        return (
          // <div
          //   className="flex items-center gap-2 cursor-pointer select-none"
          //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          // >
          //   <div>Location</div>
          //   <RiExpandUpDownLine />
          // </div>
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Location
            <RiExpandUpDownLine />
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="flex gap-2 items-center whitespace-nowrap text-textColor">
          <MapPin size={18} className="text-[16px] lg:text-[20px]" />
          <div className="capitalize">{row.getValue("location")}</div>
        </div>
      ),
    },
    {
      accessorKey: "gender",
      header: ({ column }) => {
        return (
          // <div
          //   className="flex items-center gap-2 cursor-pointer select-none"
          //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          // >
          //   <div>Gender</div>
          //   <RiExpandUpDownLine />
          // </div>
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Gender
            <RiExpandUpDownLine />
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="flex gap-2 items-center whitespace-nowrap text-textColor ">
          {row.getValue("gender") === "Male" ? (
            <IoMale size={18} className="text-[16px] lg:text-[20px]" />
          ) : (
            <IoFemale size={18} className="text-[16px] lg:text-[20px]" />
          )}
          <div className="capitalize">{row.getValue("gender")}</div>
        </div>
      ),
    },

    {
      accessorKey: "createdby",
      header: ({ column }) => {
        return (
          // <div
          //   className="flex items-center gap-2 cursor-pointer select-none"
          //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          // >
          //   <div>Gender</div>
          //   <RiExpandUpDownLine />
          // </div>
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Created By
            <RiExpandUpDownLine />
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="flex items-center whitespace-nowrap text-textColor">
          <div className="capitalize">{row.getValue("createdby")}</div>
        </div>
      ),
    },
    {
      accessorKey: "createdon",
      header: ({ column }) => {
        return (
          // <div
          //   className="flex items-center gap-2 cursor-pointer select-none"
          //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          // >
          //   <div>Gender</div>
          //   <RiExpandUpDownLine />
          // </div>
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Created On
            <RiExpandUpDownLine />
          </div>
        );
      },
      // cell: ({ row }) => {
      //   const date = new Date(row.getValue("createdon"));

      //   // Function to get ordinal suffix
      //   const getOrdinalSuffix = (day: number) => {
      //     if (day > 3 && day < 21) return "th";
      //     switch (day % 10) {
      //       case 1:
      //         return "st";
      //       case 2:
      //         return "nd";
      //       case 3:
      //         return "rd";
      //       default:
      //         return "th";
      //     }
      //   };
      //   // Format the date
      //   const monthFormatter = new Intl.DateTimeFormat("en-GB", {
      //     month: "short",
      //   });
      //   const day = date.getDate();
      //   const year = date.getFullYear();
      //   const formattedMonth = monthFormatter.format(date);
      //   const ordinalSuffix = getOrdinalSuffix(day);

      //   const formattedDate = `${formattedMonth} ${day}${ordinalSuffix} ${year}`;

      //   // Format the time
      //   const timeFormatter = new Intl.DateTimeFormat("en-GB", {
      //     hour: "2-digit",
      //     minute: "2-digit",
      //     second: "2-digit",
      //     hour12: true,
      //   });
      //   const formattedTime = timeFormatter.format(date);
      //   const formattedDateTime = `${formattedDate} ${formattedTime}`;
      //   return (
      //     <div className="font-medium">
      //       <span>{formattedDateTime}</span>
      //     </div>
      //   );
      // },
    },
    {
      accessorKey: "updatedby",
      header: ({ column }) => {
        return (
          // <div
          //   className="flex items-center gap-2 cursor-pointer select-none"
          //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          // >
          //   <div>Gender</div>
          //   <RiExpandUpDownLine />
          // </div>
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Updated By
            <RiExpandUpDownLine />
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="flex items-center whitespace-nowrap text-textColor">
          <div className="capitalize">{row.getValue("updatedby")}</div>
        </div>
      ),
    },
    {
      accessorKey: "updatedon",
      header: ({ column }) => {
        return (
          // <div
          //   className="flex items-center gap-2 cursor-pointer select-none"
          //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          // >
          //   <div>Gender</div>
          //   <RiExpandUpDownLine />
          // </div>
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Updated On
            <RiExpandUpDownLine />
          </div>
        );
      },
      // cell: ({ row }) => {
      //   const date = new Date(row.getValue("updatedon"));

      //   // Function to get ordinal suffix
      //   const getOrdinalSuffix = (day: number) => {
      //     if (day > 3 && day < 21) return "th";
      //     switch (day % 10) {
      //       case 1:
      //         return "st";
      //       case 2:
      //         return "nd";
      //       case 3:
      //         return "rd";
      //       default:
      //         return "th";
      //     }
      //   };
      //   // Format the date
      //   const monthFormatter = new Intl.DateTimeFormat("en-GB", {
      //     month: "short",
      //   });
      //   const day = date.getDate();
      //   const year = date.getFullYear();
      //   const formattedMonth = monthFormatter.format(date);
      //   const ordinalSuffix = getOrdinalSuffix(day);

      //   const formattedDate = `${formattedMonth} ${day}${ordinalSuffix} ${year}`;

      //   // Format the time
      //   const timeFormatter = new Intl.DateTimeFormat("en-GB", {
      //     hour: "2-digit",
      //     minute: "2-digit",
      //     second: "2-digit",
      //     hour12: true,
      //   });
      //   const formattedTime = timeFormatter.format(date);
      //   const formattedDateTime = `${formattedDate} ${formattedTime}`;
      //   return (
      //     <div className="font-medium">
      //       <span>{formattedDateTime}</span>
      //     </div>
      //   );
      // },
    },
    {
      accessorKey: "id",
      header: () => (
        <div className="flex items-center gap-2 cursor-default select-none text-tableText font-semibold text-xs">
          Action
        </div>
      ),
      cell: ({ row }) => {
        // const amount = parseFloat(row.getValue("amount"));

        // // Format the amount as a dollar amount
        // const formatted = new Intl.NumberFormat("en-US", {
        //   style: "currency",
        //   currency: "USD",
        // }).format(amount);

        return (
          <>
            <div className="flex gap-2 items-center text-right font-medium">
              {/* <div className="items-center px-2 py-2 gap-2 border border-gray-300 rounded-md hover:bg-gray-300 cursor-pointer hidden md:flex">
              <PiPhoneLight className="text-[16px] lg:text-[20px] hidden md:flex" />
            </div>
            <div className="items-center px-2 py-2 gap-2 border border-gray-300 rounded-md hover:bg-gray-300 cursor-pointer hidden md:flex">
              <IoMailOpenOutline className="text-[16px] lg:text-[20px] hidden md:flex" />
            </div> */}
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
                    <AddContactDialog
                      mode="edit"
                      trigger={
                        <span className="pl-2 gap-3 flex items-center justify-center">
                          <BiSolidEdit className="text-black" size={20} />
                          {/* <Image
                            src="/icons/edit.png"
                            alt="edit.png"
                            // className="w-5 h-5"
                            width={18}
                            height={18}
                          /> */}
                          Edit
                        </span>
                      }
                    />
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem
                    onClick={() => {
                      const tmp_data = UsersData.find(
                        (item) => item.id === row.getValue("id")
                      );

                      setPanelData(tmp_data);
                      setPanelVisible(true);
                      setExtendedUserInfoPanelVisible(false);
                    }}
                    className="cursor-pointer"
                  >
                    <span className="pl-2 gap-3 flex items-center justify-center">
                      <GrContactInfo className="" size={20} /> Contact View
                    </span>
                  </DropdownMenuItem> */}
                  <DropdownMenuItem
                    onClick={() => {
                      const tmp_data = UsersData.find(
                        (item) => item.id === row.getValue("id")
                      );

                      setPanelData(tmp_data);
                      setExtendedUserInfoPanelVisible(true);
                      setPanelVisible(false);
                    }}
                    className="cursor-pointer"
                  >
                    <span className="pl-2 gap-3 flex items-center justify-center">
                      <GrContactInfo className="" size={20} /> Contact Full View
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={handleMenuItemClick}
                  >
                    <AddProductsToLadsDialog
                      trigger={
                        <span className="pl-2 gap-3 flex items-center justify-center">
                          <AiOutlineProduct className="" size={20} />
                          Products
                        </span>
                      }
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={handleMenuItemClick}
                  >
                    <ConvertContact
                      trigger={
                        <span className="pl-2 gap-3 flex items-center justify-center">
                          <BiTransfer className="" size={20} />
                          Convert Contact
                        </span>
                      }
                    />
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={handleMenuItemClick}
                  >
                    <AddNewMeeting
                      trigger={
                        <span className="pl-2 gap-3 flex items-center justify-center">
                          <Projector size={20} /> Meetings
                        </span>
                      }
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={handleMenuItemClick}
                  >
                    <CreateNewChat
                      trigger={
                        <span className="pl-2 gap-3 flex items-center justify-center">
                          <VscSend className="" size={20} /> Chat
                        </span>
                      }
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={handleMenuItemClick}
                  >
                    <LogCallDialog
                      trigger={
                        <span className="pl-2 gap-3 flex items-center justify-center">
                          <FiPhone className="" size={20} /> Call
                        </span>
                      }
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={handleAddEmailClick}
                  >
                    <span className="pl-2 gap-3 flex items-center justify-center">
                      {/* <EmailDialog
                        trigger={
                          <span className="pl-2 gap-3 flex items-center justify-center">
                            <HiOutlineMailOpen size={20} /> Mail
                          </span>
                        }
                      /> */}
                      <HiOutlineMailOpen size={20} /> Mail
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={handleMenuItemClick}
                  >
                    <History
                      trigger={
                        <span className="pl-2 gap-3 flex items-center justify-center">
                          <MdOutlineHistory className="" size={20} /> History
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
            {isCardOpen && <EmailDialog onClose={handleEmailCloseCard} />}
          </>
        );
      },
    },
  ];

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [selectAll, setSelectAll] = React.useState(false);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const table = useReactTable({
    data: users,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    pageCount: pagination.pageSize,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
    onPaginationChange: setPagination,
  });

  const paginationButtons = [];
  for (let i = 0; i < table.getRowCount() / pagination.pageSize; i++) {
    paginationButtons.push(
      <button
        className={clsx(
          "px-4 py-2 rounded-lg",
          i === pagination.pageIndex
            ? "bg-black text-white"
            : "hover:bg-gray-200 "
        )}
        key={i}
        onClick={() => table.setPageIndex(i)}
      >
        {i + 1}
      </button>
    );
  }

  const handleAddEmailClick = () => {
    setIsCardOpen(true);
  };

  const handleEmailCloseCard = () => {
    setIsCardOpen(false);
  };

  React.useEffect(() => {
    // Load the column visibility from local storage when the component mounts
    const savedVisibility = localStorage.getItem("columnVisibility");
    if (savedVisibility) {
      setColumnVisibility(JSON.parse(savedVisibility));
    }
  }, []);
  const handleSelectAllChange = (checked: boolean) => {
    setSelectAll(checked);
    table.getAllColumns().forEach((column) => {
      if (column.getCanHide()) {
        column.toggleVisibility(checked);
      }
    });
  };
  const handleColumnVisibilityChange = (columnId: string, checked: boolean) => {
    const column = table.getColumn(columnId);

    // Check if the column exists
    if (column) {
      column.toggleVisibility(checked);

      // Check if all columns are visible
      const allVisible = table
        .getAllColumns()
        .filter((column) => column.getCanHide())
        .every((column) => column.getIsVisible());

      setSelectAll(allVisible);
    }
  };
  const handleSave = () => {
    // Save the column visibility to local storage
    localStorage.setItem(
      "columnVisibility",
      JSON.stringify(table.getState().columnVisibility)
    );
    setIsSheetOpen(false);
    // console.log("Columns visibility saved:", columnVisibility);
  };
  React.useEffect(() => {
    // Update the select all checkbox based on the current column visibility state
    const allVisible = table
      .getAllColumns()
      .filter((column) => column.getCanHide())
      .every((column) => column.getIsVisible());

    setSelectAll(allVisible);
  }, [columnVisibility, table]);

  return (
    <>
      <div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button ref={sheetTriggerRef} style={{ display: "none" }}></button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Customize Column</SheetTitle>
              <hr />
              <Label className="block text-md font-medium text-black mb-1">
                Search Columns
              </Label>
              <Input
                type="text"
                placeholder="Search Columns"
                className="mt-2 p-1 border rounded w-full bg-[#f9fafb]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
              />
              <div className="flex items-center px-5">
                <Checkbox
                  checked={selectAll}
                  onCheckedChange={(value) => handleSelectAllChange(!!value)}
                  id="select-all"
                  className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] mt-3"
                />
                <label
                  htmlFor="select-all"
                  className="ml-2 mt-3 text-sm text-gray-600"
                >
                  Select All
                </label>
              </div>
            </SheetHeader>
            {/* Apply fixed height and overflow for scrolling */}
            <div className="px-3 mt-1 max-h-[75%] overflow-y-auto">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .filter((column) =>
                  column.id.toLowerCase().includes(searchQuery)
                )
                .sort((a, b) => {
                  const aMatches = a.id.toLowerCase().includes(searchQuery);
                  const bMatches = b.id.toLowerCase().includes(searchQuery);
                  if (aMatches && !bMatches) return -1;
                  if (!aMatches && bMatches) return 1;
                  return 0;
                })
                .map((column) => {
                  let headerLabel: string | undefined;

                  if (typeof column.columnDef.header === "function") {
                    const headerContent = column.columnDef.header({
                      column,
                      header: table.getHeaderGroups()[0].headers[0],
                      table,
                    });
                    if (React.isValidElement(headerContent)) {
                      const element = headerContent as React.ReactElement;

                      // Filter out icons and get only the text nodes from the header content
                      const textNodes = React.Children.toArray(
                        element.props.children
                      )
                        .filter((child) => typeof child === "string")
                        .join(""); // Join in case there are multiple text nodes

                      headerLabel = textNodes;
                    } else if (typeof headerContent === "string") {
                      headerLabel = headerContent;
                    }
                  } else {
                    headerLabel = column.columnDef.header as string;
                  }

                  return (
                    <div
                      key={column.id}
                      className="flex items-center p-2 cursor-pointer capitalize"
                    >
                      <Checkbox
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          handleColumnVisibilityChange(column.id, !!value)
                        }
                        id={column.id}
                        className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff]"
                      />
                      <label
                        htmlFor={column.id}
                        className="ml-2 text-sm text-gray-600"
                      >
                        {headerLabel || column.id}
                      </label>
                    </div>
                  );
                })}
            </div>
            <div className="flex justify-end mt-4">
              <Button
                variant="outline"
                className="ml-auto bg-saveButton text-white"
                onClick={handleSave}
              >
                Save
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="w-full py-2 px-4 ">
        {table.getRowModel().rows?.length ? (
          <>
            <div className="rounded-md border">
              <Table>
                <TableHeader className="bg-tableBg">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead key={header.id}>
                          {header.isPlaceholder ? null : (
                            <div>
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </div>
                          )}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody className="bg-white">
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between space-x-2 pt-4 pb-8">
              <div className="flex gap-2 text-sm text-muted-foreground items-center justify-center">
                <div className="text-gray-800">{"Show"}</div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer h-8 w-8 flex items-center justify-center border-2 border-gray-400 gap-2 px-[28px] py-[8px] rounded-md">
                      <div>{table.getState().pagination.pageSize}</div>
                      <div>
                        <FaAngleDown />
                      </div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                      <DropdownMenuItem
                        key={pageSize}
                        onClick={() => {
                          table.setPageSize(Number(pageSize));
                        }}
                        className="cursor-pointer"
                        defaultValue={pageSize}
                      >
                        {pageSize}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="text-gray-800">{"Row"}</div>
              </div>
              <div className="flex-grow flex items-center justify-center gap-2">
                <Button
                  className={clsx(
                    "bg-gray-100",
                    !table.getCanPreviousPage() && "text-gray-400"
                  )}
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  <IoIosArrowBack />
                </Button>
                <div className="flex flex-row gap-2">
                  {paginationButtons.map((u) => u)}
                </div>
                <Button
                  className={clsx(
                    "bg-gray-100",
                    !table.getCanNextPage() && "text-gray-400"
                  )}
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  <IoIosArrowForward />
                </Button>
              </div>
            </div>
          </>
        ) : (
          // <div className="h-full w-full flex items-center justify-center">
          //   <div className="text-center text-gray-800">No results.</div>
          // </div>
          <AddData buttonText="Add Contact" />
        )}
      </div>
    </>
  );
};

export default DataTable;
//referecen
