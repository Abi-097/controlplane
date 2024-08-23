import React from "react";
import Header from "../common/Header";
import SettingsMenu from "./SettingsMenu";

const SettingsMainPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <SettingsMenu />
    </div>
  );
};

export default SettingsMainPage;
