"use client";
import React from "react";
import ProductDetails from "./ProductDetails";
import RelatedProduct from "./RelatedProduct";

const ProductSinglePage = () => {
  return (
    <div>
      <ProductDetails />
      <RelatedProduct />
    </div>
  );
};

export default ProductSinglePage;
