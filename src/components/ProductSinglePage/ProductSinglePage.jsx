"use client";
import React from "react";
import ProductDetails from "./ProductDetails";
import RelatedProduct from "./RelatedProduct";
import { useSearchParams } from "next/navigation";
import { useQueryData } from "@/hooks/hook.query";

const ProductSinglePage = () => {
  const sech = useSearchParams();
  const ID = sech.get("_id");
  const { data: product } = useQueryData(
    ["get single data"],
    `/api/v0/product/${ID}`
  );
  return (
    <div>
      <ProductDetails />
      <div className="mt-6">
        <h2 className="inline-block border-b-2 pb-2 border-b-slate-500 text-xl">
          Product Description
        </h2>
        <div className="mt-2">
          <p className="text-[13px] text-gray-500">
            আপনার যত প্রশ্ন আছে তা বর্ননার সাথে মিলিয়ে অথবা আমাদের কাছ থেকে জেনে
            পন্য অর্ডার করুন। ছবি এবং বর্ণনার সাথে পন্যের মিল থাকলে পণ্য ফেরত
            নেয়া হবে না । তবে আপনি চাইলে আপনার গ্রহন করা পন্যের সম মুল্যের কি বা
            বেশি মুল্যের পণ্য নিতে পারবেন (যে টাকা বেশি হবে তা প্রদান করতে হবে )
            । কম মুল্যের পণ্য নেয়া যাবে না । পণ্য আনা নেয়ার খরচ আপনাকে দিতে হবে।
            যে সকল পন্যে ওয়ারেন্টি আছে তার ওয়ারেন্টি সার্ভিস আমরা প্রদান
            করবো।তবে কিছু কিছু ক্ষেত্রে পন্যের ব্রান্ড আপনাকে সার্ভিস প্রদান
            করবে তবে সে ক্ষেত্রে আপনার নিকটস্থ সার্ভিস পয়েন্ট থেকে সার্ভিস নিতে
            পারবেন। পণ্য সার্ভিস করতে যাওয়া আসা বা পাঠানো এবং রিটার্ন করার খরজ
            আপনাকে বহন করতে হবে।
          </p>
        </div>
      </div>
      <RelatedProduct categoryID={product?.data?.category_info?._id} />
    </div>
  );
};

export default ProductSinglePage;
