"use client";
import React from "react";
import axios from "@/hooks/hook.axios";
import { toast } from "react-toastify";
import { BsCart2 } from "react-icons/bs";

function AddToCartButton({ productID }: { productID: string }) {
  const handleAddToCart = (ID: string) => {
    console.log(ID);
    axios
      .put(`/api/v0/cart/add?productID=${ID}`)
      .then(() => {
        toast.success("product added to cart");
      })
      .catch((error: any) =>
        toast.error(error.message ? error.message : error?.data.message)
      );
  };
  return (
    <>
      <button
        onClick={() => handleAddToCart(productID)}
        className="bg-[#7daf3e] text-white px-3 py-2 text-[13px] rounded-sm w-full font-semibold transition-colors duration-300 hover:bg-[#6a9733] flex items-center justify-center gap-1"
      >
        <BsCart2 />
        অর্ডার করুন
      </button>
    </>
  );
}

export default AddToCartButton;
