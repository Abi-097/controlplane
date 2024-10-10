import React from "react";
import AvatarGroup from "@/components/ui/AvatarGroup";
import { FiPlus } from "react-icons/fi";
import CustomTooltip from "@/app/components/common/Tooltip/CustomTooltip";
import AddProjectNameDialog from "@/app/components/dialogBoxes/AddProjectNameDialog";

const ProjectDetails = () => {
  return (
    <div className="p-4 bg-white flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <div className="text-sm font-semibold text-gray-800">Project Name</div>

        <AddProjectNameDialog
        trigger={
          <div>
        <CustomTooltip
          text="Project Details"
          trigger={
            <button className="bg-transparent border-none">
              <FiPlus size={18} />
            </button>
          }
        />
        </div>
        }
        />
      </div>
      <div className="flex flex-row gap-4 items-center px-2 pt-2 relative bottom-2">
        <div>
          <AvatarGroup />
        </div>
        <div className="text-gray-600 text-sm pl-[100px] mb-4">8 Members</div>
        <div className="text-green-600 text-sm mb-4">4 Online</div>
      </div>
      <div className="flex flex-col -mt-6">
        <div className="text-gray-800 text-sm px-2 ">
          This is getting Client Toyota to adopt DataNav
        </div>
        <div className="text-gray-800 text-sm px-2">
          Target Due Date: 10th sep 2024
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
