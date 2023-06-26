"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { BsArrowRightShort } from "react-icons/bs";
const Product = ({ sectionTitle }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-[#3bb77e] capitalize">
          {sectionTitle}
        </h2>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm hover:text-[#3bb77e]"
        >
          See More <BsArrowRightShort />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </section>
  );
};

export default Product;
