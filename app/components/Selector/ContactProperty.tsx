import React, { useEffect, useRef, useState } from "react";
import { MdOutlineCheck } from "react-icons/md";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";
const ContactProperty = () => {
  const options = [
    // box1
    { label: "New", value: "New" },
    { label: "Existing", value: "Existing" },
    // box2
    { label: "Contacted", value: "Contacted" },
    { label: "Not Contacted", value: "Not Contacted" },
    // box3
    { label: "Qualified", value: "Qualified" },
    { label: "Not Qualified", value: "Not Qualified" },
    // box4
    { label: "Negotiated", value: "Negotiated" },
    { label: "Not Started", value: "Not Started" },
    // box5
    { label: "Closed", value: "Closed" },
    { label: "In review", value: "In review" },
    { label: "Hold", value: "Hold" },
    { label: "Delete", value: "Delete" },
  ];

  // State for managing dropdown visibility and selected option
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown1SelectedOption, setDropdown1SelectedOption] = useState("");
  const dropdown1Ref = useRef<HTMLDivElement>(null);

  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown2SelectedOption, setDropdown2SelectedOption] = useState("");
  const dropdown2Ref = useRef<HTMLDivElement>(null);

  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [dropdown3SelectedOption, setDropdown3SelectedOption] = useState("");
  const dropdown3Ref = useRef<HTMLDivElement>(null);

  const [dropdown4Open, setDropdown4Open] = useState(false);
  const [dropdown4SelectedOption, setDropdown4SelectedOption] = useState("");
  const dropdown4Ref = useRef<HTMLDivElement>(null);

  const [dropdown5Open, setDropdown5Open] = useState(false);
  const [dropdown5SelectedOption, setDropdown5SelectedOption] = useState("");
  const dropdown5Ref = useRef<HTMLDivElement>(null);

  //disable

  const [isBox2Enabled, setIsBox2Enabled] = useState(false);
  const [isBox3Enabled, setIsBox3Enabled] = useState(false);
  const [isBox4Enabled, setIsBox4Enabled] = useState(false);
  const [isBox5Enabled, setIsBox5Enabled] = useState(false);

  // Toggle dropdown visibility for each box
  const toggleDropdown1 = () => setDropdown1Open(!dropdown1Open);
  const toggleDropdown2 = () =>
    isBox2Enabled && setDropdown2Open(!dropdown2Open);
  const toggleDropdown3 = () =>
    isBox3Enabled && setDropdown3Open(!dropdown3Open);
  const toggleDropdown4 = () =>
    isBox4Enabled && setDropdown4Open(!dropdown4Open);
  const toggleDropdown5 = () =>
    isBox5Enabled && setDropdown5Open(!dropdown5Open);

  // Handle option selection for each box
  const handleSelectOption1 = (option: string) => {
    setDropdown1SelectedOption(option);
    setDropdown1Open(false);
    if (option === "New" || option === "Existing") {
      setIsBox2Enabled(true); // Enable Box 2
    } else {
      setIsBox2Enabled(false); // Disable Box 2
    }
  };

  const handleSelectOption2 = (option: string) => {
    setDropdown2SelectedOption(option);
    setDropdown2Open(false);
    // setIsBox3Enabled(true);
    if (option === "Contacted" || option === "Not Contacted") {
      setIsBox3Enabled(true); // Enable Box 2
    } else {
      setIsBox3Enabled(false); // Disable Box 2
    }
  };

  const handleSelectOption3 = (option: string) => {
    setDropdown3SelectedOption(option);
    setDropdown3Open(false);
    if (option === "Qualified" || option === "Not Qualified") {
      setIsBox4Enabled(true); // Enable Box 2
    } else {
      setIsBox4Enabled(false); // Disable Box 2
    }
  };

  const handleSelectOption4 = (option: string) => {
    setDropdown4SelectedOption(option);
    setDropdown4Open(false);
    // setIsBox5Enabled(true);
    if (option === "Negotiated" || option === "Not Started") {
      setIsBox5Enabled(true); // Enable Box 2
    } else {
      setIsBox5Enabled(false); // Disable Box 2
    }
  };

  const handleSelectOption5 = (option: string) => {
    setDropdown5SelectedOption(option);
    setDropdown5Open(false);
  };

  // Handle clicks outside of dropdown to close them
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdown1Ref.current &&
        !dropdown1Ref.current.contains(event.target as Node)
      ) {
        setDropdown1Open(false);
      }
      if (
        dropdown2Ref.current &&
        !dropdown2Ref.current.contains(event.target as Node)
      ) {
        setDropdown2Open(false);
      }
      if (
        dropdown3Ref.current &&
        !dropdown3Ref.current.contains(event.target as Node)
      ) {
        setDropdown3Open(false);
      }
      if (
        dropdown4Ref.current &&
        !dropdown4Ref.current.contains(event.target as Node)
      ) {
        setDropdown4Open(false);
      }
      if (
        dropdown5Ref.current &&
        !dropdown5Ref.current.contains(event.target as Node)
      ) {
        setDropdown5Open(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderDropdown = (
    open: boolean,
    options: Array<{ label: string; value: string }>,
    handleSelectOption: (option: string) => void
  ) => (
    <div className="absolute z-10 mt-1 w-[135px] h-auto bg-white shadow-lg rounded-md">
      {options.map((option) => (
        <div
          key={option.value}
          className="py-2 px-3 cursor-pointer hover:bg-gray-100"
          onClick={() => handleSelectOption(option.label)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-full sm:w-full lg:grid-cols-5">
      {/* Box 1 */}
      <div ref={dropdown1Ref} className="relative flex-grow">
        {/* <div
          className={`flex p-3 border items-center justify-center gap-2 w-full h-auto text-xs font-semibold cursor-pointer whitespace-nowrap min-w-[100px] ${
            dropdown1SelectedOption === "Existing"
              ? "bg-[#ffccd5] text-[#e03f44] border-[#e03f44]"
              : dropdown1SelectedOption === "New"
              ? "bg-[#e0f7fa] text-[#00796b] border-[#00796b]"
              : "bg-white text-black"
          }`}
          onClick={toggleDropdown1}
        > */}
        <div
          className="flex p-3 border items-center justify-center gap-2 w-full h-[51px] text-xs font-semibold cursor-pointer whitespace-nowrap min-w-[100px] bg-white text-black"
          onClick={toggleDropdown1}
        >
          {dropdown1SelectedOption === "New" && (
            <Image
              src="/icons/greenntick.svg"
              alt="green tick"
              width={26}
              height={26}
            />
          )}
          {dropdown1SelectedOption === "Existing" && (
            <Image
              src="/icons/redtick.svg"
              alt="red cross"
              width={26}
              height={26}
            />
          )}
          <div>{dropdown1SelectedOption || "Choose"}</div>
          <IoChevronDownSharp />
        </div>
        {dropdown1Open && (
          <div className="absolute z-10 mt-1 w-[135px] h-auto bg-white shadow-lg rounded-md text-xs">
            {options.slice(0, 2).map((option) => (
              <div
                key={option.value}
                className="py-2 px-3 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectOption1(option.label)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Box 2 */}
      <div ref={dropdown2Ref} className="relative flex-grow">
        {/* <div
          className={`flex p-3 border-l border-t border-b items-center justify-center gap-2 w-full h-auto text-xs font-semibold cursor-pointer whitespace-nowrap min-w-[100px] ${
            dropdown2SelectedOption === "Not Contacted"
              ? "bg-[#ffccd5] text-[#e03f44] border-[#e03f44]"
              : "bg-white text-black"
          }`}
          onClick={toggleDropdown2}
        > */}

        <div
          className={`flex p-3 border-l border-t border-b items-center justify-center gap-2 w-full h-[51px] text-xs font-semibold cursor-pointer whitespace-nowrap min-w-[100px] ${
            !isBox2Enabled
              ? "cursor-not-allowed bg-gray-100 text-gray-400 border-gray-300"
              : "bg-white text-black"
          }`}
          onClick={isBox2Enabled ? toggleDropdown2 : undefined}
        >
          {dropdown2SelectedOption === "Not Contacted" && (
            <Image
              src="/icons/greytick.svg"
              alt="grey tick"
              width={26}
              height={26}
            />
          )}
          {dropdown2SelectedOption === "Contacted" && (
            <Image
              src="/icons/greenntick.svg"
              alt="green tick"
              width={26}
              height={26}
            />
          )}
          <div>{dropdown2SelectedOption || "Choose"}</div>
          <IoChevronDownSharp />
        </div>
        {dropdown2Open && (
          <div className="absolute z-10 mt-1  w-[135px] h-auto bg-white shadow-lg rounded-md text-xs">
            {options.slice(2, 4).map((option) => (
              <div
                key={option.value}
                className="py-2 px-3 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectOption2(option.label)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Box 3 */}
      <div ref={dropdown3Ref} className="relative flex-grow">
        {/* <div
          className={`flex p-3 border-l border-t border-b items-center justify-center gap-2 w-full h-auto text-xs font-semibold cursor-pointer whitespace-nowrap min-w-[100px] ${
            dropdown3SelectedOption === "Not Qualified"
              ? "bg-[#ffccd5] text-[#e03f44] border-[#e03f44]"
              : "bg-white text-black"
          }`}
          onClick={toggleDropdown3}
        > */}
        <div
          className={`flex p-3 border-l border-t border-b items-center justify-center gap-2 w-full h-[51px] text-xs font-semibold cursor-pointer whitespace-nowrap min-w-[100px] ${
            !isBox3Enabled
              ? "cursor-not-allowed bg-gray-100 text-gray-400 border-gray-300"
              : "bg-white text-black"
          }`}
          onClick={isBox3Enabled ? toggleDropdown3 : undefined}
        >
          {dropdown3SelectedOption === "Qualified" && (
            <Image
              src="/icons/greytick.svg"
              alt="grey tick"
              width={26}
              height={26}
            />
          )}
          {dropdown3SelectedOption === "Not Qualified" && (
            <Image
              src="/icons/redcross.svg"
              alt="red cross"
              width={26}
              height={26}
            />
          )}
          <div>{dropdown3SelectedOption || "Choose"}</div>
          <IoChevronDownSharp />
        </div>
        {dropdown3Open && (
          <div className="absolute z-10 mt-1  w-[135px] h-auto bg-white shadow-lg rounded-md text-xs">
            {options.slice(4, 6).map((option) => (
              <div
                key={option.value}
                className="py-2 px-3 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectOption3(option.label)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Box 4 */}
      <div ref={dropdown4Ref} className="relative flex-grow">
        {/* <div
          className={`flex p-3 border-l border-t border-b items-center justify-center gap-2 w-full h-auto text-xs font-semibold cursor-pointer whitespace-nowrap min-w-[100px] ${
            dropdown4SelectedOption === "Not Started"
              ? "bg-[#ffccd5] text-[#e03f44] border-[#e03f44]"
              : "bg-white text-black"
          }`}
          onClick={toggleDropdown4}
        > */}
        <div
          className={`flex p-3 border-l border-t border-b items-center justify-center gap-2 w-full h-[51px] text-xs font-semibold cursor-pointer whitespace-nowrap min-w-[100px] ${
            !isBox4Enabled
              ? "cursor-not-allowed bg-gray-100 text-gray-400 border-gray-300"
              : "bg-white text-black"
          }`}
          onClick={isBox4Enabled ? toggleDropdown4 : undefined}
        >
          {dropdown4SelectedOption === "Negotiated" && (
            <Image
              src="/icons/orangetick.svg"
              alt="orange cross"
              width={26}
              height={26}
            />
          )}
          {dropdown4SelectedOption === "Not Started" && (
            <Image
              src="/icons/redcross.svg"
              alt="red cross"
              width={26}
              height={26}
            />
          )}
          <div>{dropdown4SelectedOption || "Choose"}</div>
          <IoChevronDownSharp />
        </div>
        {dropdown4Open && (
          <div className="absolute z-10 mt-1  w-[135px] h-auto bg-white shadow-lg rounded-md text-xs">
            {options.slice(6, 8).map((option) => (
              <div
                key={option.value}
                className="py-2 px-3 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectOption4(option.label)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Box 5 */}
      <div ref={dropdown5Ref} className="relative flex-grow">
        {/* <div
          className="flex p-3 items-center border-t border-b border-x  justify-center gap-2 w-full h-auto whitespace-nowrap min-w-[100px] bg-white text-black text-xs font-semibold cursor-pointer"
          onClick={toggleDropdown5}
        > */}
        <div
          className={`flex p-3 border-l border-t border-b items-center justify-center gap-2 w-full h-[51px] text-xs font-semibold cursor-pointer whitespace-nowrap min-w-[100px] ${
            !isBox5Enabled
              ? "cursor-not-allowed bg-gray-100 text-gray-400 border-gray-300"
              : "bg-white text-black"
          }`}
          onClick={isBox5Enabled ? toggleDropdown5 : undefined}
        >
          {dropdown5SelectedOption === "Closed" && (
            <Image
              src="/icons/greenntick.svg"
              alt="green tick"
              width={26}
              height={26}
            />
          )}
          {dropdown5SelectedOption === "In review" && (
            <Image
              src="/icons/greytick.svg"
              alt="grey tick"
              width={26}
              height={26}
            />
          )}
          {dropdown5SelectedOption === "Hold" && (
            <Image
              src="/icons/orangetick.svg"
              alt="orange cross"
              width={26}
              height={26}
            />
          )}
          {dropdown5SelectedOption === "Delete" && (
            <Image
              src="/icons/redcross.svg"
              alt="red cross"
              width={26}
              height={26}
            />
          )}
          <div>{dropdown5SelectedOption || "Choose"}</div>
          <IoChevronDownSharp />
        </div>
        {dropdown5Open && (
          <div className="absolute z-10 mt-1  w-[135px] h-auto bg-white shadow-lg rounded-md text-xs">
            {options.slice(8, 12).map((option) => (
              <div
                key={option.value}
                className="py-2 px-3 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectOption5(option.label)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactProperty;
