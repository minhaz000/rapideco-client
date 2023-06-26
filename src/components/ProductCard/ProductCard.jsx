"use clients";

import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border border-[#E9ECEF] rounded-md h-full flex flex-col">
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt="product image"
            className="w-full transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="py-3 px-4">
          <div>
            <h2 className="text-[13px] capitalize hover:text-green-600">
              {product.product_name.length > 47
                ? product.product_name.slice(0, 48) + "..."
                : product.product_name}
            </h2>
          </div>
          <div className="flex gap-3 mt-1">
            <p className="line-through text-gray-400 text-sm">
              ${product.discount_price}
            </p>
            <p className="text-[#3bb77e] font-semibold text-sm">
              ${product.regular_price}
            </p>
          </div>
        </div>
        <div className="mt-auto">
          <button className="bg-[#3bb77e] text-white px-3 py-2 text-[12px] rounded-sm w-full font-semibold transition-colors duration-300 hover:bg-[#fdc040]">
            Add To Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
