import React, { useState } from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartDataItem {
  label: string;
  value: number;
}

interface BarChartProps {
  monthlyData: ChartDataItem[];
  yearlyData: ChartDataItem[];
}

const BillingBarChart: React.FC<BarChartProps> = ({
  monthlyData,
  yearlyData,
}) => {
  const [viewMode, setViewMode] = useState<"monthly" | "yearly">("monthly");

  const chartData: ChartData<"bar", number[], string> = {
    labels: (viewMode === "monthly" ? monthlyData : yearlyData).map(
      (item) => item.label
    ),
    datasets: [
      {
        label: viewMode === "monthly" ? "Monthly Data" : "Yearly Data",
        data: (viewMode === "monthly" ? monthlyData : yearlyData).map(
          (item) => item.value
        ),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "transparent",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`;
          },
        },
      },
      legend: {
        display: true,
        labels: {
          color: "black",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: viewMode === "monthly" ? "Month" : "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        beginAtZero: true,
      },
    },
  };

  const handleViewChange = (value: string) => {
    setViewMode(value as "monthly" | "yearly");
  };

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <Select onValueChange={handleViewChange} value={viewMode}>
          <SelectTrigger className="w-[40%]">
            <SelectValue placeholder="Select view mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>View Mode</SelectLabel>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Chart type="bar" data={chartData} options={options} />
    </div>
  );
};

export default BillingBarChart;
