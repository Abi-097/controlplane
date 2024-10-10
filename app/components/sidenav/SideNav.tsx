"use client";

import Image from "next/image";
import Logo from "@/public/logo.png";
import NavItem from "./NavItem";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SideNavOptions } from "../config";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SideNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const mainNavOptions = SideNavOptions.filter(
    (item) => item.title !== "Settings"
  );
  const settingsOption = SideNavOptions.find(
    (item) => item.title === "Settings"
  );
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div
      className={`bg-[#0070c0] space-y-14 text-[#3a3a3a] z-10 ${
        isNavOpen ? "w-60" : "w-[72px]"
      } flex flex-col justify-between h-screen relative transition-width duration-300`}
    >
      {/* Toggle Button */}
      {/* {isHovered && ( */}

      {/* )} */}

      <div>
        {/* logo */}
        <Link
          href={"/"}
          className={`flex my-6 w-full items-center gap-3 font-[700] ${
            isNavOpen ? "w-60 justify-start mx-6" : "w-18 justify-center"
          }`}
        >
          <Image alt="logo" src={Logo} width={32} />
          {isNavOpen && <div className="text-white">DataNue</div>}
        </Link>

        {/* navigation items */}
        <div className="flex flex-col font-[400]">
          {mainNavOptions.map((item) => (
            <Link href={item.path} key={item.id}>
              <NavItem
                title={item.title}
                Icon={item.Icon}
                menuState={isNavOpen}
                active={pathname === item.path}
              />
            </Link>
          ))}
        </div>
      </div>
      <button
        onClick={toggleNav}
        className="absolute bottom-16 right-4 transform translate-x-full text-black bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white z-[999]"
      >
        {isNavOpen ? (
          <IoIosArrowBack size={15} />
        ) : (
          <IoIosArrowForward size={15} />
        )}
      </button>
      {/* settings option */}
      <div className="mb-6">
        <Link href={settingsOption?.path || "#"} key={settingsOption?.id}>
          <NavItem
            title={settingsOption?.title || "Settings"}
            Icon={settingsOption?.Icon}
            menuState={isNavOpen}
            active={pathname === settingsOption?.path}
          />
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
