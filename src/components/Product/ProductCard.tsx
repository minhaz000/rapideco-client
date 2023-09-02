import Link from "next/link";
import React from "react";
import Image from "next/image";
import img1 from "@/assets/p2.jpg";
import AddToCartButton from "./addToCartButton";
const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="border border-[#E9ECEF] rounded-md h-full flex flex-col">
      <Link href={`/product/${product._id}`}>
        <div className="overflow-hidden relative">
          <p className="absolute top-2 left-0 bg-white px-2 py-2 z-40 uppercase text-[12px] rounded-e-full shadow-xl flex items-center gap-2">
            Off
            <span className="bg-green-600 text-white rounded-full w-7 h-7  text-[11px] flex justify-center items-center">
              24%
            </span>
          </p>

          <Image
            src={img1}
            alt="icon"
            width={100}
            height={100}
            className="w-full transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="py-3 px-4 text-center">
          <div>
            <h2 className="text-[13px] capitalize hover:text-green-600">
              {product.title.length > 47 ? product.title.slice(0, 48) + "..." : product.title}
            </h2>
          </div>
          <div className="flex justify-center gap-3 mt-1">
            <p className="text-[#3bb77e] font-semibold text-sm">Tk{product.regular_price}</p>
            <p className="line-through text-gray-400 text-sm">Tk{product.discount_price}</p>
          </div>
        </div>
      </Link>
      <div className="mt-auto">
        <AddToCartButton productID={product._id} />
      </div>
    </div>
  );
};

export default ProductCard;
