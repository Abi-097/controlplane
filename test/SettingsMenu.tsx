// "use client";
// import React, { useState } from "react";
// import MyProfile from "./Myprofile";
// import { CgProfile } from "react-icons/cg";

// const SettingsMenu = () => {
//   // specific keys for the contentMap
//   const options = ["My Profile", "Option 2", "Option 3", "Option 4"] as const;
//   type OptionType = (typeof options)[number];

//   // State to keep track of the active option
//   const [activeOption, setActiveOption] = useState<OptionType>("My Profile");

//   // Content corresponding to each option
//   const contentMap: Record<OptionType, React.ReactNode> = {
//     "My Profile": <MyProfile />,
//     "Option 2": "Content for Option 2",
//     "Option 3": "Content for Option 3",
//     "Option 4": "Content for Option 4",
//   };
//   const iconsMap: Record<OptionType, React.ReactNode> = {
//     "My Profile": <CgProfile size={20} />,
//     "Option 2": <CgProfile size={20} />,
//     "Option 3": <CgProfile size={20} />,
//     "Option 4": <CgProfile size={20} />,
//   };
//   return (
//     <div className="grid grid-cols-12 gap-2 m-2 h-[90vh] ">
//       {/* Left Side - Content */}
//       <div className="col-span-12 md:col-span-12 lg:col-span-2 xl:col-span-2 p-4 bg-slate-100  rounded-md">
//         {options.map((option) => (
//           <div
//             key={option}
//             className={`cursor-pointer p-2 mb-2 rounded-md text-sm flex items-center gap-3 ${
//               activeOption === option
//                 ? "bg-gray-300 text-black border-l-4 border-black"
//                 : "text-gray-600"
//             }`}
//             onClick={() => setActiveOption(option)}
//           >
//             {iconsMap[option]}
//             {option}
//           </div>
//         ))}
//       </div>

//       {/* Right Side - Content */}
//       <div className="col-span-12 md:col-span-12 lg:col-span-10 xl:col-span-10 p-4 bg-slate-100 rounded-md ">
//         {contentMap[activeOption]}
//       </div>
//     </div>
//   );
// };

// export default SettingsMenu;
