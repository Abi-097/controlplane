import { getCountryCode } from "@/public/data/countryCode";
import Flag from "react-world-flags";
import { GoAlertFill } from "react-icons/go";
import { FaCircle } from "react-icons/fa";
interface SegmentData {
  Segment: string;
  Location: string;
  Country: string;
  TimeZone: string;
  StartDate: string;
  RenewalDate: string;
  TicketsDue: number;
  Tickets: number;
  HighPriority: number;
  Meetings: number;
  ARR: string;
  ActivePlays: number;
  AccountAccess: string;
}

const CustomerInfoPannel: React.FC<{ data: SegmentData }> = ({ data }) => {
  const countryCode = getCountryCode(data.Country);
  return (
    <div className="flex flex-row justify-between my-betweenComponents mx-rightLeftMargin text-left px-10 py-3 bg-white rounded-sm ">
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-sm ">Segment</div>
        <div className="text-base ">{data.Segment}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-sm">Location</div>
        <div className="text-base">{data.Location}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-sm">Country</div>
        <div className="flex flex-row gap-1 items-center">
          {countryCode && <Flag code={countryCode} className="h-3" />}
          <div className="text-base ">{data.Country}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-sm">Time Zone</div>
        <div className="text-base ">{data.TimeZone}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-sm">Start Date</div>
        <div className="text-base ">{data.StartDate}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-sm">Renewal Date</div>
        <div className="flex flex-row items-center gap-1">
          <GoAlertFill className="text-red-600 text-sm" />
          <div className="text-base ">{data.RenewalDate}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-sm">Tickets Due</div>
        <div className="text-base ">{data.TicketsDue}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-sm">Tickets</div>
        <div className="text-base ">{data.Tickets}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-sm">High Priority</div>
        <div className="text-base ">{data.Meetings}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-sm">ARR</div>
        <div className="text-base ">${data.ARR}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-sm">Active Plays</div>
        <div className="text-base ">{data.ActivePlays}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-sm">Account Access</div>
        <div className="flex flex-row items-center gap-1 self-center text-sm">
          <FaCircle className="text-green-500 text-base"/>
          {data.AccountAccess}
        </div>
        <div className="text-xs text-gray-500 self-center">3 Days Left</div>
      </div>
    </div>
  );
};

export default CustomerInfoPannel;
