import Invoice from "@/components/custom/invoice";
import Sidebar from "@/components/custom/sidebar";
import Navbar from "@/components/custom/ṇavbar";

export default function InvoicePage(params) {
  return (
    <>
      <div className="ml-12">
        <Navbar title={"Generate Invoice"} className="" />
      </div>
      <div>
        <Sidebar />
      </div>
      <div className="ml-12">
        <Invoice />
      </div>
    </>
  );
}
