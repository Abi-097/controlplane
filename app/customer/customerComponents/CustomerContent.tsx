import React from 'react'
import CustomerInfoPannel from './CustomerInfoPannel'
import TabTableCustomer from './TabTableCustomer';

const segmentData = {
  Segment: "Enterprise",
  Location:"Dallas,TX",
  Country: "USA",
  TimeZone: "CST",
  StartDate: "05/25/2023",
  RenewalDate: "05/25/2024",
  TicketsDue: 6,
  Tickets: 4,
  HighPriority: 1,
  Meetings: 1,
  ARR: " 100,000",
  ActivePlays: 1,
  AccountAccess: "Open"
  };

 

const CustomerContent = () => {
  return (
    <div >
      <CustomerInfoPannel data={segmentData} />
      <TabTableCustomer/>

    </div>
  )
}

export default CustomerContent