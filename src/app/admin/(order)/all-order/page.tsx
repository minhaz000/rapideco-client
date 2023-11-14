"use client";
import { useQueryData } from "@/hooks/hook.query";
import React, { useEffect, useState } from "react";
import order from "@/interface/checkout";
import { FaRegEye, FaRegTrashAlt, FaDownload } from "react-icons/fa";
import Link from "next/link";
import Pagination from "@/components/pagination/pagination";
const AllOrders = () => {
  const [query, setQuery] = useState({ _id: "", sort: "", status: "" });
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const { data: allOrders, refetch } = useQueryData(
    ["get all order", pagination, query],
    `/api/v0/orders?page=${pagination.page}&limit=${pagination.limit}&_id=${query._id}&sort=${query.sort}&status=${query.status}`
  );

  const HandleQuery = (e: any) => {
    e.preventDefault();
    setQuery((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    const Debouncing = setTimeout(() => refetch, 1500);
    return () => clearTimeout(Debouncing);
  }, [pagination, query]);
  function convertDateFormat(inputDate: string): string {
    const dateObject = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate: string = new Intl.DateTimeFormat("en-US", options).format(dateObject);
    return formattedDate;
  }
  console.log(query);
  console.log(allOrders?.data);
  // const newPayment = useMutationData(["add new payament"], "post", "api/v0/payment");
  return (
    <div>
      <div className="shadow-[0_0_10px_5px_#d7d7d7bf]">
        <div className="lg:flex justify-between items-center border-b pb-3 px-4 pt-4 mb-4">
          <h2 className="text-xl">All Orders</h2>
          <div className="flex flex-col lg:flex-row gap-4">
            <select
              onChange={HandleQuery}
              name="status"
              id=""
              className="border py-2 px-3 outline-none lg:w-40 text-xs text-slate-500 w-full"
            >
              <option value="">Filter by payment state</option>
              <option value="on hold">On hold</option>
              <option value="processing">Processing</option>
              <option value="complete">Completed</option>
              <option value="canceled">Canceled</option>
            </select>
            <select
              onChange={HandleQuery}
              name="sort"
              id=""
              className="border py-2 px-3 outline-none lg:w-40 text-xs text-slate-500 w-full"
            >
              <option value="he">Filter By Date</option>
              <option value="createdAt">Old</option>
              <option value="-createdAt">New</option>
            </select>
            <div>
              <input
                onChange={HandleQuery}
                type="text"
                name="_id"
                placeholder="Type order code"
                className="border outline-none text-sm py-2 px-3 w-full lg:w-40 "
              />
            </div>
            <div>
              <button className="text-sm py-2 px-5 text-white">Filter</button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto mt-3 p-4">
          <table className="table  w-[1130px] lg:w-full border">
            <thead>
              <tr className="border text-xs font-normal ">
                <th className="py-3 text-slate-500 ps-4 text-start">Order Code:</th>
                <th className="py-3 text-slate-500 text-start">Num. of Products</th>
                <th className="py-3 text-slate-500 text-start">Customer</th>
                <th className="py-3 text-slate-500 text-start">Amount</th>
                <th className="py-3 text-slate-500 text-start">Delivery Status</th>
                <th className="py-3 text-slate-500 text-start">Payment method</th>
                <th className="py-3 text-slate-500 text-start">Date</th>
                <th className="py-3 text-slate-500 text-start">Payment Status</th>

                <th className="py-3 text-slate-500 text-start">Action</th>
              </tr>
            </thead>
            <tbody className="border pt-2">
              {allOrders?.data.map((item: any, i: number) => {
                return (
                  <tr key={i} className="text-xs font-normal text-start border-b">
                    <td className="py-5 ps-4">{item._id}</td>
                    <td>{item.ordered_items.length}</td>
                    <td>{item.user_info.name}</td>
                    <td>{item.payment_info.amount}৳</td>
                    <td>{item.status}</td>
                    <td>{item.payment_info.method_name}</td>
                    <td>{convertDateFormat(item.createdAt)}</td>
                    <td>
                      {item.payment_info.trx_id ? (
                        <span className="bg-green-500 bg-opacity-70 text-white text-sm p-1 rounded">Paid</span>
                      ) : (
                        <span className="bg-red-500 bg-opacity-70 text-white text-sm p-1 rounded">Unpaid</span>
                      )}
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <span
                          title="View"
                          className="bg-green-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                        >
                          <Link href={`/admin/order-details/${item._id}`}>
                            <FaRegEye />
                          </Link>
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
                );
              })}
            </tbody>
          </table>
        </div>
        {allOrders?.data && <Pagination pagination={allOrders.pagination} setPagination={setPagination} />}
      </div>
    </div>
  );
};

export default AllOrders;
