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

interface AddAPIDialogProps {
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

const AddAPIDialog: React.FC<AddAPIDialogProps> = ({
  trigger,
  //   mode,
  contactData,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[600px] max-h-[80%] overflow-x-auto">
          <DialogTitle className="text-lg font-medium">
            <span className="flex items-center gap-2">
              {/* <IoMdSettings size={20} /> */}
              <Image
                src="/icons/security.png"
                alt="security.png"
                width={20}
                height={20}
              />
              API Key
            </span>
            <hr className="my-1" />
          </DialogTitle>
          <DialogDescription className="mt-2 mb-4 text-sm text-gray-500">
            <form className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className=" w-full md:w-full 
          lg:w-[55%] 
          xl:w-[55%]"
                >
                  <Label className="text-md mb-1 ">Name</Label>
                  <Input
                    className="bg-[#f9fafb]"
                    type="text"
                    id="name"
                    placeholder=""
                    name="name"
                    defaultValue=""
                  />
                </div>
                <div
                  className=" w-full md:w-full 
          lg:w-[55%] 
          xl:w-[55%]"
                >
                  <div className="flex items-center justify-center">
                    <Switch
                      onChange={handleSwitchChange}
                      checked={isChecked}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      width={25}
                      height={15}
                      className="mr-2"
                    />{" "}
                    In Active
                  </div>
                </div>
              </div>

              {/*  */}

              <div className=" mb-4 w-full">
                <Label className="text-md mb-1 ">API Key</Label>
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
                  Whitelist Domain comma separated, * or blank value to allow
                  all
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
              <div className=" mb-4 w-full">
                <Label className="text-md mb-1 ">Add Role</Label>
                <MultiRoleSelect />
              </div>
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
            </form>
          </DialogDescription>
        </DialogContent>
        {/* </Dialog.Portal> */}
      </Dialog>
      {/*  */}
    </div>
  );
};

export default AddAPIDialog;
