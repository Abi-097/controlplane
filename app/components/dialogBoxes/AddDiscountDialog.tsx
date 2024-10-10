import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
interface AddDiscountDialogProps {
  trigger: React.ReactNode;
 
}
const AddDiscountDialog: React.FC<AddDiscountDialogProps> = ({ trigger }) => {


  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[450px]">
        <DialogTitle className="text-lg font-medium">
          Add Discount
        </DialogTitle>
        <hr className="my-1" />
        <DialogDescription className="mt-1 mb-4 text-sm text-gray-500">
          <form className="space-y-4">       
            <div className="w-full">
              <label
                htmlFor="discreption"
                className="block text-sm font-medium text-black mb-1"
              >
                Discount description
              </label>
              <Input
                type="text"
                id="subject"
                placeholder="Enter message here"
                name="subject"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="discreption"
                className="block text-sm font-medium text-black mb-1"
              >
                Discount amount
              </label>
              <div className="relative ">
                {/* Search Icon */}
                <div className="absolute top-1/2 transform -translate-y-1/2 text-gray-400 w-[100px] border-none">
                <Select defaultValue="persentage" >
                  <SelectTrigger className="w-full text-gray-800 text-sm">
                    <SelectValue className="text-gray-600 text-sm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="persentage" className="text-gray-800 text-sm">
                        %
                      </SelectItem>
                      <SelectItem value="usd" className="text-gray-800 text-sm">
                        USD
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>           
                </div>
                {/* Input Field */}
                <Input
                type="text"
                id="subject"
                placeholder="Enter message here"
                name="subject"
                className="pl-[120px]"
              />
              </div>
             
            </div>
          </form>
        </DialogDescription>
        {/* Add your form or other content here */}
        <div className="mt-4 flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-fullbg text-black rounded-md w-full md:w-1/2">
              Cancel
            </button>
          </DialogClose>
          <button className="px-4 py-2 bg-black text-white rounded-md w-full md:w-1/2">
            Save
          </button>
        </div>
      </DialogContent>
      {/* </Dialog.Portal> */}
    </Dialog>
  );
};

export default AddDiscountDialog;
