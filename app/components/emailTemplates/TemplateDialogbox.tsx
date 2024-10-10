import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Input } from "@/components/ui/input";
import { FaRegFolderOpen } from "react-icons/fa";
import AssignFolder from "./AssignFolder";
import { PiSignature } from "react-icons/pi";
import SignatureDialogBox from "../SignatureDialogBox/SignatureDialogBox";
import { TfiNewWindow } from "react-icons/tfi";
import { IoAttachOutline } from "react-icons/io5";
import FileUploadDialog from "../FileUpload/FileUploadDialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@radix-ui/react-switch";

interface TemplateDilaogeboxProps {
  trigger: React.ReactNode;
  mode: "add" | "edit";
  templateData?: {
    id: number;
    name: string;
    content: string;
    createdBy: string;
    createdOn: string;
    modifiedBy: string;
    modifiedOn: string;
    status: boolean;
    folder: string;
  };
}

const TemplateDilaogebox: React.FC<TemplateDilaogeboxProps> = ({ 
    trigger,
    mode,
    templateData,}) => {
 

  return (
    <Dialog >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="fixed w-[1500px] bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <DialogTitle className="text-lg font-medium">Assign</DialogTitle>
        <hr className="my-1" />
        <DialogDescription className="mt-1 mb-4 text-sm text-gray-500 ">
          <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full">
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Company Name
                </label>
                <Input
                  type="text"
                  id="companyName"
                  placeholder="Enter company name"
                  name="companyName"
                />
              </div>
            </div>
          </form>





        </DialogDescription>
        <div className="mt-4 flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-gray-200 text-black rounded-md w-full md:w-1/2">
              Cancel
            </button>
          </DialogClose>

          <button 
            className="px-4 py-2 bg-black text-white rounded-md w-full md:w-1/2"
          >
            Save
          </button>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TemplateDilaogebox;

