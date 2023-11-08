"use client";
import React from "react";
import { FaShoppingCart, FaCheck } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useAdminContext } from "@/context/admin.context";
import Order from "@/app/admin/(order)/all-order/page";
import { useQueryData } from "@/hooks/hook.query";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const page = () => {
  const { Categories }: any = useAdminContext();
  const { data: Orders } = useQueryData(["dashboard"], "/auth/v0/dashboard");
  const labels = Categories?.data?.data.map((item: any) => item.name);
  console.log(labels);
  const data = {
    labels,
    datasets: [
      {
        label: "Category Data",
        data: Categories?.data?.data.map((item: any) => item.products.length),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center justify-center gap-4 bg-cyan-700 py-8 px-3 rounded-md">
          <span className="text-white text-sm bg-sky-800 p-4 rounded-full">
            <FaShoppingCart />
          </span>
          <div>
            <h3 className="text-slate-200 font-normal">Total Orders</h3>
            <p className="text-slate-100 text-2xl font-bold">{Orders?.data?.total_orders}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 bg-orange-500 bg-opacity-80 py-8 px-3 rounded-md">
          <span className="text-white text-sm bg-orange-800 p-4 rounded-full">
            <FaShoppingCart />
          </span>
          <div>
            <h3 className="text-slate-200 font-normal">Orders Pending</h3>
            <p className="text-slate-100 text-2xl font-bold">{Orders?.data?.pending_orders}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 bg-blue-600 opacity-80 py-8 px-3 rounded-md">
          <span className="text-white text-sm bg-blue-800 p-4 rounded-full">
            <BsTruck />
          </span>
          <div>
            <h3 className="text-slate-200 font-normal">Orders Processing</h3>
            <p className="text-slate-100 text-2xl font-bold">{Orders?.data?.processing_orders}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 bg-green-600 bg-opacity-80 py-8 px-3 rounded-md">
          <span className="text-white text-sm bg-green-800 p-4 rounded-full">
            <FaCheck />
          </span>
          <div>
            <h3 className="text-slate-200 font-normal">Orders Delivered</h3>
            <p className="text-slate-100 text-2xl font-bold">{Orders?.data?.delivered_orders}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-9">
        <div className="basis-1/2">
          <Bar data={data} />
        </div>
        <div></div>
      </div>
      <div className="overflow-x-auto  mt-16">
        <h2 className="text-2xl mb-4">Recent Order</h2>
        <Order />
      </div>
    </div>
  );
};

export default page;
