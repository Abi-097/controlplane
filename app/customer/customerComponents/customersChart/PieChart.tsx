// components/charts/PieChart.tsx
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: any;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: "top",
    },
    tooltips: {
      enabled: true,
    },
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-[300px] h-[300px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
