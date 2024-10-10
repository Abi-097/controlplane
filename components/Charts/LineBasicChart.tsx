import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import { saveAs } from "file-saver";
import React, { useRef, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineBasisChart: React.FC = () => {
  // Correctly type the chartRef
  const chartRef = useRef<ChartJS<"line"> | null>(null);
  const [selectedFormat, setSelectedFormat] = useState("svg");

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Credits",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#0070C0",
        backgroundColor: "rgba(173, 216, 230, 0.5)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleDownload = () => {
    const chart = chartRef.current;
    if (!chart) return;

    const chartCanvas = chart.canvas;

    switch (selectedFormat) {
      case "png":
        chartCanvas?.toBlob((blob) => {
          if (blob) saveAs(blob, "chart.png");
        });
        break;
      case "svg":
        const svgData = new Blob([chart.toBase64Image()], {
          type: "image/svg+xml;charset=utf-8",
        });
        saveAs(svgData, "chart.svg");
        break;
      case "csv":
        const csvData = convertToCSV(data);
        const csvBlob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
        saveAs(csvBlob, "chart.csv");
        break;
    }
  };

  const convertToCSV = (data: any) => {
    const csvRows = [];
    const headers = ["Label", "Credits"];
    csvRows.push(headers.join(","));

    data.labels.forEach((label: string, index: number) => {
      csvRows.push([label, data.datasets[0].data[index]].join(","));
    });

    return csvRows.join("\n");
  };

  return (
    <div className="p-4">
      <p className="text-sm font-bold mb-4">Credits per query</p>
      <div className="flex justify-end mb-4">
        <Select onValueChange={setSelectedFormat}>
          <SelectTrigger>
            <SelectValue placeholder="Select Format" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Download as</SelectLabel>
              <SelectItem value="svg">SVG</SelectItem>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="csv">CSV</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <button
          className="ml-4 p-2 bg-saveButton text-white rounded"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default LineBasisChart;
