import React, { useState } from "react";
import { FillButton, OutlineButton } from "@/components/libs/buttons";
import { IoAdd, IoFilterOutline } from "react-icons/io5";
import WorkflowProgress from "./WorkflowProgress";
import ConvertContact from "@/app/components/convertContact/ConvertContact";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DealStageComponent = () => {
  const [stage,setStage] =useState("New")
  return (
    <div className="m-3 p-4 bg-white">
      <div className="text-sm font-semibold">Deals Stage</div>
      <div className="flex flex-row justify-between pt-1">
        <div className="text-sm ">Start Date: Jul 28th 2024</div>
        <div className="text-sm ">Close Date: Aug 28th 2024</div>
      </div>
      <div className="flex flex-row w-full p-3 items-center gap-2 justify-center">
        <WorkflowProgress currentStage={stage} />
      </div>

      <div className="flex flex-row justify-between items-center pt-1">
        <div className="flex flex-row gap-0 items-center">
          <div className="text-sm border-none">Move Stage:</div>
          <div>
            <Select defaultValue="New" onValueChange={(e)=>setStage(e)}>
              <SelectTrigger className="gap-1 border-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="Proposal Creation">
                    Proposal Creation
                  </SelectItem>
                  <SelectItem value="Presentation">Presentation</SelectItem>
                  <SelectItem value="Negotiation">Negotiation</SelectItem>
                  <SelectItem value="Closed">Closed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="text-sm flex flex-row gap-2 ">
          <ConvertContact
            trigger={
              <FillButton>
                <IoAdd />
                <div className="text-sm">Convert</div>
              </FillButton>
            }
          />

          <FillButton onClick={()=>setStage("Closed")}>
            <div className="text-sm">Marke as Completed</div>
          </FillButton>
        </div>
      </div>
    </div>
  );
};

export default DealStageComponent;
