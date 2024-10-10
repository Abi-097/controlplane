import { Users } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { FaRegBuilding, FaRegHandshake, FaRegLightbulb } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import CustomTooltip from "./common/Tooltip/CustomTooltip";

export const SideNavOptions = [
  {
    id: 1,
    title: "Contacts",
    Icon: <CustomTooltip text="Contacts" trigger={<CgProfile size={20} />} />,
    path: "/contact",
  },
  {
    id: 2,
    title: "Company",
    Icon: (
      <div>
        <CustomTooltip text="Company" trigger={<FaRegBuilding size={20} />} />
      </div>
    ),
    path: "/company",
  },
  {
    id: 3,
    title: "Leads",
    Icon: (
      <CustomTooltip
        text="Opportunity"
        trigger={<HiOutlineUserGroup size={20} />}
      />
    ),

    path: "/leads",
  },
  {
    id: 4,
    title: "Opportunity",

    Icon: (
      <CustomTooltip
        text="Opportunity"
        trigger={<FaRegLightbulb size={20} />}
      />
    ),
    path: "/opportunity",
  },
  {
    id: 5,
    title: "Customer",

    Icon: (
      <CustomTooltip text="Customer" trigger={<FaRegHandshake size={20} />} />
    ),
    path: "/customer",
  },

  {
    id: 6,
    title: "Customers",
    Icon: <CustomTooltip text="Customers" trigger={<Users size={20} />} />,
    path: "/customers",
  },
  {
    id: 7,
    title: "Settings",
    Icon: (
      <CustomTooltip text="Customers" trigger={<IoMdSettings size={20} />} />
    ),
    path: "/settingsmain/my-profile",
  },
];
