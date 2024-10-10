import Footer from "@/app/components/common/Footer";
import Header from "../../components/common/Header";
import TabNavigationLeads from "./TabNavigationLeads";

const LeadsMainPage = () => {
  return (
    <div className="flex flex-col w-full overflow-auto">
      {/* <TabNavigationCompany /> */}
      <TabNavigationLeads/>
      <div className="absolute bottom-0 bg-screenbg w-full">
        <Footer />
      </div>
    </div>
  );
};

export default LeadsMainPage;