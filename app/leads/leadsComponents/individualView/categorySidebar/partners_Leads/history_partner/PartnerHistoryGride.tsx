import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


type User = {
    id: number;
    name: string;
    gender: string;
    email: string;
    contact: string;
    job_title: string;
    annual_revenue: number;
    status: string;
    location: string;
    company: string;
    country: string;
    category: string;
    image?: string;
    date:string;
    desBody:string;
    desHead:string;
  };
  
  type GridCardProps = {
    users: User[];
  };

  
const PartnerHistoryGride: React.FC<GridCardProps> = ({ users }) => {

    return (
      <>
        <div className="flex flex-row text-sm justify-between items-center pb-0 w-full rounded-sm"></div>
  
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 justify-start">
          {users.map((user) => (
            <Card key={user.id} className="shadow-sm w-full bg-white">
              <CardHeader>
                <div className="flex justify-between relative">
                  <div className="flex items-start gap-5 mb-1">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={`/users/${user.id}.jpg`}  alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
  
                    </div>
                    <div>
                      <CardTitle className="text-sm font-normal text-gray-700">
                        {user.date}
                      </CardTitle>
                      <div className="flex flex-col items-left pt-1 text-gray-500 text-sm">
                       <div className=" text-gray-500"> {user.desHead}</div>

                        <div className=" text-gray-500"> {user.desBody}</div>

                      </div>
                    </div>
                  </div>
                 
                </div>
               
              </CardHeader>
            </Card>
          ))}
        </div>
      </>
)}

export default PartnerHistoryGride