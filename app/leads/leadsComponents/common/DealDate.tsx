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
const DealDate = () => {
    const [isEditingDealAmount, setIsEditingDealAmount] = useState(false);
    const [dealAmount, setDealAmount] = useState("10,000");
  
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
  
    const handleDealAmountDoubleClick = () => {
      setIsEditingDealAmount(true);
    };
  
    const handleDealAmountBlur = () => {
      setIsEditingDealAmount(false);
    };
  
    const handleDealAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDealAmount(e.target.value);
    };
  return (
    <div className="flex flex-col items-start bg-white">
        <div className=" flex flex-col  gap-4">
      

          {/* Second Component (Due Date) */}
          <div >
            {isEditingDueDate ? (
              <div className="font-bold cursor-pointer">
                <div className="text-sm font-semibold text-gray-800 flex flex-row gap-2 items-center">
                  Due Date
                </div>
                <div className="pl-2">
                  <div className="text-base text-gray-800 font-semibold pt-3">
                    <Popover
                      open={isPopoverOpen}
                      onOpenChange={handlePopoverChange} // Manage closing and state syncing
                    >
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[150px] justify-start text-left font-normal text-sm",
                            !dueDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-sm" />
                          {dueDate ? (
                            formatCustomDate(dueDate)
                          ) : (
                            <span className="text-sm">Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 text-sm">
                        {" "}
                        {/* Ensure the content text is small */}
                        <Calendar
                          mode="single"
                          selected={dueDate}
                          onSelect={setDueDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            ) : (
              <div
                onDoubleClick={handleDueDateDoubleClick}
                className="cursor-pointer"
              >
                <div className="text-sm font-semibold text-gray-800 flex flex-row gap-2 items-center">
                  Due Date
                </div>
                <div className="pl-2">
                  <div className="text-sm text-gray-800 pt-2">
                    <span className="inline-block w-[150px]">
                      {dueDate ? format(dueDate, "PPP") : "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
  )
}

export default DealDate