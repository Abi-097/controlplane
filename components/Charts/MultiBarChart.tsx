"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  //   { month: "January", desktop: 186, mobile: 80 },
  //   { month: "February", desktop: 305, mobile: 200 },
  //   { month: "March", desktop: 237, mobile: 120 },
  //   { month: "April", desktop: 73, mobile: 190 },
  //   { month: "May", desktop: 209, mobile: 130 },
  //   { month: "June", desktop: 214, mobile: 140 },
  { month: "Jan 2024", desktop: 186 },
  { month: "Feb 2024", desktop: 305 },
  { month: "Mar 2024", desktop: 237 },
  { month: "April 2024", desktop: 73 },
  { month: "May 2024", desktop: 209 },
  { month: "June 2024", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  //   mobile: {
  //     label: "Mobile",
  //     color: "hsl(var(--chart-2))",
  //   },
} satisfies ChartConfig;

export function MultiBarChart() {
  return (
    <ChartContainer config={chartConfig} className="">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <YAxis
          tickLine={false}
          axisLine={{ strokeWidth: 0.5 }}
          tickMargin={10}
        />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={{ strokeWidth: 0.5 }}

          //   tickFormatter={(value) => value.slice(0, 3)}
        />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar dataKey="desktop" fill="#7fb2d6" radius={1} barSize={13} />
        {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
      </BarChart>
    </ChartContainer>
  );
}
