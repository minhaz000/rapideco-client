import { FaShoppingCart, FaCheck } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import DashboardStatsCard from "./DashboardStatsCard";
const DashboardStats = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <DashboardStatsCard
        icon={FaCheck}
        styleCard="bg-green-600 text-green-500"
        title="Orders Completed"
        subTitle={data?.delivered_orders ? data?.delivered_orders : 0}
      />
      <DashboardStatsCard
        icon={BsTruck}
        styleCard="bg-fuchsia-600 text-fuchsia-500"
        title="Processing Orders"
        subTitle={data?.processing_orders ? data?.processing_orders : 0}
      />
      <DashboardStatsCard
        icon={FaShoppingCart}
        styleCard="bg-red-600 text-red-500"
        title="Pending Orders"
        subTitle={data?.pending_orders ? data?.pending_orders : 0}
      />
      <DashboardStatsCard
        icon={FaShoppingCart}
        styleCard="bg-yellow-600 text-yellow-500"
        title="Total Sales"
        subTitle={`${data?.total_orders ? data?.total_orders : 0} ৳`}
      />
    </div>
  );
};

export default DashboardStats;
