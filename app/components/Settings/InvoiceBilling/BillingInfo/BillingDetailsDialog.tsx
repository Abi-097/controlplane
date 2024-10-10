import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import Flag from "react-world-flags";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BillingContactMain from "./BillingContactMain";
interface BillingContactMainProps {
  trigger: React.ReactNode;
  isSoldToContact: boolean;
}

const BillingDetailsDialog: React.FC<BillingContactMainProps> = ({
  trigger,
  isSoldToContact,
}) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryHQ, setSelectedCountryHQ] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [phone, setPhone] = useState<string>("");
  const [deskPhone, setDeskPhone] = useState<string>("");
  const [isSameAsBillToContact, setIsSameAsBillToContact] = useState(false);
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

  const handleCountryHQChange = (value: string) => {
    setSelectedCountryHQ(value);
  };
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[1000px] max-h-auto overflow-x-auto">
        <DialogHeader>
          <DialogTitle>Billing Details</DialogTitle>
          <hr className="my-2" />
        </DialogHeader>
        {/* <BillingContactMain isSoldToContact={false} /> */}
        <form className="px-8 pt-8">
          {isSoldToContact && (
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="contact"
                checked={isSameAsBillToContact}
                onCheckedChange={(checked) =>
                  setIsSameAsBillToContact(!!checked)
                }
              />
              <label
                htmlFor="contact"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Same as Bill to Contact
              </label>
            </div>
          )}
          {!isSameAsBillToContact && (
            <>
              <div className="flex items-center gap-6 mb-4">
                <span className=" w-full max-w-md items-center gap-2">
                  <Label htmlFor="fname">First Name</Label>
                  <Input type="fname" id="fname" placeholder="" />
                </span>
                <span className=" w-full max-w-md items-center gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Input type="address" id="address" placeholder="" />
                </span>
              </div>
              <div className="flex items-center gap-6 mb-4">
                <span className=" w-full max-w-md items-center gap-2">
                  <Label htmlFor="Name">Last Name</Label>
                  <Input type="lName" id="lName" placeholder="" />
                </span>
                <span className=" w-full max-w-md items-center gap-2">
                  <Label htmlFor="suite">Suite / Apt</Label>
                  <Input type="suite" id="suite" placeholder="" />
                </span>
              </div>
              <div className="flex items-center gap-6 mb-4">
                <span className=" w-full max-w-md items-center gap-2">
                  <Label
                    htmlFor="country"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Country
                  </Label>

                  <Select onValueChange={handleCountryChange}>
                    <SelectTrigger className="w-full relative">
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
                          <SelectItem
                            key={country.isoCode}
                            value={country.isoCode}
                          >
                            <div className="flex items-center">
                              <Flag
                                code={country.isoCode}
                                className="w-5 h-5 mr-2"
                              />
                              {country.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </span>
                <span className=" w-full max-w-md items-center gap-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    State
                  </label>
                  <Select
                    onValueChange={handleStateChange}
                    disabled={!selectedCountry}
                  >
                    <SelectTrigger className="w-full relative">
                      <CiLocationOn className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <span className={`ml-8 ${!selectedState && "pl-3"}`}>
                        {selectedState
                          ? states.find(
                              (state) => state.isoCode === selectedState
                            )?.name
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
                            <div className="flex items-center">
                              {state.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </span>
              </div>
              <div className="flex items-center gap-6 mb-4">
                <span className=" w-full max-w-md items-center gap-2">
                  <Label
                    htmlFor="city"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    City
                  </Label>
                  <Select
                    onValueChange={handleCityChange}
                    disabled={!selectedState}
                  >
                    <SelectTrigger className="w-full relative">
                      <CiLocationOn className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <span className={`ml-8 ${!selectedCity && "pl-3"}`}>
                        {selectedCity
                          ? cities.find((city) => city.name === selectedCity)
                              ?.name
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
                </span>
                <span className=" w-full max-w-md items-center gap-2">
                  <Label htmlFor="zip">Zip / Postal Code</Label>
                  <Input type="zip" id="zip" placeholder="" />
                </span>
              </div>
              <div className="flex items-center gap-6 mb-4">
                <span className=" w-full max-w-md items-center gap-2">
                  <Label htmlFor="legalName">Legal Company Name</Label>
                  <Input type="legalName" id="legalName" placeholder="" />
                </span>
                <span className=" w-full max-w-md items-center gap-2">
                  <Label
                    htmlFor="countryHQ"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Company Head Qtrs.
                  </Label>
                  <Select onValueChange={handleCountryHQChange}>
                    <SelectTrigger className="w-full relative">
                      {selectedCountryHQ && (
                        <Flag
                          code={selectedCountryHQ}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                        />
                      )}
                      <span className={`ml-8 ${!selectedCountryHQ && "pl-3"}`}>
                        {selectedCountryHQ
                          ? countries.find(
                              (country) => country.isoCode === selectedCountryHQ
                            )?.name
                          : "Select Country"}
                      </span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select Country</SelectLabel>
                        {countries.map((country) => (
                          <SelectItem
                            key={country.isoCode}
                            value={country.isoCode}
                          >
                            <div className="flex items-center">
                              <Flag
                                code={country.isoCode}
                                className="w-5 h-5 mr-2"
                              />
                              {country.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </span>
              </div>
              <div className="flex items-center gap-6 mb-4">
                <span className=" w-full max-w-md items-center gap-2">
                  <Label htmlFor="fname">Phone Number</Label>
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    inputStyle={{
                      width: "100%",
                      border: "1px solid #e4e4e7 ",
                    }}
                  />
                </span>
                <span className=" w-full max-w-md items-center gap-2">
                  <Label htmlFor="address">Desk (Office) Number</Label>
                  <PhoneInput
                    country={"us"}
                    value={deskPhone}
                    onChange={(phone) => setDeskPhone(phone)}
                    inputStyle={{
                      width: "100%",
                      border: "1px solid #e4e4e7 ",
                    }}
                  />
                </span>
              </div>
            </>
          )}
          <div className="flex items-center justify-end gap-4 mt-4">
            <Button className="px-4 py-2 bg-[#F3F4F6] text-black rounded-md w-[100px]">
              Back
            </Button>
            <Button className="px-4 py-2 bg-saveButton text-white rounded-md w-[170px]">
              Save & Close
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BillingDetailsDialog;
