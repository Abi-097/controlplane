import React from "react";
import { Current_approvalTable } from "./current_approvalTable/Current_approvalTable";
import { Current_approvalTableColumns } from "./current_approvalTable/Current_approvalTableColumns";

const sampleData = [
  {
    id: "REQ-001",
    requestedBy: "John Doe",
    description: "Request for additional office supplies.",
    date: "25 Sep 2024",
    status: true, 
    approvedBy: "Jane Smith"
  },
  {
    id: "REQ-002",
    requestedBy: "Alice Johnson",
    description: "Request for software license renewal.",
    date: "20 Sep 2024",
    status: false, 
    approvedBy: "Mark Spencer"
  },
  {
    id: "REQ-003",
    requestedBy: "Michael Brown",
    description: "Request for team building event funds.",
    date: "22 Sep 2024",
    status: true, 
    approvedBy: "Sophia Lee"
  },
  {
    id: "REQ-004",
    requestedBy: "Emily White",
    description: "Request for new laptop for the design team.",
    date: "19 Sep 2024",
    status: false, 
    approvedBy: "David Clarke"
  },
  {
    id: "REQ-005",
    requestedBy: "Daniel Green",
    description: "Request for marketing campaign budget approval.",
    date: "18 Sep 2024",
    status: true, 
    approvedBy: "Nancy Perez"
  }
];


const Current_approvalHistory = () => {
  return (
    <div className="p-2">
      <Current_approvalTable columns={Current_approvalTableColumns}  data={sampleData} />

    </div>
  );
};

export default Current_approvalHistory;
