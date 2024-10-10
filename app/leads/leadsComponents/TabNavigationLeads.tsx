import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IndividualView from "./individualView/IndividualView";
import CompanyView from "./companyView/CompanyView";
import { LayoutDashboard } from "lucide-react";
import LeadsDashboardDialog from "@/app/components/Leads/LeadsDashboard";
import SearchLeads from "./common/SearchLeads";
import CustomTooltip from "@/app/components/common/Tooltip/CustomTooltip";
import { Value } from "@radix-ui/react-select";
import { useState } from "react";
import SearchCompany from "./common/SearchCompany";

const TabNavigationLeads = () => {
  const [activeTabName, setActiveTabName] = useState("individualView");
  return (
    <Tabs
      defaultValue="individualView"
      onValueChange={setActiveTabName}
      className="w-full bg-fullbg  pb-3 "
    >
      <TabsList className="flex flex-row justify-between bg-white px-4 py-6 rounded-none mx-rightLeftMargin my-betweenComponents ">
        <h1 className="font-bold text-black text-lg">Leads</h1>
        <div>
          {/* lead, dashboard icons */}
          <div className="flex flex-row items-center">
            {/* searchabr */}
            <div className="flex gap-3 items-center">
              <SearchLeads />
              <CustomTooltip
                text=" Dashboard"
                trigger={
                  <div>
                    <LeadsDashboardDialog
                      trigger={
                        <Button variant="outline" className="border-none px-2">
                          <LayoutDashboard
                            className="cursor-pointer text-gray-500"
                            size={20}
                          />
                        </Button>
                      }
                    />
                  </div>
                }
              />
            </div>

            {activeTabName === "individualView" ? (
              <SearchLeads />
            ) : (
              <SearchCompany />
            )}

            <CustomTooltip
              text=" Dashboard"
              trigger={
                <div>
                  <LeadsDashboardDialog
                    trigger={
                      <Button variant="outline" className="border-none px-2">
                        <LayoutDashboard className="cursor-pointer" size={20} />
                      </Button>
                    }
                  />
                </div>
              }
            />

            <TabsTrigger
              value="individualView"
              className="rounded-none h-12 ml-2 data-[state=active]:text-[#0284c7] data-[state=active]:border-b-2 data-[state=active]:border-[#0284c7]  "
            >
              Individual View
            </TabsTrigger>
            <TabsTrigger
              value="companyView"
              className="rounded-none h-12 data-[state=active]:text-[#0284c7] data-[state=active]:border-b-2 data-[state=active]:border-[#0284c7]"
            >
              Company View
            </TabsTrigger>
          </div>
        </div>
      </TabsList>
      <TabsContent className="m-0 w-full no-scrollbar" value="individualView">
        <IndividualView />
      </TabsContent>
      <TabsContent className="m-0 w-full no-scrollbar" value="companyView">
        <CompanyView />
      </TabsContent>
    </Tabs>
  );
};

export default TabNavigationLeads;
