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

import { MultiBarChart } from "@/components/Charts/MultiBarChart";
import { SinglePieChart } from "@/components/Charts/PieChart";
// import { SinglePieChart } from "@/components/Charts/PieChart";
const BillBudgetPie = () => {
  return (
    <div>
      <div className="flex justify-around gap-4 p-4 mr-4">
        <div className="flex-1 min-w-[33%] bg-white border border-1 border-gray-200 p-4">
          <SinglePieChart />
        </div>
        <div className="flex-1 min-w-[33%] bg-white border border-1 border-gray-200 p-4">
          <SinglePieChart />
        </div>
        <div className="flex-1 min-w-[33%] bg-white border border-1 border-gray-200 p-4">
          <SinglePieChart />
        </div>
      </div>
    </div>
  );
};

export default BillBudgetPie;
