import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import SignatureCanvas from "react-signature-canvas";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserData = [
  {
    id: 1,
    name: "Alexandra Cox",
  },
  {
    id: 2,
    name: "Brian Garza",
  },
  {
    id: 3,
    name: "Adam Schultz",
  },
  {
    id: 4,
    name: "Sonia Jacobs",
  },
  {
    id: 5,
    name: "Natalie Lopez",
  },
  {
    id: 6,
    name: "Renee Hudson",
  },
];
interface SignatureDialogBoxProps {
  trigger: React.ReactNode;
  data?: {
    subject: string;
    message: string;
  };
}
const SignatureDialogBox: React.FC<SignatureDialogBoxProps> = ({ trigger }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="fixed bg-white p-4 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[650px] ">
        <DialogTitle className="text-lg font-medium">Signature</DialogTitle>
        <hr className="mt-1" />
        <DialogDescription className="mb-4 text-sm text-gray-500 w-full">
          <Tabs
            defaultValue="text"
            className="w-full flex justify-end flex-col border-none default:border-none"
          >
            <TabsList className="flex flex-row self-end pb-0 mb-0">
              <TabsTrigger value="text">Text</TabsTrigger>
              <TabsTrigger value="signature">Signature</TabsTrigger>
            </TabsList>
            <TabsContent value="text">
              <Card className="border-none">
                <CardContent className="">
                  <div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Select>
                        <SelectTrigger className="">
                          <SelectValue placeholder="Select person details" />
                        </SelectTrigger>
                        <SelectContent>
                          {UserData.map((item, index) => (
                            <SelectGroup key={index}>
                              <SelectItem value={item.name}>
                                <div className="flex flex-row gap-3 items-center">
                                  {/* <Checkbox
                              className="border-gray-300"
                            //   checked={row.getIsSelected()}
                            //   onCheckedChange={(value) =>
                            //     row.toggleSelected(!!value)
                            //   }
                              aria-label="Select row"
                            /> */}
                                  <Avatar className="w-6 h-6">
                                    <AvatarImage
                                      src={`/users/${item.id + 1}.jpg`}
                                      alt="@shadcn"
                                    />
                                  </Avatar>
                                  <div className="capitalize text-sm">
                                    {item.name}
                                  </div>
                                </div>
                              </SelectItem>
                            </SelectGroup>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1 pt-2 w-full">
                      <Label htmlFor="username">Username</Label>
                      <CKEditor
                        editor={ClassicEditor}
                        // data={templateContent}
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          // console.log("Editor is ready to use!", editor);
                          const rootElement =
                            editor.editing.view.document.getRoot();
                          if (rootElement) {
                            editor.editing.view.change((writer) => {
                              writer.setStyle("height", "10rem", rootElement);
                              writer.setStyle("width", "100%", rootElement);
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

                            "undo",
                            "redo",

                            "fontSize",

                            "highlight",
                            "codeBlock",
                            "imageUpload",
                            "language",
                          ],
                          extraPlugins: [
                            // Add plugins here if needed
                          ],
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="signature">
              <Card className="border-none">
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="signature">Signature</Label>
                    <SignatureCanvas
                      canvasProps={{
                        className:
                          "signature-canvas bg-gray-100 w-full h-[12rem] rounded-md",
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          {/* <form className="space-y-4">
           
            <div className="w-full">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-black mb-1"
              >
                Name 
              </label>
              <Input
                type="text"
                id="subject"
                placeholder="Enter message here"
                name="subject"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="chatMessage"
                className="block text-sm font-medium text-black mb-1"
              >
                Signature
              </label>
             
              {/* <Textarea
                id="chatMessage"
                placeholder="Enter message here"
                name="chatMessage"
              /> */}
        </DialogDescription>
        {/* Add your form or other content here */}
        <div className="mt-4 flex flex-col md:flex-row justify-end md:space-x-2">
          <DialogClose asChild>
            <button className="px-4 py-2 bg-gray-200 text-black rounded-md w-full md:w-1/2 ">
              Cancel
            </button>
          </DialogClose>
          <button className="px-4 py-2 bg-black text-white rounded-md w-full md:w-1/2">
            Save
          </button>
        </div>
      </DialogContent>
      {/* </Dialog.Portal> */}
    </Dialog>
  );
};

export default SignatureDialogBox;
