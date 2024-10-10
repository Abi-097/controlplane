"use client";
import { columns } from "@/app/components/Settings/InvoiceBilling/Budget&Alerts/BudgetsColumn";
import { BudgetTable } from "@/app/components/Settings/InvoiceBilling/Budget&Alerts/BudgetTable";
import { CreateBudget } from "@/app/components/Settings/InvoiceBilling/Budget&Alerts/CreateBudget";
import { CreateBudgetActivity } from "@/app/components/Settings/InvoiceBilling/Budget&Alerts/CreateBudgetActivity";

import React, { useState } from "react";

const BudgetAlertPage = () => {
  const [data, setData] = useState<any[]>([]);

  const [currentStep, setCurrentStep] = useState<
    "table" | "paragraph" | "fields"
  >("table");

  const handleAddBudgetClick = () => setCurrentStep("paragraph");
  const handleNextClick = () => setCurrentStep("fields");
  const handleBackClick = () => setCurrentStep("table");

  //   useEffect(() => {
  //     // Fetch data from the URL
  //     axios
  //       .get("https://66c76bcb732bf1b79fa67bcd.mockapi.io/api/ticket")
  //       .then((response) => {
  //         // Set the data to state and log it
  //         setData(response.data);
  //         // setDataLength(response.data.length);
  //         // console.log(response.data);
  //       })
  //       .catch((error) => {
  //         // Handle any errors
  //         console.error("There was an error fetching the data!", error);
  //       });
  //   }, []);
  return (
    <div className="overflow-auto w-full h-full">
      {/* The table component should handle horizontal scroll */}
      <div className="overflow-x-auto">
        {currentStep === "table" && (
          <BudgetTable
            columns={columns}
            data={data}
            onAddBudgetClick={handleAddBudgetClick}
          />
        )}
        {currentStep === "paragraph" && (
          // <div className="flex flex-col items-center gap-4">
          <CreateBudget onNext={handleNextClick} />
          // </div>
        )}

        {currentStep === "fields" && (
          <CreateBudgetActivity onBack={handleBackClick} />
        )}
      </div>
    </div>
  );
};

export default BudgetAlertPage;
