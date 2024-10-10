"use client";
import { columns } from "@/app/components/Settings/UserManagment/Group/UsermanagementGroupColumn";
import { UserManagementGroupTable } from "@/app/components/Settings/UserManagment/Group/UsermanagementGroupTable";
import React, { useState } from "react";
// import { UserManagementUserTable } from "./UsermanagementUserTable";
// import { columns } from "./UsermanagementUserColumn";

const UserManagementGroup = () => {
  const [data, setData] = useState<any[]>([]);

  //   useEffect(() => {
  //     // Fetch data from the URL
  //     axios
  //       .get("https://66c76bcb732bf1b79fa67bcd.mockapi.io/api/ticket")
  //       .then((response) => {
  //         // Set the data to state and log it
  //         setData(response.data);
  //         // setDataLength(response.data.length);
  //         // console.log(response.data);
  //       })
  //       .catch((error) => {
  //         // Handle any errors
  //         console.error("There was an error fetching the data!", error);
  //       });
  //   }, []);
  return (
    <div className="overflow-auto w-full h-full">
      {/* The table component should handle horizontal scroll */}
      <div className="overflow-x-auto">
        <UserManagementGroupTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default UserManagementGroup;
