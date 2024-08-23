import React from "react";
import SideNav from "../components/sidenav/SideNav";
import SettingsMainPage from "../components/Settings/MainPage";

const Settings = () => {
  return (
    <main className="flex relative h-full w-full">
      {/* side nav */}

      <SideNav />
      <SettingsMainPage />
    </main>
  );
};

export default Settings;
