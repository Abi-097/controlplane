import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StageDueDilaogboxProps {
  trigger: React.ReactNode;
}
const StageDueDilaogbox: React.FC<StageDueDilaogboxProps> = ({ trigger }) => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[500px]">
        <DialogTitle className="text-lg font-medium">Stage Due</DialogTitle>
        <hr />
        <DialogDescription className="mt-1 mb-4 text-sm text-gray-500">
          <form className="space-y-4">
            <div className="w-full">
              <label
                htmlFor="owner"
                className="block text-sm font-medium text-black mb-1"
              >
                Owner
              </label>
              <Input
                type="text"
                id="owner"
                placeholder="Enter Owner"
                name="owner"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="closeDate"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Expected Close Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="w-full md:w-1/2">
                <label
                  htmlFor="Priority"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Priority
                </label>
                <Select>
                  <SelectTrigger className="w-full relative">
                    <SelectValue placeholder="Select Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="high">High </SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="sourceChannel"
                className="block text-sm font-medium text-black mb-1"
              >
                Source Channel
              </label>
              <Input
                type="text"
                id="sourceChannel"
                placeholder="Enter Source Channel"
                name="sourceChannel"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="sourceID"
                className="block text-sm font-medium text-black mb-1"
              >
                Source ID
              </label>
              <Input
                type="text"
                id="sourceID"
                placeholder="Enter Source ID"
                name="sourceID"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="shareTo"
                className="block text-sm font-medium text-black mb-1"
              >
                Share To
              </label>
              <Input
                type="text"
                id="shareTo"
                placeholder="Enter name"
                name="shareTo"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="probability"
                className="block text-sm font-medium text-black mb-1"
              >
                Probability
              </label>
              <Input
                type="text"
                id="probability"
                placeholder="Enter probability"
                name="probability"
              />
            </div>

           
          </form>
        </DialogDescription>
        {/* Add your form or other content here */}
        <div className="mt-4 flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-fullbg text-black rounded-md w-full md:w-1/2">
              Cancel
            </button>
          </DialogClose>
          <button className="px-4 py-2 bg-black text-white rounded-md w-full md:w-1/2">
            Save
          </button>
        </div>
      </DialogContent>
      {/* </Dialog.Portal> */}
    </Dialog>
  );
};

export default StageDueDilaogbox;
