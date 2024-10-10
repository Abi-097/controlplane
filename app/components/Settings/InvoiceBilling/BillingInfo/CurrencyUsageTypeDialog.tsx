import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CurrencyUsageType from "./CurrencyUsageType";

interface CurrencyUsageTypeDialogProps {
  trigger: React.ReactNode;
}

const CurrencyUsageTypeDialog: React.FC<CurrencyUsageTypeDialogProps> = ({
  trigger,
}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[1000px] max-h-auto overflow-x-auto">
          <DialogHeader>
            <DialogTitle>Currency & Usage</DialogTitle>
            <hr className="my-2" />
          </DialogHeader>

          <CurrencyUsageType />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CurrencyUsageTypeDialog;
