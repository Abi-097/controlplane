import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TiVendorMicrosoft } from "react-icons/ti";
import IndividualTabs from "../common/IndividualTabs";
import SocialIconsIndividualView from "../common/SocialIconsIndividualView";

const IndividualInfoView = () => {
  return (
    <div className=" flex flex-col w-[25vw] h-[82vh] overflow-y-scroll no-scrollbar justify-start ml-rightLeftMargin mr-betweenComponents rounded-sm ">
      <div className="col-span-12 md1:col-span-3 bg-white p-4">
        <div className="flex flex-col items-center text-center ">
          <Avatar className="w-24 h-24 mb-2">
            <AvatarImage src="/users/dp.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-lg text-gray-800">
            <strong>Jenny Wilson</strong>
          </p>
          <div className="flex items-center gap-2 mb-2">
            <TiVendorMicrosoft size={18} />
            <p className="text-lg text-gray-500">Microsoft</p>
          </div>
          <div className="flex gap-2 items-center justify-center bg-[#eee] px-4 mb-4 rounded-full text-gray-500">
            <div className="bg-[#5A925F] h-[8px] w-[8px] rounded-full"></div>
            <div className="flex text-xs">
              {"Last Activity: " + "2 days ago"}
            </div>
          </div>
          <span >
            <SocialIconsIndividualView />
          </span>
        </div>
      </div>     

      <div className="mt-2 rounded-sm">
        <IndividualTabs />
      </div>  

      <div className="bg-white h-[20vh] mt-betweenComponents rounded-sm"></div>
    </div>
  );
};

export default IndividualInfoView;
