import React from 'react'
import Email_Engagement from '../engagement_Leads/Email_Engagement'
import ChatsEngagement from '../engagement_Leads/ChatsEngagement'
import NotesEngagement from '../engagement_Leads/NotesEngagement'
import MeetingEngagement from '../engagement_Leads/MeetingEngagement'
import PhoneCallsEngagement from '../engagement_Leads/PhoneCallsEngagement'

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
  
const Activity = () => {
  return (
    <div className='flex flex-col gap-2'>
        <Email_Engagement/>
        <ChatsEngagement/>
        <NotesEngagement/>
        <MeetingEngagement/>
        <PhoneCallsEngagement CallsData={callData} />
    </div>
  )
}

export default Activity