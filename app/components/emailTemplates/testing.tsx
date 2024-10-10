import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Input } from "@/components/ui/input";
import { FaRegFolderOpen } from "react-icons/fa";
import AssignFolder from "./AssignFolder";
import { PiSignature } from "react-icons/pi";
import SignatureDialogBox from "../SignatureDialogBox/SignatureDialogBox";
import { TfiNewWindow } from "react-icons/tfi";
import { IoAttachOutline } from "react-icons/io5";
import FileUploadDialog from "../FileUpload/FileUploadDialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@radix-ui/react-switch";

interface TemplateDilaogeboxProps {
  trigger: React.ReactNode;
  mode: "add" | "edit";
  templateData?: {
    id: number;
    name: string;
    content: string;
    createdBy: string;
    createdOn: string;
    modifiedBy: string;
    modifiedOn: string;
    status: boolean;
    folder: string;
  };
}

const TemplateDilaogeboxx: React.FC<TemplateDilaogeboxProps> = ({ 
    trigger,
    mode,
    templateData,}) => {
 

  return (
    <Dialog >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="fixed w-[1500px] bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <DialogTitle className="text-lg font-medium">Assign</DialogTitle>
        <hr className="my-1" />
        <DialogDescription className="mt-1 mb-4 text-sm text-gray-500 ">
          <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full">
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Company Name
                </label>
                <Input
                  type="text"
                  id="companyName"
                  placeholder="Enter company name"
                  name="companyName"
                />
              </div>
            </div>
          </form>





        <div className=" overflow-y-scroll ">
            <div className="bg-white p-6 rounded-lg ">
             
              <div className="flex items-center border-b border-gray-300 px-3 flex-row justify-between">
                <Input
                  type="text"
                  placeholder="Name :"
                  // value={templateName}
                  // onChange={(e) => setTemplateName(e.target.value)}
                  className="flex-1 border-none outline-none text-gray-700"
                />
                <div className="flex flex-row gap-2 items-center">
                  <Switch
                    // checked={status}
                    // onChange={(checked) => setStatus(checked)}
                    // width={25}
                    // height={15}
                    // uncheckedIcon={false}
                    // checkedIcon={false}
                  />
                </div>
              </div>
              <div className="flex items-center  px-3 flex-row justify-between border-b border-gray-300">
                <Input
                  type="text"
                  placeholder="Subject :"
                  // value={templateSubject}
                  // onChange={(e) => setTemplateSubject(e.target.value)}
                  className="flex-1 border-none outline-none text-gray-700"
                />
              </div>
              <div className="flex items-center  px-3 flex-row justify-between">
                <div className="text-sm px-3 py-3 flex-1 border-none outline-none text-gray-500 flex flex-row gap-2">
                  {/* <AssignFolder
                    trigger={
                      <FaRegFolderOpen
                        size={20}
                        className="text-gray-600 cursor-pointer"
                      />
                    }
                    onSaveFolder={handleSaveFolder}
                  />
                  {folder} */}
                </div>
              </div>
              <CKEditor
                editor={ClassicEditor}
                // data={templateContent}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  // console.log("Editor is ready to use!", editor);
                  const rootElement = editor.editing.view.document.getRoot();
                  if (rootElement) {
                    editor.editing.view.change((writer) => {
                      writer.setStyle("height", "27rem", rootElement);
                    });
                  }
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  // setTemplateContent(data);
                }}
                config={{
                  toolbar: [
                    "heading",
                    "|",
                    "bold",
                    "italic",
                    "underline",
                    "link",
                    "bulletedList",
                    "numberedList",
                    "blockQuote",
                    "insertTable",
                    "tableColumn",
                    "tableRow",
                    "mergeTableCells",
                    "undo",
                    "redo",
                    "alignment",
                    "fontSize",
                    "fontColor",
                    "fontBackgroundColor",
                    "highlight",
                    "codeBlock",
                    "imageUpload",
                    "mediaEmbed",
                    "removeFormat",
                    "horizontalLine",
                    "strikethrough",
                    "subscript",
                    "superscript",
                    "underline",
                    "code",
                  ],
                  extraPlugins: [
                    // Add plugins here if needed
                  ],
                }}
              />

              <div className="flex flex-row text-sm gap-1 mt-1">
                <PiSignature size={20} />
                Your signature will be included when you use this template.
                <SignatureDialogBox
                  trigger={
                    <span className="text-gray-600 hover:underline cursor-pointer flex flex-row gap-1 ">
                      Edit signature <TfiNewWindow size={16} />
                      {/* <SignatureDialog
                        isOpen={isDialogOpen}
                        onClose={handleCloseDialog}
                        onSave={handleSaveSignature}
                      /> */}
                    </span>
                  }
                />
              </div>

              {/* ////////////////////////////////////// */}
              <div className="flex flex-row justify-between items-center">
                <div className=" border-spacing-1 rounded-md border-gray-500 border-[1px] py-1 px-2 mt-7 text-sm">
                  <button
                    // onClick={() => setIsDialogOpen1(true)}
                    className="flex flex-row gap-1 items-center"
                  >
                    <IoAttachOutline size={20} /> Attachments
                    <p className="border-[1px] bg-red-200 text-red-800 py-0.5 px-2 rounded-md">
                      {" "}
                      {/* {fileCount} */}
                    </p>
                  </button>
                  {/* <FileUploadDialog
                    isOpen={isDialogOpen1}
                    onSendData={handleReceiveData}
                  /> */}
                </div>
                <div className="mt-6 text-right">
                  <Button
                    // onClick={handleSave}
                    className=" text-white px-4 py-2 rounded mr-2 "
                  >
                    Save Template
                  </Button>
                  <button
                    // onClick={closeModal}
                    className="bg-gray-200 text-black px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogDescription>
        <div className="mt-4 flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-gray-200 text-black rounded-md w-full md:w-1/2">
              Cancel
            </button>
          </DialogClose>

          <button 
            className="px-4 py-2 bg-black text-white rounded-md w-full md:w-1/2"
          >
            Save
          </button>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TemplateDilaogeboxx;

