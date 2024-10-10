import { useState, useRef } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline, IoIosDownload } from "react-icons/io"; // Import download icon
import { HiDownload } from "react-icons/hi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FileUploadDialogProps {
  isOpen: boolean;
  onSendData: (data: number) => void;
}

const FileUploadDialog: React.FC<FileUploadDialogProps> = ({
  isOpen,
  onSendData,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  //example

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files); // Convert FileList to array
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const getFileFormat = (fileName: string) => {
    return fileName.split(".").pop()?.toUpperCase() || "FILE";
  };

  const handleAddAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  const handleSave = () => {
    onSendData(files.length);
  };

  const handleDownloadFile = (file: File) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadAllFiles = () => {
    files.forEach((file) => {
      handleDownloadFile(file);
    });
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Attachments</DialogTitle>
        </DialogHeader>
        <hr className="my-2" />
        <div className="flex flex-row justify-between items-center">
          Attachments
          <div className="flex flex-row items-center gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex self-center">
                    {files.length > 0 && (
                      <button onClick={handleDownloadAllFiles}>
                        <HiDownload size={20} />
                      </button>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download all</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <input
              type="file"
              className="hidden"
              multiple
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <IoIosAddCircleOutline
              onClick={handleAddAttachmentClick}
              size={20}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {files.length > 0 ? (
            <ul className="space-y-3">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-100 p-2 rounded-md"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-white bg-gray-500 w-12 h-12 flex items-center justify-center rounded-md">
                      {getFileFormat(file.name)}
                    </span>
                    <span className="font-medium">{file.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="text-gray-700"
                      onClick={() => handleDownloadFile(file)}
                    >
                      <HiDownload size={20} />
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleRemoveFile(index)}
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No files uploaded.</p>
          )}
        </div>

        <div className="mt-4 flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-gray-200 text-black rounded-md w-full md:w-1/2">
              Cancel
            </button>
          </DialogClose>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-black text-white rounded-md w-full md:w-1/2"
          >
            Save
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FileUploadDialog;
