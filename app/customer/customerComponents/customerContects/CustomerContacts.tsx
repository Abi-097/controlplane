import React, {useState} from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { IoMdAdd } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import { PiPhoneLight } from "react-icons/pi";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

// Define the UserData interface
interface UserData {
  id: number;
  name: string;
  position: string;
  nps: number;
  mobile: string;
  email: string;
  lastSeen: number;
  location:string;
}

// Define the Props type to accept UserData array
interface CustomerContactsProps {
  userData: UserData[];
}

// Component accepts props of type CustomerContactsProps
const CustomerContacts: React.FC<CustomerContactsProps> = ({ userData }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle visibility when the cross icon is clicked
  const handleToggleVisibility = () => {
    setIsVisible((prevVisible: any) => !prevVisible);
  };

  // Conditionally render the CustomerContacts component
  if (!isVisible) {
    return null; // Don't render anything if isVisible is false
  }
  return (
    <div className="w-3/5 mt-0 mb-2 rounded-sm pb-5 bg-fullbg h-[60vh] overflow-hidden">
      {/* Header */}
      <div className=" bg-white pb-2 pt-2 rounded-sm gap-3 px-5 flex flex-row justify-between items-center mb-betweenComponents">
        <div className="flex flex-row text-sm gap-1 text-gray-600">
          Contacts <AiOutlineExclamationCircle />
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="relative max-w-sm">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input placeholder="Filter by Name" className="pl-10" />
          </div>
          <FiFilter size={16} className="text-gray-500 cursor-pointer" />
          <IoMdAdd size={16} className="text-gray-500 cursor-pointer" />
          <RxCross2 size={16} className="text-gray-500 cursor-pointer" onClick={handleToggleVisibility} />
        </div>
      </div>
      <div className="flex py-4 flex-col bg-white">
      {/* Content */}
      {userData.map((item) => (
        <div key={item.id} className="px-5  flex flex-row gap-4  bg-white rounded-sm">
          <Avatar className="w-8 h-8 mt-1">
            <AvatarImage src={`/users/1.jpg`} alt="User avatar" />
            <AvatarFallback></AvatarFallback>
          </Avatar>

          <div className="border-[1px] flex flex-col w-full p-2 mb-4 gap-0 rounded-sm">
            {/* Header */}
            <div className="flex flex-row justify-between items-center rounded-sm text-sm">
              {item.name}
              <div className="flex flex-row items-center text-sm gap-3 text-gray-500">
                NPS
                <div
                  className={`py-1 w-8 text-center rounded-sm text-white ${
                    item.nps > 7
                      ? "bg-green-600" // Green for NPS > 7
                      : item.nps > 4
                      ? "bg-yellow-500" // Yellow for 4 < NPS <= 7
                      : "bg-red-600" // Red for NPS <= 4 (or any fallback color)
                  }`}
                >
                  {item.nps}
                </div>
                <BiSolidEdit size={16} className="cursor-pointer"/>
                <RiDeleteBin5Line size={16}  className="cursor-pointer"/>
              </div>
            </div>
            {/* body */}
            <div className="text-xs text-gray-500">{item.position}</div>
            <div className="flex flex-row gap-10 text-sm text-gray-500 pt-2">
              <div className="flex flex-row gap-2">
                <PiPhoneLight size={16} /> {item.mobile}
              </div>
              <div className="flex flex-row gap-2 ">
                <IoMailOpenOutline size={16} /> {item.email}
              </div>
            </div>
            <div className="flex flex-row justify-between items-center text-gray-500 pt-2 text-xs">
              Last seen {item.lastSeen} days ago
              <div className="flex flex-row gap-2 text-sm items-center ">
                <IoLocationOutline />
                {item.location}
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default CustomerContacts;
