import React from "react";
import SideNav from "../components/sidenav/SideNav";
import SettingsMainPage from "../components/Settings/MainPage";

const Settings = () => {
  return (
    <main className="flex relative w-full h-screen overflow-hidden">
      {/* side nav */}

      <SideNav />
      <SettingsMainPage />
    </main>
  );
};

export default Settings;
