import React from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";

const DealsClosing = () => {
  const deal = {
    title: "Web development deal",
    closingDate: new Date("2024-01-16"),
    amount: 4,
    client: {
      name: "Darlene Robertson",
      avatar: "/users/dp.jpg", // replace with your avatar path
    },
    status: "Contract sent",
  };

  return (
    <div className="p-4 rounded-sm bg-white w-full  mt-2">
      <h2 className="text-sm font-semibold mb-4">My deals closing this month</h2>

      {/* Deal card */}
      <div className="p-4 border rounded-sm bg-gray-50 flex justify-between items-center mx-2">
        <div>
          {/* Closing date */}
          <div className="text-xs text-gray-500 mb-2">
            Closing date {format(deal.closingDate, "d MMM yyyy")}
          </div>

          {/* Deal title */}
          <div className="font-semibold text-gray-800 text-sm">{deal.title}</div>

          {/* Client information */}
          <div className="flex items-center gap-2 mt-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src={deal.client.avatar} alt={deal.client.name} />
              <AvatarFallback>{deal.client.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-gray-700">{deal.client.name}</span>
          </div>
        </div>

        {/* Deal amount */}
        <div className="">
        <div className="text-2xl font-bold text-gray-800 justify-end flex pr-2">${deal.amount}</div>
        <div className="flex justify-end mt-4 ">
        <Badge variant="outline" className="text-purple-600 border-purple-600 text-xs">
          {deal.status}
        </Badge>
      </div>
        </div>
      </div>

      {/* Deal status */}
     
    </div>
  );
};

export default DealsClosing;
