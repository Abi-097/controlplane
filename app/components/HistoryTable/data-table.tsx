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

import { useMemo, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import clsx from "clsx";

import { AiOutlineExpandAlt } from "react-icons/ai";
import {
  MdDownload,
  MdOutlineRefresh,
  MdOutlineZoomOutMap,
} from "react-icons/md";
import * as XLSX from "xlsx";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  // isExpanded: boolean;
}

export function HistoryCommonTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isIconMenuOpen, setIsIconMenuOpen] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
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
    XLSX.writeFile(workbook, "history.xlsx");
  };

  const toggleIconMenu = () => {
    setIsIconMenuOpen(!isIconMenuOpen);
  };

  const handleFullScreen = () => {
    if (tableRef.current) {
      if (!document.fullscreenElement) {
        tableRef.current.requestFullscreen().catch((err) => {
          console.error(
            `Error attempting to enable full-screen mode: ${err.message}`
          );
        });
        setIsFullScreen(true);
      } else {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  return (
    <>
      <div className="flex justify-between items-center pb-2">
        <div className="flex items-center gap-3">
          <p className="text-md">
            <strong>Period</strong>
          </p>
          <div>
            <Select>
              <SelectTrigger className="w-[180px] text-sm p-1 pl-4 h-8 border outline-none focus:ring-0">
                <SelectValue placeholder="Select Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="one">1 Hour</SelectItem>
                  <SelectItem value="three">3 Hour</SelectItem>
                  <SelectItem value="six">6 Hour</SelectItem>
                  <SelectItem value="nine">9 Hour</SelectItem>
                  <SelectItem value="twelve">12 Hour</SelectItem>
                  <SelectItem value="twentyfour">24 Hour</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
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
              <MdOutlineRefresh
                className="text-gray-400 cursor-pointer hover:text-gray-700"
                size={20}
              />
              <MdOutlineZoomOutMap
                className="text-gray-400 cursor-pointer hover:text-gray-700"
                size={20}
                onClick={handleFullScreen}
              />
              <FiDownload
                size={20}
                onClick={handleDownload}
                className="text-gray-400 cursor-pointer hover:text-gray-700"
              />
            </div>
          </div>
          <div className="relative max-w-sm mt-1">
            <LuSearch
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              placeholder="Filter"
              value={
                (table.getColumn("objectType")?.getFilterValue() as string) ??
                ""
              }
              onChange={(event) =>
                table
                  .getColumn("objectType")
                  ?.setFilterValue(event.target.value)
              }
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <div
        ref={tableRef}
        className={`flex-1 max-h-[70vh] w-full px-1 overflow-auto no-scrollbar ${
          isFullScreen ? "bg-white text-black" : ""
        }`}
      >
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
      {/* </div> */}
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
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
