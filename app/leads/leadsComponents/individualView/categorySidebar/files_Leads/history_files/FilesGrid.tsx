import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

import CustomTooltip from "@/app/components/common/Tooltip/CustomTooltip";
import { BsFillEyeFill, BsThreeDots } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import Delete from "@/app/components/common/Delete";
import { RiDeleteBin5Line } from "react-icons/ri";

type FilesData = {
  id: number;
  fileName: string;
  fileType: string;
  uploadedAt: string;
};

type GridCardProps = {
  files: FilesData[];
};

const FilesGride: React.FC<GridCardProps> = ({ files }) => {
  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <>
      <div className="flex flex-col gap-2 justify-start items-start h-[51vh] overflow-y-scroll no-scrollbar">
        {files.map((file) => (
          <Card key={file.id} className="shadow-sm w-full p-4 h-fit">
            <div className="flex flex-row justify-between items-center">
              {/* left side */}
              <div className="flex flex-row gap-4 items-center">
                <div className="px-2 py-1 text-xs text-white bg-gray-400">
                  {file.fileType}
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  {file.fileName}
                </div>
              </div>

              {/* right side */}
              <div className="flex flex-row gap-5 items-center">
                <div className="flex flex-row items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={`/users/${file.id}.jpg`} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="text-sm text-gray-800">{file.uploadedAt}</div>
                </div>

                <div className="flex flex-row gap-2">
                  <CustomTooltip
                    text="View"
                    trigger={
                      <div>
                        <FiEye size={16} className=" text-gray-800 cursor-pointer" />
                      </div>
                    }
                  />

                  <Delete
                    trigger={
                      <div>
                      <CustomTooltip
                        text="Delete"
                        trigger={
                          <span className=" gap-1 flex items-center justify-center cursor-pointer">
                            <RiDeleteBin5Line
                              className="text-gray-800"
                              size={16}
                            />
                          </span>
                        }
                      />
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default FilesGride;
