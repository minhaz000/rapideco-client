"use client";
import React, { Suspense } from "react";
import Loading from "@/components/common/Loading";
import ProductCard from "@/components/Product/ProductCard";

const ShopProduct = ({ products }: { products: any }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      <Suspense fallback={<Loading />}>
        {products.map((product: any, index: number) => (
          <ProductCard product={product} key={index} />
        ))}
      </Suspense>
    </div>
  );
};

export default ShopProduct;
