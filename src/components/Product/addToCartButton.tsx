"use client";
import React from "react";
import axios from "@/hooks/hook.axios";
import { toast } from "react-toastify";
import { BsCart2 } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useRootContext } from "@/context/root.context";

function AddToCartButton({
  product,
  productID,
  Q,
  A,
}: {
  product: any;
  productID: string;
  Q?: any;
  A?: any;
}) {
  const router = useRouter();
  const { Cart, settingsData }: any = useRootContext();

  const handleOrderNow = (ID: string) => {
    try {
      if (product?.variants.length > 0 && Object.keys(A.variants).length < 0) {
        throw new Error("variants is not selected");
      }
      const url =
        Q > 0
          ? `/api/v0/cart/add?productID=${ID}&quantity=${Q}`
          : `/api/v0/cart/add?productID=${ID}`;
      axios
        .put(url, A)
        .then(() => {
          toast.success("product added to cart");
          Cart.refetch().then(() => router.push("/checkout"));
        })
        .catch((error: any) =>
          toast.error(error.message ? error.message : error?.data.message)
        );
    } catch (error) {
      toast.error(error.message ? error.message : error?.data.message);
    }
  };
  return (
    <>
      <button
        style={{ background: `${settingsData?.header?.themeColor}` }}
        onClick={() => handleOrderNow(productID)}
        className=" text-white px-3 py-2 text-[13px] rounded-sm w-full font-semibold transition-colors duration-300 flex items-center justify-center gap-1"
      >
        <BsCart2 />
        অর্ডার করুন
      </button>
    </>
  );
}

export default AddToCartButton;
