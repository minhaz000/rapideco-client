"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaPrint } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";
import FormValues from "@/interface/checkout";
import { useMutationData, useQueryData } from "@/hooks/hook.query";
import { toast } from "react-toastify";

const OrderDetails = ({ params }: { params: { orderID: string } }) => {
  const { watch, register, reset, handleSubmit, setValue } =
    useForm<FormValues>();
  const { data, refetch } = useQueryData(
    ["get Order details"],
    `/api/v0/order/${params.orderID}`
  );
  const updateCategory = useMutationData(
    ["edit order"],
    "put",
    `/api/v0/order/${params.orderID}`
  );
  function convertDateFormat(inputDate: string): string {
    const dateObject = new Date(inputDate);
    // Format date part
    const optionsDate: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", optionsDate).format(
      dateObject
    );
    // Format time part
    const hours = dateObject.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = dateObject.getMinutes();
    const ampm = dateObject.getHours() >= 12 ? "PM" : "AM";
    const formattedTime = `${hours}:${minutes.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    })} ${ampm}`;
    return `${formattedDate} | ${formattedTime}`;
  }

  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleEditOrder: SubmitHandler<FormValues> = async (fdata: any) => {
    console.log("fdata", fdata);

    updateCategory.mutate(fdata, {
      onSuccess: async () => {
        toast.success("Order updated");
        refetch;
      },
      onError: (error: any) =>
        toast.error(error.message ? error.message : error?.data.message),
    });
  };

  useEffect(() => {
    reset(data?.data);
  }, [data]);
  console.log(data?.data);
  return (
    <div className="shadow-[0_0_10px_5px_#d7d7d7bf] py-4">
      <h2 className="border-b pb-2 px-6">Order Details</h2>
      <form onSubmit={handleSubmit(HandleEditOrder)}>
        <div className="mt-6 px-6 lg:flex gap-4">
          <div className="lg:basis-1/2">
            <label className="mb-2 block">Payment Status</label>
            <select
              {...register("payment_info.status")}
              className="w-full border py-2 px-3 outline-none  text-xl text-slate-500"
            >
              <option value="unpaid">Unpaid</option>
              <option value="paid">Paid</option>
            </select>
          </div>
          <div className="lg:basis-1/2">
            <label className="mb-2 block">Delivery Status</label>
            <select
              {...register("status")}
              className="w-full border py-2 px-3 outline-none  text-xl text-slate-500"
            >
              <option value="on hold">on hold</option>
              <option value="processing">processing</option>
              <option value="complete">complete</option>
              <option value="canceled">canceled</option>
            </select>
          </div>
        </div>
        <div className="lg:flex gap-6 mt-14 px-6">
          <div className="basis-1/2">
            {data?.data && (
              <QRCodeSVG
                value={`${process.env.NEXT_PUBLIC_HOST}/track/${data?.data._id}`}
              />
            )}
            <h3 className="mt-2">{data?.data.user_info.name}</h3>
            <p>{data?.data.user_info.email}</p>
            <p>{data?.data.user_info.phone}</p>
            <p>{data?.data.user_info.address}</p>
            <p>{data?.data.user_info.delivery_area}</p>
          </div>
          <div className="text-end basis-1/2 lg:ps-28 mt-10">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span>Order #</span>
              <span>{data?.data._id}</span>
            </div>
            <div className="flex items-center justify-between gap-4 mb-2">
              <span>Order Status</span>
              {data?.data.status == "complete" ? (
                <span className="bg-green-500 text-white px-2 py-1 rounded text-[10px]">
                  {data?.data.status}
                </span>
              ) : data?.data.status == "canceled" ? (
                <span className="bg-red-500 text-white px-2 py-1 rounded text-[10px]">
                  {data?.data.status}
                </span>
              ) : (
                <span className="bg-orange-500 text-white px-2 py-1 rounded text-[10px]">
                  {data?.data.status}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between gap-4 mb-2">
              <span>Order date</span>
              <span>
                {data?.data.createdAt &&
                  convertDateFormat(data?.data.createdAt)}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 mb-2">
              <span>Total</span>
              <span>{data?.data.payment_info.amount}</span>
            </div>
            <div className="flex items-center justify-between gap-4 mb-2">
              <span>Payment method</span>
              <span>{data?.data.payment_info.method_name}</span>
            </div>
            <div className="flex items-center justify-between gap-4 mb-2">
              <span>Payment ID</span>
              <span>{data?.data.payment_info.trx_id}</span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto mt-3 p-4">
          <table
            id="variantsTable"
            className="table  w-[1130px] lg:w-full border"
          >
            <thead>
              <tr id="headerRow" className="border text-xs font-normal ">
                <th className="py-3 text-slate-500 ps-4 text-start">#</th>
                <th className="py-3 text-slate-500 text-start">Photo</th>
                <th className="py-3 text-slate-500 text-start">Name</th>
                <th className="py-3 text-slate-500 text-start">
                  DELIVERY TYPE
                </th>
                <th className="py-3 text-slate-500 text-start">QTY</th>
                <th className="py-3 text-slate-500 text-start">Size</th>
                <th className="py-3 text-slate-500 text-start">Color</th>
                <th className="py-3 text-slate-500 text-start">Price</th>
                <th className="py-3 text-slate-500 text-start">Total</th>
              </tr>
            </thead>
            <tbody className="border pt-2">
              {data?.data.ordered_items.map((item: any, i: number) => {
                console.log(item);
                return (
                  <tr
                    id="dataRow"
                    key={i}
                    className="text-xs font-normal text-start border-b"
                  >
                    <td className="py-5 ps-4">1</td>
                    <td>
                      <Image
                        src={item.product_image.img_url}
                        width={50}
                        height={50}
                        alt=""
                      ></Image>
                    </td>
                    <td>{item.title}</td>
                    <td>Home Delivery</td>
                    <td>{item.quantity}</td>
                    <td className="capitalize">{item.variants.size}</td>
                    <td>
                      <span
                        className="w-4 h-4 rounded-full block"
                        style={{ background: `${item.variants.color}` }}
                      ></span>
                    </td>
                    <td>
                      {item.discount_price
                        ? item.discount_price
                        : item.regular_price}{" "}
                    </td>
                    <td>
                      {item.discount_price
                        ? item.discount_price * item.quantity
                        : item.regular_price * item.quantity}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="lg:w-72 lg:ms-auto px-6 pt-8 pb-6">
          <div className="flex justify-between items-center border-t py-2">
            <span>Total :</span>
            <span className="text-2xl font-semibold">
              {data?.data.payment_info.amount} ৳
            </span>
          </div>

          <div className="mt-4 text-right">
            <button title="Invoice">
              <FaPrint />
            </button>
          </div>
        </div>
        <input
          className="bg-sky-800 px-8 mt-3 ml-5 py-2 rounded text-white cursor-pointer"
          type="submit"
          value="update"
        />
      </form>
    </div>
  );
};

export default OrderDetails;
