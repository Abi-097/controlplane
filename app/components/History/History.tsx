import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import axios from "axios";
import { FaCompress, FaExpand } from "react-icons/fa";
import { HistoryCommonTable } from "../HistoryTable/data-table";
import { HistoryTable, columns } from "../HistoryTable/HistoryColumnTable";
interface AddHistoryDialogProps {
  trigger: React.ReactNode;
}

const History: React.FC<AddHistoryDialogProps> = ({ trigger }) => {
  const [data, setData] = useState<any[]>([]);
  const [dataLength, setDataLength] = useState<number>(0);

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
    <>
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>

        <DialogContent className="fixed bg-white rounded-md shadow-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] max-h-[850px] transition-all duration-300 z-[999]">
          {/* <div className="flex flex-col h-full"> */}
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              <div className="flex items-center">
                History
                <span className="bg-[#1D62B450] ml-2 rounded-md cursor-default px-1">
                  {dataLength}
                </span>
              </div>
              <hr className="my-2" />
            </DialogTitle>
            <HistoryCommonTable columns={columns} data={data} />
          </DialogHeader>

          {/* <DialogDescription className="text-sm text-gray-500"> */}
          {/* <div className="w-full h-full overflow-auto"> */}

          {/* </div> */}

          {/* </DialogDescription> */}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default History;
