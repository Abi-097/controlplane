"use client";
import React from "react";
import SideNav from "../components/sidenav/SideNav";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const LeadsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="flex relative w-full h-screen">
    <div className="flex relative w-full h-screen overflow-hidden">
      {/* Side Navigation */}
      <SideNav />

      {/* Main content */}
      {/* <div className="flex flex-col w-full h-screen"> */}
      <div className="flex flex-col w-full h-full overflow-hidden">
        <Header />

        <div className="flex-1 w-full rounded-md overflow-hidden bg-screenbg">
          {children}
        </div>

      </div>
      
    </div>
  );
};

export default LeadsLayout;
