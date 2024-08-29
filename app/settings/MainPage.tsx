import React from "react";
import Header from "../components/common/Header";
import SettingsMenu from "./SettingsMenu";

const SettingsMainPage = () => {
  return (
    <div className="flex flex-col w-full overflow-auto">
      <Header />
      <SettingsMenu />
    </div>
  );
};

export default SettingsMainPage;
