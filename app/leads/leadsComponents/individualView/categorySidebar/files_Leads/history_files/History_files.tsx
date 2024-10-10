import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { TbLayoutGrid, TbLayoutList } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import FilesGride from "./FilesGrid";

const fileList = [
  {
    id: 1,
    fileType: "PDF",
    fileName: "Cloud Storage Plan.pdf",
    uploadedAt: "Oct 02nd, 2024 10:03:09"
  },
  {
    id: 2,
    fileType: "PDF",
    fileName: "Project Overview.pdf",
    uploadedAt: "Oct 02nd, 2024 09:58:45"
  },
  {
    id: 3,
    fileType: "PDF",
    fileName: "Financial Report.pdf",
    uploadedAt: "Oct 01st, 2024 15:45:30"
  }
];

const History_files = () => {
  // Toggle between the two states

  return (
    <div className="bg-white px-2 py-4 h-full ">
      

      <FilesGride files={fileList}/>    
    </div>
  );
};

export default History_files;
