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
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
import { IoIosArrowBack, IoIosArrowForward, IoMdMale } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { BiDollar } from "react-icons/bi";
import clsx from "clsx";
import CompanyData from "@/public/data/companies";
import { getCountryCode } from "@/public/data/countryCode";
import { FaAngleDown } from "react-icons/fa";
import Delete from "@/app/components/common/Delete";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import { BiSolidEdit } from "react-icons/bi";
import dynamic from "next/dynamic";
import AddDataCompany from "../NodataComponent/AddDataCompany";
import { HiViewColumns } from "react-icons/hi2";
import { IoMdRefresh } from "react-icons/io";
import { LuExpand } from "react-icons/lu";
import SideSheetCompany from "../componentsCompany/ShideSheetCompany";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CreateCompanyDialog from "@/app/components/Company/AddCompany";
import LogCallDialog from "@/app/components/Call/LogCallDialog";
import { Mail, NotebookPen, Phone, Plus, Projector } from "lucide-react";
import AddNewMeeting from "@/app/components/MeetingContent/AddNewMeeting";
import History from "@/app/components/History/History";
import { MdOutlineHistory } from "react-icons/md";
import AddNoteDialog from "@/app/components/NotesContent/NewNote";
import LogDialog from "@/app/components/Log/LogDialog";
import CreateNewChat from "@/app/components/Chat/CreateNewChat";
import { VscSend } from "react-icons/vsc";
const EmailDialog = dynamic(
  () => import("@/app/components/EmailContent/Email"),
  {
    ssr: false,
  }
);

const data: Companies[] = CompanyData;

export type Companies = {
  id: number;
  companyName: string;
  industryType: string;
  region: string;
  priliminaryContact: string;
  email: string;
  phone: string;
  mobile: string;
  uniqueNumber: number;
  revenue: number;
  image: string;
  country: string;
  state: string;
  city: string;
  timeZone: string;
  address: string;
  createdBy: string;
  createdAt: string;
  status: boolean;
};
type DataTableProps = {
  companies: Companies[];
  sheetTriggerRef: React.RefObject<HTMLButtonElement>;
};

const DataTableCompany: React.FC<DataTableProps> = ({
  companies,
  sheetTriggerRef,
}) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      mobile: false,
      address: false,
      createdBy: false,
      createdAt: false,
      state: false,
      city: false,
      timeZone: false,
    });
  const [rowSelection, setRowSelection] = React.useState({});
  const [isCardOpen, setIsCardOpen] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const columns: ColumnDef<Companies>[] = [
    // Company Name
    {
      accessorKey: "companyName",
      meta: "Company Name",
      header: ({ table, column }) => {
        return (
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Company Name
            <RiExpandUpDownLine />
          </div>
        );
      },
      cell: ({ row }) => {
        const companyName = row.getValue("companyName") as string;
        const firstInitial = companyName.charAt(0).toUpperCase();
        const id = Number(row.id);
        return (
          <div className="flex gap-2 items-center whitespace-nowrap text-textColor">
            <Checkbox
              className="border-gray-300"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />

            <Avatar className="w-7 h-7">
              <AvatarImage
                src={`/companies/${id + 1}.jpg`}
                alt="@shadcn"
                className="object-cover w-full h-full"
              />
              <AvatarFallback>{firstInitial}</AvatarFallback>
            </Avatar>
            <div className="capitalize text-sm">
              {row.getValue("companyName")}
            </div>
          </div>
        );
      },
    },
    // Unique Number
    {
      accessorKey: "uniqueNumber",
      meta: "Unique Number",
      header: ({ column }) => {
        return (
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Unique No
            <RiExpandUpDownLine />
          </div>
        );
      },

      cell: ({ row }) => (
        <div className="flex items-center gap-2 whitespace-nowrap text-textColor">
          <div className="capitalize">{row.getValue("uniqueNumber")}</div>
        </div>
      ),
    },
    // Email
    {
      accessorKey: "email",
      meta: "Email",
      header: ({ column }) => {
        return (
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
        <div className="cursor-pointer lowercase flex gap-2 whitespace-nowrap text-textColor items-center ">
          <Mail size={18} />
          <div>{row.getValue("email")}</div>
        </div>
      ),
    },
    // Phone
    {
      accessorKey: "phone",
      meta: "Phone",
      header: ({ column }) => {
        return (
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Phone
            <RiExpandUpDownLine />
          </div>
        );
      },

      cell: ({ row }) => (
        <div className="flex gap-2 items-center whitespace-nowrap text-textColor">
          <Phone size={18} className="text-[16px] lg:text-[20px]" />
          <div className="lowercase">{row.getValue("phone")}</div>
        </div>
      ),
    },
    // Mobile
    {
      accessorKey: "mobile",
      meta: "Mobile",
      header: ({ column }) => {
        return (
          <div
            className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Mobile
            <RiExpandUpDownLine />
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="flex gap-2 items-center whitespace-nowrap text-textColor">
          <Phone size={18} className="text-[16px] lg:text-[20px]" />
          <div className="lowercase">{row.getValue("mobile")}</div>
        </div>
      ),
    },
    // industry type
    {
      accessorKey: "industryType",
      meta: "Industry Type",
      header: ({ column }) => (
        <div
          className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Industry Type
          <RiExpandUpDownLine />
        </div>
      ),

      cell: ({ row }) => (
        <div
          className={clsx(
            "capitalize text-center p-[1px] px-2 rounded-sm w-fit whitespace-nowrap",
            row.getValue("industryType") === "Manufecture"
              ? "text-[#4167ED] bg-[#4167ED20]"
              : row.getValue("industryType") === "Retail"
              ? "text-[#7F3E9F] bg-[#7F3E9F20]"
              : "text-[#C5873D] bg-[#C5873D20]"
          )}
        >
          {row.getValue("industryType")}
        </div>
      ),
    },
    // Country
    {
      accessorKey: "country",
      meta: "Country",
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
    // State
    {
      accessorKey: "state",
      meta: "State",
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
            State
            <RiExpandUpDownLine />
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="flex gap-2 items-center whitespace-nowrap text-textColor">
          <IoLocationOutline className="text-[16px] lg:text-[20px]" />
          <div className="capitalize">{row.getValue("state")}</div>
        </div>
      ),
    },
    // City
    {
      accessorKey: "city",
      meta: "City",
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
            City
            <RiExpandUpDownLine />
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="flex gap-2 items-center whitespace-nowrap text-textColor">
          <IoLocationOutline className="text-[16px] lg:text-[20px]" />
          <div className="capitalize">{row.getValue("city")}</div>
        </div>
      ),
    },
    // Region
    {
      accessorKey: "region",
      meta: "Region",
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
            Region
            <RiExpandUpDownLine />
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="flex gap-2 items-center whitespace-nowrap text-textColor">
          <IoLocationOutline className="text-[16px] lg:text-[20px]" />
          <div className="capitalize">{row.getValue("region")}</div>
        </div>
      ),
    },
    // Time Zone
    {
      accessorKey: "timeZone",
      meta: "Time Zone",
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
            Time Zone
            <RiExpandUpDownLine />
          </div>
        );
      },

      cell: ({ row }) => (
        <div className="flex items-center gap-2 whitespace-nowrap text-textColor">
          <div className="capitalize text-sm">{row.getValue("timeZone")}</div>
        </div>
      ),
    },
    // Revenue
    {
      accessorKey: "revenue",
      meta: "Revenue",
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
            Revenue
            <RiExpandUpDownLine />
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="flex items-center whitespace-nowrap text-textColor">
          <BiDollar className="text-[16px] lg:text-[20px]" />
          <div className="capitalize">{row.getValue("revenue")}</div>{" "}
        </div>
      ),
    },
    // Created By
    {
      accessorKey: "createdBy",
      meta: "Created By",
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
            Created By
            <RiExpandUpDownLine />
          </div>
        );
      },
      cell: ({ row }) => {
        const createdBy = row.getValue("createdBy") as string;
        const firstInitial = createdBy.charAt(0).toUpperCase();
        return (
          <div className="flex gap-2 items-center whitespace-nowrap text-textColor">
            <Avatar className="w-6 h-6">
              <AvatarImage
                src={`/users/${row.getValue("id")}.jpg`}
                alt="@shadcn"
              />
              <AvatarFallback>{firstInitial}</AvatarFallback>
            </Avatar>
            <div className="capitalize text-sm">{createdBy}</div>
          </div>
        );
      },
    },
    // Created At
    {
      accessorKey: "createdAt",
      meta: "Created At",
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
            Created At
            <RiExpandUpDownLine />
          </div>
        );
      },

      cell: ({ row }) => (
        <div className="flex items-center whitespace-nowrap text-textColor">
          <div className="capitalize">{row.getValue("createdAt")}</div>
        </div>
      ),
    },
    // status
    {
      accessorKey: "status",
      meta: "Status",
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
        <div className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap">
          Status
        </div>
      ),

      cell: ({ row }) => (
        <div className="flex items-center">
          {row.getValue("status") === true ? (
            <FaCircleCheck className="text-green-800 text-[16px] lg:text-[20px]" />
          ) : (
            <IoMdCloseCircle className="text-red-700 text-[16px] lg:text-[20px]" />
          )}
        </div>
      ),
    },
    // Action
    {
      accessorKey: "id",
      meta: "Action",
      header: () => (
        <div className="flex items-center gap-2 cursor-pointer select-none text-tableText font-semibold text-xs whitespace-nowrap">
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
                    <CreateCompanyDialog
                      mode="edit"
                      trigger={
                        <span className="pl-2 gap-3 flex items-center justify-center">
                          <BiSolidEdit className="text-black" size={20} />
                          Edit
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
                    <AddNoteDialog
                      mode="add"
                      trigger={
                        <span className="pl-2 gap-3 flex items-center justify-center">
                          <NotebookPen size={19} /> Notes
                        </span>
                      }
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={handleMenuItemClick}
                  >
                    <LogDialog
                      trigger={
                        <span className="pl-2 gap-3 flex items-center justify-center">
                          <Plus size={17} /> Logs
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
                          <MdOutlineHistory size={20} /> History
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
    data: companies,
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
    // initialState: {
    //   columnVisibility: {
    //     id: false,
    //     companyName:false //hide the id column by default
    //   },
    //   expanded: true, //expand all rows by default ass

    // },
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
  // filter the column and Select All function
  const filteredColumns = table
    .getAllColumns()
    .filter((column) => column.getCanHide())
    .filter((column) => column.id.toLowerCase().includes(searchQuery))
    .sort((a, b) => {
      const aMatches = a.id.toLowerCase().includes(searchQuery);
      const bMatches = b.id.toLowerCase().includes(searchQuery);
      if (aMatches && !bMatches) return -1;
      if (!aMatches && bMatches) return 1;
      return 0;
    });
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
        </Sheet>{" "}
      </div>
      {/*  */}
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
          <AddDataCompany buttonText="Add Company" />
        )}
      </div>
    </>
  );
};

export default DataTableCompany;
