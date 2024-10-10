import React from 'react'
import Email_Engagement from './Email_Engagement'
import ChatsEngagement from './ChatsEngagement'
import NotesEngagement from './NotesEngagement'
import MeetingEngagement from './MeetingEngagement'
import PhoneCallsEngagement from './PhoneCallsEngagement'

const callData = [
    {
      id: 1,
      from: "John Doe",
      to: "Nolan",
      phoneNumber: "+421 254 365 862",
      time: "01:30 - 01:40",
      duration: "00:00:10",
      recording: true,
    },
    {
      id: 2,
      from: "John Doe",
      to: "Nolan",
      phoneNumber: "+421 254 365 862",
      time: "01:30 - 01:40",
      duration: "00:00:10",
      recording: false,
    },
    {
      id: 3,
      from: "John Doe",
      to: "Nolan",
      phoneNumber: "+421 254 365 862",
      time: "01:30 - 01:40",
      duration: "00:00:10",
      recording: false,
    },
    {
      id: 4,
      from: "John Doe",
      to: "Nolan",
      phoneNumber: "+421 254 365 862",
      time: "01:30 - 01:40",
      duration: "00:00:10",
      recording: false,
    },
    {
      id: 5,
      from: "John Doe",
      to: "Nolan",
      phoneNumber: "+421 254 365 862",
      time: "01:30 - 01:40",
      duration: "00:00:10",
      recording: false,
    },
  ];
  
const AllEngagement = () => {
  return (
    <div className='flex flex-col gap-4'>
        <Email_Engagement/>
        <ChatsEngagement/>
        <NotesEngagement/>
        <MeetingEngagement/>
        <PhoneCallsEngagement CallsData={callData} />
    </div>
  )
}

export default AllEngagement