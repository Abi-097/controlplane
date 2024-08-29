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

interface AddHolidayDialogProps {
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
const AddHolidayDialog: React.FC<AddHolidayDialogProps> = ({ trigger }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [activeDays, setActiveDays] = useState<string[]>([]);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setSelectedState("");
  };

  const handleStateChange = (value: string) => {
    setSelectedState(value);
  };

  const countries = Country.getAllCountries();
  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry)
    : [];

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
      <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[900px] max-h-screen overflow-x-auto">
        <DialogTitle className="text-lg font-medium">
          <span className="flex items-center gap-2">
            <CalendarIcon size={20} /> Add Holiday
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
                <Label className="text-md mb-1 ">Corporate Calendar Name</Label>
                <Input
                  className="bg-[#f9fafb]"
                  type="text"
                  id="corporateName"
                  placeholder=""
                  name="corporateName"
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
            <div className=" mb-4 w-full">
              <Label className="text-md mb-1 ">Description</Label>
              <Textarea placeholder="" className="bg-[#f9fafb]" />
            </div>
            <div className=" mb-4 w-full">
              <Label htmlFor="industryType" className="text-md mb-1 ">
                Corporate Calendar Type
              </Label>

              <Select defaultValue="">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* <SelectLabel>Fruits</SelectLabel> */}
                    {IndustrySelection.map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-2">
              <div className="flex-1">
                <Label className="text-md mb-1">Country</Label>
                <Select onValueChange={handleCountryChange}>
                  <SelectTrigger className="w-full relative bg-[#f9fafb]">
                    {selectedCountry && (
                      <Flag
                        code={selectedCountry}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                      />
                    )}
                    <span className={`ml-8 ${!selectedCountry && "pl-3"}`}>
                      {selectedCountry
                        ? countries.find(
                            (country) => country.isoCode === selectedCountry
                          )?.name
                        : "Select Country"}
                    </span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Country</SelectLabel>
                      {countries.map((country) => (
                        <SelectItem
                          key={country.isoCode}
                          value={country.isoCode}
                        >
                          <div className="flex items-center">
                            <Flag
                              code={country.isoCode}
                              className="w-5 h-5 mr-2"
                            />
                            {country.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <Label className="text-md mb-1">State/Province</Label>
                <Select
                  onValueChange={handleStateChange}
                  disabled={!selectedCountry}
                >
                  <SelectTrigger className="w-full relative bg-[#f9fafb]">
                    <CiLocationOn className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <span className={`ml-8 ${!selectedState && "pl-3"}`}>
                      {selectedState
                        ? states.find(
                            (state) => state.isoCode === selectedState
                          )?.name
                        : selectedCountry
                        ? "Select State"
                        : "Select a Country First"}
                    </span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select State</SelectLabel>
                      {states.map((state) => (
                        <SelectItem key={state.isoCode} value={state.isoCode}>
                          <div className="flex items-center">{state.name}</div>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-lg">Work Week</p>
              <hr className="my-1" />
            </div>
            <p>
              Your Work week and holiday schedule are used to compute based on
              the below selection.
            </p>
            <div className="flex">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`flex items-center justify-center py-3 px-6 cursor-pointer border text-center 
            ${
              activeDays.includes(day)
                ? "bg-blue-100 border-blue-200 text-blue-800"
                : "bg-white border-slate-200 text-black"
            }`}
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="pt-2">
              <p className="text-lg">Holiday</p>
              <hr className="my-1" />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead style={{ border: "1px solid #ddd" }}>
                    Date
                  </TableHead>
                  <TableHead style={{ border: "1px solid #ddd" }}>
                    Holiday
                  </TableHead>
                  <TableHead style={{ border: "1px solid #ddd" }}>
                    Status
                  </TableHead>
                  <TableHead style={{ border: "1px solid #ddd" }}>
                    Description
                  </TableHead>
                  <TableHead style={{ border: "1px solid #ddd" }}></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {holidays.map((holiday) => (
                  <TableRow key={holiday.holiday}>
                    <TableCell
                      className="font-medium"
                      style={{ border: "1px solid #ddd" }}
                    >
                      {holiday.date}
                    </TableCell>
                    <TableCell style={{ border: "1px solid #ddd" }}>
                      {holiday.holiday}
                    </TableCell>
                    <TableCell style={{ border: "1px solid #ddd" }}>
                      {holiday.status}
                    </TableCell>
                    <TableCell style={{ border: "1px solid #ddd" }}>
                      {holiday.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <Sheet>
                    <SheetTrigger asChild>
                      <button className="p-4">Add Holiday</button>
                    </SheetTrigger>
                    <SheetContent style={{ maxWidth: "550px" }}>
                      <SheetHeader>
                        <SheetTitle>
                          <span className="flex items-center gap-2">
                            <CalendarIcon size={20} /> Add Holiday
                          </span>
                        </SheetTitle>
                        <hr className="my-1" />
                      </SheetHeader>
                      <div className="mt-4">
                        <div className="flex items-center justify-between gap-2 pt-4 ">
                          <div className="mb-4 w-full md:w-full lg:w-[60%] xl:w-[60%]">
                            <Label className="text-md mb-1">Holiday Date</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date ? (
                                    format(date, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
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
                            />
                            In Active
                          </div>
                        </div>
                        <div className="mb-4 pt-4 w-full">
                          <Label className="text-md mb-1">Holiday Name</Label>
                          <Input
                            type="text" // Changed from 'corporateName' to 'text'
                            placeholder=""
                            className="bg-[#f9fafb]"
                          />
                        </div>
                        <div className="mb-4 pt-4 w-full">
                          <Label className="text-md mb-1">Description</Label>
                          <Textarea placeholder="" className="bg-[#f9fafb]" />
                        </div>
                      </div>
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button type="submit" className="mt-4">
                            Save changes
                          </Button>
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </TableRow>
              </TableFooter>
            </Table>
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

export default AddHolidayDialog;
