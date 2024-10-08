import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FaCircleCheck } from "react-icons/fa6";
import { RiShareForwardLine } from "react-icons/ri";
import { IoAttachOutline } from "react-icons/io5";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PiSignature } from "react-icons/pi";
import Switch from "react-switch";
import { TfiNewWindow } from "react-icons/tfi";
import { IoMdCloseCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { BsThreeDots } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BiSolidEdit } from "react-icons/bi";
import { RiExpandUpDownLine, RiDeleteBin5Line } from "react-icons/ri";
import { CiExport } from "react-icons/ci";
import { FaRegFolderOpen } from "react-icons/fa";
import AddFolder from "./AddFolder";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiPlus } from "react-icons/fi";
import {
  FillButton,
  InverseFillButton,
} from "../../../components/libs/buttons";
import AssignFolder from "./AssignFolder";
import Delete from "@/app/components/common/Delete";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { toast } from "sonner";
import SignatureDialogBox from "../SignatureDialogBox/SignatureDialogBox";
import SignatureDialog from "../SignatureDialogBox/SignatureDialog";
import FileUploadDialog from "../FileUpload/FileUploadDialog";
import { TemplateTable } from "./TemplateTable";
import { TemplateTableColumns } from "./TemplateTableColumn";
import { HiOutlineMail } from "react-icons/hi";
import TemplateDilaogebox from "./TemplateDialogbox";

const Tabledata = [
  {
    id: 1,
    name: "Project Plan",
    content: "This is the content of the project plan document.",
    createdBy: "John Doe",
    createdOn: "2024-08-15",
    modifiedBy: "Jane Smith",
    modifiedOn: "2024-09-10",
    status: true,
    folder: "Documents/Plans",
  },
  {
    id: 2,
    name: "Budget Report",
    content: "This is the budget report for Q3 2024.",
    createdBy: "Alice Johnson",
    createdOn: "2024-07-20",
    modifiedBy: "Bob Lee",
    modifiedOn: "2024-08-05",
    status: false,
    folder: "Documents/Reports",
  },
  {
    id: 3,
    name: "Team Meeting Notes",
    content: "Notes from the weekly team meeting held on September 12th, 2024.",
    createdBy: "Chris Evans",
    createdOn: "2024-09-12",
    modifiedBy: "Chris Evans",
    modifiedOn: "2024-09-12",
    status: true,
    folder: "Documents/Meetings",
  },
];

interface Template {
  id: number;
  name: string;
  content: string;
  createdBy: string;
  createdOn: string;
  modifiedBy: string;
  modifiedOn: string;
  status: boolean;
  folder: string;
}

const EmailTemplates: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState<Template | null>(null);
  const [templateName, setTemplateName] = useState("");
  const [templateContent, setTemplateContent] = useState("");
  const [templateSubject, setTemplateSubject] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [createdOn, setCreatedOn] = useState("");
  const [modifiedBy, setModifiedBy] = useState("");
  const [modifiedOn, setModifiedOn] = useState("");
  const [status, setStatus] = useState(true);
  const [folder, setFolder] = useState("");
  const { toast } = useToast();

  // upload files
  const [isDialogOpen1, setIsDialogOpen1] = useState(false);
  const [fileCount, setFileCount] = useState(0);

  const handleOpenDialog1 = () => {
    setIsDialogOpen1(true);
  };
  const handleReceiveData = (data: number) => {
    setFileCount(data);
    setIsDialogOpen1(false);
  };

  // Signature details
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [signature, setSignature] = useState<string | null>(null);

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const openModal = (template: Template | null = null) => {
    setCurrentTemplate(template);
    setTemplateName(template ? template.name : "");
    setTemplateSubject(template ? template.name : "");
    setTemplateContent(template ? template.content : "");
    setFolder(template ? template.folder : "/folder/main");
    setIsModalOpen(true);
    setFileCount(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTemplate(null);
    setTemplateName("");
    setTemplateSubject("");
    setTemplateContent("");
  };

  const handleSave = () => {
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 19).replace("T", " "); // Format to "YYYY-MM-DD HH:MM:SS"

    if (templateName === "" || templateSubject === "") {
      toast({
        // title: "Fill the Templete Name and Subject",
        description: "Fill the Templete Name and Subject",
        className:
          "bg-red-500 text-white text-md justify-center font-semobold border-none w-auto",
      });
    } else {
      if (currentTemplate) {
        setTemplates(
          templates.map((t) =>
            t.id === currentTemplate.id
              ? {
                  //edit template
                  ...t,
                  name: templateName,
                  content: templateContent,
                  createdBy: createdBy,
                  createdOn: createdOn,
                  modifiedBy: modifiedBy,
                  modifiedOn: formattedDate,
                  status: status,
                  folder: folder,
                }
              : t
          )
        );
      } else {
        //new template
        const newTemplate: Template = {
          id: Date.now(),
          name: templateName,
          content: templateContent,
          createdBy: createdBy,
          createdOn: formattedDate,
          modifiedBy: "",
          modifiedOn: "",
          status: status,
          folder: folder,
        };
        setCreatedOn(formattedDate);
        setTemplates([...templates, newTemplate]);
      }
      closeModal();
    }
  };

  const handleDelete = (id: number) => {
    setTemplates(templates.filter((t) => t.id !== id));
  };

  const handleExport = (template: Template) => {
    const blob = new Blob([template.content], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${template.name}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSaveFolder = (folder: string) => {
    setFolder(folder);
    console.log("Selected Folder:", folder);
    // Do something with the selected values
  };
  return (
    <div className="w-full h-[92vh] ">
      {/* <div className="flex w-full justify-between items-center">
        <div></div>
        <div className="flex flex-row">

          <AddFolder
            trigger={
              <InverseFillButton className="flex flex-row items-center">
                <FaRegFolderOpen size={20} />
                <div className="text-sm">Folder</div>
              </InverseFillButton>
            }
          />

          <InverseFillButton onClick={() => openModal()}>
            <div className="text-sm">+ Template</div>
          </InverseFillButton>
        </div>
      </div> */}

      {/* <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="flex gap-2 items-center">
                <Checkbox
                  className="border-gray-300"
                  // checked={row.getIsSelected()}
                  // onCheckedChange={(value) => row.toggleSelected(!!value)}
                  aria-label="Select row"
                />
                Name
              </div>
            </TableHead>
            <TableHead>Folder</TableHead>
            <TableHead>Created By</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead>Modified By</TableHead>
            <TableHead>Modified on</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {templates.map((template) => (
            <TableRow key={template.id}>
              <TableCell className="font-medium">
                <div className="flex gap-2 items-center">
                  <Checkbox
                    className="border-gray-300"
                    // checked={row.getIsSelected()}
                    // onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                  />
                  <div className="capitalize text-sm">{template.name}</div>
                </div>
              </TableCell>

              <TableCell>{template.folder}</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={`/users/1.jpg`} alt="@shadcn" />
                  </Avatar>
                  <div className="capitalize text-sm">Alexandra Cox</div>
                </div>
              </TableCell>
              <TableCell>{template.createdOn}</TableCell>
              <TableCell>
                {template.modifiedOn ? (
                  <div>
                    <div className="flex gap-2 items-center">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={`/users/1.jpg`} alt="@shadcn" />
                      </Avatar>
                      <div className="capitalize text-sm">Alexandra Cox</div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </TableCell>

              <TableCell>{template.modifiedOn}</TableCell>
              <TableCell className="justify-center flex ">
                {template.status === true ? (
                  <FaCircleCheck className="text-green-800 text-[16px] lg:text-[20px]" />
                ) : (
                  <IoMdCloseCircle className="text-red-700 text-[16px] lg:text-[20px]" />
                )}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer rounded-full hover:bg-gray-200 h-8 w-8 p-0 flex items-center justify-center">
                      <BsThreeDots className="h-4 w-4" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      className="cursor-pointer"
                      // onClick={handleMenuItemClick}
                    >
                      <span
                        onClick={() => openModal(template)}
                        className="pl-2 gap-3 flex items-center justify-start"
                      >
                        <BiSolidEdit className="text-black" size={20} />
                        Edit
                      </span>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={handleMenuItemClick}
                    >
                      <AssignFolder
                        trigger={
                          <span className="pl-2 gap-3 flex items-center justify-start">
                            <FaRegFolderOpen className="text-black" size={18} />
                            Assign
                          </span>
                        }
                        onSaveFolder={handleSaveFolder}
                      />
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={handleMenuItemClick}
                    >
                      <span className="pl-2 gap-3 flex items-center justify-start">
                        <RiShareForwardLine className="text-black" size={18} />
                        Share
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span
                        onClick={() => handleExport(template)}
                        className="pl-2 gap-3 flex items-center justify-start"
                      >
                        <CiExport className="text-black" size={20} />
                        Export
                      </span>
                    </DropdownMenuItem>
                  
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={handleMenuItemClick}
                    >
                      <Delete
                        trigger={
                          <span className="pl-2 gap-3 flex items-center justify-start">
                            <RiDeleteBin5Line
                              className="text-red-500"
                              size={20}
                            />
                            Delete
                          </span>
                        }
                      />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}

      <TemplateTable
        columns={TemplateTableColumns}
        data={templates}
        trigger={
           
            <div className="flex flex-row gap-2">
              <AddFolder
                trigger={
                  <InverseFillButton className="flex flex-row items-center">
                    <FaRegFolderOpen size={20} />
                    <div className="text-sm ">Folder</div>
                  </InverseFillButton>
                }
              />

              {/* Add Template Button */}
              {/* <TemplateDilaogebox 
              mode="add"
              trigger={<div>
                   <InverseFillButton >
                <div className="text-sm">+ Template</div>
              </InverseFillButton>
              </div>}
              /> */}
             

              {/* Add Template Button */}
              <InverseFillButton onClick={() => openModal()}>
                <div className="text-sm">+ Template</div>
              </InverseFillButton>
            </div>
        }
      />
      {/* Handle Popup Window */}
      <div className="max-w-4xl mx-auto p-6">
        {isModalOpen && (
          <div className="fixed inset-0 bg-fullbg bg-opacity-50 flex justify-center items-center overflow-y-scroll max-h-screen">
            <div className="bg-white p-6 rounded-lg w-full max-w-2xl shadow-sm">
              <h2 className="text-lg font-bold mb-2">
                {currentTemplate ? "Edit Template" : "Create Template"}
              </h2>
              <hr />
              <div className="flex items-center border-b border-gray-300 px-3 flex-row justify-between">
                <Input
                  type="text"
                  placeholder="Name :"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  className="flex-1 border-none outline-none text-gray-700"
                />
                <div className="flex flex-row gap-2 items-center">
                  <Switch
                    checked={status}
                    onChange={(checked) => setStatus(checked)}
                    width={25}
                    height={15}
                    uncheckedIcon={false}
                    checkedIcon={false}
                  />
                </div>
              </div>
              <div className="flex items-center  px-3 flex-row justify-between border-b border-gray-300">
                <Input
                  type="text"
                  placeholder="Subject :"
                  value={templateSubject}
                  onChange={(e) => setTemplateSubject(e.target.value)}
                  className="flex-1 border-none outline-none text-gray-700"
                />
              </div>
              <div className="flex items-center  px-3 flex-row justify-between">
                <div className="text-sm px-3 py-3 flex-1 border-none outline-none text-gray-500 flex flex-row gap-2">
                  <AssignFolder
                    trigger={
                      <FaRegFolderOpen
                        size={20}
                        className="text-gray-600 cursor-pointer"
                      />
                    }
                    onSaveFolder={handleSaveFolder}
                  />
                  {folder}
                </div>
              </div>
              <CKEditor
                editor={ClassicEditor}
                data={templateContent}
                onReady={(editor) => {                 
                  const rootElement = editor.editing.view.document.getRoot();
                  if (rootElement) {
                    editor.editing.view.change((writer) => {
                      writer.setStyle("height", "27rem", rootElement);
                    });
                  }
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setTemplateContent(data);
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

              <div className="flex flex-row justify-between items-center">
                <div className=" border-spacing-1 rounded-md border-gray-500 border-[1px] py-1 px-2 mt-7 text-sm">
                  <button
                    onClick={() => setIsDialogOpen1(true)}
                    className="flex flex-row gap-1 items-center"
                  >
                    <IoAttachOutline size={20} /> Attachments
                    <p className="border-[1px] bg-red-200 text-red-800 py-0.5 px-2 rounded-md">
                      {" "}
                      {fileCount}
                    </p>
                  </button>
                  <FileUploadDialog
                    isOpen={isDialogOpen1}
                    onSendData={handleReceiveData}
                  />
                </div>
                <div className="mt-6 text-right">
                  <Button
                    onClick={handleSave}
                    className=" text-white px-4 py-2 rounded mr-2 "
                  >
                    Save Template
                  </Button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-200 text-black px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailTemplates;
