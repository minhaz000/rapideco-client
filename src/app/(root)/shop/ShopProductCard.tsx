import Link from "next/link";
import React from "react";
import product from "@/interface/product";
import AddToCartButton from "@/components/Product/addToCartButton";
import Image from "next/image";
const ShopProductCard = ({ product }: { product: product }) => {
  return (
    <Link
      href={`/product?_id=${product._id}`}
      className="flex flex-col group duration-300 hover:border hover:border-[#00C9B4] hover:shadow-lg border p-1  sm:p-3 rounded-sm"
    >
      <div>
        <div className="overflow-hidden relative">
          <p className="absolute top-2 left-0 bg-white px-2 py-2 z-40 uppercase text-[12px] rounded-e-full shadow-xl flex items-center gap-2">
            Off
            <span className="bg-[#00C9B4] text-white rounded-full w-7 h-7  text-[11px] flex justify-center items-center">
              24%
            </span>
          </p>
          <Image
            src={product?.product_image?.img_url}
            alt="product image"
            className="h-[150px] sm:h-[180px] w-full object-cover object-top rounded"
            height={180}
            width={190}
          />
        </div>
        <div className="py-3 px-4 text-center">
          <div>
            <h2 className="text-[13px] capitalize hover:text-[#00C9B4]">
              {product.title.length > 47 ? product.title.slice(0, 48) + "..." : product.title}
            </h2>
          </div>
          <div className="flex justify-center gap-3 mt-1">
            <p className="text-[#00C9B4] font-semibold text-sm">Tk{product.regular_price}</p>
            <p className="line-through text-gray-400 text-sm">Tk{product.discount_price}</p>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <AddToCartButton productID={product._id} />
      </div>
    </Link>
  );
};

export default ShopProductCard;
