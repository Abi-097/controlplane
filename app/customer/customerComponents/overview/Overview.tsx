"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaArrowDownLong } from "react-icons/fa6";
import { Slider } from "@/components/ui/slider";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { BsFillTicketFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import {
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
import dynamic from "next/dynamic";
import { CTAChart } from "./CTAChart";
import CustomerContacts from "../customerContects/CustomerContacts";
import CustomerEngagement from "../customerEngagement/CustomerEngagement";
import { useState } from "react";


const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const userData = [
  {
    id: 1,
    name: "Olive John",
    position:"Chief Executive",
    nps: 6.6,
    mobile: "678-6257-28",
    email: "olivejohne@flywiresolution.com",
    lastSeen: 2,
    location:"New york,US"
  },
  {
    id: 2,
    name: "Olive John",
    position:"CEO",
    nps: 8.2,
    mobile: "678-6257-28",
    email: "olivejohne@flywiresolution.com",
    lastSeen: 2,
    location:"New york,US"

  },
  {
    id: 3,
    name: "Olive John",
    position:"Chief Executive",
    nps: 3.1,
    mobile: "678-6257-28",
    email: "olivejohne@flywiresolution.com",
    lastSeen: 2,
    location:"New york,US"

  },
  {
    id: 4,
    name: "Olive John",
    position:"Chief Executive",
    nps: 3.1,
    mobile: "678-6257-28",
    email: "olivejohne@flywiresolution.com",
    lastSeen: 2,
    location:"New york,US"

  },
];

const Overview = () => {
  const [isContactsVisible, setIsContactsVisible] = useState(true);

  const toggleContactsVisibility = () => {
    setIsContactsVisible(!isContactsVisible);
  };

  return (
    <div className=" mx-0  px-0 w-full ">
      {/* Responsive grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
        {/* Card 1 */}
        <Card className="">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-gray-500 flex flex-row gap-1">
              Total Users <AiOutlineExclamationCircle />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="flex flex-row items-baseline gap-3 ">
                <div className="text-4xl text-[#0284c7]">127k</div>
                <div className="text-2xl flex flex-row text-gray-500">
                  {" "}
                  <FaArrowDownLong className="text-red-600" />
                  2k
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-5">
                Total users added in the last 90 days
              </div>
              <div className="text-sm text-gray-500">
                compare to previous period
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-gray-500 flex flex-row gap-1">
              Renewal Date <AiOutlineExclamationCircle />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="text-4xl text-[#0284c7]">15 Nov</div>
              <div className="w-full bg-gray-200 rounded-full h-4  mt-5">
                <div
                  className="bg-[#0284c7] h-4 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <div className="text-sm text-gray-500 mt-5">
                Your annual license will expire in 55 days
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-gray-500 flex flex-row gap-1">
              Quick Actions <AiOutlineExclamationCircle />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col  items-center text-center gap-2">
              <div className="flex flex-row justify-between items-center text-gray-500 text-sm w-full">
                <div className="flex flex-row gap-2 items-center">
                  <FaCalendarAlt />
                  Today&apos;s meetings
                  
                </div>
                <div className="bg-blue-200 rounded-2xl p-1 w-7 cursor-pointer text-gray-900 font-semibold ">
                  1
                </div>
              </div>

              <div className="flex flex-row justify-between items-center text-gray-500 text-sm w-full">
                <div className="flex flex-row gap-2 items-center">
                  <BsFillClipboard2CheckFill />
                  Tasks due{" "}
                </div>
                <div className="bg-blue-200 rounded-2xl p-1 w-7 cursor-pointer text-gray-900 font-semibold ">
                  1
                </div>
              </div>

              <div className="flex flex-row justify-between items-center text-gray-500 text-sm w-full">
                <div className="flex flex-row gap-2 items-center">
                  <BsFillTicketFill />
                  <div>Ticket&apos;s due</div>
                  
                </div>
                <div className="bg-blue-200 rounded-2xl p-1 w-7 cursor-pointer text-gray-900 font-semibold ">
                  1
                </div>
              </div>

              <div className="flex flex-row justify-between items-center text-gray-500 text-sm w-full">
                <div className="flex flex-row gap-2 items-center">
                  <FaBook />
                  Active plays
                </div>
                <div className="bg-blue-200 rounded-2xl p-1 w-7 cursor-pointer text-gray-900 font-semibold ">
                  1
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 4 */}
        <Card className="">
          <CardHeader >
            <CardTitle className="text-base font-semibold text-gray-500 flex flex-row gap-1">
             CTA&apos;s
              <AiOutlineExclamationCircle />
            </CardTitle>
          </CardHeader>
          <CardContent >
            <div className="flex flex-col justify-center items-center text-center overflow-hidden">             
              <CTAChart/>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className=" flex flex-row gap-2 mt-2">
      {isContactsVisible && <CustomerContacts userData={userData} />}
    
      {/* <CustomerContacts userData={userData} /> */}
      <CustomerEngagement toggleVisibility={toggleContactsVisibility}/>
      </div>
    </div>
  );
};

export default Overview;
