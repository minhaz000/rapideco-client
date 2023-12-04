"use client";
import Image from "next/image";
import { useQueryData } from "@/hooks/hook.query";
import Iproduct from "@/interface/product";
import axios from "@/hooks/hook.axios";
import { toast } from "react-toastify";
import Link from "next/link";
import Loading from "@/components/common/Loading";
const CartPage = () => {
  const {
    data: Cart,
    refetch,
    isLoading,
  } = useQueryData(["get cart"], "/api/v0/cart");
  console.log(Cart);
  const handleQuantityPlus = (ID: string, Q?: number) => {
    axios
      .put(`/api/v0/cart/add?productID=${ID}`)
      .then(() => {
        toast.success("product added to cart");
        refetch();
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
        refetch();
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
        refetch();
      })
      .catch((error: any) =>
        toast.error(error.message ? error.message : error?.data.message)
      );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="max-w-screen-xl mx-auto px-3 lg:px-32 mt-6">
          <h2 className="text-center text-2xl font-semibold">
            Your Cart
            {Cart?.data ? (
              <span> {Cart?.data?.items?.length} Items</span>
            ) : (
              <span> 0 Items</span>
            )}
          </h2>
          <div className="overflow-x-auto mt-2 md:p-4">
            <table className="table w-[600px] lg:w-full border">
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
                {Cart?.data?.items.map((item: Iproduct, i: number) => {
                  return (
                    <tr key={i} className="text-xs font-normal text-start">
                      <td className="py-5 ps-4 border-b">
                        <div className="flex items-center gap-2">
                          <Image
                            src={item?.product_image?.img_url}
                            alt=""
                            width={55}
                            height={60}
                            className="md:h-[50px] object-cover"
                          />
                          <h3 className="text-lg text-slate-500">
                            {item?.title}
                          </h3>
                        </div>
                      </td>
                      <td className="border-b">
                        {item?.discount_price
                          ? item?.discount_price
                          : item?.regular_price}
                      </td>
                      <td className="border-b">
                        <div className="flex gap-1 me-3">
                          <span
                            onClick={() => handleQuantityMinus(item?._id)}
                            className="border border-gray-300 px-1 rounded-sm cursor-pointer"
                          >
                            -
                          </span>
                          <input
                            type="number"
                            value={item?.quantity}
                            className="w-10 border border-gray-300 outline-none text-center"
                          />
                          <span
                            onClick={() => handleQuantityPlus(item?._id)}
                            className="border border-gray-300 px-1 rounded-sm cursor-pointer"
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td className="border-b">
                        {(item?.discount_price
                          ? item?.discount_price
                          : item?.regular_price) * item?.quantity}
                      </td>
                      <td className="border-b">
                        <button
                          onClick={() => handleRemove(item?._id)}
                          className="bg-red-600 px-2 py-1 rounded text-white"
                        >
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
            <div className="w-full md:w-4/12 ms-auto border rounded px-5 pt-3 pb-5">
              <div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Sub Total:</span>
                  <span>Tk {Cart?.data?.subtotal}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="font-semibold">Shipping:</span>
                  <span>Tk 00</span>
                </div>
                <div className="flex justify-between items-center mt-1 border-t pt-1">
                  <span className="font-semibold">Total:</span>
                  <span>Tk {Cart?.data?.subtotal}</span>
                </div>
              </div>

              <div className="mt-4 text-right">
                <Link
                  href={"/checkout"}
                  className="bg-green-700 text-white w-full text-sm py-[6px] px-3 rounded-md mt-3"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CartPage;
