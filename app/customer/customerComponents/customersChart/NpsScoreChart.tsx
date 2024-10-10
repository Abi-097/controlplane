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
import { AiOutlineExclamationCircle } from "react-icons/ai";

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

const NspScoreChart: React.FC<BarChartProps> = ({
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
        borderWidth: 0,
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
      <div className="p-4">
      <p className="flex flex-row gap-1 text-sm font-bold m-0.5">Fetaure Adoption <AiOutlineExclamationCircle/></p>

      </div>
      <Chart type="bar" data={chartData} options={options} />
    </div>
  );
};

export default NspScoreChart;
