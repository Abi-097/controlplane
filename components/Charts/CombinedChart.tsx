import React from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface ChartDataItem {
  monthYear: string;
  actual: number;
  budget: number;
}

interface CombinedChartProps {
  data: ChartDataItem[];
}

const CombinedChart: React.FC<CombinedChartProps> = ({ data }) => {
  const chartData: ChartData<"bar" | "line", number[], string> = {
    labels: data.map((item) => item.monthYear),
    datasets: [
      {
        type: "bar" as const,
        label: "Actual",
        data: data.map((item) => item.actual),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "transparent",
        borderWidth: 1,
      },
      {
        type: "line" as const,
        label: "Budget",
        data: data.map((item) => item.budget),
        // borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options: ChartOptions<"bar" | "line"> = {
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
          text: "Month Year",
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

  return <Chart type="bar" data={chartData} options={options} />;
};

export default CombinedChart;
