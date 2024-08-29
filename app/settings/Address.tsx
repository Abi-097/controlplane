import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineHistory } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Country, State, City } from "country-state-city";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import Flag from "react-world-flags";
import { CiLocationOn } from "react-icons/ci";
const Address = () => {
  const [phone, setPhone] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (value: string) => {
    setSelectedState(value);
    setSelectedCity("");
  };

  const handleCityChange = (value: string) => {
    setSelectedCity(value);
  };

  const countries = Country.getAllCountries();
  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry)
    : [];
  const cities = selectedState
    ? City.getCitiesOfState(selectedCountry, selectedState)
    : [];

  return (
    <div>
      <form className="w-full p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CiLocationOn size={24} />
            <p className="font-semibold">Address</p>
          </div>
          <MdOutlineHistory size={24} />
        </div>
        <hr className="text-slate-300 my-4" />
        <div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">Address line 1</Label>
            <Input
              type="addresslineOne"
              placeholder="Address line 1"
              className="bg-[#f9fafb]"
            />
          </div>

          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">Address line 2</Label>
            <Input
              type="addresslineTwo"
              placeholder="Address line 2"
              className="bg-[#f9fafb]"
            />
          </div>

          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">Country</Label>

            <Select onValueChange={handleCountryChange}>
              <SelectTrigger className="w-full relative bg-[#f9fafb]">
                {selectedCountry && (
                  <Flag
                    code={selectedCountry}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                  />
                )}
                <span className={`ml-8 ${!selectedCountry && "pl-3"}`}>
                  {selectedCountry
                    ? countries.find(
                        (country) => country.isoCode === selectedCountry
                      )?.name
                    : "Select Country"}
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Country</SelectLabel>
                  {countries.map((country) => (
                    <SelectItem key={country.isoCode} value={country.isoCode}>
                      <div className="flex items-center">
                        <Flag code={country.isoCode} className="w-5 h-5 mr-2" />
                        {country.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">State/Province</Label>
            <Select
              onValueChange={handleStateChange}
              disabled={!selectedCountry}
            >
              <SelectTrigger className="w-full relative bg-[#f9fafb]">
                <CiLocationOn className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <span className={`ml-8 ${!selectedState && "pl-3"}`}>
                  {selectedState
                    ? states.find((state) => state.isoCode === selectedState)
                        ?.name
                    : selectedCountry
                    ? "Select State"
                    : "Select a Country First"}
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select State</SelectLabel>
                  {states.map((state) => (
                    <SelectItem key={state.isoCode} value={state.isoCode}>
                      <div className="flex items-center">{state.name}</div>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">City</Label>
            <Select onValueChange={handleCityChange} disabled={!selectedState}>
              <SelectTrigger className="w-full relative bg-[#f9fafb]">
                <CiLocationOn className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <span className={`ml-8 ${!selectedCity && "pl-3"}`}>
                  {selectedCity
                    ? cities.find((city) => city.name === selectedCity)?.name
                    : selectedState
                    ? "Select City"
                    : "Select a State First"}
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select City</SelectLabel>
                  {cities.map((city) => (
                    <SelectItem key={city.name} value={city.name}>
                      <div className="flex items-center">{city.name}</div>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1">Zip Code</Label>
            <Input
              type="zipcode"
              placeholder="Zip Code"
              className="bg-[#f9fafb]"
            />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">Office Desk Location</Label>
            <Input
              type="team"
              placeholder="Office Desk Location"
              className="bg-[#f9fafb]"
            />
          </div>

          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-md mb-1 ">Desk Contact Number</Label>
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
        </div>
        <div className="flex justify-end">
          <Button className="bg-[#57534e] text-white">
            Save Account Details
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Address;
