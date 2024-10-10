"use client";

import {
  ColumnDef,
  flexRender,
  SortingState,
  PaginationState,
  VisibilityState,
  ColumnFiltersState,
  getFilteredRowModel,
  getSortedRowModel,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LiaTicketAltSolid } from "react-icons/lia";
import { useMemo, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosCalendar,
} from "react-icons/io";
import { FaAngleDown, FaRegCalendar, FaSearch } from "react-icons/fa";
import clsx from "clsx";
import {
  MdDownload,
  MdOutlineHistory,
  MdOutlineRefresh,
  MdOutlineZoomOutMap,
  MdViewColumn,
} from "react-icons/md";
import * as XLSX from "xlsx";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BsThreeDots } from "react-icons/bs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiDownload } from "react-icons/fi";
import { Label } from "@/components/ui/label";
import { CiCalendar } from "react-icons/ci";
import { FillButton } from "@/components/libs/buttons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AddAccountAccessDialog from "./AddAccountAccess";
import History from "@/app/components/History/History";
// import AddOrganizationAnnouncementDialog from "./AddOrganizationAnnouncement";
// import AddHoliday from "./AddHoliday";

interface AccountingAccessTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  //   heading: string;
  //   isExpanded: boolean;
}

export function AccountingAccessTable<TData, TValue>({
  columns,
  data,
}: AccountingAccessTableProps<TData, TValue>) {
  const [isIconMenuOpen, setIsIconMenuOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const table = useReactTable({
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
    data,
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

  const handleDownload = () => {
    const tableData = table.getPrePaginationRowModel().rows.map((row) => {
      return row
        .getVisibleCells()
        .reduce((acc: { [key: string]: any }, cell) => {
          acc[cell.column.id] = cell.getValue();
          return acc;
        }, {});
    });

    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");
    XLSX.writeFile(workbook, "table_data.xlsx");
  };

  // clicking on the icon MdViewColumn need to open the Datatable sheet
  const sheetTriggerRef = useRef<HTMLButtonElement>(null);

  const handleViewColumnClick = () => {
    if (sheetTriggerRef.current) {
      sheetTriggerRef.current.click();
    }
  };

  const toggleIconMenu = () => {
    setIsIconMenuOpen(!isIconMenuOpen);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (iconRef.current && !iconRef.current.contains(event.target as Node)) {
      setIsIconMenuOpen(false);
    }
  };

  const handleFullScreen = () => {
    if (tableRef.current) {
      if (!document.fullscreenElement) {
        tableRef.current.requestFullscreen().catch((err) => {
          console.error(
            `Error attempting to enable full-screen mode: ${err.message}`
          );
        });
        setIsFullScreen(true); // Set fullscreen state to true
      } else {
        document.exitFullscreen();
        setIsFullScreen(false); // Set fullscreen state to false
      }
    }
  };

  return (
    <>
      <div className="flex justify-between items-center pb-2 pr-7">
        <div className="flex items-center justify-center gap-3">
          <p className="text-sm whitespace-nowrap">Allow Access Period</p>
          <Select>
            <SelectTrigger className="w-[150px] bg-inputField text-sm">
              <SelectValue placeholder="Choose Access Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">1 Day</SelectItem>
                <SelectItem value="3">3 Days</SelectItem>
                <SelectItem value="5">5 Days</SelectItem>
                <SelectItem value="7">7 Days</SelectItem>
                <SelectItem value="10">10 Days</SelectItem>
                <SelectItem value="15">15 Days</SelectItem>
                <SelectItem value="20">20 Days</SelectItem>
                <SelectItem value="30">30 Days</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="relative" ref={iconRef}>
            <div
              className="cursor-pointer rounded-full hover:bg-gray-200 h-8 w-8 p-0 flex items-center justify-center ml-3"
              onClick={toggleIconMenu}
            >
              <BsThreeDots size={20} />
            </div>

            {/* Icons with Animation */}
            <div
              className={`flex items-center gap-3 absolute right-full top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${
                isIconMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <History
                trigger={
                  <MdOutlineHistory
                    className="text-gray-400 cursor-pointer hover:text-gray-700"
                    size={20}
                  />
                }
              />
              <MdOutlineZoomOutMap
                className="text-gray-400 cursor-pointer hover:text-gray-700"
                size={20}
                onClick={handleFullScreen}
              />
              <MdOutlineRefresh
                className="text-gray-400 cursor-pointer hover:text-gray-700"
                size={20}
              />
              <FiDownload
                size={20}
                onClick={handleDownload}
                className="text-gray-400 cursor-pointer hover:text-gray-700"
              />
            </div>
          </div>{" "}
          <div className="relative max-w-sm mt-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search Access & Permission"
              value={
                (table.getColumn("name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="pl-10 bg-[#f9fafb]"
            />
          </div>
          <div>
            <AddAccountAccessDialog
              mode="addAccess"
              trigger={
                <Button className="bg-saveButton">
                  <p className="text-sm">Add Account Access</p>
                </Button>
              }
            />
          </div>
        </div>
      </div>
      {/* <div className="max-h-full"> */}
      {/* <div className="flex-1 max-h-[650px] overflow-y-auto"> */}
      <div
        ref={tableRef}
        className={`flex-1 max-h-[73vh] w-full px-1 overflow-auto ${
          isFullScreen ? "bg-white text-black" : ""
        }`}
      >
        <div className="rounded-md border">
          <Table>
            <TableHeader className="bg-tableBg">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
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
        {/* <div className="flex items-center justify-center space-x-2 py-4"> */}
        <div className="flex items-center justify-between space-x-2 py-4">
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-800">
              {`${
                table.getState().pagination.pageIndex *
                  table.getState().pagination.pageSize +
                1
              }-${Math.min(
                (table.getState().pagination.pageIndex + 1) *
                  table.getState().pagination.pageSize,
                table.getFilteredRowModel().rows.length
              )} of ${table.getFilteredRowModel().rows.length} Results`}
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center space-x-2">
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
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
