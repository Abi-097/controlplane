import React from "react";
import Stepper from "@keyvaluesystems/react-stepper";
import AddContactDialog from "../ContactTable/AddContact";
import { FillButton } from "@/components/libs/buttons";
import { IoAdd } from "react-icons/io5";
import ConvertContact from "../convertContact/ConvertContact";
import { Tabs } from "@/components/ui/tabs";
import StatusTabs from "../content/UserInfoPanel/StatusTab";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const VerticalStepper = () => {
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
        <div className="ml-2 pt-4">
          <div className="text-sm font-semibold text-left">
            Contact in our database
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-xs text-gray-500 text-left">
              Sept 12th, 2024 10:23:07
            </div>
          </div>
        </div>
      ),
      completed: true,
      // date: "2023-09-01",
    },
    {
      stepLabel: (
        <div className="ml-2 pt-4">
          <div className="text-sm font-semibold text-left">
            Converted into Lead
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-xs text-gray-500 text-left">
              Sept 12th, 2024 10:23:07
            </div>
          </div>
        </div>
      ),
      completed: true,
      date: "2023-09-05",
    },
    {
      stepLabel: (
        <div className="ml-2 pt-4">
          <div className="text-sm font-semibold text-left">
            Contacted as Opportunity
          </div>

          <div className="flex items-center gap-2">
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-xs text-gray-500 text-left">
              Sept 12th, 2024 10:23:07
            </div>
          </div>
        </div>
      ),
      completed: false,
      date: "2023-09-10",
    },
    {
      stepLabel: (
        <div className="ml-2 pt-4">
          <div className="text-sm font-semibold text-left">Negotiating</div>

          <div className="flex items-center gap-2">
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-xs text-gray-500 text-left">
              Sept 12th, 2024 10:23:07
            </div>
          </div>
        </div>
      ),
      completed: false,
      date: "2023-09-15",
    },
    {
      stepLabel: (
        <div className="ml-2 pt-4">
          <div className="text-sm font-semibold text-left">Deal Closed</div>

          <div className="flex items-center gap-2">
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-xs text-gray-500 text-left">
              Sept 12th, 2024 10:23:07
            </div>
          </div>
        </div>
      ),
      completed: false,
      date: "2023-09-20",
    },
    {
      stepLabel: (
        <div className="ml-2 pt-4">
          <div className="text-sm font-semibold text-left">Customer</div>

          <div className="flex items-center gap-2">
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-xs text-gray-500 text-left">
              Sept 12th, 2024 10:23:07
            </div>
          </div>
        </div>
      ),
      completed: false,
      date: "2023-09-25",
    },
  ];
  return (
    <>
      <div>
        <div className="border-x border-1 border-gray-200 px-3">
          <p className="text-sm font-semibold">Overall Lead Status</p>
        </div>
        <hr className="my-3" />
        <div className="border-b border-1 border-gray-200 p-3">
          <div className="w-[30%] ">
            <ConvertContact
              trigger={
                <FillButton className="bg-saveButton hover:hoverSaveButton">
                  <IoAdd />
                  <div className="text-sm">Convert</div>
                </FillButton>
              }
            />
          </div>

          <Stepper
            styles={styles}
            orientation="vertical"
            steps={steps}
            currentStepIndex={1}
          />
        </div>
      </div>
    </>
  );
};

export default VerticalStepper;
