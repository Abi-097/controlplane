import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoIosClose } from "react-icons/io";
import { FaExpand, FaExpandAlt } from "react-icons/fa";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useDropzone } from "react-dropzone";
import { IoSendSharp } from "react-icons/io5";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { RiAttachment2 } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MdOutlineFileDownload } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { FillButton } from "@/components/libs/buttons";

interface EmailDialogProps {
  trigger: React.ReactNode;
  // onClose: void;
}

const EmailDialog: React.FC<EmailDialogProps> = ({ trigger }) => {
  const [showCC, setShowCC] = useState(false);
  const [showBCC, setShowBCC] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [emailBody, setEmailBody] = useState("");
  const [toEmails, setToEmails] = useState<string[]>([]);
  const [ccEmails, setCcEmails] = useState<string[]>([]);
  const [bccEmails, setBccEmails] = useState<string[]>([]);

  const toggleCC = () => setShowCC(!showCC);
  const toggleBCC = () => setShowBCC(!showBCC);
  const onDrop = (acceptedFiles: File[]) => {
    setAttachments((prevAttachments) => [...prevAttachments, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Calculate height based on CC and BCC visibility
  const emailBodyBoxHeight =
    showCC && showBCC ? "55%" : showCC || showBCC ? "60%" : "70%";

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleDeleteAttachment = (index: number) => {
    setAttachments((prevAttachments) =>
      prevAttachments.filter((_, i) => i !== index)
    );
  };

  const handleEmailInput = (
    e: React.KeyboardEvent<HTMLInputElement>,
    emailType: "to" | "cc" | "bcc"
  ) => {
    const emailValue = e.currentTarget.value.trim();

    if (e.key === " " || e.key === ",") {
      if (emailValue) {
        if (emailType === "to") {
          setToEmails([...toEmails, emailValue]);
        } else if (emailType === "cc") {
          setCcEmails([...ccEmails, emailValue]);
        } else if (emailType === "bcc") {
          setBccEmails([...bccEmails, emailValue]);
        }
      }
      e.currentTarget.value = ""; // Clear the input field
      e.preventDefault();
    }
  };

  const removeEmail = (emailType: "to" | "cc" | "bcc", index: number) => {
    if (emailType === "to") {
      setToEmails(toEmails.filter((_, i) => i !== index));
    } else if (emailType === "cc") {
      setCcEmails(ccEmails.filter((_, i) => i !== index));
    } else if (emailType === "bcc") {
      setBccEmails(bccEmails.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    // console.log({ to, cc, bcc, subject, message, attachments });
  };

  const handleDownloadAttachment = (file: File) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogOverlay onPointerMove={(e) => e.stopPropagation()}>
          <DialogContent
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            onPointerMove={(e) => e.stopPropagation()}
            className="fixed bottom-1 right-4 !left-auto !transform-none min-w-[40vw]"
          >
            <DialogHeader>
              <DialogTitle className="flex justify-between">
                <p className="text-sm font-semibold">Create New Email</p>
                <span className="font-normal text-sm">
                  <select
                    id="fruits"
                    name="fruits"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-transparent focus:ring focus:ring-transparent focus:ring-opacity-50"
                  >
                    <option value="template1">Template1</option>
                    <option value="template1">Template2</option>
                  </select>
                </span>
              </DialogTitle>

              <hr className="my-1 border-t border-gray-300" />

              <DialogDescription>
                <form>
                  <div className=" flex-1 overflow-y-auto">
                    <div className="flex items-center border-b border-gray-300 px-3">
                      <Image
                        src="/users/4.jpg"
                        alt="First Icon"
                        className="rounded-full mr-2"
                        width={24}
                        height={24}
                      />
                      <Input
                        type="text"
                        placeholder="Create New Email"
                        className="flex-1 border-none outline-none text-gray-700"
                      />
                    </div>
                    <div className="gap-2 flex items-center justify-between border-b border-gray-300 px-3">
                      <div className="flex w-full items-center gap-1">
                        <p className="text-xs mr-2">To</p>
                        <Image
                          src="/users/2.jpg"
                          alt="Second Icon"
                          className="rounded-full mr-2"
                          width={16}
                          height={16}
                        />
                        <div className="flex-1 flex flex-wrap gap-2 items-center">
                          {toEmails.map((email, index) => (
                            <Badge
                              // variant="secondary"
                              key={index}
                              className="flex items-center gap-1"
                            >
                              {email}
                              <button
                                type="button"
                                onClick={() => removeEmail("to", index)}
                                className="ml-2"
                              >
                                <IoIosClose size={14} />
                              </button>
                            </Badge>
                          ))}
                          <Input
                            type="text"
                            placeholder="Second Text Field"
                            className="flex-1 border-none outline-none p-2 text-gray-700"
                            onKeyDown={(e) => handleEmailInput(e, "to")}
                            autoFocus={false}
                          />
                        </div>
                      </div>
                      <div className="text-sm flex items-center gap-1">
                        <p
                          className="text-sm cursor-pointer"
                          onClick={toggleCC}
                        >
                          Cc
                        </p>
                        <p
                          className="text-sm cursor-pointer"
                          onClick={toggleBCC}
                        >
                          Bcc
                        </p>
                      </div>
                    </div>
                    {/* CC Field */}
                    {showCC && (
                      <div className="flex w-full items-center gap-1 mt-2 border-b border-gray-300 px-3">
                        <p className="text-xs mr-2">Cc</p>
                        <Image
                          src="/users/2.jpg"
                          alt="Second Icon"
                          className="rounded-full mr-2"
                          width={16}
                          height={16}
                        />
                        <div className="flex-1 flex flex-wrap gap-2 items-center">
                          {ccEmails.map((email, index) => (
                            <Badge
                              key={index}
                              className="flex items-center gap-1"
                            >
                              {email}
                              <button
                                type="button"
                                onClick={() => removeEmail("cc", index)}
                                className="ml-2"
                              >
                                <IoIosClose size={14} />
                              </button>
                            </Badge>
                          ))}
                          <Input
                            type="text"
                            placeholder="Cc"
                            className="flex-1 w-full border-none outline-none p-2 text-gray-700"
                            onKeyDown={(e) => handleEmailInput(e, "cc")}
                          />
                        </div>
                      </div>
                    )}
                    {/* BCC Field */}
                    {showBCC && (
                      <div className="flex w-full items-center gap-1 mt-2 border-b border-gray-300 px-3">
                        <p className="text-xs mr-2">Bcc</p>
                        <Image
                          src="/users/2.jpg"
                          alt="Second Icon"
                          className="rounded-full mr-2"
                          width={16}
                          height={16}
                        />
                        <div className="flex-1 flex flex-wrap gap-2 items-center">
                          {bccEmails.map((email, index) => (
                            <Badge
                              key={index}
                              className="flex items-center gap-1"
                            >
                              {email}
                              <button
                                type="button"
                                onClick={() => removeEmail("bcc", index)}
                                className="ml-2"
                              >
                                <IoIosClose size={14} />
                              </button>
                            </Badge>
                          ))}
                          <Input
                            type="text"
                            placeholder="Bcc"
                            className="flex-1 w-full border-none outline-none p-2 text-gray-700"
                            onKeyDown={(e) => handleEmailInput(e, "bcc")}
                          />
                        </div>
                      </div>
                    )}
                    <div className="gap-2 flex items-center justify-between border-b border-gray-300 mb-2 px-3">
                      <Input
                        type="text"
                        placeholder="Subject"
                        className="flex-1 w-full border-none outline-none text-gray-700"
                      />
                    </div>
                    <div>
                      <CKEditor
                        editor={ClassicEditor}
                        data={emailBody}
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          // console.log("Editor is ready to use!", editor);
                          const rootElement =
                            editor.editing.view.document.getRoot();
                          if (rootElement) {
                            editor.editing.view.change((writer) => {
                              writer.setStyle("height", "27rem", rootElement);
                            });
                          }
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setEmailBody(data);
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
                    </div>
                  </div>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </div>
  );
};

export default EmailDialog;
