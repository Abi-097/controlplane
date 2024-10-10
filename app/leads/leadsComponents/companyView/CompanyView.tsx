import React from "react";
import IndividualInfoView from "../individualView/IndividualInfoView";
import DealStageComponent from "../individualView/DealStageComponent";
import LeadsCategory from "../individualView/LeadsCategory";
import CompanyInfoView from "./CompanyInfoView/CompanyInfoView";
import ProjectInfo from "../common/ProjectInfo";
import ProjectDetails from "../common/ProjectDetails";
import TodayMeetings from "../common/TodayMeetings";
import DealsClosing from "../common/DealClosing";

const CompanyView = () => {
  return (
    <div className="flex flex-row w-full ">
      <CompanyInfoView />
      
      {/* above things not change for company view. need to change */}
      <div className="flex flex-col w-[50vw] bg-fullbg mr-betweenComponents">
        <DealStageComponent />
        <LeadsCategory />
      </div>

      <div className="w-[25vw] rounded-sm mr-rightLeftMargin overflow-y-scroll no-scrollbar">
        <ProjectInfo />
        <ProjectDetails />
        <TodayMeetings />
        <DealsClosing />
      </div>
    </div>
  );
};

export default CompanyView;
