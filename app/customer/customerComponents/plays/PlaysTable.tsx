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
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaAngleDown, FaRegUser, FaSearch } from "react-icons/fa";
import clsx from "clsx";
import { MdDownload, MdOutlineRefresh, MdViewColumn } from "react-icons/md";
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
import { FillButton } from "@/components/libs/buttons";

interface PlaysTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  //   heading: string;
  //   isExpanded: boolean;
}

export function PlaysTable<TData, TValue>({
  columns,
  data,
}: //   heading,
//   isExpanded,
PlaysTableProps<TData, TValue>) {
  const [isIconMenuOpen, setIsIconMenuOpen] = useState(false);
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
  const [selectAll, setSelectAll] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  
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

  useEffect(() => {
    // Load the column visibility from local storage when the component mounts
    const savedVisibility = localStorage.getItem("columnVisibility");
    if (savedVisibility) {
      setColumnVisibility(JSON.parse(savedVisibility));
    }
  }, []);

  useEffect(() => {
    // Update the select all checkbox based on the current column visibility state
    const allVisible = table
      .getAllColumns()
      .filter((column) => column.getCanHide())
      .every((column) => column.getIsVisible());

    setSelectAll(allVisible);
  }, [columnVisibility, table]);

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
  return (
    <>
      
      {/* <div className="flex flex-col h-full"> */}
      <div className="flex-1 max-h-[650px] w-full overflow-auto px-1 ">
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
      </div>
      {/* <div className="flex items-center justify-center space-x-2 py-4"> */}
      <div className="flex items-center justify-between space-x-2 p-4">
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
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
