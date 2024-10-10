import React from "react";
import MyProfileMenu from "./MyProfileMenu";
import Footer from "@/app/components/common/Footer";
// import Footer from "@/app/components/common/Footer";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex relative w-full h-screen overflow-hidden">
      <div className="flex flex-col w-full h-screen">
        <div className="flex-1 flex bg-fullbg">
          {/* Left Menu (3/10 width) */}
          <MyProfileMenu />

          {/* Right Content (7/10 width) */}
          <div
            className="w-[86%]
          rounded-md overflow-auto"
          >
            {children}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default SettingsLayout;
