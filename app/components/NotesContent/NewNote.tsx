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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MdOutlineStar } from "react-icons/md";

interface AddNoteDialogProps {
  trigger: React.ReactNode;
  mode: "add" | "edit";
  contactData?: {
    firstName: string;
    lastName: string;
    category: string;
    email: string;
    company: string;
    birthDate: Date;
    gender: string;
    country: string;
    occupation: string;
    mode: string;
  };
}
const AddNoteDialog: React.FC<AddNoteDialogProps> = ({
  trigger,
  mode,
  contactData,
}) => {
  const NameSelection = [
    {
      value: "employee",
      name: "Employee",
    },
    {
      value: "partners",
      name: "Partners",
    },
    {
      value: "customers",
      name: "Customers",
    },
  ];
  const TaskSelection = [
    {
      value: "one",
      name: "High",
    },
    {
      value: "two",
      name: "Medium",
    },
    {
      value: "three",
      name: "Low",
    },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      {/* <Dialog.Portal> */}
      {/* <Dialog.Overlay className="bg-black bg-opacity-50 fixed inset-0" /> */}
      <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[650px] z-[999]">
        <DialogTitle className="text-lg font-medium">
          {mode === "add" ? "Create New Note" : "Update Note Details"}
        </DialogTitle>
        <hr className="" />
        <DialogDescription className="mt-2 mb-4 text-sm text-gray-500">
          <form className="space-y-4">
            <div className="w-full">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-black mb-1"
              >
                Subject
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
                htmlFor="note"
                className="block text-sm font-medium text-black mb-1"
              >
                Note
              </label>

              <Textarea
                id="note"
                placeholder="Enter message here"
                name="note"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="contactCategories"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Note by
                </label>

                <Select defaultValue={contactData?.category || ""}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Person or Enter name" />
                  </SelectTrigger>
                  <SelectContent className="z-[999]">
                    <SelectGroup>
                      {/* <SelectLabel>Fruits</SelectLabel> */}
                      {NameSelection.map((item, index) => (
                        <SelectItem key={index} value={item.value}>
                          {item.name} 
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="contactCategories"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Task Priority
                </label>

                <Select defaultValue={contactData?.category || ""}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="z-[999]">
                    <SelectGroup>
                      {/* <SelectLabel>Fruits</SelectLabel> */}
                      {TaskSelection.map((item, index) => (
                       <SelectItem
                       key={index}
                       value={item.value}
                     >
                        <div className="flex flex-row gap-1 w-full items-center justify-start">
                        <MdOutlineStar
                         className={
                           item.name === "High" ? "text-red-500" :
                           item.name === "Medium" ? "text-blue-500" :
                           "text-gray-500"
                         }
                         size={12}
                       />
                       {item.name}
                       
                       </div>
                      
                     </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
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
            {mode === "add" ? "Save" : "Update"}
          </button>
        </div>
      </DialogContent>
      {/* </Dialog.Portal> */}
    </Dialog>
  );
};

export default AddNoteDialog;
