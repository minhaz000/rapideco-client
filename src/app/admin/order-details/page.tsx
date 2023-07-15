import Image from "next/image";
import React from "react";
import Qrcode from "../../../assets/qrcode.png";
import Img1 from "../../../assets/img.png";
import { FaPrint } from "react-icons/fa";
const OrderDetails = () => {
  return (
    <div className="shadow-[0_0_10px_5px_#d7d7d7bf] py-4">
      <h2 className="border-b pb-2 px-6">Order Details</h2>
      <div className="mt-6 px-6 lg:flex gap-4">
        <div className="lg:basis-1/2">
          <label className="mb-2 block">Payment Status</label>
          <select
            name=""
            id=""
            className="w-full border py-2 px-3 outline-none  text-xl text-slate-500"
          >
            <option value="unpaid">Unpaid</option>
            <option value="unpaid">Paid</option>
          </select>
        </div>
        <div className="lg:basis-1/2">
          <label className="mb-2 block">Delivery Status</label>
          <select
            name=""
            id=""
            className="w-full border py-2 px-3 outline-none  text-xl text-slate-500"
          >
            <option value="unpaid">Pending</option>
            <option value="unpaid">Completed</option>
            <option value="unpaid">On the way</option>
          </select>
        </div>
      </div>
      <div className="lg:flex gap-6 mt-14 px-6">
        <div className="basis-1/2">
          <Image src={Qrcode} alt="" width={150} height={150} />
          <h3 className="mt-2">Paul K. Jensen</h3>
          <p>customer@example.com</p>
          <p>
            3947 West Side Avenue Hackensack, NJ 07601, College, Alaska - 1254
          </p>
          <p>United States</p>
        </div>
        <div className="text-end basis-1/2 lg:ps-28 mt-10">
          <div className="flex items-center justify-between gap-4 mb-2">
            <span>Order #</span>
            <span>20220906-10185640</span>
          </div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <span>Order Status</span>
            <span className="bg-orange-500 text-white px-2 py-1 rounded text-[10px]">
              Pending
            </span>
          </div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <span>Order date</span>
            <span>06-09-2022 10:18 AM</span>
          </div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <span>Total</span>
            <span>$48.450</span>
          </div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <span>Payment method</span>
            <span>Cash On Delivery</span>
          </div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <span>Additional Info</span>
            <span>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire,
            </span>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-3 p-4">
        <table className="table  w-[1130px] lg:w-full border">
          <thead>
            <tr className="border text-xs font-normal ">
              <th className="py-3 text-slate-500 ps-4 text-start">#</th>
              <th className="py-3 text-slate-500 text-start">Photo</th>
              <th className="py-3 text-slate-500 text-start">DESCRIPTION</th>
              <th className="py-3 text-slate-500 text-start">DELIVERY TYPE</th>
              <th className="py-3 text-slate-500 text-start">QTY</th>
              <th className="py-3 text-slate-500 text-start">PRICE</th>
              <th className="py-3 text-slate-500 text-start">TOTAL</th>
            </tr>
          </thead>
          <tbody className="border pt-2">
            <tr className="text-xs font-normal text-start border-b">
              <td className="py-5 ps-4">1</td>
              <td>
                <Image src={Img1} width={50} height={50} alt=""></Image>
              </td>
              <td>Gilda Men is Crew T-Shirts, Multipack</td>
              <td>Home Delivery</td>
              <td>1</td>
              <td>$30.000</td>
              <td>$30.000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="lg:w-72 lg:ms-auto px-6 pt-8 pb-6">
        <div className="flex justify-between items-center border-t py-2">
          <span>Sub Total :</span>
          <span>$30.000</span>
        </div>
        <div className="flex justify-between items-center border-t py-2">
          <span>Tax :</span>
          <span>$0.000</span>
        </div>
        <div className="flex justify-between items-center border-t py-2">
          <span>Shipping :</span>
          <span>$0.000</span>
        </div>
        <div className="flex justify-between items-center border-t py-2">
          <span>Coupon :</span>
          <span>$0.000</span>
        </div>
        <div className="flex justify-between items-center border-t py-2">
          <span>Total :</span>
          <span className="text-2xl font-semibold">$30.000</span>
        </div>

        <div className="mt-4 text-right">
          <button title="Invoice">
            <FaPrint />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
