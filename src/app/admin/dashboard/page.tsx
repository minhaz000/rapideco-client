"use client";
import React from "react";
import { FaShoppingCart, FaCheck } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => {}),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => {}),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const page = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center justify-center gap-4 bg-cyan-700 py-8 px-3 rounded-md">
          <span className="text-white text-sm bg-sky-800 p-4 rounded-full">
            <FaShoppingCart />
          </span>
          <div>
            <h3 className="text-slate-200 font-normal">Total Orders</h3>
            <p className="text-slate-100 text-2xl font-bold">150</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 bg-orange-500 bg-opacity-80 py-8 px-3 rounded-md">
          <span className="text-white text-sm bg-orange-800 p-4 rounded-full">
            <FaShoppingCart />
          </span>
          <div>
            <h3 className="text-slate-200 font-normal">Orders Pending</h3>
            <p className="text-slate-100 text-2xl font-bold">150</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 bg-blue-600 opacity-80 py-8 px-3 rounded-md">
          <span className="text-white text-sm bg-blue-800 p-4 rounded-full">
            <BsTruck />
          </span>
          <div>
            <h3 className="text-slate-200 font-normal">Orders Processing</h3>
            <p className="text-slate-100 text-2xl font-bold">10</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 bg-green-600 bg-opacity-80 py-8 px-3 rounded-md">
          <span className="text-white text-sm bg-green-800 p-4 rounded-full">
            <FaCheck />
          </span>
          <div>
            <h3 className="text-slate-200 font-normal">Orders Delivered</h3>
            <p className="text-slate-100 text-2xl font-bold">50</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="basis-1/2">
          {/* <Bar options={options} data={data} /> */}
        </div>
        <div></div>
      </div>
      <div className="overflow-x-auto  mt-16">
        <h2 className="text-2xl mb-4">Recent Order</h2>
        <table className="table  w-[1130px] lg:w-full border">
          <thead>
            <tr className="border text-sm font-normal ">
              <th className="py-3 text-slate-500 ps-4 text-start">
                INVOICE NO
              </th>
              <th className="py-3 text-slate-500 text-start">ORDER TIME</th>
              <th className="py-3 text-slate-500 text-start">CUSTOMER NAME</th>
              <th className="py-3 text-slate-500 text-start">METHOD</th>
              <th className="py-3 text-slate-500 text-start">AMOUNT</th>
              <th className="py-3 text-slate-500 text-start">STATUS</th>
              <th className="py-3 text-slate-500 text-start">ACTION</th>
            </tr>
          </thead>
          <tbody className="border pt-2">
            <tr className="text-sm font-normal text-start">
              <td className="py-4 ps-4">10185</td>
              <td>Jul 5, 2023 12:45 PM</td>
              <td>test INIJNMIO</td>
              <td>Cash</td>
              <td>$159.00</td>
              <td>
                <span className="bg-amber-500 bg-opacity-50 text-amber-700 text-sm p-1 rounded">
                  Pending
                </span>
              </td>
              <td>
                <select name="" id="" className="border outline-none p-2">
                  <option value="">Pending</option>
                  <option value="">Delivered</option>
                  <option value="">Cancel</option>
                </select>
              </td>
            </tr>
            <tr className="text-sm font-normal text-start">
              <td className="py-4 ps-4">10185</td>
              <td>Jul 5, 2023 12:45 PM</td>
              <td>test INIJNMIO</td>
              <td>Cash</td>
              <td>$159.00</td>
              <td>
                <span className="bg-amber-500 bg-opacity-50 text-amber-700 text-sm p-1 rounded">
                  Pending
                </span>
              </td>
              <td>
                <select name="" id="" className="border outline-none p-2">
                  <option value="">Pending</option>
                  <option value="">Delivered</option>
                  <option value="">Cancel</option>
                </select>
              </td>
            </tr>
            <tr className="text-sm font-normal text-start">
              <td className="py-4 ps-4">10185</td>
              <td>Jul 5, 2023 12:45 PM</td>
              <td>test INIJNMIO</td>
              <td>Cash</td>
              <td>$159.00</td>
              <td>
                <span className="bg-amber-500 bg-opacity-50 text-amber-700 text-sm p-1 rounded">
                  Pending
                </span>
              </td>
              <td>
                <select name="" id="" className="border outline-none p-2">
                  <option value="">Pending</option>
                  <option value="">Delivered</option>
                  <option value="">Cancel</option>
                </select>
              </td>
            </tr>
            <tr className="text-sm font-normal text-start">
              <td className="py-4 ps-4">10185</td>
              <td>Jul 5, 2023 12:45 PM</td>
              <td>test INIJNMIO</td>
              <td>Cash</td>
              <td>$159.00</td>
              <td>
                <span className="bg-amber-500 bg-opacity-50 text-amber-700 text-sm p-1 rounded">
                  Pending
                </span>
              </td>
              <td>
                <select name="" id="" className="border outline-none p-2">
                  <option value="">Pending</option>
                  <option value="">Delivered</option>
                  <option value="">Cancel</option>
                </select>
              </td>
            </tr>
            <tr className="text-sm font-normal text-start">
              <td className="py-4 ps-4">10185</td>
              <td>Jul 5, 2023 12:45 PM</td>
              <td>test INIJNMIO</td>
              <td>Cash</td>
              <td>$159.00</td>
              <td>
                <span className="bg-amber-500 bg-opacity-50 text-amber-700 text-sm p-1 rounded">
                  Pending
                </span>
              </td>
              <td>
                <select name="" id="" className="border outline-none p-2">
                  <option value="">Pending</option>
                  <option value="">Delivered</option>
                  <option value="">Cancel</option>
                </select>
              </td>
            </tr>
            <tr className="text-sm font-normal text-start">
              <td className="py-4 ps-4">10185</td>
              <td>Jul 5, 2023 12:45 PM</td>
              <td>test INIJNMIO</td>
              <td>Cash</td>
              <td>$159.00</td>
              <td>
                <span className="bg-amber-500 bg-opacity-50 text-amber-700 text-sm p-1 rounded">
                  Pending
                </span>
              </td>
              <td>
                <select name="" id="" className="border outline-none p-2">
                  <option value="">Pending</option>
                  <option value="">Delivered</option>
                  <option value="">Cancel</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
