"use client";
import React from "react";
import ProductCard from "../Product/ProductCard";
import { useQueryData } from "@/hooks/hook.query";
const RelatedProduct = ({ categoryID }) => {
  const { data: products } = useQueryData(
    ["related pro", categoryID],
    `/api/v0/products?is_delete=false&status=active&category_info._id=${categoryID}`
  );

  return (
    <div className="mt-20">
      <h2 className="mb-3 text-xl font-semibold">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products?.data.map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
