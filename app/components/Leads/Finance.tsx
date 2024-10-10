import React from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { IconType } from "react-icons/lib";
// Register the required chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
// Sample data for the horizontal bar chart
const chartLabels = [
  "Total Leads",
  "New Customers",
  "Active Leads",
  "Lost Leads",
];
const chartDataValues = [1680, 120, 1400, 200];

// Colors for charts
const chartColors = ["#3b82f6", "#10b981", "#fbbf24", "#ef4444"];
const borderColors = ["#2563eb", "#059669", "#f59e0b", "#dc2626"];

// Horizontal Bar Chart Data
const horizontalBarChartData = {
  labels: chartLabels,
  datasets: [
    {
      label: "Leads Data",
      data: chartDataValues,
      backgroundColor: chartColors,
      borderColor: borderColors,
      borderWidth: 1,
    },
  ],
};

const horizontalBarChartOptions = {
  indexAxis: "y" as const, // Switch the axis to horizontal
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Hide the legend if not needed
    },
    title: {
      display: true,
      text: "Lead Overview (Horizontal Bar)",
    },
  },
};

// Line Chart Data
const lineChartData = {
  labels: chartLabels,
  datasets: [
    {
      label: "Leads Trend",
      data: chartDataValues,
      fill: false,
      backgroundColor: chartColors[0],
      borderColor: chartColors[0],
      tension: 0.1, // Smooth lines
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide the legend if not needed
    },
    title: {
      display: true,
      text: "Lead Trend (Line Chart)",
    },
  },
};

// Pie Chart Data
const pieChartData = {
  labels: chartLabels,
  datasets: [
    {
      label: "Leads Data",
      data: chartDataValues,
      backgroundColor: chartColors,
      borderColor: borderColors,
      borderWidth: 1,
    },
  ],
};

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Lead Distribution (Pie Chart)",
    },
  },
};

// Doughnut Chart Data
const doughnutChartData = {
  labels: chartLabels,
  datasets: [
    {
      label: "Leads Data",
      data: chartDataValues,
      backgroundColor: chartColors,
      borderColor: borderColors,
      borderWidth: 1,
    },
  ],
};

const doughnutChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Lead Distribution (Doughnut Chart)",
    },
  },
};

const leadData = [
  {
    title: "Total Leads",
    value: 1680,
    percentage: 5.6,
    icon: IoPersonAddOutline,
    percentageIcon: FaCaretUp,
    percentageColor: "text-green-400",
  },
  {
    title: "New Customers",
    value: 120,
    percentage: 3.2,
    icon: IoPersonAddOutline,
    percentageIcon: FaCaretDown,
    percentageColor: "text-red-400",
  },
  {
    title: "Active Leads",
    value: 1400,
    percentage: 2.1,
    icon: IoPersonAddOutline,
    percentageIcon: FaCaretUp,
    percentageColor: "text-green-400",
  },
  {
    title: "Lost Leads",
    value: 200,
    percentage: -1.4,
    icon: IoPersonAddOutline,
    percentageIcon: FaCaretDown,
    percentageColor: "text-red-400",
  },
  // Add more card details here...
];
// const lineChartData = {
//   labels: ["Total Leads", "New Customers", "Active Leads", "Lost Leads"],
//   datasets: [
//     {
//       label: "Leads Trend",
//       data: [1680, 120, 1400, 200],
//       fill: false,
//       backgroundColor: "#3b82f6",
//       borderColor: "#3b82f6",
//       tension: 0.1, // Smooth lines
//     },
//   ],
// };

// const lineChartOptions = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false, // Hide the legend if not needed
//     },
//     title: {
//       display: true,
//       text: "Lead Trend (Line Chart)",
//     },
//   },
// };
const LeadCard = ({
  title,
  value,
  percentage,
  icon: IconComponent,
  percentageIcon: PercentageIcon,
  percentageColor,
}: {
  title: string;
  value: number;
  percentage: number;
  icon: IconType;
  percentageIcon: IconType;
  percentageColor: string;
}) => {
  return (
    <Card className="shadow-md bg-[#EEF7FF]">
      <CardHeader>
        <CardTitle className="text-md flex items-center justify-between mb-2">
          <span>{title}</span>
          <IconComponent size={20} className="text-blue-600" />
        </CardTitle>
        <CardTitle>{value}</CardTitle>
        <CardDescription
          className={`flex items-center gap-1 mt-2 ${percentageColor}`}
        >
          <PercentageIcon size={21} />
          <span className="text-[18px]">{percentage}%</span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

const Finance = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
        {leadData.map((lead, index) => (
          <LeadCard
            key={index}
            title={lead.title}
            value={lead.value}
            percentage={lead.percentage}
            icon={lead.icon}
            percentageIcon={lead.percentageIcon}
            percentageColor={lead.percentageColor}
          />
        ))}
      </div>

      {/* Horizontal Bar Chart */}
      <div className="col-span-1 md:col-span-2 mb-3">
        <Card className="">
          <CardHeader>
            <CardTitle>Lead Statistics (Horizontal Bar)</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center h-[300px]">
            <Bar
              data={horizontalBarChartData}
              options={horizontalBarChartOptions}
            />
          </CardContent>
        </Card>
      </div>

      {/* Line Chart */}
      <div className="col-span-1 md:col-span-2 mb-3">
        <Card className="">
          <CardHeader>
            <CardTitle>Lead Statistics (Line Chart)</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center h-[300px]">
            <Line data={lineChartData} options={lineChartOptions} />
          </CardContent>
        </Card>
      </div>

      {/* Pie Chart */}
      <div className="col-span-1 md:col-span-1 mb-3">
        {" "}
        {/* Reduced size */}
        <Card>
          <CardHeader>
            <CardTitle>Lead Distribution (Pie Chart)</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center h-[300px]">
            <Pie data={pieChartData} options={pieChartOptions} />
          </CardContent>
        </Card>
      </div>

      {/* Doughnut Chart */}
      <div className="col-span-1 md:col-span-1 mb-3">
        {" "}
        {/* Reduced size */}
        <Card>
          <CardHeader>
            <CardTitle>Lead Distribution (Doughnut Chart)</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center h-[300px]">
            <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Finance;
