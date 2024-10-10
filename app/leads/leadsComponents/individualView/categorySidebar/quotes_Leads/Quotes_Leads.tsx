import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import History_quotes from "./history_quotes/History_quotes";


const QuotesLeads = () => {
  return (
    <Tabs defaultValue="history" className="w-full ">
      <TabsList className="flex flex-row justify-between items-center py-6 px-2 w-full bg-white mb-betweenComponents rounded-sm  ">
        <div>         
          <TabsTrigger
            value="history"
            className="cursor-pointer  px-4 py-2 rounded-full text-sm text-[rgb(33,35,44)] data-[state=active]:font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
          >
            History
          </TabsTrigger>
        </div>

          {/* Right side component */}
        <div className="flex flex-row gap-1 items-center">
         
        </div>
      </TabsList>

      

      <TabsContent
        className="m-0 w-full h-[57vh] overflow-y-hidden no-scrollbar rounded-sm "
        value="history"
      >
        <History_quotes />
      </TabsContent>
    </Tabs>
  );
};

export default QuotesLeads;
