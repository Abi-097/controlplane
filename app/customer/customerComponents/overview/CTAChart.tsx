"use client"
import React from "react"
import { TrendingUp } from "lucide-react"
import { Pie, PieChart, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart"

const chartData = [
  { name: "Completed", value: 45, fill: "hsl(var(--chart-1))" },
  { name: "Inprogress", value: 35, fill: "hsl(var(--chart-2))" },
  { name: "Overdue", value: 20, fill: "hsl(var(--chart-3))" },
  { name: "Not started", value: 20, fill: "hsl(var(--chart-4))" },
]

const chartConfig = {
  Completed: {
    label: "Completed",
    color: "hsl(var(--chart-1))",
  },
  Inprogress: {
    label: "Inprogress",
    color: "hsl(var(--chart-2))",
  },
  Overdue: {
    label: "Overdue",
    color: "hsl(var(--chart-3))",
  },
  "Not started": {
    label: "Not started",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function CTAChart() {
  return (
    <div className="flex flex-row h-full justify-between w-full items-center p-0">
        <div className="m-0 p-0  ">
          <ChartContainer config={chartConfig} className="w-[150px] h-[150px]">
            <ResponsiveContainer >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={2}
                  style={{padding:100, margin:50, width:150}}

                                   
                  
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        <div className=" pl-4 w-[50%]">
          {chartData.map((entry, index) => (
            <div key={entry.name} className="flex items-center mb-2 justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 mr-2" style={{ backgroundColor: entry.fill }}></div>
                <span className="text-sm">{entry.name}</span>
              </div>
              <span className="text-sm">{entry.value}%</span>
            </div>
          ))}
        </div>
        </div>
  )
}