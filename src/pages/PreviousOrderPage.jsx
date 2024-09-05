import PreviousOrder from "@/components/custom/previousOrder";
import Sidebar from "@/components/custom/sidebar";
import Navbar from "@/components/custom/ṇavbar";

export default function PreviousOrderPage(params) {
  return (
    <>
      <div className="ml-12">
        <Navbar title={"Previous Order"} className="" />
      </div>
      <div>
        <Sidebar />
      </div>
      <div className="ml-12">
        <PreviousOrder />
      </div>
    </>
  );
}
