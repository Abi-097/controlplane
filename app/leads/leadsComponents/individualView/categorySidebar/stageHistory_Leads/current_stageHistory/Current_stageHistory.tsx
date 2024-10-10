import React from "react";
import Current_stageHistoryInfo from "./Current_stageHistoryInfo";
import CurrentStage_VerticalStepper from "./CurrentStage_VerticalStriper";
import VerticalStepper from "@/app/components/Status/ContactStatus";

const Current_stageHistory = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-white w-full ">
      <div className="flex  justify-start w-2/5 pl-5 ">
        <Current_stageHistoryInfo
          stage="Qualified"
          amount={0}
          probability={10}
          expectedRevenue={0}
          closeDate="9/30/2022"
          lastModifiedBy="Sky Planner"
          lastModified="10th jan 2024, 1:21 PM"
        />
      </div>

      <div className="py-2 border border-1 border-gray-200 w-3/5">
        {/* <CurrentStage_VerticalStepper/> */}
        <VerticalStepper />
      </div>
    </div>
  );
};

export default Current_stageHistory;
