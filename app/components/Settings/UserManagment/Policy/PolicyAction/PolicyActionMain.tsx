import React, { useState } from "react";
import { PolicyActionTable } from "./PolicyActionTable";
import { columns } from "./PolicyActionColumn";

// import { PolicyGroupTable } from "./PolicyGroupTable";
// import { columns } from "./PolicyGroupColumn";

const PolicyGroupMain = () => {
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
      <PolicyActionTable columns={columns} data={data} />
    </div>
  );
};

export default PolicyGroupMain;
