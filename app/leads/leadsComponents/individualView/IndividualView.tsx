import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TiVendorMicrosoft } from "react-icons/ti";
import SocialIcons from "@/app/components/SocialMedia/SocialIcons";
import { Tabs } from "@/components/ui/tabs";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import IndividualInfoView from "./IndividualInfoView";
import DealStageComponent from "./DealStageComponent";
import LeadsCategory from "./LeadsCategory";

const IndividualView = () => {
  return (
    <div className="flex flex-row w-full h-[100vh]">
      <IndividualInfoView />

      <div className="flex flex-col w-full bg-slate-100 h-full">
          <DealStageComponent />

          <LeadsCategory/>
       
      </div>
    </div>
  );
};

export default IndividualView;
