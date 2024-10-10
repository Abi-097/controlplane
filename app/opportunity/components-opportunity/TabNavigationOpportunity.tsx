import CompanyView from "@/app/leads/leadsComponents/companyView/CompanyView";
import IndividualView from "@/app/leads/leadsComponents/individualView/IndividualView";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabNavigationOpportunity = () => {
  return (
    <Tabs defaultValue="individualView" className="w-full bg-fullbg  pb-3 ">
      <TabsList className="flex flex-row justify-between bg-white px-4 py-6 rounded-none mx-rightLeftMargin my-betweenComponents ">
        <h1 className="font-bold text-black text-lg">Opportunity</h1>
        <div>
          <TabsTrigger
            value="individualView"
            className="rounded-none h-12  data-[state=active]:text-[#0284c7] data-[state=active]:border-b-2 data-[state=active]:border-[#0284c7]  "
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
      </TabsList>
      <TabsContent
        className="m-0 w-full h-ful no-scrollbar"
        value="individualView"
      >
        <IndividualView />
      </TabsContent>
      <TabsContent value="companyView">
        <CompanyView/>
      </TabsContent>
    </Tabs>
  );
};

export default TabNavigationOpportunity;
