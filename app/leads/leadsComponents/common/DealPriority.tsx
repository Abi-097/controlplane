import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Helper function to get ordinal suffix
function getOrdinalSuffix(day: number): string {
  const j = day % 10;
  const k = Math.floor(day / 10);
  if (k === 1) return `${day}th`; // Handle 11th, 12th, 13th
  return j === 1
    ? `${day}st`
    : j === 2
    ? `${day}nd`
    : j === 3
    ? `${day}rd`
    : `${day}th`;
}

// Function to format date in "10th Jan 2024" format
function formatCustomDate(date: Date): string {
  const day = date.getDate();
  const month = format(date, "MMM"); // Abbreviated month
  const year = date.getFullYear();
  return `${getOrdinalSuffix(day)} ${month} ${year}`;
}

const DealPriority = () => {
  const [isEditingDealPriority, setIsEditingDealPriority] = useState(false);
  const [dealPriority, setDealPriority] = useState("High"); // Default to "High"

  const [isEditingDueDate, setIsEditingDueDate] = useState(false);
  const [dueDate, setDueDate] = React.useState<Date | undefined>(
    new Date("2024-09-17")
  );
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  // Handle closing the popover and edit mode
  const handlePopoverChange = (open: boolean) => {
    setIsPopoverOpen(open);
    if (!open) {
      setIsEditingDueDate(false); // Exit editing mode when the popover closes
    }
  };

  const handleDueDateDoubleClick = () => {
    setIsEditingDueDate(true);
    setIsPopoverOpen(false); // Ensure the popover opens when entering edit mode
  };

  const handleDealPriorityDoubleClick = () => {
    setIsEditingDealPriority(true);
  };

  const handleDealPriorityChange = (value: string) => {
    setDealPriority(value); // Update deal priority when selected
    setIsEditingDealPriority(false); // Exit edit mode after selection
  };

  return (
    <div className="flex flex-col items-start bg-white">
      <div className="flex flex-col gap-4">
        {/* Deal Priority Section */}
        <div>
          {isEditingDealPriority ? (
            <div className="font-bold cursor-pointer">
              <div className="text-sm font-semibold text-gray-800 flex flex-row gap-2 items-center">
                Deal Priority
              </div>
              <div className="pl-2">
                <div className="text-sm text-gray-800 pt-3">
                  {/* Select Component for Priority */}
                  <Select
                    onValueChange={(value) => handleDealPriorityChange(value)} // Set value on change
                    defaultValue={dealPriority} // Set the default value
                    
                  >
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="Select Priority" className="text-sm "/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem className="text-sm" value="High">High</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Low">Low</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          ) : (
            <div
              onDoubleClick={handleDealPriorityDoubleClick}
              className="cursor-pointer"
            >
              <div className="text-sm font-semibold text-gray-800 flex flex-row gap-2 items-center">
                Deal Priority
              </div>
              <div className="pl-2">
                <div className="text-sm text-gray-800 pt-2">
                  <span className="inline-block w-[100px] ">
                    {dealPriority}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DealPriority;
