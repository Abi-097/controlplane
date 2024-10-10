import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import Flag from "react-world-flags";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PaymentDetailsDialogProps {
  trigger: React.ReactNode;
}

const PaymentDetailsDialog: React.FC<PaymentDetailsDialogProps> = ({
  trigger,
}) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[1000px] max-h-auto overflow-x-auto">
        <DialogHeader>
          <DialogTitle>Billing Details</DialogTitle>
          <hr className="my-2" />
        </DialogHeader>
        <Label htmlFor="email">Subscription Plan</Label>
        <Select defaultValue="trail">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="trail">Trail</SelectItem>
              <SelectItem value="basic">Basic</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="enterprise">Enterprise</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="mt-10 flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-gray-300 text-black rounded-md w-[13%] ">
              Cancel
            </button>
          </DialogClose>
          <button className="px-4 py-2 bg-saveButton text-white rounded-md w-[13%]">
            Save
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDetailsDialog;
