import React, { useState } from "react";
import {
  Calendar,
  Calculator,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const commandGroups = [
  { icon: Calendar, label: "Calendar" },
  { icon: Smile, label: "Search Emoji" },
  { icon: Calculator, label: "Calculator" },
  { icon: User, label: "Profile" },
  { icon: CreditCard, label: "Billing" },
  { icon: Settings, label: "Settings" },
];

export function ProjectsDropdown() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState("Open Command");

  const filteredItems = commandGroups.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (label: string) => {
    setSelectedItem(label); // Set selected label as button text
    setOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative w-full">
      {/* Button to open dropdown */}
      <button
        className="w-full py-2 px-3 border bg-[#f9fafb] border-gray-300 rounded-lg shadow-sm focus:outline-none focus:none focus:transparent"
        onClick={() => setOpen(!open)}
      >
        <p className="text-sm">{selectedItem}</p>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-10 mt-2 w-full rounded-lg border shadow-md bg-white">
          <Command>
            <CommandInput
              placeholder="Type a command or search..."
              value={searchQuery}
              onValueChange={(value) => setSearchQuery(value)}
            />
            <CommandList>
              {filteredItems.length === 0 ? (
                <CommandEmpty>No results found.</CommandEmpty>
              ) : (
                <CommandGroup>
                  {filteredItems.map((item, index) => (
                    <CommandItem
                      key={index}
                      onSelect={() => handleSelect(item.label)}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              <CommandSeparator />
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
}
