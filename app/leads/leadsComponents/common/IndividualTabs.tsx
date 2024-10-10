"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsGenderTrans } from "react-icons/bs";
import { IoFemale, IoMale } from "react-icons/io5";
import { Mail, MapPin, Phone } from "lucide-react";

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

const IndividualTabs = () => {
  return (
    <div className="w-full flex flex-col bg-white p-4 ">
      <div className="flex w-full">
        <button
          className={
            "cursor-pointer bg-fullbg text-gray-800  px-4 py-2 rounded-full text-sm  font-bold focus:outline-none"
          }
        >
          Other Leads
        </button>
      </div>
      <div className="mt-4 text-left">
        <div className="pl-2 overflow-y-scroll h-[23vh] no-scrollbar">
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
                        <IoMale size={11} className="text-gray-600" />
                      )}
                      {user.gender === "Female" && (
                        <IoFemale className="text-gray-400" />
                      )}
                      {user.gender !== "Male" && user.gender !== "Female" && (
                        <BsGenderTrans className="text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-800 font-bold">
                  {user.name}
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                  <MapPin size={15} />{" "}
                  <p>
                    {user.location}, {user.country}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                  <Mail size={15} /> <p> {user.email}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                  <Phone size={15} /> <p>{user.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndividualTabs;
