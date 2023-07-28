"use client";
import React from "react";
import useProducts from "@/hooks/useProducts";
import ShopProductCard from "./ShopProductCard";

const ShopProduct = () => {
  const [products] = useProducts();
  console.log(products);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {products.map((product, index) => (
        <ShopProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default ShopProduct;
