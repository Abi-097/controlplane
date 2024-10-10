import Footer from "../components/common/Footer";
import CustomerContent from "./customerComponents/CustomerContent";
import CustomerHeader from "./customerComponents/customerHeader/CustomerHeader";

const CustomerMainPage = () => {
  return (
    <div className="flex flex-col w-full bg-fullbg">
            <div className="overflow-auto">

      <CustomerContent />
      </div>
      <div className="absolute bottom-0  w-full">
        <Footer />
      </div>
    </div>
  );
};

export default CustomerMainPage;
