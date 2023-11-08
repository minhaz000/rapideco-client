import Link from "next/link";
import React from "react";
import product from "@/interface/product";
const ShopProductCard = ({ product }: { product: product }) => {
  return (
    <Link href={`/product/${product._id}`}>
      <div className={`border border-[#E9ECEF] rounded-md h-full flex flex-col`}>
        <div className="overflow-hidden relative">
          <p className="absolute top-2 left-0 bg-white px-2 py-2 z-40 uppercase text-[12px] rounded-e-full shadow-xl flex items-center gap-2">
            Off
            <span className="bg-green-600 text-white rounded-full w-7 h-7  text-[11px] flex justify-center items-center">
              24%
            </span>
          </p>
          <img
            src={product?.product_image?.img_url}
            alt="product image"
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
        <div className="mt-auto">
          <button className="bg-[#3bb77e] text-white px-3 py-2 text-[12px] rounded-sm w-full font-semibold transition-colors duration-300 hover:bg-[#fdc040]">
            Order Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ShopProductCard;
