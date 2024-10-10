import React, { useState } from "react";
import Stepper from "@keyvaluesystems/react-stepper";
import AddContactDialog from "../ContactTable/AddContact";
import { FillButton } from "@/components/libs/buttons";
import { IoAdd } from "react-icons/io5";
import ConvertContact from "../convertContact/ConvertContact";
import { Tabs } from "@/components/ui/tabs";
import StatusTabs from "../content/UserInfoPanel/StatusTab";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DealStatus = () => {
  const styles = {
    LineSeparator: () => ({ height: "1rem", backgroundColor: "#0070c0" }),
    ActiveNode: () => ({
      backgroundColor: "#0070c0",
    }),
    CompletedNode: () => ({
      backgroundColor: "#0070c0",
    }),
    LabelTitle: () => ({
      fontWeight: "normal",
      color: "#6b7280",
    }),
  };

  const steps = [
    {
      stepLabel: (
        <div>
          <Select defaultValue="new">
            <SelectTrigger className="w-[180px] border-none h-5 mt-3  font-semibold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="z-[1000] ">
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="exist">Existing</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-gray-500 text-left ml-3">
            Created by: 2023-09-01
          </div>
        </div>
      ),
      completed: true,
    },
    {
      stepLabel: (
        <div>
          <Select defaultValue="contacted">
            <SelectTrigger className="w-[180px] border-none h-5 mt-3  font-semibold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="z-[1000] ">
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="nocontact">No Contact</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-gray-500 text-left ml-3">
            Created by: 2023-09-01
          </div>
        </div>
      ),
      completed: true,
    },
    {
      stepLabel: (
        <div>
          <Select defaultValue="qualified">
            <SelectTrigger className="w-[180px] border-none h-5 mt-3 font-semibold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="z-[1000] ">
              <SelectItem value="qualified">Qualified</SelectItem>
              <SelectItem value="noqualified">Not Qualified</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-gray-500 text-left ml-3">
            Created by: 2023-09-01
          </div>
        </div>
      ),
      completed: false,
    },
    {
      stepLabel: (
        <div>
          <Select defaultValue="negotiated">
            <SelectTrigger className="w-[180px] border-none h-5 mt-3  font-semibold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="z-[1000]">
              <SelectItem value="negotiated">Negotiated</SelectItem>
              <SelectItem value="nostart">Not Started</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-gray-500 text-left ml-3">
            Created by: 2023-09-01
          </div>
        </div>
      ),
      completed: false,
    },
    {
      stepLabel: (
        <div>
          <Select defaultValue="closed">
            <SelectTrigger className="w-[180px] border-none h-5 mt-3  font-semibold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="z-[1000] ">
              <SelectItem value="closed">Closed</SelectItem>
              <SelectItem value="inreview">In Review</SelectItem>
              <SelectItem value="hold">Hold</SelectItem>
              <SelectItem value="delete">Delete</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-gray-500 text-left ml-3">
            Created by: 2023-09-01
          </div>
        </div>
      ),
      completed: false,
    },
  ];
  return (
    <>
      <div className="p-2">
        {/* <div className=" w-[30%] ">
          <ConvertContact
            trigger={
              <FillButton className="bg-saveButton hover:hoverSaveButton">
                <IoAdd />
                <div className="text-sm">Convert</div>
              </FillButton>
            }
          />
        </div> */}

        <Stepper
          styles={styles}
          orientation="vertical"
          steps={steps}
          currentStepIndex={1}
        />
      </div>
    </>
  );
};

export default DealStatus;
