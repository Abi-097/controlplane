import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { TbLayoutGrid, TbLayoutList } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { ProductsHistoryTablecolumns } from "./ProductsHistoryTableColumns";
import { ProductsHistoryTable } from "./ProductsHistoryTable";
import ProductsHistoryGride from "./ProductsHistoryGride";



const productData = [
  { 
    "id":1,
    "product": "Cloud Storage Plan",
    "billing_start_date": "Oct 02nd, 2024 10:03:09",
    "price": 100,
    "quantity": 5,
    "discount": 10,
    "tax": 5,
    "amount": 10000
  },
  { 
    "id":2,
    "product": "Premium Support",
    "billing_start_date": "Oct 02nd, 2024 10:03:09",
    "price": 200,
    "quantity": 1,
    "discount": 0,
    "tax": 8,
    "amount": 216
  },
  { 
    "id":3,
    "product": "Analytics Service",
    "billing_start_date": "Oct 02nd, 2024 10:03:09",
    "price": 300,
    "quantity": 3,
    "discount": 5,
    "tax": 10,
    "amount": 10000
  },
  { 
    "id":4,
    "product": "Security Monitoring",
    "billing_start_date": "Oct 02nd, 2024 10:03:09",
    "price": 150,
    "quantity": 2,
    "discount": 0,
    "tax": 7,
    "amount": 321
  },
  {
    "id":5,
    "product": "AI Assistant Subscription",
    "billing_start_date": "Oct 02nd, 2024 10:03:09",
    "price": 500,
    "quantity": 1,
    "discount": 15,
    "tax": 9,
    "amount": 10000
  },
  {
    "id":6,
    "product": "AI Assistant Subscription",
    "billing_start_date": "Oct 02nd, 2024 10:03:09",
    "price": 500,
    "quantity": 1,
    "discount": 15,
    "tax": 9,
    "amount": 10000
  },
  {
    "id":7,
    "product": "AI Assistant Subscription",
    "billing_start_date": "Oct 02nd, 2024 10:03:09",
    "price": 500,
    "quantity": 1,
    "discount": 15,
    "tax": 9,
    "amount": 10000
  }
  ,
  {
    "id":8,
    "product": "AI Assistant Subscription",
    "billing_start_date": "Oct 02nd, 2024 10:03:09",
    "price": 500,
    "quantity": 1,
    "discount": 15,
    "tax": 9,
    "amount": 10000
  },
  {
    "id":9,
    "product": "AI Assistant Subscription",
    "billing_start_date": "Oct 02nd, 2024 10:03:09",
    "price": 500,
    "quantity": 1,
    "discount": 15,
    "tax": 9,
    "amount": 10000
  }
];



const History_products = () => {
  const [isSearchActive, setIsSearchActive] = useState(false); // Track which icon and table to show  

  // Toggle between the two states
  const toggleSearch = () => {
    setIsSearchActive((prev) => !prev);
  };

  return (
    <div className="bg-white p-2 h-full ">
      <div className="flex justify-between items-center pb-2">
        <div className="flex items-center gap-3 pl-2 text-sm font-semibold">Products History</div>

        <div className="flex items-center justify-center  gap-3">
          <div className="relative">
            <div className="cursor-pointer ml-3" onClick={toggleSearch}>
              {isSearchActive ? (
              
                <Button variant="outline" className="border-none px-2 ">
                <TbLayoutList size={20} className="text-gray-600" />
              </Button>
              ) : (
                <Button variant="outline" className="border-none px-2 ">
                <TbLayoutGrid size={20} className="text-gray-600" />
              </Button>
              )}
            </div>
          </div>
          <div className="relative max-w-sm mt-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input placeholder="Filter" className="pl-10" />
          </div>
        </div>
      </div>

      {/* Render the appropriate table based on the state */} 
      {isSearchActive ? (
        <ProductsHistoryTable columns={ProductsHistoryTablecolumns} data={productData} />

      ) : (
        <ProductsHistoryGride products={productData} />
      )}
    </div>
  );
};

export default History_products;
