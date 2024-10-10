import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import AccountDetailsDialog from "./AccountDetailsDialog";

const AccountDetails = () => {
  return (
    <div>
      <p className="p-4 font-semibold">Account Details </p>
      <div className="space-y-4">
        {/* Box 1: Account Info Heading and View Button */}
        <div className="p-4">
          <div className="flex justify-between items-center border-x border-t border-gray-300 p-4">
            <div>
              <p className="text-sm font-semibold">Account Information</p>
              <p className="text-xs italic text-gray-500">
                Account Information Drives the Unique customer details for
                Billing & Information Payments are tracking.
              </p>
            </div>
            <AccountDetailsDialog
              trigger={
                <Button
                  variant="outline"
                  className="border-none text-[#48A1F3] hover:text-[#48B1F3] font-semibold"
                >
                  View
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
    </div>
  );
};

export default AccountDetails;
