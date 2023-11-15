"use client";
import React from "react";
// import useProducts from "../../hooks/useProducts";
import ProductCard from "../Product/ProductCard";
const RelatedProduct = () => {
  const products = [];
  return (
    <div className="mt-20">
      <h2 className="mb-3 text-xl font-semibold">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products?.map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
