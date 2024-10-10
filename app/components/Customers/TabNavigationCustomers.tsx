"use client";
import clsx from "clsx";
import { useState } from "react";
import { TbLayoutGrid, TbLayoutKanban, TbLayoutList } from "react-icons/tb";
import { IoAdd, IoFilterOutline } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";

import CreateCompanyDialog from "@/app/components/Company/AddCompany";
import { Filter, List, ListFilter } from "lucide-react";
import { FillButton, OutlineButton } from "@/components/libs/buttons";
import ListFragmentCustomers from "./ListFragmentCustomers";

const TabNavigationCustomers = () => {
  const [isActive, setIsActive] = useState<number>(1);
  const [activeFrag, setActiveFrag] = useState<React.ReactNode>(
    <ListFragmentCustomers />
  );
  const TabSettings = [
    {
      id: 1,
      title: "List",
      Icon: <List size={18} />,
      Fragment: <ListFragmentCustomers />,
    },
  ];

  const onFragChange = (id: number, frag: React.ReactNode) => {
    setIsActive(id);
    setActiveFrag(frag);
  };

  return (
    <div className="flex flex-col h-full bg-fullbg">
      {/* Tab nav header */}
      <div className="border-2 border-white bg-white mx-4 my-2">
        <div className="flex justify-between px-4 ">
          <div className="flex gap-3">
            <p className="text-[18px] font-semibold m-auto">Customers</p>

            <div className="flex ml-[5rem] gap-3 items-center justify-center">
              {TabSettings.map((item) => (
                <div
                  key={item.id}
                  className={clsx(
                    "cursor-pointer flex items-center gap-2  px-4 py-2 rounded-full text-sm text-gray-500 font-bold",
                    isActive === item.id
                      ? "bg-[#f4f2ee] text-gray-800"
                      : "hover:text-gray-800"
                  )}
                  onClick={() => onFragChange(item.id, item.Fragment)}
                >
                  {item.Icon} {item.title}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center gap-3">
            <OutlineButton className="bg-white ">
              <ListFilter size={16} />
              <div className="text-sm">Sort By</div>
            </OutlineButton>

            <OutlineButton className="bg-white">
              <Filter size={16} />
              <div className="text-sm">Filter</div>
            </OutlineButton>
            <div className="h-10 border-[1px] my-2"></div>

            <CreateCompanyDialog
              mode="add"
              trigger={
                <FillButton className="bg-saveButton hover:hoverSaveButton">
                  <IoAdd />
                  <div className="text-sm">Add Company</div>
                </FillButton>
              }
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex border-b-2 justify-between px-10 py-4 md:hidden">
          <OutlineButton>
            <ListFilter size={16} />
            <div className="text-sm">Sort By</div>
          </OutlineButton>
          <div className="h-10 border-[1px]"></div>
          <OutlineButton>
            <Filter size={16} />
            <div className="text-sm">Filter</div>
          </OutlineButton>
          <div className="h-10 border-[1px]"></div>
          <CreateCompanyDialog
            mode="add"
            trigger={
              <FillButton>
                <IoAdd />
                <div className="text-sm">Add Company</div>
              </FillButton>
            }
          />
        </div>
      </div>
      <div className="flex h-full w-full">{activeFrag}</div>
    </div>
  );
};

export default TabNavigationCustomers;
