"use client";
import React from "react";
import axios from "@/hooks/hook.axios";
import { toast } from "react-toastify";
import { BsCart2 } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useRootContext } from "@/context/root.context";

function AddToCartButton({ product, Q, A }: { product: any; Q?: any; A?: any }) {
  const router = useRouter();
  const { Cart, settingsData }: any = useRootContext();
  const findUnselectedVariantName = (variantData: any, activeVariant: any) => {
    const selectedOptions = new Set(Object.values(activeVariant));
    for (const variant of variantData) {
      const variantLabel = variant.value;
      const variantOptions = new Set(variant.attribute_options.map((option) => option.value));
      if (!(variantLabel in activeVariant) || !variantOptions.has(activeVariant[variantLabel])) {
        return variantLabel;
      }
    }
    return null;
  };
  const handleOrderNow = (ID: string) => {
    try {
      if (product?.variants?.length > 0 && Object.keys(A.variants).length < product?.variants?.length) {
        const variant = findUnselectedVariantName(product?.variants, A.variants);
        throw new Error(`${variant} is not selected`);
      }
      const url = Q > 0 ? `/api/v0/cart/add?productID=${ID}&quantity=${Q}` : `/api/v0/cart/add?productID=${ID}`;
      axios
        .put(url, A)
        .then(() => {
          toast.success("product added to cart");
          Cart.refetch().then(() => router.push("/checkout"));
        })
        .catch((error: any) => toast.error(error.message ? error.message : error?.data.message));
    } catch (error) {
      toast.error(error.message ? error.message : error?.data.message);
    }
  };
  return (
    <>
      <button
        style={{ background: `${settingsData?.header?.themeColor}` }}
        onClick={() => handleOrderNow(product._id)}
        className=" text-white px-3 py-2 text-[13px] rounded-sm w-full font-semibold transition-colors duration-300 flex items-center justify-center gap-1"
      >
        <BsCart2 />
        অর্ডার করুন
      </button>
    </>
  );
}

export default AddToCartButton;
