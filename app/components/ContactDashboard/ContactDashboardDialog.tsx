import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Lead from "./ContactDash";
import Finance from "./Finance";
import ContactDash from "./ContactDash";

const ContactDashComponent = () => (
  <div className="overflow-y-auto h-[90vh] no-scrollbar">
    <ContactDash />
  </div>
);
// const FinanceComponent = () => (
//   <div className="overflow-y-auto h-[90vh] no-scrollbar">
//     <Finance />
//   </div>
// );

interface ContactDashboardDialogProps {
  trigger: React.ReactNode;
}

const ContactDashboardDialog: React.FC<ContactDashboardDialogProps> = ({
  trigger,
}) => {
  // const [activeTab, setActiveTab] = useState<"Leads" | "Finance">("Leads");
  // const handleNavClick = (tab: "Leads" | "Finance") => {
  //   setActiveTab(tab);
  // };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>

        <DialogContent
          className="fixed h-full w-full sm:w-auto !transform-none !top-0 !right-0 !bottom-0 !left-auto"
          style={{
            right: "0",
            top: "0",
            bottom: "0",
            left: "auto",
            height: "100%",
            width: "100%",
            maxWidth: "45vw",
            transform: "none",
          }}
        >
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              {/* {activeTab === "Leads"
                ? "Lead Metric Dashboard"
                : "Finance Metric Dashboard"} */}
              Contact Metric Dashboard
              <div className="flex pr-2">
                {/* Leads tab */}
                {/* <div
                  className={`cursor-pointer px-4 py-2 rounded-full text-sm font-bold ${
                    activeTab === "Leads"
                      ? "bg-[#f4f2ee] text-gray-800"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                  onClick={() => handleNavClick("Leads")}
                >
                  Leads
                </div> */}

                {/* Finance tab */}
                {/* <div
                  className={`cursor-pointer px-4 py-2 rounded-full text-sm font-bold ${
                    activeTab === "Finance"
                      ? "bg-[#f4f2ee] text-gray-800"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                  onClick={() => handleNavClick("Finance")}
                >
                  Finance
                </div> */}
              </div>
            </DialogTitle>
            <hr className="my-3" />
            <DialogDescription>
              {/* Conditionally render content based on the active tab */}
              {/* <div className="mt-4">
                {activeTab === "Leads" ? (
                  <LeadsComponent />
                ) : (
                  <FinanceComponent />
                )}
              </div> */}
              <ContactDashComponent />
            </DialogDescription>
          </DialogHeader>
          {/* <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactDashboardDialog;
