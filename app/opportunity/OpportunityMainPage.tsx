import Footer from "@/app/components/common/Footer";
import Header from "../components/common/Header";
import TabNavigationLeads from "../leads/leadsComponents/TabNavigationLeads";
import TabNavigationOpportunity from "./components-opportunity/TabNavigationOpportunity";

const OpporrtunityMainPage = () => {
  return (
    <div className="flex flex-col w-full overflow-auto h-screen ">
   
      <TabNavigationOpportunity/>
      <Footer/>
    </div>
  );
};

export default OpporrtunityMainPage;