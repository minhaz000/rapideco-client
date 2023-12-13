"use client";
import React, { Suspense } from "react";
// import useProducts from "@/hooks/useProducts";
import ShopProductCard from "./ShopProductCard";
import Loading from "@/components/common/Loading";

const ShopProduct = ({ products }: { products: any }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      <Suspense fallback={<Loading />}>
        {products.map((product: any, index: number) => (
          <ShopProductCard product={product} key={index} />
        ))}
      </Suspense>
    </div>
  );
};

export default ShopProduct;
