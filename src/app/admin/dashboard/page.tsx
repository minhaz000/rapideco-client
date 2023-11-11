import DashboardTable from "./components/DashboardTable";
import DashboardStats from "./components/DashboardStats";
import ChartOne from "./components/ChartOne";
import ChartTwo from "./components/ChartTwo";

const page = () => {
  return (
    <>
      <DashboardStats />
      <div className="md:flex gap-4 mt-12">
        <ChartOne />
        <ChartTwo />
      </div>
      <DashboardTable />
    </>
  );
};

export default page;
