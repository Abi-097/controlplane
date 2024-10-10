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
import PaymentMethodComponent from "../PaymentMethodComponent";

interface PaymentMethodDialogProps {
  trigger: React.ReactNode;
}

const PaymentMethodDialog: React.FC<PaymentMethodDialogProps> = ({
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
        <PaymentMethodComponent isBackupPaymentMethod={false} />
      </DialogContent>
    </Dialog>
  );
};

export default PaymentMethodDialog;
