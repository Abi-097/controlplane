import Footer from "../common/Footer";
import Header from "../common/Header";
import TabNavigation from "../common/TabNavigation";

const MainPage = () => {
  return (
    <div className="flex flex-col w-full ">
      <Header />
      <div className="overflow-auto">
        <TabNavigation />
      </div>
      <div className="absolute bottom-0 bg-screenbg w-full">
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
