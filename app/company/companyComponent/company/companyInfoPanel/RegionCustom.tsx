import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const RegionCustom = () => {
  return (
    <form className="w-full">
      <div className="grid w-full items-center gap-1.5 mt-2">
        <Label>Region Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Region Name"
          className="w-full"
        />
      </div>
      <div className="grid w-full items-center gap-1.5 mt-2">
        <Label>Region Description</Label>
        <Input
          type="text"
          id="description"
          placeholder="Region Description"
          className="w-full"
        />
      </div>
      <div className="mt-4 flex flex-col md:flex-row justify-end md:space-x-2">
        <Button
          variant="ghost"
          className="px-5 py-2 bg-gray-200 text-black rounded-md"
        >
          Cancel
        </Button>
        <Button className="px-5 py-2 bg-black text-white rounded-md">
          Save
        </Button>
      </div>
    </form>
  );
};

export default RegionCustom;
