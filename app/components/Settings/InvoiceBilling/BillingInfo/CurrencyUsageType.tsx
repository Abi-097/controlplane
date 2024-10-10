import React, { useState } from "react";
import { Country } from "country-state-city";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import Flag from "react-world-flags";
import { Label } from "@/components/ui/label";
import currencyCodes from "currency-codes";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DialogClose } from "@/components/ui/dialog";
const CurrencyUsageType = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
  };

  const handleCurrencyChange = (value: string) => {
    setSelectedCurrency(value);
  };

  const countries = Country.getAllCountries();
  const currencies = currencyCodes.data;
  return (
    <div className="w-full">
      <div className="flex items-center gap-24">
        <div className="p-10">
          <span className="py-4">
            <Label
              htmlFor="country"
              className="block text-sm font-medium text-black mb-1"
            >
              Country
            </Label>

            <Select onValueChange={handleCountryChange}>
              <SelectTrigger className="w-[400px] relative">
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
          </span>
          <span>
            <Label
              htmlFor="currency"
              className="block text-sm font-medium text-black mb-1 mt-4"
            >
              Currency
            </Label>

            <Select onValueChange={handleCurrencyChange}>
              <SelectTrigger className="w-[400px] relative">
                <span className={`ml-3 ${!selectedCurrency && "pl-3"}`}>
                  {selectedCurrency
                    ? currencies.find(
                        (currency) => currency.code === selectedCurrency
                      )?.currency
                    : "Select Currency"}
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Currency</SelectLabel>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.currency} ({currency.code})
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </span>
        </div>
        <RadioGroup defaultValue="enterprise" className="p-10">
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="enterprise" id="r1" />
            <Label htmlFor="r1">Enterprise</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="vendor" id="r2" />
            <Label htmlFor="r2">Vendor</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="personal" id="r3" />
            <Label htmlFor="r3">Personal</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-end md:space-x-2 gap-3">
        <button className="px-4 py-2 bg-gray-300 text-black rounded-md w-[100px] ">
          Cancel
        </button>

        <button className="px-4 py-2 bg-saveButton text-white rounded-md w-[100px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default CurrencyUsageType;
