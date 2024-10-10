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
import CompanyData from "@/public/data/companies"; // Import companysData from the file
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SearchCompany: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<string | undefined>(
    undefined
  ); // Change null to undefined

  const filteredCompany = CompanyData.filter(
    (company) =>
        company.companyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-[300px]">
      <Select onValueChange={(value) => setSelectedCompany(value)}>
        <SelectTrigger className="flex justify-between items-center border rounded-lg px-4 py-2">
          <span className="flex flex-col">
            <SelectValue placeholder="Select Company " />{" "}
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
            {filteredCompany.length > 0 ? (
              filteredCompany.map((company) => (
                <SelectItem
                  key={company.id}
                  value={company.companyName} // Set the value as 'company.id - company.name'
                >
                  <div className="flex gap-4 items-center pr-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src={`/companies/${company.id}.jpg`}
                        alt="@shadcn"
                      />
                      <AvatarFallback>{company.companyName}</AvatarFallback>
                    </Avatar>
                    <div className="capitalize text-sm">{company.companyName} </div>
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

export default SearchCompany;
