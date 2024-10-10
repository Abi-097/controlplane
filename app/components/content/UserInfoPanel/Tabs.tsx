"use client";
import React, { useState } from "react";

const ContactTabs = () => {
  const [activeTab, setActiveTab] = useState("leads");
  return (
    <div className="w-full flex flex-col">
      <div className="flex border-b border-gray-200 w-full">
        <button
          className={`flex-grow px-10 py-2 -mb-px text-sm font-medium focus:outline-none ${
            activeTab === "leads"
              ? "border-b-2 font-semibold border-primaryBlue text-primaryBlue"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("leads")}
        >
          Contact Info
        </button>
        <button
          className={`flex-grow px-10 py-2 -mb-px text-sm font-medium focus:outline-none ${
            activeTab === "address"
              ? "border-b-2 font-semibold border-primaryBlue text-primaryBlue"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("address")}
        >
          Address Info
        </button>
      </div>
      <div className="mt-4 text-left p-4">
        {activeTab === "leads" ? (
          <div className="pl-2">
            {/* Leads Info content goes here */}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-400 mb-1"
            >
              Email
            </label>
            <p className="text-sm mb-3">dennay@email.com</p>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-400 mb-1"
            >
              Phone
            </label>
            <p className="text-sm mb-3">(201)-555-5555</p>
            <label
              htmlFor="leadOwner"
              className="block text-sm font-medium text-slate-400 mb-1"
            >
              Lead Owner
            </label>
            <p className="text-sm mb-3">Lucy Lockwood</p>
            <label
              htmlFor="jobTitle"
              className="block text-sm font-medium text-slate-400 mb-1"
            >
              Job Title
            </label>
            <p className="text-sm mb-3">Manager</p>
            <label
              htmlFor="annualRevenue"
              className="block text-sm font-medium text-slate-400 mb-1"
            >
              Annual Revenue
            </label>
            <p className="text-sm mb-3">400,000 USD</p>
            <label
              htmlFor="createdOn"
              className="block text-sm font-medium text-slate-400 mb-1"
            >
              Created On
            </label>
            <p className="text-sm mb-3">Aug 8th 2024 08:08:00 AM</p>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="pl-2">
              {/* Leads Info content goes here */}
              <label className="block text-sm font-medium text-slate-400 mb-1">
                Address 1
              </label>
              <p className="text-sm mb-3"> 12005 Main St </p>
              <label className="block text-sm font-medium text-slate-400 mb-1">
                Address 2
              </label>
              <p className="text-sm mb-3"> Suite# 100</p>
              <label className="block text-sm font-medium text-slate-400 mb-1">
                City
              </label>
              <p className="text-sm mb-3">Frisco</p>
              <label className="block text-sm font-medium text-slate-400 mb-1">
                State
              </label>
              <p className="text-sm mb-3">Texas</p>
              <label className="block text-sm font-medium text-slate-400 mb-1">
                Country
              </label>
              <p className="text-sm mb-3">USA</p>
              <label className="block text-sm font-medium text-slate-400 mb-1">
                Zip Code
              </label>
              <p className="text-sm mb-3">75085</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactTabs;
