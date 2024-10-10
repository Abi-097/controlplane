"use client";

import { LiaTicketAltSolid } from "react-icons/lia";
import { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaAngleDown, FaRegUser, FaSearch } from "react-icons/fa";
import clsx from "clsx";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  MdDownload,
  MdHistory,
  MdInfoOutline,
  MdOutlineRefresh,
  MdViewColumn,
} from "react-icons/md";
import * as XLSX from "xlsx";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BsThreeDots } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { MultiBarChart } from "@/components/Charts/MultiBarChart";
const BillBudget = () => {
  const [progress, setProgress] = useState(100);
  // useEffect(() => {
  //   const timer = setTimeout(() => setProgress(66), 500);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div className="flex justify-between gap-4 m-4">
      <div className="flex-1 min-w-[25%] bg-white p-4 border border-1 border-gray-200">
        {/* Content for the first box */}
        <div className="mb-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold mb-1">Budget</p>
            <p className="text-sm font-semibold mb-1">100%</p>
          </div>
          <Progress
            value={progress}
            className="w-full h-2"
            color="bg-[#16a34a]"
          />
          <p className="text-sm mt-1">$ 1000000</p>
        </div>
        <div className="mb-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold mb-1">Spend</p>
            <p className="text-sm font-semibold mb-1">119%</p>
          </div>
          <Progress
            value={progress}
            className="w-full h-2"
            color="bg-[#dc2626]"
          />
          <p className="text-sm mt-1">5.9k of 5.0k Credit</p>
        </div>
        <div className="mb-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold mb-1">Interval</p>
            <p className="text-sm font-semibold mb-1">28 of 30 days</p>
          </div>
          <Progress
            value={progress}
            className="w-full h-2"
            color="bg-[#0070C0]"
          />
          <p className="text-sm mt-1">$ 1000000</p>
        </div>
        <div className="mt-5">
          <span className="flex items-center gap-2 mb-2">
            <p className="text-sm ">View custom budgets</p>
            <IoIosArrowForward />
          </span>
          <span className="flex items-center gap-2 mb-2">
            <p className="text-sm ">View all resources</p>
            <IoIosArrowForward />
          </span>
        </div>
      </div>
      <div className="flex-1 min-w-[35%] bg-white p-4 border border-1 border-gray-200">
        <p className="text-gray-700 mb-3">Charges</p>
        <span className="flex items-center gap-2 mb-2">
          <p className="text-xs">Month-to-date charges</p> <MdInfoOutline />
        </span>
        <p className="text-blue-500 mb-2">
          1225,882.19 <span className="text-black text-sm">USD</span>{" "}
          <span className="text-sm">(Breakdown)</span>
        </p>
        <p className="text-xs mb-2">Last Month Charges</p>
        <p className="text-sm font-semibold mb-2">126,234.97 USD</p>
        <p className="text-xs text-blue-500 mb-2">Download usage and charges</p>
        <MultiBarChart />
      </div>
      <div className="flex-1 min-w-[35%] bg-white p-4 border border-1 border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-gray-700 mb-3">Credits</p>
          <Select>
            <SelectTrigger className="w-[35%]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <span className="flex items-center gap-2 mb-3">
          <p className="text-xs ">Available balance</p> <MdInfoOutline />
        </span>
        {/* <p className="text-blue-500 mb-2">
            1225,882.19 <span className="text-black text-sm">USD</span>{" "}
            <span className="text-sm">(Breakdown)</span>
          </p> */}
        <p className="text-xs mb-2">Last Month Ending Balance</p>
        <p className="text-sm font-semibold mb-2">126,234.97 USD</p>
        {/* <p className="text-xs text-blue-500 mb-2">
            Download usage and charges
          </p> */}
        <MultiBarChart />
      </div>
    </div>
  );
};

export default BillBudget;
