import React from "react";
import { Button } from "@/components/ui/button";
import PaymentDetailsDialog from "./PaymentDetailsDialog";
import CurrencyUsageTypeDialog from "../CurrencyUsageTypeDialog";
import PaymentMethodDialog from "./PaymentMethodDialog";
import BackupPaymentMethodDialog from "./BackupPaymentMethodDialog";

const PaymentDetailsMain = () => {
  return (
    <div className="max-h-[70vh]">
      <div className="h-full overflow-auto">
        <p className="p-4 font-semibold">Payment Details </p>
        <div className="space-y-4">
          {/* Box 1: Account Info Heading and View Button */}
          <div className="p-4">
            <div className="flex justify-between items-center border-x border-t border-gray-300 p-4">
              <div>
                <p className="text-sm font-semibold">Subscription Type</p>
                <p className="text-xs italic text-gray-500">
                  Choose Subscription Type to Select from list available Options
                  - Trail,Basic, Standard and Enterprise edition.
                </p>
              </div>
              <PaymentDetailsDialog
                trigger={
                  <Button
                    variant="outline"
                    className="border-none text-[#48A1F3] hover:text-[#48B1F3] font-semibold"
                  >
                    Edit
                  </Button>
                }
              />
            </div>

            {/* Box 2: Account Details */}

            <div className="space-y-2 border border-gray-300 p-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-medium flex-grow">Account Number</p>
                <p className="text-sm text-left w-1/2">
                  Mar 11th, 20224 11:28:19 AM
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium flex-grow">Company Name</p>
                <p className="text-sm text-left w-1/2">Space X</p>
              </div>
            </div>
          </div>
        </div>
        {/* Currency & Usage Type */}
        <div className="space-y-4">
          {/* Box 1: Account Info Heading and View Button */}
          <div className="p-4">
            <div className="flex justify-between items-center border-x border-t border-gray-300 p-4">
              <div>
                <p className="text-sm font-semibold">Currency & Usage Type</p>
                <p className="text-xs italic text-gray-500">
                  Currency Usage Type as Enterprise Edition or a Vendor Partner.
                  Also choose Country and Currency for Billing needs.
                </p>
              </div>
              <CurrencyUsageTypeDialog
                trigger={
                  <Button
                    variant="outline"
                    className="border-none text-[#48A1F3] hover:text-[#48B1F3] font-semibold"
                  >
                    Edit
                  </Button>
                }
              />
            </div>

            {/* Box 2: Account Details */}

            <div className="space-y-2 border border-gray-300 p-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-medium flex-grow">Usage Type</p>
                <p className="text-sm text-left w-1/2">usage_type</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium flex-grow">Country</p>
                <p className="text-sm text-left w-1/2">Space X</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium flex-grow">Currency</p>
                <p className="text-sm text-left w-1/2">Space X</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="space-y-4">
          {/* Box 1: Account Info Heading and View Button */}
          <div className="p-4">
            <div className="flex justify-between items-center border-x border-t border-gray-300 p-4">
              <div>
                <p className="text-sm font-semibold">Primary Payment Method</p>
                <p className="text-xs italic text-gray-500">
                  Provide and select the choose of credit card Details to choose
                  Your Primary Payment Method.
                </p>
              </div>
              <PaymentMethodDialog
                trigger={
                  <Button
                    variant="outline"
                    className="border-none text-[#48A1F3] hover:text-[#48B1F3] font-semibold"
                  >
                    Edit
                  </Button>
                }
              />
            </div>

            {/* Box 2: Account Details */}

            <div className="space-y-2 border border-gray-300 p-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-medium flex-grow">Pay by</p>
                <p className="text-sm text-left w-1/2">Debit Card</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium flex-grow">Card</p>
                <p className="text-sm text-left w-1/2">1450123456789</p>
              </div>
            </div>
          </div>
        </div>

        {/*Backup Payment Method */}
        <div className="space-y-4">
          {/* Box 1: Account Info Heading and View Button */}
          <div className="p-4">
            <div className="flex justify-between items-center border-x border-t border-gray-300 p-4">
              <div>
                <p className="text-sm font-semibold">Back-up Payment Method</p>
                <p className="text-xs italic text-gray-500">
                  Provide and select the choose of credit card Details to choose
                  Your Back-up Primary Payment Method.
                </p>
              </div>
              <BackupPaymentMethodDialog
                trigger={
                  <Button
                    variant="outline"
                    className="border-none text-[#48A1F3] hover:text-[#48B1F3] font-semibold"
                  >
                    Edit
                  </Button>
                }
              />
            </div>

            {/* Box 2: Account Details */}

            <div className="space-y-2 border border-gray-300 p-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-medium flex-grow">Pay by</p>
                <p className="text-sm text-left w-1/2">Debit Card</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium flex-grow">Card</p>
                <p className="text-sm text-left w-1/2">1450123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsMain;
