import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
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
  Title,
  Tooltip,
  Legend
);

const horizontalBarChartData = {
  labels: ["Total Leads", "New Customers", "Active Leads", "Lost Leads"],
  datasets: [
    {
      label: "Leads Data",
      data: [1680, 120, 1400, 200],
      backgroundColor: ["#3b82f6", "#10b981", "#fbbf24", "#ef4444"],
      borderColor: ["#2563eb", "#059669", "#f59e0b", "#dc2626"],
      borderWidth: 1,
    },
  ],
};

const horizontalBarChartOptions = {
  indexAxis: "y" as const, // Switch the axis to horizontal
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide the legend if not needed
    },
    title: {
      display: true,
      text: "Lead Overview (Horizontal)",
    },
  },
};

const barChartData = {
  labels: ["Total Leads", "New Customers", "Active Leads", "Lost Leads"],
  datasets: [
    {
      label: "Leads Data",
      data: [1680, 120, 1400, 200],
      backgroundColor: ["#3b82f6", "#10b981", "#fbbf24", "#ef4444"],
      borderColor: ["#2563eb", "#059669", "#f59e0b", "#dc2626"],
      borderWidth: 1,
    },
  ],
};

const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide the legend if not needed
    },
    title: {
      display: true,
      text: "Lead Overview",
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
const lineChartData = {
  labels: ["Total Leads", "New Customers", "Active Leads", "Lost Leads"],
  datasets: [
    {
      label: "Leads Trend",
      data: [1680, 120, 1400, 200],
      fill: false,
      backgroundColor: "#3b82f6",
      borderColor: "#3b82f6",
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
const ContactDashCard = ({
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

const ContactDash = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
        {leadData.map((lead, index) => (
          <ContactDashCard
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

      <div className="col-span-1 md:col-span-2 mb-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Lead Statistics</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center h-[275px]">
            <Bar data={barChartData} options={barChartOptions} />
          </CardContent>
        </Card>
      </div>
      <div className="col-span-1 md:col-span-2 mb-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Lead Statistics (Horizontal Bar)
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center h-[275px]">
            <Bar
              data={horizontalBarChartData}
              options={horizontalBarChartOptions}
            />
          </CardContent>
        </Card>
      </div>
      <div className="col-span-1 md:col-span-2 mb-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Lead Statistics (Line Chart)
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center h-[275px]">
            <Line data={lineChartData} options={lineChartOptions} />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ContactDash;
