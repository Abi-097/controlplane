// components/MultiSelect.tsx

import { CountryOptions } from "@/public/data/countryCode";
import React, { useState } from "react";

const MultiSelect: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleOptionToggle = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const filteredOptions = CountryOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="w-full py-2 px-3 border bg-[#f9fafb] border-gray-300 rounded-lg shadow-sm focus:outline-none focus:none focus:transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length > 0
          ? selectedOptions.join(", ")
          : "Select Countries"}
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 border border-gray-300 bg-[#f9fafb] shadow-lg rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border-b border-gray-300 rounded-t-lg focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => handleOptionToggle(option.value)}
                  className="mr-2 "
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
