"use client";

import { MdHistory } from "react-icons/md";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FillButton } from "@/components/libs/buttons";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { CgSandClock } from "react-icons/cg";
import { MultiBarChart } from "@/components/Charts/MultiBarChart";
import BillBudget from "./BillBudget";
import { Label } from "@/components/ui/label";
import BillBudgetPie from "./BillBudgetPie";
import BillingLineBar from "./BillingLineBar";
import ProgressBarChart from "./ProgressBarChart";

interface BillingVisualizationProps<TData, TValue> {
  data: TData[];
  //   heading: string;
  //   isExpanded: boolean;
}

export function BillingVisualization<TData, TValue>({}: //   data,
//   heading,
//   isExpanded,
BillingVisualizationProps<TData, TValue>) {
  return (
    <>
      <div className="w-full h-[87vh] overflow-auto pb-20">
        <div className="flex justify-between items-center px-7 ">
          <div className="flex items-center gap-3 p-4">
            <HiOutlineUserGroup size={20} />
            <p className="text-sm">Billing Visualization</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CgSandClock />
            <MdHistory />
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center px-7">
          <p className="text-gray-600 my-4 text-sm">
            Billing Account Number: 87123456
          </p>
          <p className="text-gray-600 my-4 text-sm">
            Billing Country / Region: US
          </p>
          <p className="text-gray-600 my-4 text-sm">
            Company Name: Global SpaceX
          </p>
        </div>
        <hr className="mb-4" />
        <div className="p-3">
          <Label className="p-2">Filter by Folder</Label>
          <Select>
            <SelectTrigger className="w-[35%]">
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

        <div>
          <BillBudget />
          <BillBudgetPie />
          <BillingLineBar />
          <ProgressBarChart />
        </div>
      </div>
    </>
  );
}
