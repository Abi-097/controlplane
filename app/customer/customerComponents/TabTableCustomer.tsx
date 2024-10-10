import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiChalkboard } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import Overview from "./overview/Overview";
import { HiOutlineUserGroup } from "react-icons/hi";
import Usage from "./usage/Usage";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import Plays from "./plays/Plays";
import CustomerJourney from "./customerJourney/CustomerJourney";

const TabTableCustomer = () => {
  return (
    <Tabs
      defaultValue="Overview"
      className=" my-betweenComponents mx-rightLeftMargin   rounded-md bg-fullbg"
    >
      <TabsList className="flex flex-row justify-between items-center py-6 px-2 w-full bg-white mb-betweenComponents rounded-sm">
        <div className="flex flex-row  w-full">
          <TabsTrigger
            value="Overview"
            className="cursor-pointer my-1 px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex gap-2 items-center">
              <BiChalkboard size={18} />
              Overview
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="Usage"
            className="cursor-pointer my-1 px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex gap-2 items-center">
              <FaChartLine size={18} />
              Usage
            </div>
          </TabsTrigger>

          <TabsTrigger
            value="CustomerJourney"
            className="cursor-pointer my-1 px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex gap-2 items-center">
              <HiOutlineUserGroup size={18} />
              Customer Journey
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="Plays"
            className="cursor-pointer my-1 px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex gap-2 items-center">
              <BiNetworkChart size={18} />
              Plays
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="Timeline"
            className="cursor-pointer my-1 px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            <div className="flex gap-2 items-center">
              <PiClockCounterClockwiseFill size={18} />
              Timeline
            </div>
          </TabsTrigger>
        </div>
      </TabsList>

      <TabsContent className="" value="Overview">
        <Overview />
      </TabsContent>
      <TabsContent value="Usage">
        <Usage />
      </TabsContent>
      <TabsContent className="" value="CustomerJourney">
        <CustomerJourney />
      </TabsContent>
      <TabsContent className="bg-white" value="Plays">
        <Plays />
      </TabsContent>
    </Tabs>
  );
};

export default TabTableCustomer;
