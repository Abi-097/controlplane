"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { GrUserSettings } from "react-icons/gr";
import { BsLightbulbOff } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { UserRound } from "lucide-react";

const menuItems = [
  {
    name: "My Profile",
    icon: <CgProfile size={20} />,
    route: "/settingsmain/my-profile",
  },
  {
    name: "Account Setup",
    icon: <GrUserSettings size={20} />,
    route: "/settingsmain/account-setup",
  },
  {
    name: "User Management",
    icon: <UserRound size={20} />,
    route: "/settingsmain/user-management",
  },
  {
    name: "Invoice & Billing",
    icon: <CgProfile size={20} />,
    route: "/settingsmain/invoice-billing",
  },
  {
    name: "Audit Logs",
    icon: <IoDocumentTextOutline size={20} />,
    route: "/settingsmain/audit-logs",
  },
  {
    name: "Email Template",
    icon: <TfiEmail size={20} />,
    route: "/settingsmain/email-template",
  },
  {
    name: "Ticket & Support",
    icon: <CgProfile size={20} />,
    route: "/settingsmain/ticket-support",
  },
  {
    name: "System Outage",
    icon: <BsLightbulbOff size={20} />,
    route: "/settingsmain/system-outage",
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    // <div className="m-2 w-[13%] h-fit xl:h-fit lg:h-fit md:h-full sm:h-full bg-white">
    //   <ul>
    //     {menuItems.map((item) => (
    //       <li key={item.route} className="mb-4">
    //         <Link href={item.route}>
    //           <span
    //             className={`cursor-pointer py-2 pl-4 mb-2 rounded-sm text-sm flex items-center gap-3 ${
    //               pathname === item.route
    //                 ? "bg-[#e5e7eb] text-black border-l-4 border-black"
    //                 : "text-gray-600"
    //             }`}
    //           >
    //             {item.icon} {item.name}
    //           </span>
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="m-2 p-1 w-[13%] h-fit xl:h-fit lg:h-fit md:h-full sm:h-full bg-white">
      <ul>
        {menuItems.map((item) => (
          <li key={item.route} className="mb-4">
            <Link href={item.route}>
              <span
                className={`cursor-pointer py-2 pl-4 mb-2 rounded-sm text-sm flex items-center gap-3 ${
                  pathname.startsWith(item.route)
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

export default Menu;
