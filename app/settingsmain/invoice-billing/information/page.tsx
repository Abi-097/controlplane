"use client";
import React, { useState } from "react";
import { MdHistory, MdOutlineHistory } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CgSandClock } from "react-icons/cg";
import AccountDetails from "@/app/components/Settings/InvoiceBilling/BillingInfo/AccountDetails";
import PaymentDetailsMain from "@/app/components/Settings/InvoiceBilling/BillingInfo/PaymentDetails/PaymentDetailsMain";
import ContactDetails from "@/app/components/Settings/InvoiceBilling/BillingInfo/ContactDetails";
import History from "@/app/components/History/History";

interface BillingInfoMainProps<TData, TValue> {
  //   data: TData[];
  //   heading: string;
  //   isExpanded: boolean;
}

export default function BillingInfoPage<TData, TValue>({}: //   heading,
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
            <History
              trigger={
                <MdOutlineHistory
                  className="text-gray-500 cursor-pointer hover:text-gray-700"
                  size={20}
                />
              }
            />
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
            <div className="w-full">
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
