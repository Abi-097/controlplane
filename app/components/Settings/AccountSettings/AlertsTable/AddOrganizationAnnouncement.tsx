import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoPerson } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { z } from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";

import { CiLocationOn } from "react-icons/ci";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Switch from "react-switch";
import { Country, State, City } from "country-state-city";
import Flag from "react-world-flags";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import ColorPicker from "@/components/colorpicker";
import { FaRegCheckSquare } from "react-icons/fa";
import MultiSelectCountries from "@/components/multipleCountry";
import CustomMultiSelect from "@/components/multipleCountry";
import MultiSelect from "@/components/multipleCountry";
import moment from "moment-timezone";
interface AddOrganizationAnnouncementDialogProps {
  trigger: React.ReactNode;
}
const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const holidays = [
  {
    date: "10/10/2024",
    holiday: "Holowin",
    status: "Active",
    description: "Credit Card",
  },
];
const AddOrganizationAnnouncementDialog: React.FC<
  AddOrganizationAnnouncementDialogProps
> = ({ trigger }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [activeDays, setActiveDays] = useState<string[]>([]);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const timezones = moment.tz.names().map((tz) => {
    const offset = moment.tz(tz).format("Z"); // Get the UTC offset
    return `(UTC${offset}) ${tz}`;
  });

  const handleSelectionChange = (values: string[]) => {
    setSelectedCountries(values);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setSelectedState("");
  };

  const handleStateChange = (value: string) => {
    setSelectedState(value);
  };

  const IndustrySelection = [
    {
      value: "ghc",
      name: "Global Holiday Calendar",
    },
    {
      value: "csh",
      name: "Country Specific Holiday Calendar",
    },
    {
      value: "ssh",
      name: "State Specific Holiday Calendar",
    },
  ];

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };
  const toggleDay = (day: string) => {
    setActiveDays((prevActiveDays) =>
      prevActiveDays.includes(day)
        ? prevActiveDays.filter((d) => d !== day)
        : [...prevActiveDays, day]
    );
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[800px] max-h-screen overflow-x-auto">
        <DialogTitle className="text-lg font-medium">
          <span className="flex items-center gap-2">
            <Image
              src="/icons/megaphone.png"
              alt="megaphone.png"
              width={20}
              height={20}
            />
            Organization Announcement
          </span>
          <hr className="my-1" />
        </DialogTitle>
        <DialogDescription className="mt-2 mb-4 text-sm text-gray-500">
          <form className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div
                className=" mb-4 w-full md:w-full 
          lg:w-[50%] 
          xl:w-[50%]"
              >
                <Label className="text-md mb-1 ">Name</Label>
                <Input
                  className="bg-[#f9fafb]"
                  type="text"
                  id="name"
                  placeholder=""
                  name="name"
                  defaultValue=""
                />
              </div>
              <div className="flex items-center">
                <Switch
                  onChange={handleSwitchChange}
                  checked={isChecked}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  width={25}
                  height={15}
                  className="mr-2"
                />{" "}
                In Active
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-2">
              <div className="flex-1">
                <Label className="text-md mb-1 ">Start Date</Label>

                <Flatpickr
                  className="bg-[#f9fafb] flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  data-enable-time
                  value={date}
                  onChange={(date) => setDate(date[0])}
                  options={{ dateFormat: "Y-m-d H:i" }}
                />
              </div>

              <div className="flex-1">
                <Label className="text-md mb-1 ">End Date</Label>

                <Flatpickr
                  className="bg-[#f9fafb] flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  data-enable-time
                  value={date}
                  onChange={(date) => setDate(date[0])}
                  options={{ dateFormat: "Y-m-d H:i" }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-2">
              <div className="flex-1">
                <Label className="text-md mb-1 ">Banner Style</Label>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Fruits</SelectLabel> */}
                      <SelectItem value="l2r">Left to Right</SelectItem>
                      <SelectItem value="r2l">Right to Left</SelectItem>
                      <SelectItem value="c">Center</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <Label className="text-md mb-1 ">Choose Color</Label>

                <ColorPicker onColorSelect={handleColorSelect} />
              </div>
            </div>
            <div className=" mb-4 w-full">
              <Label className="text-md mb-1 ">Country</Label>

              <MultiSelect />
            </div>
            <div className=" mb-4 w-full">
              <Label className="text-md mb-1 ">Time Zone</Label>
              <Select>
                <SelectTrigger className="w-full bg-[#f9fafb]">
                  <SelectValue placeholder="Choose a timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {timezones.map((timezone, index) => (
                      <SelectItem key={index} value={timezone}>
                        {timezone}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className=" mb-4 w-full">
              <Label className="text-md mb-1 ">Message</Label>
              <Textarea placeholder="" className="bg-[#f9fafb]" />
            </div>
          </form>
        </DialogDescription>

        {/* Add your form or other content here */}
        <div className="mt-4 flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-gray-200 text-black rounded-md w-full md:w-1/2">
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

export default AddOrganizationAnnouncementDialog;
