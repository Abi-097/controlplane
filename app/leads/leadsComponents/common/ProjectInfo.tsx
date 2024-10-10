import React from "react";
import AvatarGroup from "@/components/ui/AvatarGroup";
import StageDueDilaogbox from "@/app/components/dialogBoxes/StageDueDialogbox";
import { FiPlus } from "react-icons/fi";
import CustomTooltip from "@/app/components/common/Tooltip/CustomTooltip";

const ProjectInfo = () => {
  return (
    <div className="p-4  bg-white flex flex-col h-fit mb-betweenComponents">
      <div className="flex flex-row gap-2">
        <div className="flex flex-col pr-10 text-sm font-semibold text-gray-800">
          <div>Deal Due Date:</div>
          <div>Deal Priority:</div>
          <div>Deal Probability:</div>
        </div>
        <div className="flex flex-col  text-sm text-gray-800 w-[58%]">
          <div className="flex flex-row justify-between">
            <div>Mar 24th, 2024</div>
            <div className="flex justify-end">
              <StageDueDilaogbox
                trigger={
                  <div>
                    <CustomTooltip
                      text="Stage Due"
                      trigger={
                        <button className="bg-transparent border-none">
                          <FiPlus size={18} />
                        </button>
                      }
                    />
                  </div>
                }
              />
            </div>
          </div>
          <div>High</div>
          <div>10%</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
