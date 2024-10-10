"use client";

import { useState } from "react";
import { UserPanelProvider } from "../components/content/UserInfoPanel/UserPanelContext";
import UserInfoPanel from "../components/content/UserInfoPanel/UserInfoPanel";
import SideNav from "../components/sidenav/SideNav";
import MainPage from "../components/content/MainPage";
import ExtendedUserInfoPanel from "../components/content/UserInfoPanel/ExtendedUserInfoPanel";
import dynamic from "next/dynamic";
import OpporrtunityMainPage from "./OpportunityMainPage";
const CreateEmailTemplate = dynamic(
  () => import("../components/emailTemplates/EmailTemplates"),
  {
    ssr: false,
  }
);
export default function Opportunity() {
  const [data, setData] = useState<null | object>({});
  const [visibility, setVisibility] = useState(false);
  const value = { data, setData, visibility, setVisibility };


  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const handleFileUpload = (files: File[]) => {
    // Handle the uploaded files, e.g., send them to a server
    console.log('Uploaded files:', files);
  };

  return (
    <main className="flex relative h-full w-full">
      <UserPanelProvider>
        <UserInfoPanel />
        <ExtendedUserInfoPanel />
        <OpporrtunityMainPage/>
      </UserPanelProvider>
    </main>
  );
}
