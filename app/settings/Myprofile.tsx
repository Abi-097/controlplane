import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoLocationOutline } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import NameImage from "./NameImage";
import Address from "./Address";
const MyProfile = () => {
  // specific keys for the contentMap
  const options = [
    "Name & Image",
    "Address",
    "Region & Time Zone",
    "Password Change",
    "History",
  ] as const;
  type OptionType = (typeof options)[number];

  // State to keep track of the active option
  const [activeOption, setActiveOption] = useState<OptionType>("Name & Image");

  // Content corresponding to each option
  const contentMap: Record<OptionType, React.ReactNode> = {
    "Name & Image": <NameImage />,
    Address: <Address />,
    "Region & Time Zone": "Content for Region & Time Zone",
    "Password Change": "Content for Password Change",
    History: "History",
  };
  const iconsMap: Record<OptionType, React.ReactNode> = {
    "Name & Image": <CgProfile size={20} />,
    Address: <CgProfile size={20} />,
    "Region & Time Zone": <CgProfile size={20} />,
    "Password Change": <CgProfile size={20} />,
    History: <CgProfile size={20} />,
  };
  return (
    // <div id="profile">
    <div className="flex flex-wrap gap-2 w-full h-[90vh]">
      {/* Left Side - Menu */}
      <div
        className="
          w-full 
          sm:w-full sm:mb-2
          md:w-[100%] 
          lg:w-[15%] 
          xl:w-[15%]
          p-1 bg-white shadow-md rounded-md
        "
      >
        {options.map((option) => (
          <div
            key={option}
            className={`cursor-pointer py-2 pl-4 mb-2 rounded-md text-sm flex items-center gap-3 ${
              activeOption === option
                ? "bg-gray-300 text-black border-l-4 border-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveOption(option)}
          >
            {iconsMap[option]}
            {option}
          </div>
        ))}
      </div>

      {/* Right Side - Content */}
      <div
        className=" 
          w-full 
          sm:w-full
          md:w-[100%]
          lg:w-[84%]
          xl:w-[84%]
          p-1 bg-white shadow-md rounded-md
        "
      >
        {contentMap[activeOption]}
      </div>
    </div>
  );
};

export default MyProfile;
