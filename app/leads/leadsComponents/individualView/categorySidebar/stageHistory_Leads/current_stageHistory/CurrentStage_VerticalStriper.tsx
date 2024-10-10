import React from "react";
import Stepper from "@keyvaluesystems/react-stepper";
import { FillButton } from "@/components/libs/buttons";
import { IoAdd } from "react-icons/io5";
import ConvertContact from "@/app/components/convertContact/ConvertContact";

const CurrentStage_VerticalStepper = () => {
  const styles = {
    LineSeparator: () => ({ height: "1rem", backgroundColor: "#3f76ff" }),
    ActiveNode: () => ({
      backgroundColor: "#3f76ff",
    }),
    CompletedNode: () => ({
      backgroundColor: "#3f76ff",
    }),
    LabelTitle: () => ({
      fontWeight: "normal",
      color: "#6b7280",
      fontSize: "16px", // Increase text size (adjust as needed)
    }),
    Node: () => ({
      height:"28px",
      width:"28px"
    }),
  };

  const steps = [
    {
      stepLabel: "Contact in our database",
      completed: true,
    },
    {
      stepLabel: "Converted into Lead",
      completed: true,
    },
    {
      stepLabel: "Contacted as Opportunity",
      completed: false,
    },
    {
      stepLabel: "Negotiating",
      completed: false,
    },
    {
      stepLabel: "Deal Closed",
      completed: false,
    },
    {
      stepLabel: "Customer",
      completed: false,
    },
  ];

  return (
    <div className=" h-[61vh]">
      {/* <div className=" w-[30%] pb-0">
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
  );
};

export default CurrentStage_VerticalStepper;
