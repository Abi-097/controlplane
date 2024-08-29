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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import Switch from "react-switch";
import { IoMdSettings } from "react-icons/io";

interface UserManagementGroupDialogProps {
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

const UserManagementGroupDialog: React.FC<UserManagementGroupDialogProps> = ({
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
        <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[800px] max-h-screen overflow-x-auto">
          <DialogTitle className="text-lg font-medium">
            <span className="flex items-center gap-2">
              <IoMdSettings size={20} />
              Add Group
            </span>
            <hr className="my-1" />
          </DialogTitle>
          <DialogDescription className="mt-2 mb-4 text-sm text-gray-500">
            <form className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div
                  className=" mb-4 w-full md:w-full 
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
                  className=" mb-4 w-full md:w-full 
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
                <div
                  className=" mb-4 w-full md:w-full 
           lg:w-[55%] 
          xl:w-[55%]"
                >
                  <div className="w-28 h-28 rounded-full bg-slate-100 ml-16" />
                </div>{" "}
              </div>

              {/*  */}

              <div
                className=" mb-4 w-full md:w-full 
          lg:w-[55%] 
          xl:w-[55%]"
              >
                <Label className="text-md mb-1 ">Users</Label>
                <MultiGroupSelect />
              </div>
              <div
                className=" mb-4 w-full md:w-full 
          lg:w-[55%] 
          xl:w-[55%]"
              >
                <Label className="text-md mb-1 ">Role</Label>

                <MultiRoleSelect />
              </div>

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
      {/*  */}
    </div>
  );
};

export default UserManagementGroupDialog;
