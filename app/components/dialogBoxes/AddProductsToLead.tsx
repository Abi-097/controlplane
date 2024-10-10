import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AddDiscountDialog from "./AddDiscountDialog";
import CurrencyList from "currency-list";
import { useEffect, useState } from "react";
import ProductTable from "./TestProductTable";
import { Textarea } from "@/components/ui/textarea";

interface TaskEngagementDialogProps {
  trigger: React.ReactNode;
}

const AddProductsToLadsDialog: React.FC<TaskEngagementDialogProps> = ({
  trigger,
}) => {
  const [currencies, setCurrencies] = useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    const allCurrencies = CurrencyList.getAll("en_US"); // Get all currencies for en_US locale
    const currencyOptions = Object.keys(allCurrencies).map((currencyCode) => ({
      value: currencyCode,
      label: `${allCurrencies[currencyCode].name} (${allCurrencies[currencyCode].symbol})`,
    }));
    setCurrencies(currencyOptions);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="fixed min-w-[80vw] bg-white p-5 rounded-md shadow-lg  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <DialogTitle className="text-lg font-medium flex flex-row gap-1 items-center">
          Add Products to Leads:
          <Avatar className="w-6 h-6 ml-2">
            <AvatarImage src="/users/dp.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          Alexandra Cox
        </DialogTitle>
        <hr />
        <DialogDescription className="mt-1 mb-4 text-sm text-gray-500 h-[70vh] overflow-y-scroll no-scrollbar">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col w-[300px] gap-2 text-sm text-gray-800">
                Deal currency
                <Select defaultValue="">
                  <SelectTrigger>
                    <SelectValue placeholder="Select Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {currencies.map((currency) => (
                        <SelectItem key={currency.value} value={currency.value}>
                          {currency.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col w-[300px] gap-2 text-sm text-gray-800">
                Amount are
                <Select defaultValue="taxExc">
                  <SelectTrigger className="w-full text-gray-800 text-sm">
                    <SelectValue className="text-gray-600 text-sm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        value="taxExc"
                        className="text-gray-800 text-sm"
                      >
                        Tax exclusive
                      </SelectItem>
                      <SelectItem
                        value="taxInc"
                        className="text-gray-800 text-sm"
                      >
                        Tax inclusive
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className="text-xs text-primaryBlue">
                  Change the default in settings
                </div>
              </div>
            </div>
            {/* table section */}
            <div className="w-full overflow-y-scroll no-scrollbar rounded-sm border-[1px]">
              <ProductTable />
            </div>

            {/* additional discount */}
            <div className="flex flex-col gap-2 text-sm justify-end w-full text-right pr-2 pt-2">
              <div className="font-semibold text-gray-800">
                Additional discounts
              </div>
              <div className="text-gray-600">
                Additional discounts only apply to products with billing
                frequency set to one time.
              </div>

              <AddDiscountDialog
                trigger={
                  <div className="text-primaryBlue font-semibold cursor-pointer">
                    Add discount
                  </div>
                }
              />
            </div>

            <div className="flex flex-row gap-4 py-4 w-full">
              {/* Notes area */}
              <div className="flex flex-col px-4 py-4 border-[1px] rounded-sm shadow-sm w-[34.5vw]">
                <div className="cursor-pointer  px-4 py-2 mb-2 rounded-full text-sm  font-bold text-gray-800 bg-fullbg w-fit"> Notes</div>
                <Textarea placeholder="Keep your Note..."/>
              </div>
              {/* Summary Box  */}
              <div className="border-[1px] rounded-sm shadow-sm px-4 py-2 w-[65.5vw]">
                <Tabs defaultValue="summary" className="w-full bg-white  pb-3 ">
                  <TabsList className="flex flex-row justify-end items-center py-6 w-full bg-white mb-betweenComponents rounded-sm  ">
                    <div>
                      <TabsTrigger
                        value="summary"
                        className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
                      >
                        Summary
                      </TabsTrigger>
                      <TabsTrigger
                        value="revenue"
                        className="cursor-pointer  px-4 py-2 rounded-full text-sm text-gray-500 font-bold data-[state=active]:text-gray-800 data-[state=active]:bg-fullbg"
                      >
                        Revenue
                      </TabsTrigger>
                    </div>
                  </TabsList>
                  <TabsContent
                    className="m-0 w-full h-[100%] items-center flex pt-  no-scrollbar justify-end text-right"
                    value="summary"
                  >
                    <div className="flex flex-row justify-end gap-1 ">
                      <div className="flex flex-col text-right text-sm pr-1">
                        <h1>
                          Subtotal excluding tax
                          ....................................
                        </h1>
                        <h1>
                          Total with tax ....................................
                        </h1>
                      </div>
                      <div className="flex flex-col text-right font-semibold text-sm text-gray-800">
                        <div>$0.00</div>
                        <div>$0.00</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent
                    className="m-0 w-full h-fit  no-scrollbar justify-end text-right"
                    value="revenue"
                  >
                    <div className="flex flex-row justify-end gap-1">
                      <div className="flex flex-col text-right text-sm pr-1 overflow-x-hidden">
                        <h1>
                          Total Revenue ....................................
                        </h1>
                        <h1>
                          Subtotal excluding tax
                          ....................................
                        </h1>
                        <h1>
                          Total with tax ....................................
                        </h1>
                      </div>
                      <div className="flex flex-col text-right font-semibold text-sm text-gray-800">
                        <div>$0.00</div>
                        <div>$0.00</div>
                        <div>$0.00</div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </DialogDescription>
        {/* Add your form or other content here */}
        <div className="mt-4 w-full  flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-fullbg text-black rounded-md w-[20%] ">
              Cancel
            </button>
          </DialogClose>
          <button className="px-4 py-2 bg-black text-white rounded-md w-[20%] ">
            Save
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductsToLadsDialog;
