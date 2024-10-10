import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import RegionContinent from "./RegionContinent";
import RegionCustom from "./RegionCustom";

interface AddContinentsProps {
  trigger: React.ReactNode;
  onContinentsChange: (selectedContinents: string[]) => void;
  selectedContinents: string[];
}

const AddContinents: React.FC<AddContinentsProps> = ({
  trigger,
  onContinentsChange,
  selectedContinents,
}) => {
  const [activeTab, setActiveTab] = useState("continent");

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="min-w-lg">
        <DialogHeader>
          <DialogTitle>Region</DialogTitle>
          <hr className="my-3" />
          <DialogDescription>
            <div className="w-full flex flex-col">
              <div className="flex border-b border-gray-200 w-full">
                <button
                  className={`flex-grow px-10 py-2 -mb-px text-sm font-medium focus:outline-none ${
                    activeTab === "continent"
                      ? "border-b-2 font-semibold border-primaryBlue text-primaryBlue"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("continent")}
                >
                  Continent
                </button>
                <button
                  className={`flex-grow px-10 py-2 -mb-px text-sm font-medium focus:outline-none ${
                    activeTab === "custom"
                      ? "border-b-2 font-semibold border-primaryBlue text-primaryBlue"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("custom")}
                >
                  Custom
                </button>
              </div>
              <div className="mt-4 text-left p-4">
                {activeTab === "continent" ? (
                  <div className="pl-2">
                    <RegionContinent
                      onContinentsChange={onContinentsChange}
                      selectedContinents={selectedContinents}
                    />
                  </div>
                ) : (
                  <div className="flex items-center">
                    <RegionCustom />
                  </div>
                )}
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddContinents;
