"use client";

import { UserPanelProvider } from "../components/content/UserInfoPanel/UserPanelContext";
import LeadsMainPage from "./leadsComponents/LeadsMainPage";

export default function Leads() {
  return (
    <main className="flex relative h-full w-full ">
      <UserPanelProvider>
        <LeadsMainPage />
      </UserPanelProvider>
    </main>
  );
}
