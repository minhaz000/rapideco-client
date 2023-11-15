"use client";
import React from "react";
import ProductDetails from "./ProductDetails";
import RelatedProduct from "./RelatedProduct";
import { useSearchParams } from "next/navigation";
import { useQueryData } from "@/hooks/hook.query";

const ProductSinglePage = () => {
  const sech = useSearchParams();
  const ID = sech.get("_id");
  const { data: product } = useQueryData(["get single data"], `/api/v0/product/${ID}`);
  return (
    <div>
      <ProductDetails data={product?.data} />
      <RelatedProduct categoryID={product?.data?.category_info?._id} />
    </div>
  );
};

export default ProductSinglePage;
