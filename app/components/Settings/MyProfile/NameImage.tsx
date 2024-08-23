import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Switch from "react-switch";
import { MdOutlineHistory } from "react-icons/md";
import { Button } from "@/components/ui/button";
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
      <form className="w-full p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CgProfile size={24} />
            <p className="font-semibold">Name & Image: Abishek Mahenderaraja</p>
          </div>
          <MdOutlineHistory size={24} />
        </div>
        <hr className="text-slate-300 my-4" />
        <div>
          <div className="flex items-center justify-between">
            <div
              className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
            >
              <Label className="text-md mb-1 ">First Name</Label>
              <Input type="firstName" placeholder="" className="bg-[#f9fafb]" />
            </div>
            <div className="flex items-center justify-center w-full md:w-full lg:w-[40%] xl:w-[40%]">
              <div className="flex items-center justify-center gap-2">
                <Switch
                  onChange={handleSwitchChange}
                  checked={isChecked}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  width={25}
                  height={15}
                />
                <p>In Active</p>
              </div>
              <div className="w-28 h-28 rounded-full bg-slate-100 ml-16" />
            </div>
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">Last Name</Label>
            <Input type="lastName" placeholder="" className="bg-[#f9fafb]" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">Title</Label>
            <Input type="title" placeholder="" className="bg-[#f9fafb]" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">Team</Label>
            <Input type="team" placeholder="" className="bg-[#f9fafb]" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">Email</Label>
            <Input type="email" placeholder="" className="bg-[#f9fafb]" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">Phone</Label>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputStyle={{
                width: "100%",
                border: "1px solid #e4e4e7 ",
                background: "#f9fafb",
              }}
            />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">Social Link</Label>
            <Input type="sociallink" placeholder="" className="bg-[#f9fafb]" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">Website</Label>
            <Input type="website" placeholder="" className="bg-[#f9fafb]" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="bg-[#57534e] text-white">
            Save Account Details
          </Button>
        </div>
      </form>
    </>
  );
};

export default NameImage;
