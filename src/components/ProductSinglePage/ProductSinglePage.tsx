"use client";
import React from "react";
import ProductDetails from "./ProductDetails";
import RelatedProduct from "./RelatedProduct";
import { useSearchParams } from "next/navigation";
import { useQueryData } from "@/hooks/hook.query";
import Loading from "../common/Loading";
const ProductSinglePage = () => {
  const sech: any = useSearchParams();
  const ID = sech.get("_id");
  const { data: product, isLoading } = useQueryData(
    ["get single data"],
    `/api/v0/product/${ID}`
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <ProductDetails />
      <div className="mt-6">
        <h2 className="inline-block border-b-2 pb-2 border-b-slate-500 text-xl">
          Product Description
        </h2>
        <div className="mt-2">
          <p className="text-[15px] text-gray-600">
            {product?.data?.description}
          </p>
        </div>
      </div>
      <RelatedProduct categoryID={product?.data?.category_info?._id} />
    </div>
  );
};

export default ProductSinglePage;
