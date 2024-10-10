import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { FaRegCreditCard } from "react-icons/fa";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RiBankLine } from "react-icons/ri";
import Image from "next/image";
import { Country, State, City } from "country-state-city";
import Flag from "react-world-flags";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "@/components/ui/button";
interface PaymentMethodComponentProps {
  isBackupPaymentMethod?: boolean;
}
const PaymentMethodComponent = ({
  isBackupPaymentMethod,
}: PaymentMethodComponentProps) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
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
    <div className={`px-8 pt-8 pb-4 `}>
      <p className="text-sm font-semibold">
        {" "}
        {isBackupPaymentMethod ? "Backup Payment Method" : "Payment Method"}
      </p>
      <RadioGroup defaultValue="credit" className="p-5">
        <div className="flex items-center space-x-2 mb-2">
          <RadioGroupItem value="credit" id="r1" />
          <span className="flex items-center gap-3">
            <FaRegCreditCard />
            <Label htmlFor="r1">Add Credit or Debit Card</Label>
          </span>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <RadioGroupItem value="bank" id="r2" />
          <span className="flex items-center gap-3">
            <RiBankLine />
            <Label htmlFor="r2">Add a bank account</Label>
          </span>
        </div>
      </RadioGroup>

      <span>
        <Label htmlFor="cardNumber">Card Number</Label>
      </span>

      <div className="flex items-center space-x-3 pb-5">
        <div className="relative flex items-center w-[30%]">
          <Input type="text" id="cardNumber" placeholder="" className="pr-16" />
          <div className="absolute right-3 flex space-x-1">
            <Image src="/icons/visa.png" alt="visa" width={25} height={25} />
            <Image
              src="/icons/master.png"
              alt="master"
              width={25}
              height={25}
            />
            <Image src="/icons/amex.png" alt="amex" width={25} height={25} />
          </div>
        </div>

        <Select onValueChange={(value) => setSelectedMonth(value)}>
          <SelectTrigger className="w-20">
            {selectedMonth || "MM"}
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Month</SelectLabel>
              {Array.from({ length: 12 }, (_, i) => (
                <SelectItem
                  key={i + 1}
                  value={(i + 1).toString().padStart(2, "0")}
                >
                  {i + 1}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setSelectedYear(value)}>
          <SelectTrigger className="w-24">{selectedYear || "YY"}</SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Year</SelectLabel>
              {Array.from({ length: 10 }, (_, i) => (
                <SelectItem
                  key={i}
                  value={(new Date().getFullYear() + i).toString()}
                >
                  {new Date().getFullYear() + i}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input type="text" id="cvc" placeholder="CVC" className="w-20" />
      </div>
      <div className="pb-5">
        <Label htmlFor="">Address Line 1</Label>
        <Input type="payment" id="payment" placeholder="" className="w-[50%]" />
      </div>
      <div className="pb-5">
        <Label htmlFor="">Address Line 2</Label>
        <Input type="payment" id="payment" placeholder="" className="w-[50%]" />
      </div>

      <div className="pb-5">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-black mb-1"
        >
          Country
        </label>
        <Select onValueChange={handleCountryChange}>
          <SelectTrigger className="w-[50%] relative">
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

      <div className="pb-5">
        <label
          htmlFor="state"
          className="block text-sm font-medium text-black mb-1"
        >
          State
        </label>
        <Select onValueChange={handleStateChange} disabled={!selectedCountry}>
          <SelectTrigger className="w-[50%] relative">
            <CiLocationOn className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <span className={`ml-8 ${!selectedState && "pl-3"}`}>
              {selectedState
                ? states.find((state) => state.isoCode === selectedState)?.name
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
      <div className="pb-5">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-black mb-1"
        >
          City
        </label>
        <Select onValueChange={handleCityChange} disabled={!selectedState}>
          <SelectTrigger className="w-[50%] relative">
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
      <div className="">
        <Label htmlFor="">Zip / Postal Code</Label>
        <Input type="payment" id="payment" placeholder="" className="w-[50%]" />
      </div>
      <div className="flex items-center justify-end gap-4 pb-10">
        <Button className="px-4 py-2 bg-[#F3F4F6] text-black rounded-md w-[100px]">
          Back
        </Button>
        <Button className="px-4 py-2 bg-saveButton text-white rounded-md w-[170px]">
          Save & Close
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethodComponent;
