import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import CompanyViewTabs from "../../common/CompanyViewTabs";
import SocialIconsIndividualView from "../../common/SocialIconsIndividualView";
import SocialIconsCompanyView from "../../common/SocialIconsCompanyView";

const CompanyInfoView = () => {
  return (
    <div className=" flex flex-col w-[25vw] h-[82vh] overflow-y-scroll no-scrollbar justify-start bg-fullbg ml-rightLeftMargin mr-betweenComponents rounded-sm ">
      <div className="col-span-12 md1:col-span-3 bg-white p-4">
        <div className="col-span-12 md1:col-span-3 bg-white">
          <div className="flex flex-col items-center text-center ">
            <Avatar className="w-24 h-24 mb-2">
              <AvatarImage src="/users/dp.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-lg text-gray-800">
              <strong>Global SpaceX</strong>
            </p>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-lg text-gray-500">Mutual Leads</p>
            </div>
            <div className="flex gap-2 items-center justify-center bg-[#eee] px-4 mb-4 rounded-full text-gray-500">
              <div className="bg-[#5A925F] h-[8px] w-[8px] rounded-full"></div>
              <div className="flex text-xs">
                {"Last Activity: " + "2 days ago"}
              </div>
            </div>
            <span>
              <SocialIconsCompanyView />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-2 rounded-sm s">
        <CompanyViewTabs />
      </div>

      <div className="bg-white h-[20vh] mt-betweenComponents rounded-sm"></div>
    </div>
  );
};

export default CompanyInfoView;
