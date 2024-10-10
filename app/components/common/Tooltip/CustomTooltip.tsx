import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface TooltipProps {
  trigger: React.ReactNode;
  text: String;
}
const CustomTooltip: React.FC<TooltipProps> = ({ trigger, text }) => {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{trigger}</TooltipTrigger>
          <TooltipContent className="bg-saveButton">
            <p className="text-white">{text}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CustomTooltip;
