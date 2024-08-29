import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TiVendorMicrosoft } from "react-icons/ti";
import SocialIcons from "@/app/components/SocialMedia/SocialIcons";
import { Tabs } from "@/components/ui/tabs";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";

const LeadsList = [
    {
      id: 1,
      name: "Cody Fisher",
      phone: "(848) 124 3568",
      email: "cody@gmail.com",
    },
    {
      id: 2,
      name: "Cody Fisher",
      phone: "(848) 124 3568",
      email: "cody@gmail.com",
    },
  ];

  
const IndividualInfoView = () => {
  return (
    <div className="flex flex-col w-[30%]  border-r p-[2%] pt-[1%] justify-start  ">
        <div className="col-span-12 md1:col-span-3 pt-4 border-gray-300 border-b ">
          <div className="flex flex-col items-center text-center mt-7">
            <Avatar className="w-24 h-24 mb-5">
              <AvatarImage src="/users/dp.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-lg text-slate-600 mb-3">
              <strong>Jenny Wilson</strong>
            </p>
            <div className="flex items-center gap-3 mb-7">
              <TiVendorMicrosoft size={15} />
              <p className="text-lg text-slate-400">Microsoft</p>
            </div>
            <div className="flex gap-2 items-center justify-center bg-[#eee] px-4 mb-5 rounded-full text-gray-500">
              <div className="bg-[#5A925F] h-[8px] w-[8px] rounded-full"></div>
              <div className="flex text-xs">
                {"Last Activity: " + "2 days ago"}
              </div>
            </div>
            <span className="mb-4">
              <SocialIcons />
            </span>
          </div>
        </div>
        <div className="pt-4">
          <div className="text-sm font-semibold">Other leads</div>
          {LeadsList.map((item,index) => (
            <div key={index} className="p-4">
              <div className="flex flex-row text-gray-500 text-sm gap-2">
                <Avatar className="w-[20px] h-[20px]">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {item.name}
              </div>
              <div className="flex flex-row  text-sm pt-2 gap-2">
                <FiPhone className='text-gray-500' size={20} />{item.phone}

              </div>
              
              <div className="flex flex-row text-gray-500 text-sm pt-2 gap-2">
                <HiOutlineMailOpen size={20} />
                {item.email}
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default IndividualInfoView