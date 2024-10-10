import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Switch from "react-switch";
import { MdOutlineHistory } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiLockPasswordLine } from "react-icons/ri";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import History from "../../History/History";
const CompanyDetails = () => {
  const [phone, setPhone] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState(new Date());
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
      <form className="w-full p-4 overflow-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HiOutlineBuildingOffice2 size={24} />
            <p className="font-semibold">Company Details</p>
          </div>
          <div className="flex items-center gap-2">
            <RiLockPasswordLine size={24} />
            <History
              trigger={
                <MdOutlineHistory className="mr-2 cursor-pointer" size={24} />
              }
            />
          </div>
        </div>
        <hr className="text-slate-300 my-4" />
        <div>
          <div className="flex items-center justify-between">
            <div
              className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
            >
              <Label className="text-sm mb-1 ">Company Name</Label>
              <Input
                type="companyName"
                placeholder=""
                className="bg-inputField"
              />
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
                <p className="text-sm">In Active</p>
              </div>
              <div className="w-28 h-28 rounded-full bg-slate-100 ml-16" />
            </div>
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Legal Name</Label>
            <Input type="legalName" placeholder="" className="bg-inputField" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Email Address</Label>
            <Input type="email" placeholder="" className="bg-inputField" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Phone</Label>
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
            <Label className="text-sm mb-1 ">Website</Label>
            <Input type="website" placeholder="" className="bg-inputField" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Industry</Label>
            <Input type="industry" placeholder="" className="bg-inputField" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">
              Business Unit Identification Number
            </Label>
            <Input type="idnumber" placeholder="" className="bg-inputField" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Associate Reference</Label>
            <Input type="idnumber" placeholder="" className="bg-inputField" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Customer Unique Number</Label>
            <Input
              type="uniquenumber"
              placeholder=""
              className="bg-inputField"
            />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Created On</Label>

            <Flatpickr
              className="bg-inputField flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              data-enable-time
              value={date}
              onChange={(date) => setDate(date[0])}
              options={{ dateFormat: "Y-m-d H:i" }}
            />
          </div>
          <div
            className=" mb-1 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm">Header Configuration</Label>
            <RadioGroup defaultValue="both" className="mt-3">
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="both" id="r1" />
                <Label htmlFor="r1">Include both name and logo on Header</Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="name" id="r2" />
                <Label htmlFor="r2">Include only name on header</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="logo" id="r3" />
                <Label htmlFor="r3">Include only logo on header</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="flex justify-end pb-4">
          <Button className="bg-saveButton text-white">
            Save Account Details
          </Button>
        </div>
      </form>
    </>
  );
};

export default CompanyDetails;
