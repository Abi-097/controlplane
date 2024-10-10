import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FillButton,
  InverseFillButton,
  OutlineButton,
} from "@/components/libs/buttons";
import { FiPlus } from "react-icons/fi";
import StageDueDilaogbox from "@/app/components/dialogBoxes/StageDueDialogbox";
import Current_stageHistory from "./current_stageHistory/Current_stageHistory";
import History_stageHistory from "./history_stageHistory/History_stageHistory";

const tabData = [
  {
    value: "current",
    label: "Current",
    component: <Current_stageHistory />,
  },
  {
    value: "history",
    label: "History",
    component: <History_stageHistory />,
  },
];

const StageHistory_Leads = () => {
  return (
    <Tabs defaultValue="current" className="w-full ">
      <TabsList className="flex flex-row justify-between items-center py-6 px-2 w-full bg-white mb-betweenComponents rounded-sm  ">
        <div>
          {tabData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="cursor-pointer  px-4 py-2 rounded-full text-sm text-[rgb(33,35,44)] data-[state=active]:font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </div>

        <div className="flex flex-row gap-1 items-center">
          <StageDueDilaogbox
            trigger={
              <InverseFillButton>
                <FiPlus className="cursor-pointer " size={20} />
                <div className="text-sm">Stage Due</div>
              </InverseFillButton>
            }
          />
        </div>
      </TabsList>
      {tabData.map((tab) => (
        <TabsContent
          key={tab.value}
          className="m-0 w-full overflow-y-scroll h-[61vh] no-scrollbar rounded-sm "
          value={tab.value}
        >
          {tab.component}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default StageHistory_Leads;
