import React,{useState} from 'react'
import { PlaysTable } from './PlaysTable'
import { PlaysTableColumns } from './PlaysTableColumns'

const sampleData = [
  {
    id: "1",
    name: "Kick off and customisation",
    status: "Completed",
    progress: "60% Completed (On time)",
    milestones: "4/4",
    startDate: "30 Aug 2024",
    dueDate: "100",
    action: "Edit"
  },
  {
    id: "2",
    name: "Onboarding Play",
    status: "Running",
    progress: "60% Completed (On time)",
    milestones: "2/5",
    startDate: "30 Aug 2024",
    dueDate: "90",
    action: "Edit"
  },
  {
    id: "3",
    name: "Onboarding Play 2",
    status: "Not Started",
    progress: "60% Completed (On time)",
    milestones: "0/4",
    startDate: "30 Aug 2024",
    dueDate: "120",
    action: "Edit"
  },
  {
    id: "4",
    name: "Enterprise Play",
    status: "Not Started",
    progress: "60% Completed (On time)",
    milestones: "0/3",
    startDate: "30 Aug 2024",
    dueDate: "85",
    action: "Edit"
  }
];



const Plays = () => {
    const [data, setData] = useState<any[]>([]);

  return (
    <div >
        <PlaysTable columns={PlaysTableColumns} data={sampleData}/>
    </div>
  )
}

export default Plays