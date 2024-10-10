import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Switch from "react-switch";
import { MdOutlineHistory } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiDeleteBinLine, RiLockPasswordLine } from "react-icons/ri";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiEye, FiPlus } from "react-icons/fi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import History from "../../History/History";

interface Attachment {
  id: number;
  name: string;
  type: string;
  url: string;
}

const TermsCondition = () => {
  const [phone, setPhone] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState(new Date());
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

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };

  return (
    <>
      <form className="w-full p-4 overflow-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IoDocumentTextOutline size={24} />
            <p className="font-semibold">Terms & Privacy Policy</p>
          </div>
          <div className="flex items-center gap-2">
            <RiLockPasswordLine size={24} />
            <History
              trigger={
                <MdOutlineHistory className="cursor-pointer" size={24} />
              }
            />
          </div>
        </div>
        <hr className="text-slate-300 my-4" />
        <div>
          <div
            className=" mb-9 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Document Name</Label>
            <Input type="docName" placeholder="" className="bg-inputField" />
            <p className="text-gray-400 italic text-xs mt-1">
              Terms & Privacy Policy Contract Document Name
            </p>
          </div>

          <div
            className=" mb-9 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <div className="flex justify-between items-center">
              <Label className="text-sm mb-1 ">Attachment</Label>
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

          <div
            className=" mb-9 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Status</Label>
            <Select>
              <SelectTrigger className="w-full text-sm">
                <SelectValue placeholder="Select a Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="notstrated">Not Started</SelectItem>
                  {/* <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem> */}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-3">
            <Switch
              onChange={handleSwitchChange}
              checked={isChecked}
              uncheckedIcon={false}
              checkedIcon={false}
              width={25}
              height={15}
            />
            <p className="text-sm">Notify DataNue Team</p>
          </div>
          <p className="text-gray-400 italic text-xs mt-2  mb-9">
            Selecting Notify and status - Sign Completed will automatically sent
            notification to DataNue team to take Review and Approval Action
          </p>

          {/* <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">Email Address</Label>
            <Input type="email" placeholder="" className="bg-[#f9fafb]" />
          </div> */}
        </div>
        <div className="flex justify-end">
          <Button className="bg-bg-saveButton text-white">
            Save Account Details
          </Button>
        </div>
      </form>
    </>
  );
};

export default TermsCondition;
