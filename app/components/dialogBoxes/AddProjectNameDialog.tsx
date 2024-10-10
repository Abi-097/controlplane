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
import { FaSearch } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";

interface AddProjectNameDialogProps {
  trigger: React.ReactNode;
  data?: {
    subject: string;
    message: string;
  };
}
const AddProjectNameDialog: React.FC<AddProjectNameDialogProps> = ({ trigger }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[500px]">
        <DialogTitle className="text-lg font-medium">
          Add Project Name
        </DialogTitle>
        <hr  />
        <DialogDescription className="mt-1 mb-4 text-sm text-gray-500">
          <form className="space-y-4">
          
            <div className="w-full">
              <label
                htmlFor="project"
                className="block text-sm font-medium text-black mb-1"
              >
                Project Name
              </label>
              <Input
                type="text"
                id="project"
                placeholder="Enter project name"
                name="project"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-black mb-1"
              >
                Project Description
              </label>

              <Textarea
                id="description"
                placeholder="Enter description "
                name="description"
              />
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
            Save
          </button>
        </div>
      </DialogContent>
      {/* </Dialog.Portal> */}
    </Dialog>
  );
};

export default AddProjectNameDialog;
