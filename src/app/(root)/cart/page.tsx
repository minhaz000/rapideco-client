"use client";

import React, { useState } from "react";
import P1 from "../../../assets/img.png";
import Image from "next/image";
import { useQueryData } from "@/hooks/hook.query";
import Iproduct from "@/interface/product";
import axios from "@/hooks/hook.axios";
import { toast } from "react-toastify";
const Cart = () => {
  const { data: Cart, refetch } = useQueryData(["get cart"], "/api/v0/cart");
  console.log(Cart);
  const handleQuantityPlus = (ID: string, Q?: number) => {
    axios
      .put(`/api/v0/cart/add?productID=${ID}`)
      .then(() => {
        toast.success("product added to cart");
        refetch();
      })
      .catch((error: any) => toast.error(error.message ? error.message : error?.data.message));
  };
  const handleQuantityMinus = (ID: string) => {
    axios
      .put(`/api/v0/cart/add?productID=${ID}&add=-1`)
      .then(() => {
        toast.success("product added to cart");
        refetch();
      })
      .catch((error: any) => toast.error(error.message ? error.message : error?.data.message));
  };
  const handleRemove = (ID: string) => {
    axios
      .put(`/api/v0/cart/remove?productID=${ID}`)
      .then(() => {
        toast.success("product remove from cart");
        refetch();
      })
      .catch((error: any) => toast.error(error.message ? error.message : error?.data.message));
  };

  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-6">
      <h2 className="text-center text-3xl font-semibold">Your Cart (3 Items)</h2>
      <div className="overflow-x-auto mt-3 p-4">
        <table className="table w-[600px] lg:w-full border">
          <thead>
            <tr className="border text-xs font-normal ">
              <th className="py-3 bg-green-600 text-white ps-4 text-start tex-xl">Item</th>
              <th className="py-3 bg-green-600 text-white ps-4 text-start tex-xl">Price</th>
              <th className="py-3 bg-green-600 text-white ps-4 text-start tex-xl">Quantity</th>
              <th className="py-3 bg-green-600 text-white ps-4 text-start tex-xl">Total</th>
              <th className="py-3 bg-green-600 text-white ps-4 text-start tex-xl">Action</th>
            </tr>
          </thead>
          <tbody className="border pt-2">
            {Cart?.data?.items.map((item: Iproduct, i: number) => {
              return (
                <tr key={i} className="text-xs font-normal text-start border-b">
                  <td className="py-5 ps-4">
                    <div className="flex items-center gap-2">
                      <Image src={P1} alt="" width={50} height={50} />
                      <h3 className="text-lg text-slate-500">{item.title}</h3>
                    </div>
                  </td>
                  <td>{item.discount_price ? item.discount_price : item.regular_price}</td>
                  <td>
                    <div className="flex gap-1 me-3">
                      <span
                        onClick={() => handleQuantityMinus(item._id)}
                        className="border border-gray-300 px-1 rounded-sm cursor-pointer"
                      >
                        -
                      </span>
                      <input
                        type="number"
                        value={item.quantity}
                        className="w-10 border border-gray-300 outline-none text-center"
                      />
                      <span
                        onClick={() => handleQuantityPlus(item._id)}
                        className="border border-gray-300 px-1 rounded-sm cursor-pointer"
                      >
                        +
                      </span>
                    </div>
                  </td>
                  <td>{(item.discount_price ? item.discount_price : item.regular_price) * item.quantity}</td>
                  <td>
                    <button onClick={() => handleRemove(item._id)} className="bg-red-600 px-2 py-1 rounded text-white">
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-3 p-4">
        <div className="w-full md:w-4/12 ms-auto border rounded px-5 pt-3">
          <div className="flex justify-between items-center">
            <span className="font-bold">Sub Total:</span>
            <span>$100.00</span>
          </div>
          <div className="flex justify-between items-center my-5">
            <span className="font-bold">Sales Tax:</span>
            <span>$20.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold">Grand Total:</span>
            <span>$120.00</span>
          </div>
          <button className="bg-green-700 text-white w-full py-2 rounded-md mt-3">Proceed to Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
