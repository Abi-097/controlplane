// components/charts/DonutChart.tsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  data: any;
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
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
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DonutChart;
