import React, { useState } from "react";
// import { CorporateTable } from "./CorporateTable";
import { columns } from "./CorporateCalenderColoumn";
import { CorporateTable } from "./CorporateTable";

const CorporateDetails = () => {
  const [data, setData] = useState<any[]>([]);
  return (
    <div>
      <CorporateTable columns={columns} data={data} />
    </div>
  );
};

export default CorporateDetails;
