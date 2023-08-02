import React from "react";

import { FaRegEye, FaRegTrashAlt, FaDownload } from "react-icons/fa";
const AllOrders = () => {
  return (
    <div>
      <div className="shadow-[0_0_10px_5px_#d7d7d7bf]">
        <div className="lg:flex justify-between items-center border-b pb-3 px-4 pt-4 mb-4">
          <h2 className="text-xl">All Orders</h2>
          <div className="flex flex-col lg:flex-row gap-4">
            <select
              name=""
              id=""
              className="border py-2 px-3 outline-none text-xs text-slate-500 w-full"
            >
              <option value="">Bulk Action</option>
            </select>
            <select
              name=""
              id=""
              className="border py-2 px-3 outline-none lg:w-40 text-xs text-slate-500 w-full"
            >
              <option value="">Filter by payment state</option>
              <option value="">Pending</option>
              <option value="">Completed</option>
            </select>
            <select
              name=""
              id=""
              className="border py-2 px-3 outline-none lg:w-40 text-xs text-slate-500 w-full"
            >
              <option value="">Filter By Date</option>
              <option value="">Today</option>
              <option value="">Tomorrow</option>
            </select>
            <div>
              <input
                type="text"
                placeholder="Type order code"
                className="border outline-none text-sm py-2 px-3 w-full lg:w-40 "
              />
            </div>
            <div>
              <button className="bg-orange-600 text-sm py-2 px-5 text-white">
                Filter
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto mt-3 p-4">
          <table className="table  w-[1130px] lg:w-full border">
            <thead>
              <tr className="border text-xs font-normal ">
                <th className="py-3 text-slate-500 ps-4 text-start">
                  Order Code:
                </th>
                <th className="py-3 text-slate-500 text-start">
                  Num. of Products
                </th>
                <th className="py-3 text-slate-500 text-start">Customer</th>
                <th className="py-3 text-slate-500 text-start">Amount</th>
                <th className="py-3 text-slate-500 text-start">
                  Delivery Status
                </th>
                <th className="py-3 text-slate-500 text-start">
                  Payment method
                </th>
                <th className="py-3 text-slate-500 text-start">Date</th>
                <th className="py-3 text-slate-500 text-start">
                  Payment Status
                </th>

                <th className="py-3 text-slate-500 text-start">Action</th>
              </tr>
            </thead>
            <tbody className="border pt-2">
              <tr className="text-xs font-normal text-start border-b">
                <td className="py-5 ps-4">20220912-10085522</td>
                <td>1</td>
                <td>Paul K. Jensen</td>
                <td>$999.000</td>
                <td>Delivered</td>
                <td>Cash On Delivery</td>
                <td>9 june 2023</td>

                <td>
                  <span className="bg-green-500 bg-opacity-70 text-white text-sm p-1 rounded">
                    Paid
                  </span>
                </td>
                <td>
                  <div className="flex gap-2 items-center">
                    <span
                      title="View"
                      className="bg-green-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                    >
                      <FaRegEye />
                    </span>
                    <span
                      title="Download"
                      className="bg-yellow-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                    >
                      <FaDownload />
                    </span>
                    <span
                      title="Delete"
                      className="bg-red-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                    >
                      <FaRegTrashAlt />
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="text-xs font-normal text-start border-b">
                <td className="py-5 ps-4">20220912-10085522</td>
                <td>1</td>
                <td>Paul K. Jensen</td>
                <td>$999.000</td>
                <td>Delivered</td>
                <td>Cash On Delivery</td>
                <td>9 june 2023</td>

                <td>
                  <span className="bg-green-500 bg-opacity-70 text-white text-sm p-1 rounded">
                    Paid
                  </span>
                </td>
                <td>
                  <div className="flex gap-2 items-center">
                    <span
                      title="View"
                      className="bg-green-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                    >
                      <FaRegEye />
                    </span>
                    <span
                      title="Download"
                      className="bg-yellow-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                    >
                      <FaDownload />
                    </span>
                    <span
                      title="Delete"
                      className="bg-red-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                    >
                      <FaRegTrashAlt />
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="text-xs font-normal text-start border-b">
                <td className="py-5 ps-4">20220912-10085522</td>
                <td>1</td>
                <td>Paul K. Jensen</td>
                <td>$999.000</td>
                <td>Delivered</td>
                <td>Cash On Delivery</td>
                <td>9 june 2023</td>

                <td>
                  <span className="bg-red-700 bg-opacity-70 text-white text-sm p-1 rounded">
                    Unpaid
                  </span>
                </td>
                <td>
                  <div className="flex gap-2 items-center">
                    <span
                      title="View"
                      className="bg-green-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                    >
                      <FaRegEye />
                    </span>
                    <span
                      title="Download"
                      className="bg-yellow-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                    >
                      <FaDownload />
                    </span>
                    <span
                      title="Delete"
                      className="bg-red-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                    >
                      <FaRegTrashAlt />
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="text-xs font-normal text-start border-b">
                <td className="py-5 ps-4">20220912-10085522</td>
                <td>1</td>
                <td>Paul K. Jensen</td>
                <td>$999.000</td>
                <td>Delivered</td>
                <td>Cash On Delivery</td>
                <td>9 june 2023</td>

                <td>
                  <span className="bg-green-500 bg-opacity-70 text-white text-sm p-1 rounded">
                    Paid
                  </span>
                </td>
                <td>
                  <div className="flex gap-2 items-center">
                    <span
                      title="View"
                      className="bg-green-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                    >
                      <FaRegEye />
                    </span>
                    <span
                      title="Download"
                      className="bg-yellow-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                    >
                      <FaDownload />
                    </span>
                    <span
                      title="Delete"
                      className="bg-red-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                    >
                      <FaRegTrashAlt />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
