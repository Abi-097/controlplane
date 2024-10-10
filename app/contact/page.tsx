"use client";

import { useState } from "react";
import { UserPanelProvider } from "../components/content/UserInfoPanel/UserPanelContext";
import MainPage from "../components/content/MainPage";
import ExtendedUserInfoPanel from "../components/content/UserInfoPanel/ExtendedUserInfoPanel";
import ProtectedRoute from "@/components/ProtectedRoute";
const Home = () => {
  const [data, setData] = useState<null | object>({});
  const [visibility, setVisibility] = useState(false);
  const value = { data, setData, visibility, setVisibility };
  return (
    <ProtectedRoute>
      <main className="flex relative h-full w-full">
        <UserPanelProvider>
          {/* <Header /> */}
          {/* <UserInfoPanel /> */}
          <ExtendedUserInfoPanel />
          <MainPage />
        </UserPanelProvider>
      </main>
    </ProtectedRoute>
  );
};

export default Home;
