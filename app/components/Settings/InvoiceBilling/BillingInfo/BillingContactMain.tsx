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

interface BillingContactMainProps {
  isSoldToContact: boolean;
}

const BillingContactMain: React.FC<BillingContactMainProps> = ({
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
  return "delete";
};

export default BillingContactMain;
