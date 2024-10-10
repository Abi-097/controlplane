import React from "react";
import Header from "../common/Header";
import SettingsMenu from "./SettingsMenu";
import Footer from "../common/Footer";

const SettingsMainPage = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 flex justify-center items-start">
          <SettingsMenu />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SettingsMainPage;
