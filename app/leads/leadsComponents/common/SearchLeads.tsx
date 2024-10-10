import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import UsersData from "@/public/data/users"; // Import UsersData from the file
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SearchLeads: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLead, setSelectedLead] = useState<string | undefined>(
    undefined
  ); // Change null to undefined

  const filteredLeads = UsersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.contact.includes(searchQuery)
  );

  return (
    <div className="w-[300px]">
      <Select onValueChange={(value) => setSelectedLead(value)}>
        <SelectTrigger className="flex justify-between items-center border rounded-lg px-4 py-2">
          <span className="flex flex-col">
            <SelectValue placeholder="Select Leads " />{" "}
            {/* Use SelectValue here */}
          </span>
        </SelectTrigger>
        <SelectContent>
          <div className="p-2">
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>
          <SelectGroup>
            {filteredLeads.length > 0 ? (
              filteredLeads.map((user) => (
                <SelectItem
                  key={user.id}
                  value={user.name} // Set the value as 'user.id - user.name'
                >
                  <div className="flex gap-4 items-center pr-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src={`/users/${user.id}.jpg`}
                        alt="@shadcn"
                      />
                      <AvatarFallback>{user.name}</AvatarFallback>
                    </Avatar>
                    <div className="capitalize text-sm">{user.name} </div>
                  </div>
                </SelectItem>
              ))
            ) : (
              <div className="p-4 text-gray-500">No results found</div>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchLeads;
