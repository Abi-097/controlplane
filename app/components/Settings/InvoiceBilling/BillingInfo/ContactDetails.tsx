import React from "react";
import { Button } from "@/components/ui/button";
import BillingDetailsDialog from "./BillingDetailsDialog";
import BillingSoldContactDialog from "./BillingSoldContactDialog";

const ContactDetails = () => {
  return (
    <div>
      <p className="p-4 font-semibold">Contact Details</p>
      <div className="space-y-4">
        {/* Box 1: Account Info Heading and View Button */}
        <div className="p-4">
          <div className="flex justify-between items-center border border-gray-300 p-4">
            <div>
              <p className="text-sm font-semibold">Billing Contact</p>
              <p className="text-xs italic text-gray-500">
                This is the contact or department who receives the invoices or
                any billing communications.
              </p>
            </div>
            <BillingDetailsDialog
              isSoldToContact={false}
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
        </div>
      </div>

      {/*  */}
      <div className="space-y-4">
        {/* Box 1: Account Info Heading and View Button */}
        <div className="p-4">
          <div className="flex justify-between items-center border-x border-t border-gray-300 p-4">
            <div>
              <p className="text-sm font-semibold">Sold to Contact</p>
              <p className="text-xs italic text-gray-500">
                The sold to contacts location will determine how we calculate
                taxes.
              </p>
            </div>
            <BillingSoldContactDialog
              isSoldToContact={true}
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
              <p className="text-sm font-medium flex-grow">
                Contact Information
              </p>
              <p className="text-sm text-left w-1/2">Same as Bill To Contact</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium flex-grow">Tax Status</p>
              <p className="text-sm text-left w-1/2">No Tax Exception</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
