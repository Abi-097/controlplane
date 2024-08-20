import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Switch from "react-switch";
const NameImage = () => {
  const [phone, setPhone] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const handleButtonClick = () => {
    document.getElementById("fileInput")?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };

  return (
    <>
      <form className="w-full">
        <div className="flex items-center justify-between px-5 mb-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="rounded-full w-[50px] h-[50px] bg-gray-200 flex items-center justify-center">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="Uploaded"
                  className="rounded-full w-full h-full object-cover"
                  width={50}
                  height={50}
                />
              ) : (
                <IoPerson className="text-xl" />
              )}
            </div>
            <button
              className="flex items-center bg-gray-200 text-black px-4 py-2"
              onClick={handleButtonClick}
            >
              <MdOutlineFileUpload />
              &nbsp; Uploads Image
            </button>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />

            <button className="bg-gray-200 p-2 rounded-md">
              <RiDeleteBin5Line size={20} />
            </button>
          </div>
          <div className="flex items-center p-2 gap-2 cursor-pointer">
            {" "}
            {/* <FaRegBuilding size={24} /> */}
            <Switch
              onChange={handleSwitchChange}
              checked={isChecked}
              uncheckedIcon={false}
              checkedIcon={false}
              width={25}
              height={15}
              className="mr-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mb-3">
          <div className="col-span-12 md:col-span-12 lg:col-span-2 xl:col-span-2">
            <div className="w-full">
              <Label className="text-md mb-1 ">Title</Label>
              <Input type="title" placeholder="Title" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-5 xl:col-span-5">
            <div className="w-full">
              <Label className="text-md mb-1 ">First Name</Label>
              <Input type="firstName" placeholder="First Name" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-5 xl:col-span-5">
            <div className="w-full">
              <Label className="text-md mb-1 ">Last Name</Label>
              <Input type="lastName" placeholder="Last Name" />
            </div>
          </div>
          {/* <div className="col-span-12 md:col-span-8">
          <div className="p-4 border border-gray-300">xs=8</div>
        </div> */}
        </div>
        <div className="grid grid-cols-12 gap-2 mb-3">
          <div className="col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4">
            <div className="w-full">
              <Label className="text-md mb-1 ">Team</Label>
              <Input type="team" placeholder="Team" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-8">
            <div className="w-full">
              <Label className="text-md mb-1 ">Email</Label>
              <Input type="email" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mb-3">
          <div className="col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4">
            <div className="w-full">
              <Label className="text-md mb-1 ">Phone</Label>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputStyle={{
                  width: "100%",
                  border: "1px solid #C7C8CC",
                }}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-8">
            <div className="w-full">
              <Label className="text-md mb-1 ">Social Link</Label>
              <Input type="sociallink" placeholder="Social Link" />
            </div>
          </div>
        </div>
        <div>
          <div className="w-full">
            <Label className="text-md mb-1 ">Website</Label>
            <Input type="website" placeholder="Website" />
          </div>
        </div>
      </form>
    </>
  );
};

export default NameImage;
