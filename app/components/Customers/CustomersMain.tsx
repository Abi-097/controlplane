import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import TabNavigationCustomers from "./TabNavigationCustomers";

const CustomersMain = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="overflow-auto">
        <TabNavigationCustomers />
      </div>

      <div className="absolute bottom-0 bg-screenbg w-full">
        <Footer />
      </div>
    </div>
  );
};

export default CustomersMain;
