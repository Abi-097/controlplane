import Footer from "@/app/components/common/Footer";
import Header from "../../../components/common/Header";
import TabNavigationCompany from "./companyInfoPanel/TabNavigationCompany";

const CompanyMainPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="overflow-auto">
        <TabNavigationCompany />
      </div>

      <div className="absolute bottom-0 bg-screenbg w-full">
        <Footer />
      </div>
    </div>
  );
};

export default CompanyMainPage;
