"use client";
import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import VerticalStepper from "../../Status/ContactStatus";
import DealStatus from "../../Status/DealStatus";
const StatusTabs = () => {
  const [activeTab, setActiveTab] = useState("contact");
  return (
    <div className="w-full flex flex-col mt-2">
      <div className="flex border-b border-gray-200 w-full">
        <button
          className={`flex-grow px-10 py-2 -mb-px text-sm font-medium focus:outline-none ${
            activeTab === "contact"
              ? "border-b-2 font-semibold border-primaryBlue text-primaryBlue"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("contact")}
        >
          Contact Status
        </button>
        <button
          className={`flex-grow px-10 py-2 -mb-px text-sm font-medium focus:outline-none ${
            activeTab === "deal"
              ? "border-b-2 font-semibold border-primaryBlue text-primaryBlue"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("deal")}
        >
          Deal Status
        </button>
      </div>
      <div className="mt-4 text-left">
        {activeTab === "contact" ? <VerticalStepper /> : <DealStatus />}
      </div>
    </div>
  );
};

export default StatusTabs;
