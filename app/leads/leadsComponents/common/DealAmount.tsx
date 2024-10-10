import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const DealAmount = () => {
    const [isEditingDealAmount, setIsEditingDealAmount] = useState(false);
    const [dealAmount, setDealAmount] = useState("10,000");
  
    const handleDealAmountDoubleClick = () => {
      setIsEditingDealAmount(true);
    };
  
    const handleDealAmountBlur = () => {
      setIsEditingDealAmount(false);
    };
  
    const handleDealAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDealAmount(e.target.value);
    };
  return (
    <div className="flex flex-col w-fit h-full bg-white rounded-sm pl-2">
        <div className=" flex flex-col  gap-4">
          {/* First Component (Deal Amount) */}
          <div className=" ">
            {isEditingDealAmount ? (
              <div className="font-bold cursor-pointer flex flex-col items-end w-[120px] pt-4 pr-4 ">
                <div className="text-sm font-semibold text-gray-800 flex flex-row gap-2 items-center">
                  Deal Amount
                </div>
                <div className="pl-2 flex flex-col items-center">
                  <div className="text-base text-gray-800 font-semibold pt-3">
                    <Input
                      type="text"
                      id="dealAmount"
                      placeholder="Enter amount here"
                      value={dealAmount}
                      onChange={handleDealAmountChange}
                      onBlur={handleDealAmountBlur}
                      className="w-[100px] m-0 py-0 font-semibold text-base text-gray-800 flex text-right"
                      autoFocus
                    />
                  </div>
                  {/* <div className="text-xs pt-1 text-gray-800">US Dollars</div> */}
                </div>
              </div>
            ) : (
              <div
                onDoubleClick={handleDealAmountDoubleClick}
                className="cursor-pointer flex flex-col items-end  w-[120px] pt-4 pr-4"
              >
                <div className="text-sm font-semibold text-gray-800 flex flex-row gap-2 items-center ">
                  Deal Amount
                </div>
                <div className="pl-2 flex flex-col items-center">
                  <div className="text-lg text-gray-800 font-semibold pt-2">
                    <span className="inline-block font-semibold">{`$ ${dealAmount}`}</span>
                  </div>
                  <div className="text-xs pt-0 text-gray-800">US Dollars</div>
                </div>
              </div>
            )}
          </div>

        
        </div>
      </div>
  )
}

export default DealAmount