"use client";

import { MdHistory, MdOutlineHistory } from "react-icons/md";

import { HiOutlineUserGroup } from "react-icons/hi";

import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";
import { FillButton } from "@/components/libs/buttons";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import History from "@/app/components/History/History";

interface CreateBudgetProps<TData, TValue> {
  //   data: TData[];
  //   heading: string;
  //   isExpanded: boolean;
  onNext: () => void;
}

export function CreateBudget<TData, TValue>({
  onNext,
}: //   heading,

//   isExpanded,
CreateBudgetProps<TData, TValue>) {
  return (
    <>
      <div className="w-full h-fit overflow-auto">
        <div className="flex justify-between items-center px-7 ">
          <div className="flex items-center gap-3 py-4">
            <HiOutlineUserGroup size={20} />
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
        <div className="flex justify-center pt-10">
          <div className="text-left w-full max-w-md">
            <h3 className="text-[16px] font-semibold">Billing</h3>
            <h5 className="text-[16px]  font-semibold">Budgets & Alerts</h5>

            <Image
              src="/billing.png"
              alt="/billing.png"
              width={200}
              height={200}
            />
            <p className="text-md">
              A Billing Budget process helps organizations and individuals to
              track and monitor their expenses related to the usage of the
              DataNue product and its services. This process aids in cost
              control by triggering email notifications, facilitating proper
              monitoring and control. Budgets support financial planning,
              prevent surprises, optimize resources, and ultimately contribute
              to the decision-making process.
            </p>
            <div className="flex items-center justify-center pt-4">
              <Button
                size="sm"
                onClick={onNext}
                className="bg-saveButton gap-2"
              >
                <FaPlus size={12} /> Create Budget
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
