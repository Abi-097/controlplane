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

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import DateTimePickerForm from "@/components/custom/dateTimePicker/DateTimePickerForm";
import { FiEye, FiPlus } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

interface Attachment {
  id: number;
  name: string;
  type: string;
  url: string;
}
interface AddAccountAccessDialogProps {
  trigger: React.ReactNode;
}

const AddAccountAccessDialog: React.FC<AddAccountAccessDialogProps> = ({
  trigger,
}) => {
  const [attachments, setAttachments] = useState<Attachment[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const newAttachment = {
        id: Date.now(),
        name: file.name,
        type: file.type.split("/")[1], //'pdf' or 'jpeg'
        url: URL.createObjectURL(file),
      };
      setAttachments([...attachments, newAttachment]);
    }
  };

  const handleDelete = (id: number) => {
    setAttachments(attachments.filter((attachment) => attachment.id !== id));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[600px] max-h-screen overflow-x-auto">
        <DialogTitle className="text-lg font-medium">
          <span className="flex items-center gap-2">
            <Image
              src="/icons/checkmark.png"
              alt="checkmark.png"
              width={20}
              height={20}
            />{" "}
            Account Access & Permission
          </span>
          <hr className="my-1" />
        </DialogTitle>
        <DialogDescription className="mt-2 mb-4 text-sm text-gray-500">
          <form className="space-y-4">
            <div className=" mb-4 w-full">
              <Label htmlFor="" className="text-md mb-1 ">
                Approved By
              </Label>
              <Select defaultValue="">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="ravi">Ravi</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className=" mb-4 w-full">
              <Label htmlFor="" className="text-md mb-1 ">
                Date & Time
              </Label>
              <DateTimePickerForm />
            </div>
            <div className=" mb-4 w-full">
              <Label className="text-md mb-1 ">Notes</Label>
              <Textarea placeholder="" className="bg-[#f9fafb]" />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Attachment</span>
                <label className="cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                  <FiPlus className="text-blue-500" size={24} />
                </label>
              </div>

              <div className="mt-4 space-y-2">
                {attachments.map((attachment) => (
                  <div
                    key={attachment.id}
                    className="flex items-center border rounded-lg space-x-4"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-md">
                      <span className="text-sm font-medium text-gray-700">
                        {attachment.type.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-800">{attachment.name}</span>
                    </div>
                    <div className="flex items-center space-x-2 px-2">
                      <a
                        href={attachment.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiEye
                          className="text-blue-500 cursor-pointer"
                          size={20}
                        />
                      </a>
                      <RiDeleteBinLine
                        className="text-red-500 cursor-pointer"
                        size={20}
                        onClick={() => handleDelete(attachment.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" mb-4 w-full">
              <Label className="text-md mb-1 ">Ticket Number (Auto)</Label>
              <Input
                className="bg-[#f9fafb]"
                type="text"
                id="corporateName"
                placeholder=""
                name="corporateName"
                defaultValue=""
              />
            </div>
          </form>
        </DialogDescription>

        {/* Add your form or other content here */}
        <div className="mt-4 flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-gray-200 text-black rounded-md w-full md:w-1/2">
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

export default AddAccountAccessDialog;
