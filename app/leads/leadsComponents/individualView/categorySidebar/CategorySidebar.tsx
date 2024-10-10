import VerticalTabs from '@/app/leads/leadsComponents/individualView/categorySidebar/VerticalTabs';
import { useState } from 'react';
import Contacts_Leads from './contacts_Leads/Contacts_Leads';
import Engagement_Leads from './engagement_Leads/Engagement_Leads';
import ActivityLeads from './activity_Leads/ActivityLeads';
import StageHistory_Leads from './stageHistory_Leads/StageHistory_Leads';
import ApprovalHistory_Leads from './approvalHistory_Leads/ApprovalHistory_Leads';
import PartnersLeads from './partners_Leads/Partners_Leads';
import QuotesLeads from './quotes_Leads/Quotes_Leads';
import ProductsLeads from './products_Leads/Products_Leads';
import FilesLeads from './files_Leads/Files_Leads';

const tabs = [
  { id: 'activity', label: 'Activity' },
  { id: 'contact', label: 'Contact' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'partners', label: 'Partners' },
  { id: 'products', label: 'Products' },
  { id: 'quotes', label: 'Quotes' },
  { id: 'stageHistory', label: 'Stage History' },
  { id: 'approvalHistory', label: 'Approval History' },
  { id: 'files', label: 'Files' },
];

const CategoarySidebar=()=> {
  const [activeTab, setActiveTab] = useState('activity');

  const renderContent = () => {
    switch (activeTab) {
      case 'activity':
        return(<ActivityLeads/>);
      case 'contact':
        return(<Contacts_Leads/>);
      case 'engagement':
        return(<Engagement_Leads/>);
      case 'partners':
        return(<PartnersLeads/>);
      case 'products':
        return(<ProductsLeads/>);
      case 'quotes':
        return(<QuotesLeads/>);
      case 'stageHistory':
        return(<StageHistory_Leads/>);
      case 'approvalHistory':
        return(<ApprovalHistory_Leads/>);
      case 'files':
        return(<FilesLeads/>);
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="flex w-[50vw] h-[63.5vh] ">
      <VerticalTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="flex-1 w-full  overflow-y-scroll no-scrollbar rounded-sm ml-betweenComponents">
        {/* Your main content here */}
        {renderContent()}
        {/* Add your content based on the active tab */}
      </div>
    </div>
  );
}

export default CategoarySidebar