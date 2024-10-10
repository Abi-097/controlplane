import MultiSelect from "@/components/multipleCountry";
import MultiGroupSelect from "@/components/multiplegroup";
import MultiRoleSelect from "@/components/multiplerole";
import { DialogClose, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useRef, useState } from "react";
import Switch from "react-switch";
import { IoMdSettings, IoMdAdd, IoMdClose } from "react-icons/io";
import MultiUserSelect from "@/components/multipleusers";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
interface CloneDialogProps {
  trigger: React.ReactNode;
  mode: "cloneTicket" | "editTicket";

  // change
  contactData?: {
    companyName: string;
    industryType: string;
    region: string;
    contact: string;
    identification: string;
    email: string;
    company: string;
    resume: string;
    country: string;
    mode: string;
  };
}

const CloneDialog: React.FC<CloneDialogProps> = ({
  trigger,
  mode,
  contactData,
}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[600px] max-h-[80%] overflow-x-auto">
          <DialogTitle className="text-lg font-medium">
            <span className="flex items-center gap-2">
              <IoMdSettings size={20} />

              {mode === "cloneTicket" ? "Clone Ticket" : "Edit Ticket"}
            </span>

            <hr className="my-1" />
          </DialogTitle>
          <DialogDescription className="mt-2 mb-4 text-sm text-gray-500">
            <form className="space-y-4">
              <div className="w-full">
                <Label className="text-md mb-1 ">Source Ticket Name *</Label>
                <Input
                  className="bg-[#f9fafb]"
                  type="text"
                  id="name"
                  placeholder=""
                  name="name"
                  defaultValue=""
                />
              </div>
              <div className="w-full">
                <Label className="text-md mb-1 ">Target Ticket Name *</Label>
                <Input
                  className="bg-[#f9fafb]"
                  type="text"
                  id="name"
                  placeholder=""
                  name="name"
                  defaultValue=""
                />
              </div>
              <div className="mt-10 flex flex-col md:flex-row justify-end md:space-x-2">
                <DialogClose asChild>
                  <button className="px-4 py-2 bg-gray-300 text-black rounded-md ">
                    Cancel
                  </button>
                </DialogClose>
                <button className="px-4 py-2 bg-saveButton text-white rounded-md">
                  Save
                </button>
              </div>
            </form>
          </DialogDescription>
        </DialogContent>
        {/* </Dialog.Portal> */}
      </Dialog>
      {/*  */}
    </div>
  );
};

export default CloneDialog;
