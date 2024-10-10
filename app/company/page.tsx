"use client";

import { useState } from "react";
import { UserPanelProvider } from "../components/content/UserInfoPanel/UserPanelContext";
import UserInfoPanel from "../components/content/UserInfoPanel/UserInfoPanel";
import SideNav from "../components/sidenav/SideNav";
import ExtendedUserInfoPanel from "../components/content/UserInfoPanel/ExtendedUserInfoPanel";
import CompanyMainPage from "./companyComponent/company/CompanyMainPage";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Company() {
  const [data, setData] = useState<null | object>({});
  const [visibility, setVisibility] = useState(false);
  const value = { data, setData, visibility, setVisibility };
  return (
    <ProtectedRoute>
      <main className="flex relative h-full w-full">
        <UserPanelProvider>
          <CompanyMainPage />
        </UserPanelProvider>
      </main>
    </ProtectedRoute>
  );
}
