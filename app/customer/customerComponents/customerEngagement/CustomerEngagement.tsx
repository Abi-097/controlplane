import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { IoMdAdd } from "react-icons/io";
import Engagement_Leads from "./engagement_Leads/Engagement_Leads";
import { LiaArrowAltCircleLeftSolid } from "react-icons/lia";
import { LiaArrowAltCircleRight } from "react-icons/lia";
interface CustomerEngagementProps {
  toggleVisibility: () => void;
}
const CustomerEngagement: React.FC<CustomerEngagementProps>  = ({ toggleVisibility }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the button color

  const handleButtonClick = () => {
    setIsOpen(!isOpen); // Toggle between green and blue
    toggleVisibility();    // Trigger the visibility toggle
  };

  return (
    <div className="w-full mx-0 mb-2 rounded-sm pb-5 bg-fullbg h-[60vh] overflow-hidden">
      {/* Header */}
      <div className=" bg-white pb-2 pt-2 rounded-sm gap-3 px-5 flex flex-row justify-between items-center mb-betweenComponents">
      
        <div className="flex flex-row text-sm gap-1 text-gray-600">
          Engagement <AiOutlineExclamationCircle /> 
        </div>
        <div className="flex flex-row items-center gap-2">
          {/* SearchBar */}
          <div className="relative max-w-sm">
            {/* Search Icon */}
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {/* Input Field */}
            <Input
              placeholder="Filter by Name"
              //   value={searchInput}
              //   onChange={handleSearchChange}
              className="pl-10"
            />
          </div>
          <div className="flex flex-row items-center gap-2">
          <FiFilter size={16} className="text-gray-500 cursor-pointer" />

          {isOpen ? (
                    <LiaArrowAltCircleRight onClick={handleButtonClick} size={21} className="text-gray-500 cursor-pointer"/>
                  ) : (
                    < LiaArrowAltCircleLeftSolid onClick={handleButtonClick} size={21} className="text-gray-500 cursor-pointer"/>
                  )}

      
          </div>
        </div>
      </div>

      {/* <EngagementTabTable /> */}
      <Engagement_Leads/>
    </div>
  );
};

export default CustomerEngagement;
