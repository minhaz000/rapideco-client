import { FaShoppingCart, FaUserAstronaut, FaUserCheck } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import DashboardStatsCard from "./DashboardStatsCard";
const DashboardStats = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <DashboardStatsCard
        icon={PiUsersThreeFill}
        styleCard="bg-green-600 text-green-500"
        title="Monthly Visitor"
        subTitle={data?.site_status.monthly_visitor ? data?.site_status.monthly_visitor : 0}
      />
      <DashboardStatsCard
        icon={FaUserCheck}
        styleCard="bg-fuchsia-600 text-fuchsia-500"
        title="Total Visitor"
        subTitle={`
          ${
            data?.site_status.monthly_visitor
              ? data?.site_status.monthly_visitor - data?.site_status.number_of_visitor
              : 0
          }
        `}
      />
      <DashboardStatsCard
        icon={FaUserAstronaut}
        styleCard="bg-green-600 text-green-500"
        title="Visitor left"
        subTitle={`${data?.site_status.number_of_visitor ? data?.site_status.number_of_visitor : 0} `}
      />
      <DashboardStatsCard
        icon={MdOutlineProductionQuantityLimits}
        styleCard="bg-red-600 text-red-500"
        title="Total Product"
        subTitle={data?.site_status.total_product ? data?.site_status.total_product : 0}
      />
    </div>
  );
};

export default DashboardStats;
