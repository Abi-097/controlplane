import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Stepper from "@keyvaluesystems/react-stepper";
import React, { useState } from "react";
import Switch from "react-switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import ColorPicker from "@/components/colorpicker";
import moment from "moment-timezone";
import { ProjectsDropdown } from "@/components/projects";
import { FolderDropdown } from "@/components/folder";

const CreateBudgetStepper = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [startDate, setStartDate] = React.useState<Date | undefined>(
    new Date()
  );
  const [endDate, setEndDate] = React.useState<Date | undefined>(new Date());
  const [discountChecked, setDiscountChecked] = useState(false);
  const [promotionsChecked, setPromotionsChecked] = useState(false);

  const [steps, setSteps] = useState([
    { stepLabel: "Info", completed: false },
    { stepLabel: "Scope", completed: false },
    { stepLabel: "Amount", completed: false },
    { stepLabel: "Actions", completed: false },
  ]);

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleNextStep = () => {
    setSteps((prevSteps) =>
      prevSteps.map((step, index) => {
        if (index === currentStepIndex) {
          return { ...step, completed: true };
        }
        return step;
      })
    );
    setCurrentStepIndex((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setSteps((prevSteps) =>
      prevSteps.map((step, index) => {
        if (index === currentStepIndex - 1) {
          return { ...step, completed: false };
        }
        return step;
      })
    );
    setCurrentStepIndex((prevStep) => prevStep - 1);
  };

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountChecked(e.target.checked);
  };

  const handlePromotionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromotionsChecked(e.target.checked);
  };

  return (
    <div>
      <Stepper
        steps={[
          {
            stepLabel: "Info",
            stepDescription: (
              <div>
                <div className="flex items-center justify-between w-full gap-3">
                  <div className="flex-1 w-full">
                    <Label className="text-sm">Name *</Label>
                    <Input
                      type="text"
                      placeholder="Enter name"
                      className="w-[25rem]"
                    />
                  </div>
                  <div className="flex items-center mt-6">
                    <Switch
                      onChange={handleSwitchChange}
                      checked={isChecked}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      width={25}
                      height={15}
                      className="mr-2"
                    />
                    <span>In Active</span>
                  </div>
                </div>
                <Button
                  onClick={handleNextStep}
                  className="float-right mt-4 bg-saveButton hover:hoverSaveButton"
                >
                  Save & Continue
                </Button>
              </div>
            ),
            completed: steps[0].completed,
          },
          {
            stepLabel: "Scope",
            stepDescription: (
              <div>
                <div className="flex-1">
                  <Label className="text-sm">Name *</Label>
                  <Input
                    type="text"
                    placeholder="Enter name"
                    className="w-full"
                  />
                  <p className="mt-1 text-xs italic text-gray-400">
                    A budget enables you to track your actual spending against
                    your planned spending.
                  </p>
                </div>

                <div className="mt-3 flex-1">
                  <Label className="text-sm">Time range *</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="mt-1 text-xs italic text-gray-400">
                    The months starts on the first of the month and reset at the
                    beginning of the each month.
                  </p>
                </div>
                <div className="mt-3 flex-1">
                  <Label className="text-sm">Projects *</Label>
                  <ProjectsDropdown />
                </div>
                <div className="mt-3 flex-1">
                  <Label className="text-sm">Select Folder *</Label>

                  <FolderDropdown />
                </div>
                <div className="mt-3 flex-1">
                  <Label className="text-sm">Start Date *</Label>
                  <Flatpickr
                    className="bg-[#f9fafb] flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    data-enable-time
                    value={startDate}
                    onChange={(startDate) => setStartDate(startDate[0])}
                    options={{ dateFormat: "Y-m-d H:i" }}
                  />
                </div>
                <div className="mt-3 flex-1">
                  <Label className="text-sm">End Date *</Label>
                  <Flatpickr
                    className="bg-[#f9fafb] flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    data-enable-time
                    value={endDate}
                    onChange={(endDate) => setEndDate(endDate[0])}
                    options={{ dateFormat: "Y-m-d H:i" }}
                  />
                </div>
                <div className="mt-3 flex-1">
                  <Label className="text-sm">Credits *</Label>
                  <p className="mt-1 text-xs italic text-gray-400">
                    Selected credits are applied to the total cost. Budget
                    tracks the total cost minus any applicable selected credits.
                  </p>
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="discount"
                      checked={discountChecked}
                      onChange={handleDiscountChange}
                      className="mr-2"
                    />
                    <Label htmlFor="discount" className="text-sm">
                      Discount
                    </Label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="promotions"
                      checked={promotionsChecked}
                      onChange={handlePromotionsChange}
                      className="mr-2"
                    />
                    <Label htmlFor="promotions" className="text-sm">
                      Promotions
                    </Label>
                  </div>
                </div>
                <div className="flex  items-center justify-end gap-3">
                  <Button
                    onClick={handlePreviousStep}
                    className="float-right mt-4 bg-gray-400 text-black"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleNextStep}
                    className="float-right mt-4 bg-saveButton hover:hoverSaveButton"
                  >
                    Save & Continue
                  </Button>
                </div>
              </div>
            ),
            completed: steps[1].completed,
          },
          {
            stepLabel: "Amount",
            stepDescription: (
              <div>
                <p className="text-sm text-gray-600">
                  Set a monthly budget amount
                </p>
                <div className="mt-3 flex-1">
                  <Label className="text-sm">Budget Type *</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="mt-1 text-xs italic text-gray-400">
                    The months starts on the first of the month and reset at the
                    beginning of the each month.
                  </p>
                </div>
                <div className="mt-3 flex-1">
                  <Label className="text-sm">Target Amount *</Label>
                  <Input type="text" placeholder="" className="w-full" />
                </div>
                <div className="flex  items-center justify-end gap-3">
                  <Button
                    onClick={handlePreviousStep}
                    className="float-right mt-4 bg-gray-400 text-black"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleNextStep}
                    className="float-right mt-4 bg-saveButton hover:hoverSaveButton"
                  >
                    Save & Continue
                  </Button>
                </div>
              </div>
            ),
            completed: steps[2].completed,
          },
          {
            stepLabel: "Actions",
            stepDescription: (
              <div>
                <p className="text-sm text-gray-600">
                  Set alerts threshould rules
                </p>
                <p className="mt-1 text-xs italic text-gray-400">
                  Send email alert notifications when the actual or forecasted
                  spend surpasses a certain percentage of the budget or a
                  specific amount.
                </p>
                <Button className="mt-4 bg-gray-300 text-black">
                  Add Threshould
                </Button>

                <p className="text-sm text-gray-600 mt-4">
                  Manage notifications
                </p>
                <p className="mt-1 text-xs italic text-gray-400">
                  Send email alert notifications to billing admins and users of
                  this billing account.
                </p>

                <div className="flex items-center mt-3">
                  <input
                    type="checkbox"
                    id="discount"
                    checked={discountChecked}
                    onChange={handleDiscountChange}
                    className="mr-2"
                  />
                  <Label htmlFor="discount" className="text-sm">
                    Email alerts to billing admins and users
                  </Label>
                </div>
                <p className="mt-1 text-xs italic text-gray-400">
                  Allow monitoring email notification channels to receive alerts
                  when this budget reaches thresholds.
                </p>
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="promotions"
                    checked={promotionsChecked}
                    onChange={handlePromotionsChange}
                    className="mr-2"
                  />

                  <Label htmlFor="promotions" className="text-sm">
                    Link monitoring email notifications channel to this budget
                  </Label>
                </div>
                <p className="mt-1 text-xs italic text-gray-400">
                  Select a project and maximum 5 Monitoring email notification
                  channels.
                </p>
                <div className="flex  items-center justify-end gap-3">
                  <Button
                    onClick={handlePreviousStep}
                    className="float-right mt-4 bg-gray-400 text-black"
                  >
                    Back
                  </Button>
                  <Button
                    // onClick={handleNextStep}
                    className="float-right mt-4 bg-saveButton hover:hoverSaveButton"
                  >
                    Save & Continue
                  </Button>
                </div>
              </div>
            ),
            completed: steps[3].completed,
          },
        ]}
        currentStepIndex={currentStepIndex}
      />
    </div>
  );
};
export default CreateBudgetStepper;
