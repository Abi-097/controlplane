import React, { useState } from "react";
import { PolicyAuthTypeTable } from "./PolicyAuthTypeTable";
import { columns } from "./PolicyAuthTypeColumn";

const AddPolicyAuthType = () => {
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
    <div>
      <PolicyAuthTypeTable columns={columns} data={data} />
    </div>
  );
};

export default AddPolicyAuthType;
