// components/MultiSelect.tsx

import React, { useEffect, useRef, useState } from "react";

export type Option = {
  value: string;
  label: string;
};

export const UserOption: Option[] = [
  { value: "Abi", label: "Abi" },
  { value: "Angola", label: "Angola" },
  { value: "Kumar", label: "Kumar" },
  { value: "Abi", label: "Abi" },
  { value: "Angola", label: "Angola" },
  { value: "Kumar", label: "Kumar" },
];

const MultiUserSelect: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Ref for the dropdown container
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle option toggle
  const handleOptionToggle = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Handle "Select / Unselect All"
  const handleSelectAll = () => {
    if (selectedOptions.length === UserOption.length - 1) {
      // Unselect all if all options are currently selected
      setSelectedOptions([]);
    } else {
      // Select all options (excluding "Select / Unselect All")
      setSelectedOptions(
        UserOption.filter((option) => option.value !== "SelectUnselectAll").map(
          (option) => option.value
        )
      );
    }
  };

  // Determine if "Select / Unselect All" should be checked
  const isAllSelected =
    UserOption.filter((option) => option.value !== "SelectUnselectAll")
      .length === selectedOptions.length;

  // Filter options based on search term
  const filteredOptions = UserOption.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        className="w-full py-2 px-3 border bg-[#f9fafb] border-gray-300 rounded-lg shadow-sm focus:outline-none focus:none focus:transparent"
        // className="w-full py-2 px-3 border xl:max-w-[300px] lg:max-w-[300px] md:max-w-none sm:max-w-none max-w-none bg-[#f9fafb] border-gray-300 rounded-lg shadow-sm focus:outline-none focus:none focus:transparent overflow-hidden text-ellipsis whitespace-nowrap"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
          {selectedOptions.length > 0
            ? selectedOptions.join(", ")
            : "Select Users"}
        </span>
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
          <div className="max-h-[185px] overflow-y-auto">
            {filteredOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={
                    option.value === "SelectUnselectAll"
                      ? isAllSelected
                      : selectedOptions.includes(option.value)
                  }
                  onChange={() => {
                    if (option.value === "SelectUnselectAll") {
                      handleSelectAll();
                    } else {
                      handleOptionToggle(option.value);
                    }
                  }}
                  className="mr-2"
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

export default MultiUserSelect;
