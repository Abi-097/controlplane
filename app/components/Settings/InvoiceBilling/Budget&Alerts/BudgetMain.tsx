import React, { useState } from "react";
import { BudgetTable } from "./BudgetTable";
import { columns } from "./BudgetsColumn";
import { CreateBudget } from "./CreateBudget";
import { CreateBudgetActivity } from "./CreateBudgetActivity";

const BudgetMain = () => {
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
    <div>
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
  );
};

export default BudgetMain;
