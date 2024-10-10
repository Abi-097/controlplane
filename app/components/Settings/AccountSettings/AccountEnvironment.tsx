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
import { GoDatabase } from "react-icons/go";
import History from "../../History/History";
const AccountEnvironment = () => {
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
          <div className="flex items-center gap-3">
            <GoDatabase size={24} />
            <p className="font-semibold">Environment</p>
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

        <p className="py-5 text-sm">
          Select the following Environment Options to choose for your need to
          leverage DataNue&apos;s environment services.
        </p>
        <div>
          <div
            className=" mb-6 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1">Edition</Label>
            <Select>
              <SelectTrigger className="w-full bg-inputField">
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
            <p className="text-xs italic text-gray-600">
              Choose Edition Type from above - Trail (14 Days), Basic, Standard
              and Enterprise
            </p>
          </div>

          <div
            className=" mb-6 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Subscription Renewal Date</Label>

            <Flatpickr
              className="bg-inputField flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              data-enable-time
              value={date}
              onChange={(date) => setDate(date[0])}
              options={{ dateFormat: "Y-m-d H:i" }}
            />
          </div>
          <div
            className=" mb-6 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm">Subscription Payment Type</Label>
            <p className="text-sm my-2 text-gray-600">
              Choose your payment type to pay Subscription
            </p>
            <RadioGroup defaultValue="month" className="">
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="month" id="r1" />
                <Label htmlFor="r1" className="text-sm">
                  Monthly
                </Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="annual" id="r2" />
                <Label htmlFor="r2" className="text-sm">
                  Annual
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="r3" />
                <Label htmlFor="r3" className="text-sm">
                  Custom Period
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div
            className=" mb-6 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Cloud Environment</Label>
            <Select>
              <SelectTrigger className="w-full bg-inputField">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="aws">Amazon Web Services (AWS)</SelectItem>
                  <SelectItem value="gcp">
                    Google Cloud Platform (GCP)
                  </SelectItem>
                  <SelectItem value="azure">
                    Azure Cloud Services (AZURE)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-xs italic text-gray-600">
              Choose your Cloud Environment to support DataNue
            </p>
          </div>
          <div
            className=" mb-6 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Size</Label>
            <Select>
              <SelectTrigger className="w-full bg-inputField">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="xs">X-Small</SelectItem>
                  <SelectItem value="s">Small</SelectItem>
                  <SelectItem value="m">Medium</SelectItem>
                  <SelectItem value="l">Large</SelectItem>
                  <SelectItem value="xl">X-Large</SelectItem>
                  <SelectItem value="2xl">2X-Large</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-xs italic text-gray-600">
              Choose your Size For CPU Configuration.
            </p>
          </div>
          <div
            className=" mb-6 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">CPU Configuration</Label>
            <Select>
              <SelectTrigger className="w-full bg-inputField">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="4gb">
                    2 vCPU, 4GB RAM, 40GB Disk
                  </SelectItem>
                  <SelectItem value="8gb">
                    2 vCPU, 8GB RAM, 60GB Disk
                  </SelectItem>
                  <SelectItem value="16gb">
                    4 vCPU, 16B RAM, 128GB Disk
                  </SelectItem>
                  <SelectItem value="32gb">
                    8 vCPU, 32GB RAM, 256GB Disk
                  </SelectItem>
                  <SelectItem value="64gb">
                    16 vCPU, 64GB RAM, 512GB Disk
                  </SelectItem>
                  <SelectItem value="128gb">
                    32 vCPU, 128GB RAM, 1TB Disk
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-xs italic text-gray-600">
              Choose your Cloud Environment to support DataNue
            </p>
          </div>
          <div
            className=" mb-6 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">
              System Environment / Landscape
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-inputField">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="4gb">Production (PRD)</SelectItem>
                  <SelectItem value="8gb">Quality (QA)</SelectItem>
                  <SelectItem value="16gb">Development (DEV)</SelectItem>
                  <SelectItem value="32gb">Sandbox (SB)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-xs italic text-gray-600">
              Choose your System Landscape or Environment to support DataNue
            </p>
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

export default AccountEnvironment;
