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

import { Label } from "@/components/ui/label";
import { useState } from "react";
import CurrencyUsageType from "./CurrencyUsageType";
import BillingContact from "./BillingContact";
import PaymentMethod from "./PaymentMethod";
import PaymentMethodComponent from "./PaymentMethodComponent";
import AccountDetails from "./AccountDetails";
import ContactDetails from "./ContactDetails";
import PaymentDetailsDialog from "./PaymentDetails/PaymentDetailsDialog";
import PaymentDetailsMain from "./PaymentDetails/PaymentDetailsMain";

interface BillingInfoMainProps<TData, TValue> {
  //   data: TData[];
  //   heading: string;
  //   isExpanded: boolean;
}

export function BillingInfoMain<TData, TValue>({}: //   heading,
//   isExpanded,
BillingInfoMainProps<TData, TValue>) {
  const [activeTab, setActiveTab] = useState("Account Details");
  const [data, setData] = useState<any[]>([]);
  const tabs = ["Account Details", "Contact Details", "Payment Details"];

  return (
    <>
      <div className="w-full h-fit overflow-auto">
        <div className="flex justify-between items-center px-7 ">
          <div className="flex items-center gap-3 py-4">
            <HiOutlineUserGroup size={20} />
            <p className="text-sm">Billing Visualization</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CgSandClock />
            <MdHistory />
          </div>
        </div>
        <hr />
        <div className="w-full py-2">
          <div className="border-b">
            <ul className="flex">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  className={`p-3 cursor-pointer text-sm ${
                    activeTab === tab
                      ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                      : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* <h1 className="text-2xl font-bold mb-4">{activeTab}</h1> */}
            <div className="w-full">
              {/* {activeTab === "Currency & Usage Type" && <CurrencyUsageType />}
              {activeTab === "Billing Contact" && (
                <BillingContact isSoldToContact={false} />
              )}
              {activeTab === "Sold To Contact" && (
                <BillingContact isSoldToContact={true} />
              )}
              {activeTab === "Payment Method" && <PaymentMethod />}
              {activeTab === "Back-up Payment Method" && (
                <PaymentMethodComponent isBackupPaymentMethod={true} />
              )} */}
              {activeTab === "Account Details" && <AccountDetails />}
              {activeTab === "Contact Details" && <ContactDetails />}
              {activeTab === "Payment Details" && <PaymentDetailsMain />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
