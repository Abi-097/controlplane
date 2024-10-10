import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { FaRegUser } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TaskEngagementTable } from "./TasksEngagementTable";
import { TaskEngagementTableColumns } from "./TasksEngagementTableColumns";
import { FaTasks } from "react-icons/fa";


const sampleData = [
  
  {
    id: "1",
    done:false,
    tasks:"Get feedback for demoa a bring the bottle and cup of tea aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    status:"Not started", 
    dueDate: "10 june 2024",
    action:"edit"
  },
  {
    id: "2",
    done:false,
    tasks:"for demoa a bring the bottle and cup of tea aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa Get feedback for demo",
    status:"Not started", 
    dueDate: "10 june 2024",
    action: "Edit"
  },
  {
    id: "3",
    done:false,
    tasks:"Get feedback for demoa a bring the bottle and cup of tea aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa for demo",
    status:"Completed", 
    dueDate: "10 june 2024",
    action: "Edit"
  },
  {
    id: "4",
    done:false,
    tasks:"Get feedback for demo",
    status:"In progress", 
    dueDate: "10 june 2024",
    action: "Edit"
  }
];


interface TaskEngagementDialogProps {
  trigger: React.ReactNode;
}

const TaskEngagementDialog: React.FC<TaskEngagementDialogProps> = ({ trigger }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="fixed w-fit max-w-[70vw] bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <DialogTitle className="text-lg font-medium flex flex-row gap-1 items-center">
          <FaTasks />
          All Tasks
        </DialogTitle>
        <hr />
        <DialogDescription className="mt-1 mb-4 text-sm text-gray-500">
          <div>
            <TaskEngagementTable columns={TaskEngagementTableColumns} data={sampleData}/>
          </div>
        </DialogDescription>
        {/* Add your form or other content here */}
        <div className="mt-4 flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-fullbg text-black rounded-md w-full md:w-1/2">
              Cancel
            </button>
          </DialogClose>
          <button className="px-4 py-2 bg-black text-white rounded-md w-full md:w-1/2">
            Save
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskEngagementDialog;