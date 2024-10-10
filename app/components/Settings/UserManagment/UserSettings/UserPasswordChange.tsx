import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { MdInfoOutline, MdOutlineHistory } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import History from "@/app/components/History/History";
import { LockKeyhole } from "lucide-react";
const UserPasswordChange = () => {
  return (
    <div>
      <form className="w-full p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LockKeyhole size={24} />
            <p className="font-semibold">Password</p>
          </div>
          <History
            trigger={
              <MdOutlineHistory
                className="text-gray-400 cursor-pointer hover:text-gray-700"
                size={20}
              />
            }
          />
        </div>
        <hr className="text-slate-300 my-4" />
        <div>
          <div className="mb-4">
            <span className="text-sm">
              A password policy is a set of rules designed to improve security
              by establishing strict password requirements for your users.
              Password rules are enforced on all users in your account.&nbsp;
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="border-none bg-transparent">
                  <MdInfoOutline className="inline-block" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-auto">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    1. Password should contain minimum 8 character
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    2. Password should contain one Uppercase letter
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    3. Password should contain one Lowercase letter
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    4. Password should contain one number
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    5. Password should contain one special character
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div
            className=" mb-4 w-full md:w-full 
      lg:w-[40%] 
      xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">User</Label>

            <Select>
              <SelectTrigger className="w-full bg-[#f9fafb]">
                <SelectValue placeholder="Select a User" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Users</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div
            className=" mb-4 w-full md:w-full 
      lg:w-[40%] 
      xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">Old Password</Label>
            <Input type="oldpassword" placeholder="" className="bg-[#f9fafb]" />
          </div>

          <div
            className=" mb-4 w-full md:w-full 
      lg:w-[40%] 
      xl:w-[40%]"
          >
            <Label className="text-sm mb-1 ">New Password</Label>
            <Input type="newpass" placeholder="" className="bg-[#f9fafb]" />
          </div>

          <div
            className=" mb-4 w-full md:w-full 
      lg:w-[40%] 
      xl:w-[40%]"
          >
            <Label className="text-sm mb-1">Confirm Password</Label>
            <Input type="confirmpass" placeholder="" className="bg-[#f9fafb]" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="bg-[#57534e] text-white w-20 h-8">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default UserPasswordChange;
