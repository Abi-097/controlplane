import React from "react";

// Define the allowed stages as a union type
type StageType =
  | "New"
  | "Open-Not Contacted"
  | "Closed-Not Contacted"
  | "Qualified"
  | "Closed-Converted";

interface Current_stageHistoryInfoProps {
  stage: StageType;
  amount: number;
  probability: number;
  expectedRevenue: number;
  closeDate: string;
  lastModifiedBy: string;
  lastModified: string;
}

const Current_stageHistoryInfo: React.FC<Current_stageHistoryInfoProps> = ({
  stage,
  amount,
  probability,
  expectedRevenue,
  closeDate,
  lastModifiedBy,
  lastModified,
}) => {
  return (
    <div className="flex justify-start h-[61vh] w-full">
      <div className="grid grid-cols-2 gap-y-4 gap-6 p-4 pt-[40px] w-full ">
        <div className="w-[200px]">
          {/* Leads Info content goes here */}
          <label
            htmlFor="Stage"
            className="block text-sm font-medium text-slate-400 mb-1"
          >
            Stage
          </label>
          <p className="text-sm mb-3">{stage}</p>
          <label
            htmlFor="Amount"
            className="block text-sm font-medium text-slate-400 mb-1"
          >
            Amount
          </label>
          <p className="text-sm mb-3">{amount}</p>
          <label
            htmlFor="Probability"
            className="block text-sm font-medium text-slate-400 mb-1"
          >
            Probability (%)
          </label>
          <p className="text-sm mb-3">{probability}%</p>
          <label
            htmlFor="ExpectedRevenue"
            className="block text-sm font-medium text-slate-400 mb-1"
          >
            Expected Revenue
          </label>
          <p className="text-sm mb-3">{expectedRevenue}</p>
          <label
            htmlFor="CloseDate"
            className="block text-sm font-medium text-slate-400 mb-1"
          >
            Close Date
          </label>
          <p className="text-sm mb-3">{closeDate}</p>
          <label
            htmlFor="LastModifiedBy"
            className="block text-sm font-medium text-slate-400 mb-1"
          >
            Last Modified By
          </label>
          <p className="text-sm mb-3">{lastModifiedBy}</p>
          <label
            htmlFor="LastModified"
            className="block text-sm font-medium text-slate-400 mb-1"
          >
            Last Modified
          </label>
          <p className="text-sm mb-3">{lastModified}</p>
        </div>
      </div>
    </div>
  );
};

export default Current_stageHistoryInfo;
