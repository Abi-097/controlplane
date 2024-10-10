"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserManagementPermissionTable } from "@/app/components/Settings/UserManagment/Permissions/UsermanagementPermissionTable";
import { columns } from "@/app/components/Settings/UserManagment/Permissions/UsermanagementPermissionColumn";

const UserManagementPermission = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from the URL
    axios
      .get("https://66cda4608ca9aa6c8ccb1ac9.mockapi.io/api/per")
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
    <div className="overflow-auto w-full h-full">
      {/* The table component should handle horizontal scroll */}
      <div className="overflow-x-auto">
        <UserManagementPermissionTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default UserManagementPermission;
