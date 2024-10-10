import React from "react";
import IndividualInfoView from "./IndividualInfoView";
import DealStageComponent from "./DealStageComponent";
import LeadsCategory from "./LeadsCategory";
import ProjectDetails from "../common/ProjectDetails";
import TodayMeetings from "../common/TodayMeetings";
import DealsClosing from "../common/DealClosing";
import ProjectInfo from "../common/ProjectInfo";
import DealAmount from "../common/DealAmount";

const IndividualView = () => {
  return (
    <div className="flex flex-row w-full">
      <IndividualInfoView />

      <div className="flex flex-col w-[50vw] bg-fullbg mr-betweenComponents">
        <DealStageComponent />
        <LeadsCategory />
      </div>

      <div className="w-[25vw] rounded-sm mr-rightLeftMargin overflow-y-hidden h-[82vh]">
        <ProjectInfo />
        <ProjectDetails />
        <TodayMeetings />
        <DealsClosing />
      </div>
    </div>
  );
};

export default IndividualView;
