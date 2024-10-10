import CombinedChart from "@/components/Charts/CombinedChart";
import React from "react";
import LineChartBar from "../../../../../components/Charts/BillingLineChart";
import BillingBarChart from "../../../../../components/Charts/BillingLineChart";
// import CombinedChart from './path/to/CombinedChart';

const chartData = [
  { monthYear: "Jan 2024", actual: 30, budget: 25 },
  { monthYear: "Feb 2024", actual: 40, budget: 35 },
  { monthYear: "Mar 2024", actual: 50, budget: 45 },
  { monthYear: "Apr 2024", actual: 50, budget: 45 },
  { monthYear: "May 2024", actual: 50, budget: 45 },
  { monthYear: "Jun 2024", actual: 50, budget: 45 },
  { monthYear: "July 2024", actual: 50, budget: 45 },
  { monthYear: "Aug 2024", actual: 50, budget: 45 },
  { monthYear: "Sep 2024", actual: 50, budget: 45 },
  // Add more data as needed
];
const monthlyData = [
  { label: "Jan 2024", value: 30 },
  { label: "Feb 2024", value: 40 },
  { label: "Mar 2024", value: 35 },
  { label: "Jan 2024", value: 30 },
  { label: "Feb 2024", value: 40 },
  { label: "Mar 2024", value: 50 },
  { label: "Apr 2024", value: 50 },
  { label: "May 2024", value: 50 },
  { label: "Jun 2024", value: 50 },
  { label: "July 2024", value: 50 },
  { label: "Aug 2024", value: 50 },
  { label: "Sep 2024", value: 50 },
  // Add more monthly data as needed
];

const yearlyData = [
  { label: "2020", value: 300 },
  { label: "2021", value: 350 },
  { label: "2022", value: 400 },
  // Add more yearly data as needed
];
const BillingLineBar: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between gap-4 my-4">
        <div className="flex-1 min-w-[45%] bg-white border border-1 border-gray-200 m-4 p-3">
          {/* Content for the first box */}
          <CombinedChart data={chartData} />
        </div>
        <div className="flex-1 min-w-[45%] bg-white border border-1 border-gray-200 m-4 p-3">
          <BillingBarChart monthlyData={monthlyData} yearlyData={yearlyData} />
        </div>
      </div>
    </div>
  );
};

export default BillingLineBar;
