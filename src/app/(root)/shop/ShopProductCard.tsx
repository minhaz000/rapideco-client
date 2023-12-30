import Link from "next/link";
import React from "react";
import product from "@/interface/product";
import Image from "next/image";
import { useRootContext } from "@/context/root.context";
import AddToCartButton from "@/components/Product/addToCartButton";
const ShopProductCard = ({ product }: { product: product }) => {
  const { settingsData }: any = useRootContext();
  function calculateDiscountPercentage(regularPrice, discountPrice) {
    if (regularPrice <= 0 || discountPrice <= 0) {
      throw new Error("Prices must be greater than zero");
    }
    const priceDifference = regularPrice - discountPrice;
    const discountPercentage = (priceDifference / regularPrice) * 100;

    return Math.round(discountPercentage);
  }
  return (
    <div className="flex flex-col group duration-300 hover:shadow-xl border p-1 sm:p-2 rounded-sm bg-white">
      <Link href={`/product?_id=${product._id}`}>
        <div>
          <div className="overflow-hidden relative">
            {product.discount_price && (
              <p className="absolute top-2 left-0 bg-white px-2 py-2 z-40 uppercase text-[12px] rounded-e-full shadow-xl flex items-center gap-2">
                Off
                <span
                  style={{ background: `${settingsData?.header?.themeColor}` }}
                  className=" text-white rounded-full w-9 h-9  text-[11px] flex justify-center items-center"
                >
                  {calculateDiscountPercentage(product.regular_price, product.discount_price)}%
                </span>
              </p>
            )}

            <Image
              src={product?.product_image?.img_url}
              alt="product image"
              className="h-[150px] sm:h-[180px] w-full object-cover object-top rounded"
              height={180}
              width={180}
            />
          </div>
          <div className="py-3 px-4 text-center">
            <div>
              <h2 className="capitalize font-semibold">
                {product.title.length > 47 ? product.title.slice(0, 48) + "..." : product.title}
              </h2>
            </div>
            <div className="flex justify-center gap-3 mt-1">
              <p className="font-semibold text-sm" style={{ color: `${settingsData?.header?.themeColor}` }}>
                Tk{product.discount_price}
              </p>
              <p className="line-through text-gray-400 text-sm"> Tk{product.regular_price}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="mt-auto">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ShopProductCard;
