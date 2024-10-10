import React, { useState } from "react";

import BudgetMain from "./Budget&Alerts/BudgetMain";
import InvoiceBillingHistory from "./InvoiceHistory/InvoiceBillingHistory";
import { BillingVisualization } from "./BillingVisualization/BillingVisualization";
import { BillingInfoMain } from "./BillingInfo/BillInfoMain";

const InvoiceBillingMain = () => {
  const [activeTab, setActiveTab] = useState("Billing Information");
  const [data, setData] = useState<any[]>([]);
  const tabs = [
    "Billing Information",
    "Invoice History",
    "Budgets & Alerts",
    "Billing Visualization",
  ];

  return (
    <div className="w-full h-[92vh] py-1 ">
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
          {activeTab === "Billing Information" && (
            <>
              <BillingInfoMain />
            </>
          )}
          {activeTab === "Invoice History" && <InvoiceBillingHistory />}
          {activeTab === "Budgets & Alerts" && <BudgetMain />}
          {activeTab === "Billing Visualization" && (
            <BillingVisualization data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoiceBillingMain;
