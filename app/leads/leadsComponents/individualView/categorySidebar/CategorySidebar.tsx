// pages/index.tsx or any other page
import VerticalTabs from '@/app/leads/leadsComponents/individualView/categorySidebar/VerticalTabs';
import { useState } from 'react';
import Contacts_Leads from './contacts_Leads/Contacts_Leads';

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
  const [activeTab, setActiveTab] = useState('contact');

  const renderContent = () => {
    switch (activeTab) {
      case 'activity':
        return(<div>Content</div>);
      case 'contact':
        return(<Contacts_Leads/>);
      case 'engagement':
        return(<div>Content3</div>);
      case 'partners':
        return(<div>Content4</div>);
      case 'products':
        return(<div>Content5</div>);
      case 'quotes':
        return(<div>Content6</div>);
      case 'stageHistory':
        return(<div>Content</div>);
      case 'approvalHistory':
        return(<div>Content</div>);
      case 'files':
        return(<div>Content</div>);
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="flex ">
      <VerticalTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="flex-1 p-2  ">
        {/* Your main content here */}
        {renderContent()}
        {/* Add your content based on the active tab */}
      </div>
    </div>
  );
}

export default CategoarySidebar