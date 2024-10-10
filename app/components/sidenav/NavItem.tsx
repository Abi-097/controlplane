import React from "react";
import { RiSquareFill } from "react-icons/ri";

interface INavItem {
  title: string;
  Icon?: React.ReactNode;
  active?: boolean;
  menuState: boolean;
}

const NavItem: React.FC<INavItem> = ({ title, Icon, active, menuState }) => {
  return (
    <div
      className={`relative flex items-center gap-3 px-8 py-4 cursor-pointer transition-all ${
        active ? "bg-[#0284c7] text-white" : "hover:bg-[#0284c7]"
      }`}
      style={{
        justifyContent: menuState ? "flex-start" : "center",
      }}
    >
      <div
        className={`w-1.5 bg-[white] absolute left-0 top-0 bottom-0 transition-all transform ${
          active ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div className="text-white">
        {Icon ? Icon : <RiSquareFill size={24} />}
      </div>
      {menuState && <div className="text-sm text-white">{title}</div>}
    </div>
  );
};

export default NavItem;
