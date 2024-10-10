import CustomTooltip from "@/app/components/common/Tooltip/CustomTooltip";
import AddNewMeeting from "@/app/components/MeetingContent/AddNewMeeting";
import { Phone, Video } from "lucide-react";
import React from "react";
import { FiPhone, FiPlus, FiVideo } from "react-icons/fi";

const meetings = [
  {
    time: "07:00 AM",
    title: "Meeting title lorem ipsum first meeting",
    attendee: "Darlene Robertson",
    icon: <Phone size={20} />,
  },
  {
    time: "08:00 AM",
    title: "Meeting title lorem ipsum",
    attendee: "Darlene Robertson",
    icon: <Video size={20} />,
  },
  {
    time: "08:30 AM",
    title: "Meeting title lorem ipsum its a meeting ",
    attendee: "Darlene Robertson",
    icon: <Phone size={20} />,
  },
  {
    time: "09:00 AM",
    title: "Meeting title lorem ipsum ipsum",
    attendee: "Darlene Robertson",
    icon: <Video size={20} />,
  },
  {
    time: "08:30 AM",
    title: "Meeting title lorem ipsum",
    attendee: "Darlene Robertson",
    icon: <Phone size={20} />,
  },
  {
    time: "09:00 AM",
    title: "Meeting title lorem ipsum",
    attendee: "Darlene Robertson",
    icon: <Video size={20} />,
  },
];

const TodayMeetings = () => {
  return (
    <div className="p-4 bg-white mt-2 rounded-sm">
      <div className="flex flex-row justify-between pb-2">
        <h1 className="text-sm text-gray-800 font-semibold">Today Meetings</h1>

        <AddNewMeeting
          trigger={
            <div>
            <CustomTooltip
              text="Add Meeting"
              trigger={
                <button className="bg-transparent border-none">
                  <FiPlus size={18} />
                </button>
              }
            />
            </div>
          }
        />
      </div>
      <div className="h-[28vh] overflow-y-scroll no-scrollbar">
        {meetings.map((meeting, index) => (
          <div key={index} className="flex items-center mb-2 gap-2">
            {/* Time */}
            <div className="w-16 text-center ">
              <div className="text-sm text-gray-800">
                {meeting.time.split(" ")[0]}
              </div>
              <div className="text-xs text-gray-500">
                {meeting.time.split(" ")[1]}
              </div>
            </div>

            {/* Meeting card */}
            <div className="flex-grow bg-gray-50 flex items-center py-2 rounded-sm">
              {/* Icon */}
              <div className="text-gray-600 text-lg px-4">{meeting.icon}</div>

              {/* Meeting details */}
              <div>
                <h2 className="text-sm text-gray-800">{meeting.title}</h2>
                <p className="text-xs text-gray-500">
                  Attendee: {meeting.attendee}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayMeetings;
