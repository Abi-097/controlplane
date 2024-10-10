import React from "react";
import NspScoreChart from "../customersChart/NpsScoreChart";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { IoMdAdd } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { BiSolidEdit } from "react-icons/bi";
import { IoMdRefresh } from "react-icons/io";
import { UsersPichart } from "../customersChart/UsersPichart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TechinicalSupportChart } from "../customersChart/TechinicalSupportChart";
import DailyLoginsChart from "../customersChart/DailyLogins";
import { Button } from "@/components/ui/button";
import LineChart from "../customersChart/LineChart";
import DonutChart from "../customersChart/DonutChart";
import PieChart from "../customersChart/PieChart";

// const monthlyData = [
//   { label: "Jan 2024", value: 30 },
//   { label: "Feb 2024", value: 40 },
//   { label: "Mar 2024", value: 35 },
//   { label: "Jan 2024", value: 30 },
//   { label: "Feb 2024", value: 40 },
//   { label: "Mar 2024", value: 50 },
//   { label: "Apr 2024", value: 50 },
//   { label: "May 2024", value: 50 },
//   { label: "Jun 2024", value: 50 },
//   { label: "July 2024", value: 50 },
//   { label: "Aug 2024", value: 50 },
//   { label: "Sep 2024", value: 50 },
//   // Add more monthly data as needed
// ];

// const yearlyData = [
//   { label: "2020", value: 300 },
//   { label: "2021", value: 350 },
//   { label: "2022", value: 400 },
//   // Add more yearly data as needed
// ];
const barChartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [50, 60, 70, 180, 190, 95],
      backgroundColor: "#0070c0",
    },
  ],
};

const lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Revenue",
      data: [50, 60, 70, 180, 190, 95],
      fill: false,
      borderColor: "#0070c0",
    },
  ],
};

const donutChartData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const pieChartData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};
const Usage = () => {
  return (
    <div className="flex flex-col screen">
      <div className="flex flex-row justify-between bg-white p-4 shadow-containerShadow rounded-sm ">
        <div className="flex flex-row  gap-2 items-center">
          <FiFilter size={16} className="text-gray-500 cursor-pointer" />
          <div className="text-sm text-gray-600"> Filter By </div>
          <div>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="outline" className="border-none gap-2 text-gray-500">
            <BiSolidEdit size={18} />
            Edit
          </Button>

          <Button variant="outline" className="border-none gap-2 text-gray-500">
            <IoMdRefresh size={18} /> Refresh
          </Button>
        </div>
      </div>

      <div className="flex flex-row my-betweenComponents gap-2">
        <div className="flex-1 min-w-[45%] bg-white rounded-sm shadow-containerShadow p-3">
          <DailyLoginsChart data={barChartData} />
        </div>
        <div className="flex-1 min-w-[45%] bg-white  p-3 rounded-sm shadow-containerShadow">
          {/* <NspScoreChart monthlyData={monthlyData} yearlyData={yearlyData} /> */}
          <LineChart data={lineChartData} />
        </div>
      </div>
      <div className="flex flex-row my-betweenComponents gap-2">
        <div className="flex-1 min-w-[45%] bg-white rounded-sm shadow-containerShadow p-3">
          {/* <NspScoreChart monthlyData={monthlyData} yearlyData={yearlyData} /> */}
          <DailyLoginsChart data={barChartData} />
        </div>
        <div className="flex-1 min-w-[22%] bg-white   p-3 rounded-sm shadow-containerShadow">
          {/* <UsersPichart /> */}
          <DonutChart data={donutChartData} />
        </div>
        <div className="flex-1 min-w-[22%]  bg-white p-3 rounded-sm shadow-containerShadow">
          {/* <UsersPichart /> */}
          <PieChart data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default Usage;
