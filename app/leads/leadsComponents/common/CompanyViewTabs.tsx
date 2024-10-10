"use client";
import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { BsGenderFemale, BsGenderMale, BsGenderTrans } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneLight } from "react-icons/pi";

const LeadsList = [
  {
    id: 1,
    name: "Cody Fisher",
    contact: "(848) 124 3568",
    email: "cody@gmail.com",
    gender: "Male",
    location: "Chennai",
    country: "india",
  },
  {
    id: 2,
    name: "Cody Fisher",
    contact: "(848) 124 3568",
    email: "cody@gmail.com",
    gender: "Female",
    location: "Chennai",
    country: "india",
  },
];
const LeadsList1 = [
  {
    id: 1,
    name: "Jenny wilson",
    contact: "(848) 124 3568",
    email: "cody@gmail.com",
    gender: "Male",
    location: "Chennai",
    country: "india",
  },
  {
    id: 2,
    name: "Jenny wilson",
    contact: "(848) 124 3568",
    email: "cody@gmail.com",
    gender: "Female",
    location: "Chennai",
    country: "india",
  },
];

const CompanyViewTabs = () => {
  const [activeTab, setActiveTab] = useState("processingOwner");
  return (
    <div className="w-full flex flex-col bg-white p-4 ">
      <div className="flex w-full">
        <button
          className={`cursor-pointer  px-4 py-2 rounded-full text-sm  font-bold focus:outline-none ${
            activeTab === "processingOwner"
              ? "bg-fullbg text-gray-800"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("processingOwner")}
        >
          Processing Owner
        </button>
        <button
          className={`cursor-pointer  px-4 py-2 rounded-full text-sm  font-bold focus:outline-none ${
            activeTab === "otherLeads"
              ? "bg-fullbg text-gray-800"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("otherLeads")}
        >
          Other Leads
        </button>
      </div>
      <div className="mt-4 text-left">
        {activeTab === "processingOwner" ? (
          <div className="pl-2 overflow-y-scroll h-[22vh] no-scrollbar">
            {/* Leads Info content goes here */}
            {LeadsList.map((user, index) => (
              <div
                key={index}
                className="p-2 flex flex-row gap-4 items-start relative"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="relative">
                    <Avatar className="w-14 h-14">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="absolute bottom-2 right-1 transform translate-x-1/2 translate-y-1/2">
                      <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full border border-gray-400 ">
                        {user.gender === "Male" && (
                          <BsGenderMale size={11} className="text-gray-600" />
                        )}
                        {user.gender === "Female" && (
                          <BsGenderFemale className="text-gray-400" />
                        )}
                        {user.gender !== "Male" && user.gender !== "Female" && (
                          <BsGenderTrans className="text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-700 font-bold">
                    {user.name}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <SlLocationPin />{" "}
                    <p>
                      {user.location}, {user.country}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <TfiEmail className="mt-1" />{" "}
                  <p className="mt-1"> {user.email}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <PiPhoneLight className="mt-1" />{" "}
                  <p className="mt-1">{user.contact}</p>
                </div>
                </div>
                {/* <div>
                  {user.name}

                  <div className="flex flex-row items-center text-sm pt-2 gap-2">
                    <FiPhone className="text-gray-800" />
                    {user.phone}
                  </div>

                  <div className="flex flex-row text-gray-800 items-center underline text-sm pt-2 gap-2">
                    <HiOutlineMailOpen />
                    {user.email}
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        ) : (
          <div className="pl-2">
          {/* Leads Info content goes here */}
          {LeadsList1.map((user, index) => (
            <div
              key={index}
              className="p-2 flex flex-row gap-4 items-start relative"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="relative">
                  <Avatar className="w-14 h-14">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="absolute bottom-2 right-1 transform translate-x-1/2 translate-y-1/2">
                    <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full border border-gray-400 ">
                      {user.gender === "Male" && (
                        <BsGenderMale size={11} className="text-gray-600" />
                      )}
                      {user.gender === "Female" && (
                        <BsGenderFemale className="text-gray-400" />
                      )}
                      {user.gender !== "Male" && user.gender !== "Female" && (
                        <BsGenderTrans className="text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-700 font-bold">
                  {user.name}
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <SlLocationPin />{" "}
                  <p>
                    {user.location}, {user.country}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                <TfiEmail className="mt-1" />{" "}
                <p className="mt-1"> {user.email}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <PiPhoneLight className="mt-1" />{" "}
                <p className="mt-1">{user.contact}</p>
              </div>
              </div>
             
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default CompanyViewTabs;
