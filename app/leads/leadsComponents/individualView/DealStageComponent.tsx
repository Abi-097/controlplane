import React, { useState } from "react";
import { FillButton } from "@/components/libs/buttons";
import { IoAdd, IoFilterOutline } from "react-icons/io5";
import WorkflowProgress from "./WorkflowProgress";
import ConvertContact from "@/app/components/convertContact/ConvertContact";
import { TbLayoutKanban } from "react-icons/tb";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import DealAmount from "../common/DealAmount";
import CustomTooltip from "@/app/components/common/Tooltip/CustomTooltip";
import { Kanban } from "lucide-react";

const DealStageComponent = () => {
  const [stage, setStage] = useState("New");
  return (
    <div className="w-full overflow-x-hidden">
      {/* Dealstage top bar */}
      <div className="mb-betweenComponents rounded-sm px-4 py-1 bg-white flex flex-row justify-between items-center gap-4">
        <div className="text-lg font-semibold  text-gray-800">Deals Stage</div>
        <div className="flex flex-row gap-2 items-center">
          <CustomTooltip
            text="Kanban View"
            trigger={
              <Button variant="outline" className="border-none px-2 ">
                <Kanban className="cursor-pointer text-gray-500" size={18} />
              </Button>
            }
          />

          <ConvertContact
            trigger={
              <FillButton className="bg-saveButton hover:hoverSaveButton">
                <IoAdd />
                <div className="text-sm">Convert</div>
              </FillButton>
            }
          />
        </div>
      </div>

      {/* bottom bar component */}
      <div className="flex flex-row w-full h-fit gap-2  ">
        <div className="  px-4 py-2 rounded-sm flex flex-col justify-between w-[85vw] bg-white">
          <div className="flex flex-row justify-between items-center  ">
            <div className="flex flex-row gap-0 items-center justify-between w-full">
              <div className="flex flex-row items-center">
                <div className="w-[320px] flex flex-row gap-2 items-center">
                  <div className="border-none text-sm font-semibold  text-gray-800">
                    Move Stage:
                  </div>
                  <div className="">
                    <Select
                      defaultValue="New"
                      onValueChange={(e) => setStage(e)}
                    >
                      <SelectTrigger className="gap-1 border-none">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="New">New</SelectItem>
                          <SelectItem value="Open-Not Contacted">
                            Open-Not Contacted
                          </SelectItem>
                          <SelectItem value="Closed-Not Contacted">
                            Closed-Not Contacted
                          </SelectItem>
                          <SelectItem value="Qualified">Qualified</SelectItem>
                          <SelectItem value="Closed- Converted">
                            Closed-Converted
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  Start Date: Jul 28th 2024
                </div>
              </div>
              <div className="text-sm text-gray-600 ">
                Close Date: Aug 28th 2024
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col w-fit ">
              <WorkflowProgress currentStage={stage} />
              {/* {stage == "Closed-Converted" ? (
                <div className="flex justify-end mr-[200px] text-primaryBlue text-[12px] font-semibold pt-1">
                  Mark as Completed
                </div>
              ) : null} */}
            </div>
          </div>
        </div>

        {/* Deal Amount */}
        <div className=" rounded-sm w-[15vw]">
          <DealAmount />
        </div>
      </div>
    </div>
  );
};

export default DealStageComponent;
