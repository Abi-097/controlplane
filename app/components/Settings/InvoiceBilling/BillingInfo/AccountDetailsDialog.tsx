import MultiSelect from "@/components/multipleCountry";
import MultiGroupSelect from "@/components/multiplegroup";
import MultiRoleSelect from "@/components/multiplerole";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import Switch from "react-switch";
import { IoMdSettings } from "react-icons/io";
import MultiUserSelect from "@/components/multipleusers";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MultiActionsSelect from "@/components/multipleactions";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
interface AccountDetailsDialogProps {
  trigger: React.ReactNode;

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
interface Attachment {
  id: number;
  name: string;
  type: string;
  url: string;
}

const AccountDetailsDialog: React.FC<AccountDetailsDialogProps> = ({
  trigger,
  //   mode,
  contactData,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [attachments, setAttachments] = useState<Attachment[]>([]);

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };
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
    <div>
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[600px] max-h-[80%] overflow-x-auto">
          <DialogTitle className="text-lg font-medium">
            <span className="flex items-center gap-2">Account Details</span>
            <hr className="my-1" />
          </DialogTitle>
          <DialogDescription className="mt-2 mb-4 text-sm text-gray-500">
            <form className="space-y-4">
              <div className=" mb-4 w-full">
                <Label className="text-md mb-1 ">Company Name</Label>
                <Input
                  className="bg-[#f9fafb]"
                  type="text"
                  id="name"
                  placeholder=""
                  name="name"
                  defaultValue=""
                />
              </div>

              <div className=" mb-4 w-full">
                <Label className="text-md mb-1 ">Customer Unique Number</Label>
                <Input
                  className="bg-[#f9fafb]"
                  type="text"
                  id="name"
                  placeholder=""
                  name="name"
                  defaultValue=""
                />
              </div>
              <div className=" mb-4 w-full">
                <Label className="text-md mb-1 ">
                  Business unique identification number
                </Label>
                <Input
                  className="bg-[#f9fafb]"
                  type="text"
                  id="name"
                  placeholder=""
                  name="name"
                  defaultValue=""
                />
              </div>
              {/* <div className="mt-10 flex flex-col md:flex-row justify-end md:space-x-2">
                <DialogClose asChild>
                  <button className="px-4 py-2 bg-gray-300 text-black rounded-md w-[13%] ">
                    Cancel
                  </button>
                </DialogClose>
                <button className="px-4 py-2 bg-black text-white rounded-md w-[13%]">
                  Save
                </button>
              </div> */}
            </form>
          </DialogDescription>
        </DialogContent>
        {/* </Dialog.Portal> */}
      </Dialog>
      {/*  */}
    </div>
  );
};

export default AccountDetailsDialog;
