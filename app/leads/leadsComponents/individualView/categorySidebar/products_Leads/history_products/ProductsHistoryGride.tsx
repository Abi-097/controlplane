import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import {
  Card,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CustomTooltip from "@/app/components/common/Tooltip/CustomTooltip";
import { BsThreeDots } from "react-icons/bs";
import Delete from "@/app/components/common/Delete";
import { RiDeleteBin5Line } from "react-icons/ri";
type ProductData = {
  id: number;
  product: string;
  billing_start_date: string;
  price: number;
  quantity: number;
  discount: number;
  tax: number;
  amount: number;
};

type GridCardProps = {
  products: ProductData[];
};

const ProductsHistoryGride: React.FC<GridCardProps> = ({ products }) => {
  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 justify-start h-[51vh] overflow-y-scroll no-scrollbar">
        {products.map((product) => (
          <Card key={product.id} className="shadow-sm w-full p-4 ">
            <div className="flex justify-between w-full ">
              <div className="flex items-start gap-7 w-full">
                <div className="flex items-center h-full">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={`/users/${product.id}.jpg`}
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex w-full flex-col ">
                  <div className="flex flex-row justify-between w-full">
                    <div className="text-sm font-semibold text-gray-700">
                      {product.product}
                    </div>
                    <div className="text-sm text-gray-800 flex flex-row gap-5">
                      <div>{product.billing_start_date}</div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <div className="cursor-pointer rounded-full flex items-center justify-center">
                            <CustomTooltip
                              text="More options"
                              trigger={
                                <div>
                                  <BsThreeDots className="h-4 w-4" />
                                </div>
                              }
                            />{" "}
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}

                          <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={handleMenuItemClick}
                          >
                            <Delete
                              trigger={
                                <span className="pl-2 gap-1 flex items-center justify-center">
                                  <RiDeleteBin5Line
                                    className="mr-2 text-red-500"
                                    size={16}
                                  />
                                  <p className="text-sm">Delete</p>
                                </span>
                              }
                            />
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div className="flex flex-row items-left pt-1 text-gray-500 text-sm">
                    <div className=" text-gray-800 w-[200px] ">
                      {" "}
                      Cost: ${product.amount} USD
                    </div>

                    <div className=" text-gray-800">Qty: {product.price}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductsHistoryGride;
