"use client";
import React from "react";
import axios from "@/hooks/hook.axios";
import { toast } from "react-toastify";

function AddToCartButton({ productID }: { productID: string }) {
  const hadleAddToCart = (ID: string) => {
    console.log(ID);
    axios
      .put(`/api/v0/cart/add?productID=${ID}`)
      .then(() => {
        toast.success("product added to cart");
      })
      .catch((error: any) => toast.error(error.message ? error.message : error?.data.message));
  };
  return (
    <>
      <button
        onClick={() => hadleAddToCart(productID)}
        className="bg-[#3bb77e] text-white px-3 py-2 text-[12px] rounded-sm w-full font-semibold transition-colors duration-300 hover:bg-[#fdc040]"
      >
        Add to Cart
      </button>
    </>
  );
}

export default AddToCartButton;
