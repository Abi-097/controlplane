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

interface AddContinentsProps {
  trigger: React.ReactNode;
  onContinentsChange: (selectedContinents: string[]) => void;
}

const continentsData = [
  {
    id: "asia",
    location: "Asia",
  },
  {
    id: "africa",
    location: "Africa",
  },
  {
    id: "northamerica",
    location: "North America",
  },
  {
    id: "southamerica",
    location: "South America",
  },
  {
    id: "antarctica",
    location: "Antarctica",
  },
  {
    id: "europe",
    location: "Europe",
  },
  {
    id: "australia",
    location: "Australia",
  },
];
const AddContinents: React.FC<AddContinentsProps> = ({
  trigger,
  onContinentsChange,
}) => {
  const [selectedContinents, setSelectedContinents] = useState<string[]>([]);
  const [isAllSelected, setIsAllSelected] = useState(false);
  // Handle selecting or deselecting all checkboxes
  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedContinents([]); // Deselect all
    } else {
      const allContinentsIds = continentsData.map((continent) => continent.id);
      setSelectedContinents(allContinentsIds); // Select all
    }
    setIsAllSelected(!isAllSelected);
  };
  // Handle individual checkbox changes
  const handleCheckboxChange = (id: string) => {
    setSelectedContinents((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((continent) => continent !== id)
        : [...prevSelected, id]
    );
  };

  useEffect(() => {
    const selectedLocations = continentsData
      .filter((continent) => selectedContinents.includes(continent.id))
      .map((continent) => continent.location);
    onContinentsChange(selectedLocations);
  }, [selectedContinents, onContinentsChange]);

  // Check if all continents are selected
  useEffect(() => {
    const allContinentsSelected =
      selectedContinents.length === continentsData.length;
    setIsAllSelected(allContinentsSelected);
  }, [selectedContinents]);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Region</DialogTitle>
          <hr className="my-3" />
          <DialogDescription>
            <div className="space-y-2">
              {/* Select All Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="select-all"
                  checked={isAllSelected}
                  onCheckedChange={handleSelectAll}
                  className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] mt-3"
                />
                <label
                  htmlFor="select-all"
                  className="ml-2 mt-3 text-sm text-gray-600"
                >
                  Select All
                </label>
              </div>
              <div className=" space-y-2">
                {continentsData.map((continent) => (
                  <div
                    key={continent.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={continent.id}
                      checked={selectedContinents.includes(continent.id)}
                      onCheckedChange={() => handleCheckboxChange(continent.id)}
                      className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] mt-3"
                    />
                    <label className="ml-2 mt-3 text-sm text-gray-600">
                      {continent.location}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddContinents;
