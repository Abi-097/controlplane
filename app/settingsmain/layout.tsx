import React from "react";
import SideNav from "../components/sidenav/SideNav";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Menu from "./Menu";
const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="flex relative w-full h-screen">
    <div className="flex relative w-full h-screen overflow-hidden">
      {/* Side Navigation */}
      <SideNav />

      {/* Main content */}
      {/* <div className="flex flex-col w-full h-screen"> */}
      <div className="flex flex-col w-full h-full overflow-hidden">
        <Header />
        {/* <div className="flex-1 flex bg-gray-100 overflow-auto"> */}
        <div className="flex-1 flex bg-fullbg overflow-hidden">
          {/* Left Menu (3/10 width) */}
          <Menu />

          {/* Right Content (7/10 width) */}
          {/* <div
            className="m-2 w-[86%]
          rounded-md overflow-y-hidden"
          > */}
          <div className="flex-1 my-2 w-[86%] rounded-md overflow-hidden">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SettingsLayout;
