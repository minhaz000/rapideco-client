"use client";
import DashboardTable from "./components/DashboardTable";
import DashboardStats from "./components/DashboardStats";
import ChartOne from "./components/ChartOne";
import ChartTwo from "./components/ChartTwo";
import { useQueryData } from "@/hooks/hook.query";

const page = () => {
  const { data: dashboard } = useQueryData(["get dashboard"], `/auth/v0/dashboard`);
  console.log(dashboard);
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
