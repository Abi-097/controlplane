import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MdOutlineHistory } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { RiLockPasswordLine } from "react-icons/ri";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FiDatabase } from "react-icons/fi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BiWorld } from "react-icons/bi";

const AccountRegion = () => {
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
      <form className="w-full p-4 h-[90vh] overflow-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BiWorld size={24} />
            <p className="font-semibold">Region</p>
          </div>
          <div className="flex items-center gap-2">
            <RiLockPasswordLine size={24} />
            <MdOutlineHistory size={24} />
          </div>
        </div>
        <hr className="text-slate-300 my-4" />

        <p className="py-5 text-md">
          Please choose the region in which your data will be processed by
          DataNue`s hosted data centers. Once you create your account, this
          region selection cannot be modified. If you`re unsure about the
          appropriate region, we recommend selecting the one closest to your
          location. Verify available Documentation for more Information.
        </p>
        <div>
          <div className="flex items-center justify-around">
            <div
              className=" my-6 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
            >
              <RadioGroup defaultValue="asia">
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="asia" id="r1" />
                  <Label htmlFor="r1" className="text-sm">
                    Asia
                  </Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="europe" id="r2" />
                  <Label htmlFor="r2" className="text-sm">
                    Europe
                  </Label>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="northAmerica" id="r3" />
                    <Label htmlFor="r3" className="text-sm">
                      North America
                    </Label>
                  </div>{" "}
                  <Select>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="trail">Trail (14 Days)</SelectItem>
                        <SelectItem value="basic">Basic</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="enterprise">Enterprise</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </RadioGroup>
            </div>
            <div>
              <p className="text-sm mb-2">
                Right now, DataNue is supporting North America Regions Only.
              </p>
              <p className="text-sm">
                <strong>Note:</strong> <br />
                We have roadmap to extent to Asia and Europe regions.
              </p>
            </div>
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

export default AccountRegion;
