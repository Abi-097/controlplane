import React, { useState } from "react";
import ActivityHeader from "../ActivityContent/Activity";
import { FaRegStickyNote, FaSearch, FaTasks } from "react-icons/fa";
import Activity from "../ActivityContent/Activity";
import { Input } from "@/components/ui/input";
import EmailsView from "../EmailContent/EmailsView";
import NotesView from "../NotesContent/NotesView";
import MeetingView from "../MeetingContent/MeetingView";
import clsx from "clsx";
import Email_Engagement from "@/app/leads/leadsComponents/individualView/categorySidebar/engagement_Leads/Email_Engagement";
import ContactProperty from "../Selector/ContactProperty";
import { ListChecks, Mail } from "lucide-react";
import { FaTimeline } from "react-icons/fa6";

const ContactActivities = () => {
  const [isSelected, setIsSelected] = useState<number>(1);
  const tabs = [
    {
      id: 1,
      title: "Activity",
      icon: <ListChecks size={16} />,
      component: <Activity />,
    },
    {
      id: 2,
      title: "Emails",
      icon: <Mail size={16} />,
      // component: <EmailsView />,
      component: <Email_Engagement />,
    },
    {
      id: 3,
      title: "Notes",
      icon: <FaRegStickyNote size={16} />,
      component: <NotesView />,
    },
    {
      id: 4,
      title: "Meetings",
      icon: <FaTimeline size={16} />,
      component: <MeetingView />,
    },
  ];

  const handleNavClick = (id: number) => {
    setIsSelected(id);
  };

  const renderSelectedTab = () => {
    const activeTab = tabs.find((tab) => tab.id === isSelected);
    return activeTab?.component || null;
  };

  return (
    <>
      <div className="flex items-center relative">
        <FaSearch className="absolute left-3 text-gray-500" size={16} />
        <Input
          type="text"
          className="pl-10 pr-3 py-4 mt-1 w-full border-none focus:outline-none focus:ring focus:border-slate-200"
          placeholder="Search emails, activities, notes and more"
        />
      </div>
      <hr />
      <div className="px-2 pt-2 bg-fullbg">
        <ContactProperty />
      </div>

      <div className="w-full bg-fullbg p-2">
        <div className="flex p-3 justify-between items-center bg-white w-full">
          {/* left headersection */}
          <div className="flex w-full space-x-4 justify-left">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={clsx(
                  "cursor-pointer px-4 py-2 rounded-full text-sm text-gray-500 font-bold flex items-center gap-2",
                  isSelected === tab.id
                    ? "bg-[#f4f2ee] text-gray-800"
                    : "hover:text-gray-800"
                )}
                onClick={() => handleNavClick(tab.id)}
              >
                {tab.icon} {tab.title}
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="mt-2">
          {/* Render the selected tab content here */}
          {renderSelectedTab()}
        </div>
      </div>
      {/* <div className="w-full">
        <div className="flex justify-around border-b border-gray-200 p-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-1 text-center border border-[#1D62B4] text-[#1D62B4] ${
                activeTab === tab
                  ? "bg-blue-100 font-medium"
                  : "hover:bg-blue-50"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-4">
          {activeTab === "Activity" && (
            <div className="h-[80vh] overflow-y-auto">
              <Activity />
            </div>
          )}
          {activeTab === "Emails" && (
            <div className="h-[80vh] overflow-y-auto">
              <EmailsView />
            </div>
          )}
          {activeTab === "Notes" && (
            <div className="h-[80vh] overflow-y-auto">
              <NotesView />
            </div>
          )}
          {activeTab === "Meetings" && (
            <div className="h-[80vh] overflow-y-auto">
              <MeetingView />
            </div>
          )}
        </div>
      </div> */}
    </>
  );
};

export default ContactActivities;
