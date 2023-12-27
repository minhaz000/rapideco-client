"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm as useform, SubmitHandler } from "react-hook-form";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FormValues from "@/interface/checkout";
import { toast } from "react-toastify";
import axios from "@/hooks/hook.axios";
import Iproduct from "@/interface/product";
import axios2 from "axios";
import { useMutationData, useQueryData } from "@/hooks/hook.query";
import { useRootContext } from "@/context/root.context";
import { useRouter } from "next/navigation";
const CheckoutPage = () => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const [shipping, setShipping] = useState("0");
  const { Cart, settingsData }: any = useRootContext();
  const newOrder = useMutationData(["order place"], "post", "api/v0/order");
  const { register, reset, handleSubmit, setValue } = useform<FormValues>();
  const { data: payments } = useQueryData(
    ["get payment methods"],
    "/api/v0/payments?"
  );
  const handleCheckOut: SubmitHandler<FormValues> = async (data) => {
    if (Cart?.data?.data?.items.length < 1) {
      toast.error("your cart is empty");
      return null;
    }
    data.ordered_items = Cart?.data?.data.items;
    data.payment_info = {
      amount: Cart.data?.data.subtotal,
      method_name: "",
      method_img_url: "",
      status: data?.payment_info?.trx_id ? "paid" : "unpaid",
    };
    data.payment_info.method_name = payments?.data[tabIndex].method_name;
    data.payment_info.method_img_url =
      payments.data[tabIndex].method_img.img_url;
    console.log(data.user_info.delivery);
    newOrder.mutate(data as any, {
      onSuccess: (res: any) => {
        axios
          .delete(`/api/v0/cart/${Cart.data.data._id}`)
          .then(() => Cart.refetch());
        toast.success("Order placed successfully");
        axios2.post("/api/sentmail", { order: res.data });
        reset();
        router.push("/order-success");
      },
      onError: (error: any) =>
        toast.error(error.message ? error.message : error?.data.message),
    });
  };
  const handleQuantityPlus = (ID: string, Q?: number) => {
    axios
      .put(`/api/v0/cart/add?productID=${ID}`)
      .then(() => {
        toast.success("product added to cart");
        Cart.refetch();
      })
      .catch((error: any) =>
        toast.error(error.message ? error.message : error?.data.message)
      );
  };
  const handleQuantityMinus = (ID: string) => {
    axios
      .put(`/api/v0/cart/add?productID=${ID}&add=-1`)
      .then(() => {
        toast.success("product added to cart");
        Cart.refetch();
      })
      .catch((error: any) =>
        toast.error(error.message ? error.message : error?.data.message)
      );
  };
  const handleRemove = (ID: string) => {
    axios
      .put(`/api/v0/cart/remove?productID=${ID}`)
      .then(() => {
        toast.success("product remove from cart");
        Cart.refetch();
      })
      .catch((error: any) =>
        toast.error(error.message ? error.message : error?.data.message)
      );
  };

  if (Cart?.data?.data?.items.length < 1) {
    router.push("/shop");
  }

  const validationError: any = newOrder.error?.data?.errors;
  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-12 mt-2 lg:mt-6">
      <form onSubmit={handleSubmit(handleCheckOut)}>
        <div className="flex lg:flex-row flex-col-reverse gap-6 md:mt-14">
          <div className="lg:basis-5/12">
            <div className=" border rounded py-3 px-5">
              <h3 className="text-center text-[16px] pt-3 pb-5">
                অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, লিখে
                অর্ডার কনফার্ম করুন বাটনে ক্লিক করুন
              </h3>
              <div>
                <label className="text-[14px]">আপনার নাম</label> <br />
                <input
                  {...register("user_info.name")}
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  className={`border w-full py-2 px-2 rounded outline-none mt-2 text-[14px] ${
                    validationError?.["user_info.name"] &&
                    "border-red-600 text-red-400"
                  }`}
                />
              </div>
              <div className="mt-3">
                <label className="text-[14px]">আপনার ঠিকানা</label> <br />
                <input
                  {...register("user_info.address")}
                  type="text"
                  placeholder="আপনার ঠিকানা লিখুন"
                  className={`border w-full py-2 px-2 rounded outline-none mt-2 text-[14px] ${
                    validationError?.["user_info.address"] &&
                    "border-red-600 text-red-400"
                  }`}
                />
              </div>
              <div className="mt-3">
                <label className="text-[14px]">আপনার মোবাইল</label> <br />
                <input
                  {...register("user_info.phone")}
                  type="number"
                  placeholder="আপনার মোবাইল লিখুন"
                  className={`border w-full py-2 px-2 rounded outline-none mt-2 text-[14px] ${
                    validationError?.["user_info.phone"] &&
                    "border-red-600 text-red-400"
                  }`}
                />
              </div>
              {/* <div className="mt-3">
              <label>আপনার মেইল</label> <br />
              <input
                {...register("user_info.email")}
                type="text"
                placeholder="আপনার মেইল লিখুন"
                className="border w-full py-2 px-2 rounded outline-none mt-2"
              />
            </div> */}
              <div className="mt-3">
                <label className="text-[14px]">আপনার এরিয়া সিলেক্ট করুন</label>{" "}
                <br />
                <select
                  id=""
                  onChange={(e: any) => {
                    const item = JSON.parse(e.target.value);
                    setValue("user_info.delivery", item);
                    setShipping(item.cost);
                  }}
                  className={`border w-full py-2 px-2 rounded outline-none mt-2 text-[14px] ${
                    validationError?.["user_info.delivery.zone"] &&
                    "border-red-600 text-red-400"
                  }`}
                >
                  <option value={JSON.stringify({ zone: "", cost: 0 })}>
                    আপনার এরিয়া সিলেক্ট করুন
                  </option>
                  {settingsData?.shipping?.map((item: any, i: number) => {
                    return (
                      <option key={i} value={JSON.stringify(item)}>
                        {item.zone}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button
                type="submit"
                className="mt-3 bg-sky-700 text-white py-2 px-4 rounded w-full "
              >
                অর্ডার কনফার্ম করুন
              </button>
            </div>
          </div>
          <div className="lg:basis-7/12 ">
            <div className="border rounded-md py-3 px-5 mt-4 lg:mt-0">
              <h3 className="text-lg pt-3 pb-5 font-semibold">আপনার অর্ডার</h3>
              <div>
                <div className="mt-2 overflow-x-auto ">
                  <table className="table w-[600px] sm:w-full border ">
                    <thead>
                      <tr className="border font-normal">
                        <th className="py-3  border-y ps-4 text-start text-[16px]">
                          Item
                        </th>
                        <th className="py-3 border-y ps-4 text-start text-[16px]">
                          Price
                        </th>
                        <th className="py-3 border-y ps-4 text-start text-[16px]">
                          Quantity
                        </th>
                        <th className="py-3 border-y ps-4 text-start text-[16px]">
                          Total
                        </th>
                        <th className="py-3 border-y ps-4 text-start text-[16px]">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border pt-2">
                      {Cart?.data?.data?.items.map(
                        (item: Iproduct, i: number) => {
                          return (
                            <tr
                              key={i}
                              className="text-xs font-normal text-start"
                            >
                              <td className="py-3 ps-4 border-b">
                                <div className="flex items-center gap-2">
                                  <Image
                                    src={item?.product_image?.img_url}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="md:h-[40px] object-cover"
                                  />
                                  <h3 className="text-[15px] text-slate-500">
                                    {item?.title}
                                  </h3>
                                </div>
                              </td>
                              <td className="border-b">
                                Tk
                                {item?.discount_price
                                  ? item?.discount_price
                                  : item?.regular_price}
                              </td>
                              <td className="border-b">
                                <div className="flex gap-1 me-3">
                                  <span
                                    onClick={() =>
                                      handleQuantityMinus(item?._id)
                                    }
                                    className="border border-gray-300 px-1 rounded-sm cursor-pointer"
                                  >
                                    -
                                  </span>
                                  <input
                                    type="text"
                                    value={item?.quantity}
                                    className="w-10 border border-gray-300 outline-none text-center"
                                    onChange={() => {}}
                                  />
                                  <span
                                    onClick={() =>
                                      handleQuantityPlus(item?._id)
                                    }
                                    className="border border-gray-300 px-1 rounded-sm cursor-pointer"
                                  >
                                    +
                                  </span>
                                </div>
                              </td>
                              <td className="border-b">
                                Tk
                                {(item?.discount_price
                                  ? item?.discount_price
                                  : item?.regular_price) * item?.quantity}
                              </td>
                              <td className="border-b">
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleRemove(item?._id);
                                  }}
                                  className="bg-red-600 px-2 py-1 rounded text-white"
                                >
                                  X
                                </button>
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="mt-3">
                  <div className="border rounded px-5 pt-3 pb-5">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Sub Total:</span>
                        <span>Tk {Cart?.data?.data?.subtotal}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="font-semibold">Shipping:</span>
                        <span>Tk {shipping}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1 border-t pt-1">
                        <span className="font-semibold">Total:</span>
                        <span>
                          Tk {Cart?.data?.data?.subtotal + parseInt(shipping)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CheckoutPage;
