import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GoTag } from "react-icons/go";
interface TagModalProps {
  trigger: React.ReactNode;

  onSelectTag: (tag: string) => void;
  existingTags: string[];
}

const AddTagModal: React.FC<TagModalProps> = ({
  onSelectTag,
  existingTags,
  trigger,
}) => {
  const [selectedTag, setSelectedTag] = useState("Normal");
  const tagOptions = ["Normal", "New Customer", "Important"]; 

  const handleUpdateTag = () => {
    if (!existingTags.includes(selectedTag)) {
      onSelectTag(selectedTag);     }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <div className="flex flex-row items-center text-lg font-semibold gap-2 pb-2">
            <GoTag />
            <DialogTitle>Select Tag</DialogTitle>

            </div>
            <hr />
          </DialogHeader>
          <div >
            <div className="flex flex-col gap-4">
              <Label htmlFor="name">
                Select Tag
              </Label>
              
              <Select value={selectedTag} onValueChange={setSelectedTag}>

                <SelectTrigger className="">
                  <SelectValue placeholder="Select a tag" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                  {tagOptions.map((tag) => (

                    <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                  ))}

                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            {/* <Button onClick={handleUpdateTag} type="submit">
              Update Tag
            </Button>
            <button className="bg-gray-300 px-4 py-2 rounded">Cancel</button> */}
          </DialogFooter>
          <div className="mt-4 flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-gray-200 text-black rounded-md w-full md:w-1/2">
              Cancel
            </button>
          </DialogClose>
          <DialogClose asChild>

          <button onClick={handleUpdateTag} className="px-4 py-2 bg-black text-white rounded-md w-full md:w-1/2">
            Update Tag
          </button>
          </DialogClose>

        </div>
        </DialogContent>
      </Dialog>
     
    </>
  );
};

export default AddTagModal;
