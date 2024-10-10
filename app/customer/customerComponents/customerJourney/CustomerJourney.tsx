import React from "react";
import { FiFilter } from "react-icons/fi";
import { BiSolidEdit } from "react-icons/bi";
import { IoMdRefresh } from "react-icons/io";
import { UsersPichart } from "../customersChart/UsersPichart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { CiStopwatch } from "react-icons/ci";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import clsx from "clsx";

// Define types for Card and KanbanData
interface Card {
  name: string;
  date: string;
  people: string;
  progress: string;
  time: number;
}

interface KanbanData {
  [key: string]: Card[];
}

// Sample data for the Kanban board
const data: KanbanData = {
  Onboarding: [
    {
      name: "Document360",
      date: "08 Aug 2024",
      people: "4/6",
      progress: "10/22",
      time: 78,
    },
    {
      name: "Clampett Inc",
      date: "08 Aug 2024",
      people: "3/6",
      progress: "8/22",
      time: 80,
    },
    {
      name: "ACME",
      date: "08 Aug 2024",
      people: "6/6",
      progress: "22/22",
      time: 120,
    },
  ],
  Adoption: [
    {
      name: "Dalmier Europe",
      date: "08 Aug 2024",
      people: "2/5",
      progress: "7/16",
      time: 85,
    },
    {
      name: "Stark Infotech",
      date: "08 Aug 2024",
      people: "4/5",
      progress: "11/16",
      time: 90,
    },
    {
      name: "Hyre Road",
      date: "08 Aug 2024",
      people: "3/5",
      progress: "0/16",
      time: 78,
    },
  ],
  Success: [
    {
      name: "Oscorp",
      date: "08 Aug 2024",
      people: "0/4",
      progress: "7/16",
      time: 110,
    },
    {
      name: "Oceanic Industries",
      date: "08 Aug 2024",
      people: "2/4",
      progress: "4/12",
      time: 30,
    },
  ],
  Renewal: [
    {
      name: "Tyrell Corp",
      date: "08 Aug 2024",
      people: "1/5",
      progress: "3/10",
      time: 91,
    },
    {
      name: "ABS",
      date: "08 Aug 2024",
      people: "2/5",
      progress: "3/10",
      time: 80,
    },
    {
      name: "Mason UK",
      date: "08 Aug 2024",
      people: "2/5",
      progress: "3/10",
      time: 80,
    },
    {
      name: "Alphabet Pvt Ltd",
      date: "08 Aug 2024",
      people: "2/5",
      progress: "3/10",
      time: 80,
    },
  ],
  Advocacy: [
    {
      name: "ABC Infotech",
      date: "08 Aug 2024",
      people: "2/5",
      progress: "8/22",
      time: 122,
    },
    {
      name: "Voyager Technologies",
      date: "08 Aug 2024",
      people: "2/5",
      progress: "8/22",
      time: 121,
    },
  ],
};

const CustomerJourney = () => {
  return (
    <div className="flex flex-col screen">
      
      <div className="flex overflow-auto w-full ">
        {Object.keys(data).map((column) => (
          <div key={column} className="w-full">            

            <div className="flex items-center justify-between m-1  bg-white p-3 py-2 shadow-md rounded-sm">
              <h6
                className={clsx(
                  "p-1 rounded-md font-semibold cursor-pointer text-sm",
                  column === "Onboarding"
                    ? "text-[#4167ED] bg-[#4167ED20]"
                    : column === "Adoption"
                    ? "text-[#7F3E9F] bg-[#7F3E9F20]"
                    : column === "Success"
                    ? "text-[#3e9f48] bg-[#3e9f4820]"
                     : column === "Renewal"
                    ? "text-[#9f3e3e] bg-[#9f3e3e20]"
                    : "text-[#C5873D] bg-[#C5873D20]"
                )}
              >
                {column}
              </h6>
              <div className="flex items-center">
                <p className="cursor-default text-gray-500 text-sm font-semibold bg-slate-200 rounded-full p-2 w-8 h-8 flex items-center justify-center">
                  {data[column].length}
                </p>
                {/* &nbsp;
                  <FaAngleDown /> */}
              </div>
            </div>

            <div className="space-y-2 pb-2 h-fit ">
              {data[column].map((card: Card, idx: number) => (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-lg shadow-md border-l-green-600 border-gray-200 my-2 mx-1 border-[1px] border-l-[5px]"
                >
                  <div className="flex justify-between items-center">
                    <h3 className=" text-sm">{card.name}</h3>
                    <span className="text-gray-600 text-sm flex flex-row gap-1 items-center">
                      <CiStopwatch size={16} />
                      {card.time}
                    </span>
                  </div>

                  <div className="flex flex-row justify-between items-center text-gray-600 text-sm pt-3">
                    <div className="flex flex-row items-center gap-1">
                      <MdOutlineCalendarMonth /> {card.date}
                    </div>
                    <div className="flex flex-row items-center gap-1">
                      {" "}
                      <BiNetworkChart size={16} />
                      {card.people}
                    </div>
                    <div className="flex flex-row items-center gap-1">
                      {" "}
                      <PiClockCounterClockwiseFill size={16} /> {card.progress}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerJourney;
