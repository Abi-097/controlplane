import React, { useState } from "react";
import ISO6391 from "iso-639-1";
import moment from "moment-timezone";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MdOutlineHistory } from "react-icons/md";
import { Label } from "@/components/ui/label";
import { BiWorld } from "react-icons/bi";
import History from "../../History/History";
const Region = () => {
  const languageCodes = ISO6391.getAllCodes();
  const [selectedTimezone, setSelectedTimezone] = useState<string | null>(null);
  const timezones = moment.tz.names().map((tz) => {
    const offset = moment.tz(tz).format("Z"); // Get the UTC offset
    return `(UTC${offset}) ${tz}`;
  });

  return (
    <div>
      <form className="w-full p-4 h-[87vh]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BiWorld size={24} />
            <p className="font-semibold">Region & Time Zone</p>
          </div>
          <History
            trigger={
              <MdOutlineHistory className="mr-2 cursor-pointer" size={24} />
            }
          />
        </div>
        <hr className="text-slate-300 my-4" />
        <div>
          <div
            className=" my-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Locale</Label>
            <Select>
              <SelectTrigger className="w-full bg-inputField">
                <SelectValue placeholder="Choose a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {languageCodes.map((code) => (
                    <SelectItem key={code} value={code}>
                      {ISO6391.getName(code)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div
            className=" my-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1">Time Zone</Label>
            <Select>
              <SelectTrigger className="w-full bg-inputField">
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
          <div
            className=" my-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Languages</Label>
            <Select>
              <SelectTrigger className="w-full bg-inputField">
                <SelectValue placeholder="Choose a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {languageCodes.map((code) => (
                    <SelectItem key={code} value={code}>
                      {ISO6391.getName(code)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="bg-saveButton text-white ">
            Save Account Details
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Region;
