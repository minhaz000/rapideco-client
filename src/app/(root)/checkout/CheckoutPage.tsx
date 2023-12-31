"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm as useform, SubmitHandler } from "react-hook-form";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FormValues from "@/interface/checkout";
import { toast } from "react-toastify";
import axios from "@/hooks/hook.axios";
import axios2 from "axios";
import { useQueryData } from "@/hooks/hook.query";
const CheckoutPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { register, reset, handleSubmit } = useform<FormValues>();
  const { data: payments } = useQueryData(
    ["get payment methods"],
    "/api/v0/payments?"
  );
  const handleCheckOut: SubmitHandler<FormValues> = async (data) => {
    const Cart = await axios.get("/api/v0/cart");
    data.ordered_items = Cart.data.data.items;
    data.payment_info = {
      amount: Cart.data.data.subtotal,
      method_name: "",
      method_img_url: "",
      status: data?.payment_info?.trx_id ? "paid" : "unpaid",
    };
    data.payment_info.method_name = payments?.data[tabIndex].method_name;
    data.payment_info.method_img_url =
      payments.data[tabIndex].method_img.img_url;
    axios
      .post("/api/v0/order", data)
      .then((res) => {
        axios.delete(`/api/v0/cart/${Cart.data.data._id}`);
        toast.success("order placed successfully");
        axios2.post("/api/sentmail", { order: res.data?.data });
        reset();
      })
      .catch((error: any) =>
        toast.error(error.message ? error.message : error?.data.message)
      );
  };

  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-12 mt-6">
      <h2 className="text-center text-3xl font-semibold mt-10">
        Checkout Page
      </h2>
      <form onSubmit={handleSubmit(handleCheckOut)}>
        <div className="lg:flex gap-6 mt-14">
          <div className="lg:basis-7/12 shadow-xl border rounded py-3 px-5">
            <h3 className="text-center text-lg pt-3 pb-5">
              To confirm your order , please enter your details
            </h3>
            <div>
              <label>Name</label> <br />
              <input
                {...register("user_info.name")}
                type="text"
                placeholder="enter your name"
                className="border w-full py-2 px-3 rounded outline-none mt-2"
              />
            </div>
            <div className="mt-3">
              <label>Address </label> <br />
              <input
                {...register("user_info.address")}
                type="text"
                placeholder="enter your address"
                className="border w-full py-2 px-3 rounded outline-none mt-2"
              />
            </div>
            <div className="mt-3">
              <label>Phone</label> <br />
              <input
                {...register("user_info.phone")}
                type="number"
                placeholder="enter your phone"
                className="border w-full py-2 px-3 rounded outline-none mt-2"
              />
            </div>
            <div className="mt-3">
              <label>Email</label> <br />
              <input
                {...register("user_info.email")}
                type="text"
                placeholder="enter your email"
                className="border w-full py-2 px-3 rounded outline-none mt-2"
              />
            </div>
            <div className="mt-3">
              <label>Select your area</label> <br />
              <select
                name=""
                id=""
                className="border w-full py-2 px-3 rounded outline-none mt-2"
              >
                <option value="in-dhaka">In Dhaka City</option>
                <option value="out-of-dhaka">Out of Dhaka City</option>
              </select>
            </div>
          </div>
          <div className="lg:basis-5/12 shadow-xl border rounded-md py-3 px-5 mt-4 lg:mt-0">
            <h3 className="text-center text-lg pt-3 pb-5">
              পেমেন্ট মেথড সিলেক্ট করুন:
            </h3>
            {payments?.data && (
              <div className="mt-3">
                <Tabs
                  selectedIndex={tabIndex}
                  onSelect={(index) => setTabIndex(index)}
                >
                  <TabList>
                    {payments?.data.map((item: any, i: number) => {
                      return (
                        <Tab key={i}>
                          <div className="flex gap-2 items-center">
                            <Image
                              src={item.method_img.img_url}
                              alt=""
                              width={30}
                              height={30}
                            />
                            <span> {item.method_name}</span>
                          </div>
                        </Tab>
                      );
                    })}
                  </TabList>

                  {payments?.data.map((item: any, i: number) => {
                    return (
                      <TabPanel key={i}>
                        <div>
                          {item?.method_descrption}
                          {item.method_code !== "cod" && (
                            <div className="mt-3">
                              <label>
                                Your {item.method_name} Account Number
                              </label>{" "}
                              <br />
                              <input
                                {...register("payment_info.number")}
                                type="text"
                                placeholder="01XXXXXXXXX"
                                className="border w-full py-2 px-3 rounded outline-none mt-2"
                                required
                              />
                              <br />
                              <label>
                                {item.method_name} Transaction ID
                              </label>{" "}
                              <br />
                              <input
                                {...register("payment_info.trx_id")}
                                type="text"
                                placeholder="xxxxxx"
                                required
                                className="border w-full py-2 px-3 rounded outline-none mt-2"
                              />
                            </div>
                          )}
                        </div>
                      </TabPanel>
                    );
                  })}
                </Tabs>
                <button
                  type="submit"
                  className="mt-3 bg-sky-700 text-white py-2 px-4 rounded w-full "
                >
                  Place Order
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default CheckoutPage;
