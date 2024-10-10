import React, { useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { GrAd } from "react-icons/gr";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { saveAs } from "file-saver";
import ChartJS from "chart.js/auto";
import LineBasisChart from "@/components/Charts/LineBasicChart";

const ProgressBarChart = () => {
  const [progress, setProgress] = useState(100);
  const chartRef = useRef<ChartJS | null>(null);
  // useEffect(() => {
  //   const timer = setTimeout(() => setProgress(66), 500);
  //   return () => clearTimeout(timer);
  // }, []);
  const handleDownload = (format: string) => {
    if (!chartRef.current) return;

    const chart = chartRef.current;
    const canvas = chart.canvas;

    if (format === "png") {
      canvas.toBlob((blob) => {
        if (blob) saveAs(blob, "chart.png");
      });
    } else if (format === "svg") {
      const svg = new XMLSerializer().serializeToString(canvas);
      const blob = new Blob([svg], { type: "image/svg+xml" });
      saveAs(blob, "chart.svg");
    } else if (format === "csv") {
      const csv = chart.data.datasets
        .map((dataset) => {
          return dataset.data.join(",");
        })
        .join("\n");

      const blob = new Blob([csv], { type: "text/csv" });
      saveAs(blob, "chart.csv");
    }
  };

  return (
    <div className="flex justify-between gap-4 my-4 ">
      <div className="flex-1 min-w-[45%] bg-white border border-1 border-gray-200 m-4 p-4">
        {/* Content for the first box */}
        <div className="flex items-center justify-between mb-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center gap-3">
            <GrAd /> <p>ABC11</p>
          </div>
          <Progress
            value={progress}
            className="w-[50%] h-2"
            color="bg-[#7fb2d6]"
          />
        </div>
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center gap-3">
            <GrAd /> <p>ABC11</p>
          </div>
          <Progress
            value={progress}
            className="w-[50%] h-2"
            color="bg-[#7fb2d6]"
          />
        </div>
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center gap-3">
            <GrAd /> <p>ABC11</p>
          </div>
          <Progress
            value={progress}
            className="w-[50%] h-2"
            color="bg-[#7fb2d6]"
          />
        </div>
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center gap-3">
            <GrAd /> <p>ABC11</p>
          </div>
          <Progress
            value={progress}
            className="w-[50%] h-2"
            color="bg-[#7fb2d6]"
          />
        </div>
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center gap-3">
            <GrAd /> <p>ABC11</p>
          </div>
          <Progress
            value={progress}
            className="w-[50%] h-2"
            color="bg-[#7fb2d6]"
          />
        </div>
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center gap-3">
            <GrAd /> <p>ABC11</p>
          </div>
          <Progress
            value={progress}
            className="w-[50%] h-2"
            color="bg-[#7fb2d6]"
          />
        </div>
      </div>
      <div className="flex-1 min-w-[45%] bg-white border border-1 border-gray-200 p-4 m-4">
        <LineBasisChart />
      </div>
    </div>
  );
};

export default ProgressBarChart;
