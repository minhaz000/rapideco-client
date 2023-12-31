"use client";
import DashboardTable from "./components/DashboardTable";
import DashboardStats from "./components/DashboardStats";
import ChartOne from "./components/ChartOne";
import ChartTwo from "./components/ChartTwo";
import { useQueryData } from "@/hooks/hook.query";
import { Suspense } from "react";

const page = () => {
  const { data: dashboard } = useQueryData(
    ["get dashboard"],
    `/auth/v0/dashboard`
  );
  // console.log(dashboard?.data);
  return (
    <>
      <Suspense fallback={<h2>Loading dashboard</h2>}>
        <DashboardStats data={dashboard?.data} />
        <div className="lg:flex gap-4 mt-12 mb-8">
          {dashboard?.data && (
            <>
              <ChartOne chartData={dashboard?.data.resultsByMonth} />
              <ChartTwo chartData={dashboard?.data.top_sell} />
            </>
          )}
        </div>
        <DashboardTable />
      </Suspense>
    </>
  );
};

export default page;
