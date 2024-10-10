import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import React, { useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Switch from "react-switch";
import { MdOutlineHistory } from "react-icons/md";
import { Button } from "@/components/ui/button";
import ReactModal from "react-modal";
import AvatarEditor from "react-avatar-editor";
import Image from "next/image";
import History from "../../History/History";

const NameImage = () => {
  const [phone, setPhone] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cropShape, setCropShape] = useState<"rect" | "round">("rect");
  const [editor, setEditor] = useState<AvatarEditor | null>(null);
  const [hovered, setHovered] = useState(false);

  const handleButtonClick = () => {
    document.getElementById("fileInput")?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setIsModalOpen(true); // Open modal after image is selected
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    // Add your logic
  };

  const handleCrop = () => {
    if (editor) {
      const canvas = editor.getImageScaledToCanvas();
      const croppedImage = canvas.toDataURL();
      setSelectedImage(croppedImage);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <form className="w-full p-4 h-[87vh]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CgProfile size={24} />
            <p className="font-semibold">Name & Image: Abishek Mahenderaraja</p>
          </div>

          <History
            trigger={
              <MdOutlineHistory className="mr-2 cursor-pointer" size={24} />
            }
          />
        </div>
        <hr className="text-slate-300 my-4" />
        <div>
          <div className="flex items-center justify-between">
            <div
              className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
            >
              <Label className="text-sm mb-1 ">First Name</Label>
              <Input
                type="firstName"
                placeholder=""
                className="bg-inputField"
              />
            </div>
            <div className="flex items-center justify-center w-full md:w-full lg:w-[40%] xl:w-[40%]">
              <div className="flex items-center justify-center gap-2">
                <Switch
                  onChange={handleSwitchChange}
                  checked={isChecked}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  width={25}
                  height={15}
                />
                <p className="text-sm">In Active</p>
              </div>
              <div
                className="w-28 h-28 rounded-full bg-slate-100 ml-16 cursor-pointer overflow-hidden flex items-center justify-center relative"
                onClick={handleButtonClick}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {selectedImage ? (
                  <Image
                    src={selectedImage}
                    alt="Profile"
                    className="object-cover"
                    // layout="fill"
                    quality={100}
                    width={112}
                    height={112}
                  />
                ) : null}
                {hovered && !selectedImage && (
                  <div className="absolute text-center text-gray-500">
                    Upload Image
                  </div>
                )}
              </div>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Last Name</Label>
            <Input type="lastName" placeholder="" className="bg-inputField" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Title</Label>
            <Input type="title" placeholder="" className="bg-inputField" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Team</Label>
            <Input type="team" placeholder="" className="bg-inputField" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Email</Label>
            <Input type="email" placeholder="" className="bg-inputField" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Phone</Label>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputStyle={{
                width: "100%",
                border: "1px solid #e4e4e7 ",
                background: "#f9fafb",
              }}
            />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Social Link</Label>
            <Input type="sociallink" placeholder="" className="bg-inputField" />
          </div>
          <div
            className=" mb-4 w-full md:w-full 
          lg:w-[40%] 
          xl:w-[40%]"
          >
            <Label className="text-sm mb-1">Website</Label>
            <Input type="website" placeholder="" className="bg-inputField" />
          </div>
        </div>
        <div className="flex justify-end pb-4">
          <Button className="bg-saveButton text-white">
            Save Account Details
          </Button>
        </div>
      </form>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Crop Image"
        ariaHideApp={false}
        className="flex justify-center items-center inset-0 bg-black bg-opacity-50 fixed z-50"
        overlayClassName="fixed inset-0"
      >
        <div className="bg-white p-4 rounded-lg ">
          {selectedImage && (
            <>
              <div className="flex items-center justify-center">
                <AvatarEditor
                  ref={setEditor}
                  image={selectedImage}
                  width={250}
                  height={250}
                  border={20}
                  borderRadius={cropShape === "round" ? 125 : 0}
                  color={[255, 255, 255, 0.6]} // Background color
                  scale={1.2}
                  rotate={0}
                  // className="ml-4"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <Button
                  onClick={() =>
                    setCropShape(cropShape === "round" ? "rect" : "round")
                  }
                >
                  Switch to {cropShape === "round" ? "Square" : "Circle"} Crop
                </Button>
                <Button onClick={handleCrop}>Crop & Save</Button>
                <Button
                  variant="secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
        </div>
      </ReactModal>
    </>
  );
};

export default NameImage;
