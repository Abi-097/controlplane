"use client";

import { MdHistory, MdOutlineHistory } from "react-icons/md";

import { HiOutlineUserGroup } from "react-icons/hi";

import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";
import { FillButton } from "@/components/libs/buttons";
import { FaPlus, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Stepper from "@keyvaluesystems/react-stepper";
import CreateBudgetStepper from "./CreateBudgetStepper";
import History from "@/app/components/History/History";
import LineBasisChart from "@/components/Charts/LineBasicChart";
interface CreateBudgetActivityProps<TData, TValue> {
  //   data: TData[];
  //   heading: string;
  //   isExpanded: boolean;
  onBack: () => void;
}

export function CreateBudgetActivity<TData, TValue>({
  onBack,
}: //   heading,

//   isExpanded,
CreateBudgetActivityProps<TData, TValue>) {
  return (
    <>
      <div className="w-full h-fit overflow-auto">
        <div className="flex justify-between items-center px-7 ">
          <div className="flex items-center gap-3 py-4">
            <FaRegArrowAltCircleLeft
              size={20}
              onClick={onBack}
              className="cursor-pointer"
            />
            <p className="text-sm">Budgets & Alerts</p>
          </div>
          <History
            trigger={
              <MdOutlineHistory
                className="text-gray-500 cursor-pointer hover:text-gray-700"
                size={20}
              />
            }
          />
        </div>
        <hr />
        <div className="flex w-full px-7 py-4">
          {/* Left section */}
          <div className="w-1/2">
            <CreateBudgetStepper />
          </div>

          {/* Right section */}
          <div className="w-1/2 pl-4">
            <LineBasisChart />
          </div>
        </div>
      </div>
    </>
  );
}
