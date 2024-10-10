import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import CompanyData from "@/public/data/companies";
// import DataTableCompany from "../CompanyTable/TableCompany";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineRefresh, MdViewColumn } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { InverseFillButton } from "@/components/libs/buttons";
import AddContinents from "@/app/company/companyComponent/company/companyInfoPanel/AddContinents";
import TableCustomers from "./TableCustomers";
// import AddContinents from "../companyInfoPanel/AddContinents";
// const users: Users[] = UsersData;
// type Activity = {
//   id: number;
//   remainder: string;
//   task_priority: string;
//   assigned_to: string;
// };

// type Note = {
//   id: number;
//   time: string;
//   note: string;
// };

// type Users = {
//   id: number;
//   name: string;
//   gender: string;
//   email: string;
//   contact: string;
//   job_title: string;
//   annual_revenue: number;
//   status: string;
//   location: string;
//   company: string;
//   country: string;
//   category: string;
//   activities: Activity[];
//   notes: Note[];
// };

const ListFragmentCustomers = () => {
  const [isSelected, setIsSelected] = useState<number>(1);
  const [searchInput, setSearchInput] = useState("");
  const [selectedContinents, setSelectedContinents] = useState<string[]>([]);
  const iconRef = useRef<HTMLDivElement>(null);
  const [isIconMenuOpen, setIsIconMenuOpen] = useState(false);
  const sheetTriggerRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (iconRef.current && !iconRef.current.contains(event.target as Node)) {
      setIsIconMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleIconMenu = () => {
    setIsIconMenuOpen(!isIconMenuOpen);
  };

  const handleViewColumnClick = () => {
    if (sheetTriggerRef.current) {
      sheetTriggerRef.current.click();
    }
  };

  const ListNavSettings = [
    {
      id: 1,
      title: "All Companies",
      action: "*",
    },
  ];

  const handleNavClick = (id: number) => {
    setIsSelected(id);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  // Dynamic filtering logic
  let displayedCompanies = CompanyData;

  // Filter by industry type
  if (isSelected !== 1) {
    const industryType = ListNavSettings.find(
      (item) => item.id === isSelected
    )?.title;
    if (industryType) {
      displayedCompanies = displayedCompanies.filter(
        (company) => company.industryType === industryType
      );
    }
  }

  // Filter by search input for the "Company Name" column
  displayedCompanies = displayedCompanies.filter(
    (company) =>
      company.companyName.toLowerCase().includes(searchInput.toLowerCase()) ||
      company.country.toLowerCase().includes(searchInput.toLowerCase()) ||
      company.city.toLowerCase().includes(searchInput.toLowerCase()) ||
      company.industryType.toLowerCase().includes(searchInput.toLowerCase())
  );

  // const filteredData = getFilteredData();

  const handleContinentChange = (newSelectedContinents: string[]) => {
    setSelectedContinents(newSelectedContinents);
  };
  return (
    <div className="block w-full bg-fullbg">
      {/* <UserInfoPanel /> */}
      <div className="flex py-3 pl-4 justify-between items-center bg-white mx-4">
        {/* left headersection */}
        <div className="flex">
          {ListNavSettings.map((item) => (
            <div
              key={item.id}
              className={clsx(
                "cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold",
                isSelected === item.id
                  ? "bg-[#f4f2ee] text-gray-800"
                  : "hover:text-gray-800"
              )}
              onClick={() => handleNavClick(item.id)}
            >
              {item.title} (4)
            </div>
          ))}
          {selectedContinents.length > 0 && (
            <div className="flex justify-between items-center bg-white mx-4">
              {selectedContinents.map((continent, index) => (
                <div
                  key={index}
                  className="cursor-pointer px-4 py-2 rounded-full text-sm text-gray-500 font-bold"
                >
                  {continent}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-center gap-3">
          {/* Horizontal Icon */}
          <div className="relative" ref={iconRef}>
            <div
              className="cursor-pointer rounded-full hover:bg-gray-200 h-8 w-8 p-0 flex items-center justify-center ml-3"
              onClick={toggleIconMenu}
            >
              <BsThreeDots size={20} />
            </div>

            {/* Icons with Animation */}
            <div
              className={`flex items-center gap-3 absolute right-full top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${
                isIconMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <MdOutlineRefresh
                className="text-gray-400 cursor-pointer hover:text-gray-700"
                size={20}
              />

              <MdViewColumn
                onClick={handleViewColumnClick}
                className="text-gray-400 cursor-pointer hover:text-gray-700"
                size={20}
              />
            </div>
          </div>

          {/* SearchBar */}
          <div className="relative max-w-sm">
            {/* Search Icon */}
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {/* Input Field */}
            <Input
              placeholder="Filter by Name"
              value={searchInput}
              onChange={handleSearchChange}
              className="pl-10"
            />
          </div>
          <AddContinents
            onContinentsChange={handleContinentChange}
            selectedContinents={selectedContinents}
            trigger={
              <InverseFillButton>
                <IoAdd size={16} />
                <div className="text-sm">Add Regions</div>
              </InverseFillButton>
            }
          />
        </div>
      </div>
      <div className="bg-fullbg">
        <TableCustomers
          companies={displayedCompanies}
          sheetTriggerRef={sheetTriggerRef}
        />
      </div>
    </div>
  );
};

export default ListFragmentCustomers;
