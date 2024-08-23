import React, { useEffect, useState } from "react";
import { TicketTable } from "./Table/TicketTable";
import { columns } from "./Table/TicketTableColumn";
import axios from "axios";
// import TicketTable from "./Table/TicketTable";

const Ticket = () => {
  const [activeTab, setActiveTab] = useState("Recent");
  const [data, setData] = useState<any[]>([]);
  const tabs = ["Recent", "My Tickets", "Shared with me"];

  useEffect(() => {
    // Fetch data from the URL
    axios
      .get("https://66c76bcb732bf1b79fa67bcd.mockapi.io/api/ticket")
      .then((response) => {
        // Set the data to state and log it
        setData(response.data);
        // setDataLength(response.data.length);
        // console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="flex flex-col">
      {/* Navigation Tabs */}
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`relative p-2 text-sm ${
              activeTab === tab ? "text-blue-500 font-semibold " : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-500 rounded"></span>
            )}
          </button>
        ))}
      </div>
      <hr className="border-slate-100" />
      {/* Content Area */}
      <div className="mt-5">
        {/* <h2 className="text-xl">{activeTab}</h2> */}
        {/* Render content based on the active tab */}
        {activeTab === "Recent" && (
          <div>
            <TicketTable columns={columns} data={data} heading={activeTab} />
          </div>
        )}
        {activeTab === "My Tickets" && (
          <div>
            <TicketTable columns={columns} data={data} heading={activeTab} />
          </div>
        )}
        {activeTab === "Shared with me" && (
          <div>
            <TicketTable columns={columns} data={data} heading={activeTab} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Ticket;
