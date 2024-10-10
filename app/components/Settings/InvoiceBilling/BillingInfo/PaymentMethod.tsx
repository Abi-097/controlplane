import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { FaRegBuilding } from "react-icons/fa";
import PaymentMethodComponent from "./PaymentMethodComponent";
const PaymentMethod = () => {
  return (
    <div className="max-h-[70vh]">
      <div className="h-full overflow-auto">
        <div className="px-8 pt-8">
          <div className="pb-5">
            <Label htmlFor="pmethod">Payment Profile Name</Label>
            <Input
              type="payment"
              id="payment"
              placeholder=""
              className="w-[50%]"
            />
            <p className="italic text-gray-400 text-xs">
              Payment Profile is a auto generated number for internal usage.
            </p>
          </div>

          <div className="pb-5">
            <Label
              htmlFor=""
              className="block text-sm font-medium text-black mb-1"
            >
              Account Type
            </Label>

            <Select>
              <SelectTrigger className="w-[50%] relative"></SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Account Type</SelectLabel>
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="italic text-gray-400 text-xs">
              Choose Account Type as either Business or Personal.
            </p>
          </div>
          <div className="pb-5">
            <Label htmlFor="">Business Name</Label>
            <div className="relative">
              <span className="flex items-center w-[50%]">
                <FaRegBuilding className="absolute ml-3 text-gray-500" />
                <Input
                  type="payment"
                  id="payment"
                  placeholder=""
                  className="pl-10"
                />
              </span>
            </div>
            <p className="italic text-gray-400 text-xs">
              Business Name is required field.
            </p>
          </div>
        </div>
        <PaymentMethodComponent isBackupPaymentMethod={false} />
      </div>
    </div>
  );
};

export default PaymentMethod;
