"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { GrUserSettings } from "react-icons/gr";
import { BsLightbulbOff } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { LockKeyhole, MapPin } from "lucide-react";
import { BiWorld } from "react-icons/bi";

const menuItems = [
  {
    name: "Name & Image",
    icon: <CgProfile size={20} />,
    route: "/settingsmain/my-profile/name-image",
  },
  {
    name: "Address",
    icon: <MapPin size={20} />,
    route: "/settingsmain/my-profile/address",
  },
  {
    name: "Region & Time Zone",
    icon: <BiWorld size={20} />,
    route: "/settingsmain/my-profile/regiontimezone",
  },
  {
    name: "Password Change",
    icon: <LockKeyhole size={20} />,
    route: "/settingsmain/my-profile/passwordchange",
  },
];

const MyProfileMenu = () => {
  const pathname = usePathname();

  return (
    <div className="mr-2 p-1 w-[13%] h-fit xl:h-fit lg:h-fit md:h-full sm:h-full bg-white">
      <ul>
        {menuItems.map((item) => (
          <li key={item.route} className="mb-4">
            <Link href={item.route}>
              <span
                className={`cursor-pointer py-2 pl-4 mb-2 rounded-sm text-sm flex items-center gap-3 ${
                  pathname === item.route
                    ? "bg-[#e5e7eb] text-black border-l-4 border-black"
                    : "text-gray-600"
                }`}
              >
                {item.icon} {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProfileMenu;
