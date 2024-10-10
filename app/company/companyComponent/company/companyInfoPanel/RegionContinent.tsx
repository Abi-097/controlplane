import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";

const continents = [
  "Asia",
  "Africa",
  "Antarctica",
  "Europe",
  "North America",
  "Australia ",
  "South America",
];

interface RegionContinentProps {
  onContinentsChange: (selectedContinents: string[]) => void;
  selectedContinents: string[]; // Prop for selected continents
}

const RegionContinent: React.FC<RegionContinentProps> = ({
  onContinentsChange,
  selectedContinents: initialSelectedContinents,
}) => {
  const [selectedContinents, setSelectedContinents] = useState<string[]>(
    initialSelectedContinents
  );
  const [selectAll, setSelectAll] = useState(false);

  // Handle checkbox change for individual continents
  const handleCheckboxChange = (continent: string, isChecked: boolean) => {
    const updatedContinents = isChecked
      ? [...selectedContinents, continent]
      : selectedContinents.filter((c) => c !== continent);

    setSelectedContinents(updatedContinents);
    onContinentsChange(updatedContinents);
  };

  // Handle Select All checkbox change
  const handleSelectAll = (isChecked: boolean) => {
    if (isChecked) {
      setSelectedContinents(continents);
      onContinentsChange(continents);
    } else {
      setSelectedContinents([]);
      onContinentsChange([]);
    }
    setSelectAll(isChecked);
  };

  // Sync "Select All" state when individual selections are changed
  useEffect(() => {
    if (selectedContinents.length === continents.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedContinents]);

  // Sync selected continents state with initialSelectedContinents on mount
  useEffect(() => {
    setSelectedContinents(initialSelectedContinents);
  }, [initialSelectedContinents]);

  return (
    <div>
      {/* Select All Checkbox */}
      <div className="flex items-center mb-4">
        <Checkbox
          id="selectAll"
          className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] mt-3"
          checked={selectAll}
          onCheckedChange={
            (isChecked: boolean | "indeterminate") =>
              handleSelectAll(isChecked === true) // Ensure boolean value
          }
        />
        <label htmlFor="selectAll" className="ml-2 mt-3 text-sm">
          Select All
        </label>
      </div>

      {/* Individual Continents Checkboxes */}
      {continents.map((continent) => (
        <div key={continent} className="flex items-center mb-2">
          <Checkbox
            className="data-[state=checked]:bg-[#3f76ff] data-[state=checked]:border-[#3f76ff] mt-3"
            id={continent}
            checked={selectedContinents.includes(continent)}
            onCheckedChange={(isChecked: boolean | "indeterminate") =>
              handleCheckboxChange(continent, isChecked === true)
            }
          />
          <label htmlFor={continent} className="ml-2 mt-3 text-sm">
            {continent}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RegionContinent;
