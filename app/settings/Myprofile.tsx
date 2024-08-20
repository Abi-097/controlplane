import React from "react";
import { CgProfile } from "react-icons/cg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoLocationOutline } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import NameImage from "./NameImage";
const MyProfile = () => {
  return (
    <div id="profile">
      <div>
        <Tabs defaultValue="nameImage" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-200">
            <TabsTrigger value="nameImage">
              <CgProfile size={20} className="mr-2" /> Name & Image
            </TabsTrigger>
            <TabsTrigger value="address">
              <IoLocationOutline size={20} className="mr-2" />
              Address
            </TabsTrigger>
            <TabsTrigger value="time">
              <FaEarthAmericas size={20} className="mr-2" /> Region & Time Zone
            </TabsTrigger>
            <TabsTrigger value="password">
              <RiLockPasswordLine size={20} className="mr-2" />
              Password Change
            </TabsTrigger>
          </TabsList>
          <hr className="text-gray-300 my-2" />
          <TabsContent value="nameImage" className="">
            <NameImage />
          </TabsContent>
          <TabsContent value="address">address</TabsContent>
          <TabsContent value="time">time</TabsContent>
          <TabsContent value="password">password</TabsContent>
        </Tabs>
      </div>

      <div className="flex items-center gap-2 font-semibold">
        {/* <p className="text-base">Name & Image: Libin Prasanth</p> */}
      </div>
    </div>
  );
};

export default MyProfile;
