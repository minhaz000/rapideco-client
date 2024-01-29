"use client";
import DashboardTable from "./components/DashboardTable";
import DashboardStats from "./components/DashboardStats";
import DashboardStats2 from "./components/DashboardStats2";
import ChartOne from "./components/ChartOne";
import ChartTwo from "./components/ChartTwo";
import { Suspense } from "react";
import getDashboardData from "@/lib/getDashboardData";

const page = () => {
  const { dashboard } = getDashboardData();

  return (
    <>
      <Suspense fallback={<h2>Loading dashboard</h2>}>
        <DashboardStats data={dashboard?.data} />
        <div className="lg:flex gap-2 mt-12 ">
          {dashboard?.data && (
            <>
              <ChartOne chartData={dashboard?.data?.resultsByMonth} />
              <ChartTwo chartData={dashboard?.data?.top_sell} />
            </>
          )}
        </div>
        <div className="mb-8">
          <DashboardStats2 data={dashboard?.data} />
        </div>
        <DashboardTable />
      </Suspense>
    </>
  );
};

export default page;
