import Link from "next/link";
import React from "react";
import AddToCartButton from "./addToCartButton";
import Image from "next/image";
import { useRootContext } from "@/context/root.context";
const ProductCard = ({ product }: { product: any }) => {
  function calculateDiscountPercentage(regularPrice, discountPrice) {
    if (regularPrice <= 0 || discountPrice <= 0) {
      throw new Error("Prices must be greater than zero");
    }
    // Calculate the percentage discount
    const priceDifference = regularPrice - discountPrice;
    const discountPercentage = (priceDifference / regularPrice) * 100;
    return Math.round(discountPercentage);
  }
  const { settingsData }: any = useRootContext();
  return (
    <div className="group duration-300 border p-1 sm:p-2 rounded-sm bg-white ">
      <div className="flex flex-col ">
        <Link href={`/product?_id=${product._id}`}>
          <div className="overflow-hidden relative group">
            {product.discount_price && (
              <p className="absolute top-2 left-0 bg-white px-[5px] py-[5px] z-40 uppercase text-[11px] font-semibold rounded-e-full shadow-xl flex items-center gap-2">
                Off
                <span
                  style={{ background: `${settingsData?.header?.themeColor}` }}
                  className=" text-white rounded-full w-8 h-8 text-[10px] flex justify-center items-center font-semibold"
                >
                  {calculateDiscountPercentage(
                    product.regular_price,
                    product.discount_price
                  )}
                  %
                </span>
              </p>
            )}

            <Image
              src={product?.product_image?.img_url}
              alt="product image"
              className="h-[150px] md:h-[180px] w-full object-cover rounded"
              height={180}
              width={200}
              loading="eager"
            />
          </div>
          <div className="py-3 px-2 text-center">
            <div>
              <h2 className="capitalize font-semibold group-hover:text-red-600 h-[48px] overflow-hidden">
                {product.title.length > 47
                  ? product.title.slice(0, 48) + "..."
                  : product.title}
              </h2>
            </div>
            {product.discount_price ? (
              <div className="flex justify-center gap-3 mt-1">
                <p
                  className="font-semibold text-sm"
                  style={{ color: `${settingsData?.header?.themeColor}` }}
                >
                  Tk{product.discount_price}
                </p>
                <p className="line-through text-gray-400 text-sm font-semibold">
                  Tk{product.regular_price}
                </p>
              </div>
            ) : (
              <div className="flex justify-center gap-3 mt-1">
                <p
                  className="font-semibold text-sm"
                  style={{ color: `${settingsData?.header?.themeColor}` }}
                >
                  Tk{product.regular_price}
                </p>
              </div>
            )}
          </div>
        </Link>
        <div className="mt-auto">
          <AddToCartButton productID={product._id} product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
