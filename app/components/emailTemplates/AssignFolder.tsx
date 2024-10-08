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

interface AssignFolderProps {
  trigger: React.ReactNode;
  onSaveFolder: (folder: string) => void; // Prop to pass selected values to parent
}

const AssignFolder: React.FC<AssignFolderProps> = ({ trigger, onSaveFolder }) => {
  const [selectedFolder, setSelectedFolder] = useState<string>("");
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");

  const handleSave = () => {
    onSaveFolder(selectedFolder); // Pass selected values to parent component
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[450px]">
        <DialogTitle className="text-lg font-medium">Assign</DialogTitle>
        <hr className="my-2" />
        <DialogDescription className="mt-1 mb-4 text-sm text-gray-500">
          <form className="space-y-4">
            <div className="w-full">
              <label
                htmlFor="folder"
                className="block text-sm font-medium text-black mb-1"
              >
                Folder Name
              </label>
              <Select onValueChange={(value) => setSelectedFolder(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Folder" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Folder-1</SelectLabel>
                    <SelectItem value="/folder1-1">/folder1-1</SelectItem>
                    <SelectItem value="/folder1-2">/folder1-2</SelectItem>
                    <SelectItem value="/folder1-3">/folder1-3</SelectItem>                  
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Folder-2</SelectLabel>
                    <SelectItem value="/folder2-1">/folder2-1</SelectItem>
                    <SelectItem value="/folder2-2">/folder2-2</SelectItem>
                    <SelectItem value="/folder2-3">/folder2-3</SelectItem>                  
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <label
                htmlFor="template"
                className="block text-sm font-medium text-black mb-1"
              >
                Template Name
              </label>
              <Select onValueChange={(value) => setSelectedTemplate(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="temp-1">Temp-1</SelectItem>
                    <SelectItem value="temp-2">Temp-2</SelectItem>
                    <SelectItem value="temp-3">Temp-3</SelectItem>                  
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </form>
        </DialogDescription>
        <div className="mt-4 flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-gray-200 text-black rounded-md w-full md:w-1/2">
              Cancel
            </button>
          </DialogClose>
          <DialogClose asChild>

          <button 
            className="px-4 py-2 bg-black text-white rounded-md w-full md:w-1/2"
            onClick={handleSave} // Call handleSave when Save is clicked
          >
            Save
          </button>
          </DialogClose>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssignFolder;

