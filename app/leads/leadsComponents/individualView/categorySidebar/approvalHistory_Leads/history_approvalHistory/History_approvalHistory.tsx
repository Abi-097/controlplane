import { HistoryCommonTable } from "@/app/components/HistoryTable/data-table";
import React, { useEffect, useState } from "react";
import {
  HistoryTable,
  columns,
} from "@/app/components/HistoryTable/HistoryColumnTable";
import axios from "axios";
import { TbLayoutGrid, TbLayoutList } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import StageHistoryGride from "../../stageHistory_Leads/history_stageHistory/StageHistoryGride";
import { StageHistoryTable } from "../../stageHistory_Leads/history_stageHistory/StageHistoryTable";
import ApprovalHistoryGride from "./ApprovalHistoryGride";
import { ApprovalHistoryTable } from "./ApprovalHistoryTable";
import { LuSearch } from "react-icons/lu";
import { List } from "lucide-react";

const users = [
  {
    id: 1,
    name: "John Doe",
    gender: "Male",
    email: "john.doe@example.com",
    contact: "+1 555-1234",
    job_title: "Software Engineer",
    annual_revenue: 85000,
    status: "Active",
    location: "New York",
    company: "TechCorp",
    country: "USA",
    category: "Engineering",
    image: "/images/john.jpg",
    date: "Sept 24th, 2024 12:03:24",
    desHead: "Hello Hello",
    desBody:
      "loram expodam in to the emergency contacts. this is the mock data",
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Female",
    email: "jane.smith@example.com",
    contact: "+1 555-5678",
    job_title: "Product Manager",
    annual_revenue: 95000,
    status: "Active",
    location: "San Francisco",
    company: "Innovate Inc.",
    country: "USA",
    category: "Management",
    image: "/images/jane.jpg",
    date: "Sept 24th, 2024 12:03:24",
    desHead: "Hello Hello",
    desBody:
      "loram expodam in to the emergency contacts. this is the mock data",
  },
  {
    id: 3,
    name: "Michael Brown",
    gender: "Male",
    email: "michael.brown@example.com",
    contact: "+1 555-8765",
    job_title: "Marketing Specialist",
    annual_revenue: 70000,
    status: "Inactive",
    location: "Chicago",
    company: "MarketNow",
    country: "USA",
    category: "Marketing",
    image: "/images/michael.jpg",
    date: "Sept 24th, 2024 12:03:24",
    desHead: "Hello Hello",
    desBody:
      "loram expodam in to the emergency contacts. this is the mock data",
  },
  {
    id: 4,
    name: "Lisa Adams",
    gender: "Female",
    email: "lisa.adams@example.com",
    contact: "+1 555-4321",
    job_title: "UX Designer",
    annual_revenue: 80000,
    status: "Active",
    location: "Los Angeles",
    company: "Creative Minds",
    country: "USA",
    category: "Design",
    image: "/images/lisa.jpg",
    date: "Sept 24th, 2024 12:03:24",
    desHead: "Hello Hello",
    desBody:
      "loram expodam in to the emergency contacts. this is the mock data",
  },
  {
    id: 5,
    name: "David Wilson",
    gender: "Male",
    email: "david.wilson@example.com",
    contact: "+44 123-4567",
    job_title: "Financial Analyst",
    annual_revenue: 100000,
    status: "Active",
    location: "London",
    company: "FinCorp",
    country: "UK",
    category: "Finance",
    image: "/images/david.jpg",
    date: "Sept 24th, 2024 12:03:24",
    desHead: "Hello Hello",
    desBody:
      "loram expodam in to the emergency contacts. this is the mock data",
  },
  {
    id: 6,
    name: "Emily Clark",
    gender: "Female",
    email: "emily.clark@example.com",
    contact: "+44 987-6543",
    job_title: "HR Manager",
    annual_revenue: 75000,
    status: "Inactive",
    location: "Manchester",
    company: "PeopleFirst",
    country: "UK",
    category: "Human Resources",
    image: "/images/emily.jpg",
    date: "Sept 24th, 2024 12:03:24",
    desHead: "Hello Hello",
    desBody:
      "loram expodam in to the emergency contacts. this is the mock data",
  },
  {
    id: 7,
    name: "Chris Taylor",
    gender: "Male",
    email: "chris.taylor@example.com",
    contact: "+61 987-1234",
    job_title: "IT Support Specialist",
    annual_revenue: 65000,
    status: "Active",
    location: "Sydney",
    company: "TechSolutions",
    country: "Australia",
    category: "IT",
    image: "/images/chris.jpg",
    date: "Sept 24th, 2024 12:03:24",
    desHead: "Hello Hello",
    desBody:
      "loram expodam in to the emergency contacts. this is the mock data",
  },
  {
    id: 8,
    name: "Sophia Lee",
    gender: "Female",
    email: "sophia.lee@example.com",
    contact: "+61 456-7890",
    job_title: "Data Scientist",
    annual_revenue: 95000,
    status: "Active",
    location: "Melbourne",
    company: "DataLab",
    country: "Australia",
    category: "Data Science",
    image: "/images/sophia.jpg",
    date: "Sept 24th, 2024 12:03:24",
    desHead: "Hello Hello",
    desBody:
      "loram expodam in to the emergency contacts. this is the mock data",
  },
  {
    id: 9,
    name: "Aiden Turner",
    gender: "Male",
    email: "aiden.turner@example.com",
    contact: "+49 123-7890",
    job_title: "Sales Manager",
    annual_revenue: 105000,
    status: "Active",
    location: "Berlin",
    company: "SellWell",
    country: "Germany",
    category: "Sales",
    image: "/images/aiden.jpg",
    date: "Sept 24th, 2024 12:03:24",
    desHead: "Hello Hello",
    desBody:
      "loram expodam in to the emergency contacts. this is the mock data",
  },
  {
    id: 10,
    name: "Olivia Evans",
    gender: "Female",
    email: "olivia.evans@example.com",
    contact: "+49 987-6543",
    job_title: "Operations Manager",
    annual_revenue: 90000,
    status: "Inactive",
    location: "Munich",
    company: "OpsGen",
    country: "Germany",
    category: "Operations",
    image: "/images/olivia.jpg",
    date: "Sept 24th, 2024 12:03:24",
    desHead: "Hello Hello",
    desBody:
      "loram expodam in to the emergency contacts. this is the mock data",
  },
];

const History_approvalHistory = () => {
  const [data, setData] = useState<any[]>([]);
  const [dataLength, setDataLength] = useState<number>(0);
  const [isSearchActive, setIsSearchActive] = useState(false);
  // Toggle between the two states
  const toggleSearch = () => {
    setIsSearchActive((prev) => !prev);
  };

  useEffect(() => {
    // Fetch data from the URL
    axios
      .get("https://66a6351623b29e17a1a2043e.mockapi.io/api/oject/object")
      .then((response) => {
        // Set the data to state and log it
        setData(response.data);
        setDataLength(response.data.length);
        // console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  return (
    <div className="bg-white p-2">
      <div className="flex justify-between items-center pb-2">
        <div className="flex items-center gap-3 pl-2 text-sm font-semibold">
          Approval History
        </div>

        <div className="flex items-center justify-center  gap-3">
          <div className="relative">
            <div className="cursor-pointer ml-3" onClick={toggleSearch}>
              {isSearchActive ? (
                <Button variant="outline" className="border-none px-2 ">
                  <TbLayoutGrid size={20} className="text-gray-600" />
                </Button>
              ) : (
                <Button variant="outline" className="border-none px-2 ">
                  <List size={20} className="text-gray-600" />
                </Button>
              )}
            </div>
          </div>
          <div className="relative max-w-sm mt-1">
            <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input placeholder="Filter" className="pl-10" />
          </div>
        </div>
      </div>

      {/* Render the appropriate table based on the state */}
      {isSearchActive ? (
        <ApprovalHistoryGride users={users} />
      ) : (
        <ApprovalHistoryTable columns={columns} data={data} />
      )}
    </div>
  );
};

export default History_approvalHistory;
