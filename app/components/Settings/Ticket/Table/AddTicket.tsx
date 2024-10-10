import MultiSelect from "@/components/multipleCountry";
import MultiGroupSelect from "@/components/multiplegroup";
import MultiRoleSelect from "@/components/multiplerole";
import { DialogClose, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useRef, useState } from "react";
import Switch from "react-switch";
import { IoMdSettings, IoMdAdd, IoMdClose } from "react-icons/io";
import MultiUserSelect from "@/components/multipleusers";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
interface AddTicketDialogProps {
  trigger: React.ReactNode;
  mode: "addTicket" | "editTicket";

  // change
  contactData?: {
    companyName: string;
    industryType: string;
    region: string;
    contact: string;
    identification: string;
    email: string;
    company: string;
    resume: string;
    country: string;
    mode: string;
  };
}

const AddTicketDialog: React.FC<AddTicketDialogProps> = ({
  trigger,
  mode,
  contactData,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = React.useState<Date>();
  const [dateTwo, setDateTwo] = React.useState<Date>();
  const [attachments, setAttachments] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };

  const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setAttachments((prev) => [...prev, ...files]);
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  // Function to programmatically open file input
  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
      fileInputRef.current.focus();
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[1300px] max-h-[80%] overflow-x-auto">
          <DialogTitle className="text-lg font-medium">
            <div className="flex items-center gap-3">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <span className="flex items-center gap-2">
                <IoMdSettings size={20} />

                {mode === "addTicket" ? "Add Ticket" : "Edit Ticket"}
              </span>
            </div>
            <hr className="my-1" />
          </DialogTitle>
          <DialogDescription className="mt-2 mb-4 text-sm text-gray-500">
            <form className="space-y-4">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-full">
                  <Label className="text-md mb-1 ">Select Ticket</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full">
                  <Label className="text-md mb-1 ">Title</Label>
                  <Input
                    className="bg-[#f9fafb]"
                    type="text"
                    id="name"
                    placeholder=""
                    name="name"
                    defaultValue=""
                  />
                </div>
                <div className="pt-4">
                  <div className="flex items-center justify-center">
                    <Switch
                      onChange={handleSwitchChange}
                      checked={isChecked}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      width={25}
                      height={15}
                      className="mr-2"
                    />{" "}
                    {/* In Active */}
                  </div>
                </div>
              </div>

              {/*  */}

              <div className=" mb-4 w-full ">
                <Textarea placeholder="Type your message here." />
              </div>
              <div className="flex items-center gap-1">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[300px] justify-start text-left font-normal",
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
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[300px] justify-start text-left font-normal",
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
                      selected={dateTwo}
                      onSelect={setDateTwo}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Switch
                  onChange={handleSwitchChange}
                  checked={isChecked}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  width={25}
                  height={15}
                  className="mr-2 mt-6"
                />
                <div className="mt-10 flex flex-col md:flex-row justify-end md:space-x-2">
                  <DialogClose asChild>
                    <button className="px-4 py-2 bg-gray-300 text-black rounded-md ">
                      Cancel
                    </button>
                  </DialogClose>
                  <button className="px-4 py-2 bg-saveButton text-white rounded-md">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </DialogDescription>
        </DialogContent>
        {/* </Dialog.Portal> */}
      </Dialog>
      {/*  */}
    </div>
  );
};

export default AddTicketDialog;
