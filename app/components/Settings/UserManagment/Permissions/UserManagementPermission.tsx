import React, { useEffect, useState } from "react";
import { UserManagementPermissionTable } from "./UsermanagementPermissionTable";
import { columns } from "./UsermanagementPermissionColumn";
import axios from "axios";

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
    <div>
      <UserManagementPermissionTable columns={columns} data={data} />
    </div>
  );
};

export default UserManagementPermission;
