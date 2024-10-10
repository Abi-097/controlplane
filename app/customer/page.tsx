"use client";

import ExtendedUserInfoPanel from "../components/content/UserInfoPanel/ExtendedUserInfoPanel";
import UserInfoPanel from "../components/content/UserInfoPanel/UserInfoPanel";
import { UserPanelProvider } from "../components/content/UserInfoPanel/UserPanelContext";
import SideNav from "../components/sidenav/SideNav";
import CustomerMainPage from "./CustomerMainPage";

export default function Customer() {
  return (
    <main className="flex relative h-full w-full ">
      <UserPanelProvider>
        {/* <UserInfoPanel />
          <ExtendedUserInfoPanel /> */}
        <CustomerMainPage />
      </UserPanelProvider>
    </main>
  );
}
