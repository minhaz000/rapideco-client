"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useQueryData } from "@/hooks/hook.query";
import { FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Image from "next/image";
import AddToCartButton from "../Product/addToCartButton";
const ProductDetails = () => {
  const sech = useSearchParams();
  const ID = sech.get("_id");
  const { data: product } = useQueryData(
    ["get single data"],
    `/api/v0/product/${ID}`
  );
  const [imageUrl, setImageUrl] = useState(
    `${product?.data?.product_image?.img_url}`
  );
  const [quantity, setQuantity] = useState(0);
  const handleQuantityPlus = () => {
    console.log(quantity);
    if (quantity < 10) {
      setQuantity((prev) => prev + 1);
    } else {
      toast.error("You can't buy over 10");
    }
  };
  const handleQuantityMinus = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    } else {
      toast.error("You can't select less then 0");
    }
  };
  return (
    <div className="lg:flex gap-5">
      <div className="lg:basis-1/2">
        <Image
          src={imageUrl}
          className="w-full text-[300px] h-[300px] md:h-[350px] object-cover rounded cursor-pointer"
          alt=""
          width={350}
          height={350}
        />
        <div className="grid grid-cols-6 gap-3 mt-2">
          {[
            ...product?.data?.gallery_images,
            { img_url: product?.data?.product_image?.img_url },
          ]?.map((item, index) => (
            <Image
              key={index}
              src={item?.img_url}
              className="sm:w-20 h-14 md:h-20 rounded cursor-pointer object-cover"
              alt=""
              onClick={() => setImageUrl(item?.img_url)}
              width={56}
              height={56}
            />
          ))}
        </div>
      </div>
      <div className="lg:basis-1/2 pt-6">
        <h2 className="text-3xl font-medium text-slate-800">
          {product?.data?.title}
        </h2>

        <div className="mt-2">
          <p>
            <b className="text-green-600 font-medium text-xl me-2"> Price:</b>
            <span className="text-green-600 font-medium text-xl me-2">
              Tk {product?.data?.discount_price}
            </span>
            <span className="line-through text-gray-500 ">
              Tk {product?.data?.regular_price}
            </span>
          </p>
        </div>
        {product?.data?.variants?.length > 0 ? (
          <div className="mt-4 flex">
            <p className="me-4 text-gray-500">Size:</p>
            <div className="flex gap-4">
              <button className="uppercase text-sm px-2 rounded-full hover:bg-sky-600 hover:text-white">
                s
              </button>
              <button className="uppercase text-sm px-2 rounded-full hover:bg-sky-600 hover:text-white">
                m
              </button>
              <button className="uppercase text-sm px-2 rounded-full hover:bg-sky-600 hover:text-white">
                l
              </button>
              <button className="uppercase  text-sm px-2 rounded-full hover:bg-sky-600 hover:text-white">
                xl
              </button>
              <button className="uppercase text-sm px-2 rounded-full hover:bg-sky-600 hover:text-white">
                xxl
              </button>
            </div>
          </div>
        ) : null}
        {product?.data?.variants?.length > 0 ? (
          <div className="mt-4 flex">
            <p className="me-4 text-gray-500">Colors:</p>
            <div className="flex gap-4 items-center">
              <button className="uppercase w-4 h-4 text-sm px-2 rounded-full bg-slate-500"></button>
              <button className="uppercase w-4 h-4 text-sm px-2 rounded-full bg-red-500"></button>
              <button className="uppercase w-4 h-4 text-sm px-2 rounded-full bg-blue-600"></button>
              <button className="uppercase w-4 h-4 text-sm px-2 rounded-full bg-orange-700"></button>
              <button className="uppercase w-4 h-4 text-sm px-2 rounded-full bg-green-500"></button>
            </div>
          </div>
        ) : null}

        <div className="mt-3 flex items-center">
          <p className="me-2 text-gray-500">Quantity:</p>
          <div className="flex gap-1 me-3">
            <span
              onClick={handleQuantityMinus}
              className="border border-gray-300 px-1 rounded-sm cursor-pointer"
            >
              -
            </span>
            <input
              type="number"
              value={quantity}
              min={"1"}
              max={"10"}
              className="w-10 border border-gray-300 outline-none text-center"
            />
            <span
              onClick={handleQuantityPlus}
              className="border border-gray-300 px-1 rounded-sm cursor-pointer"
            >
              +
            </span>
          </div>
          <p className="me-3 text-gray-500 text-xs">(20 Available)</p>
        </div>
        <div className="flex gap-2 mt-5">
          <AddToCartButton productID={product?.data?._id} />
          <button className="bg-orange-600 text-white px-5 md:px-10 rounded-sm py-2 w-full">
            Add to Cart
          </button>
        </div>
        <div className="mt-2 w-full">
          <Link
            href={"tel:01745689754"}
            className="bg-blue-500 text-white px-10 rounded-sm py-2 w-full text-center flex items-center justify-center gap-1"
          >
            <FaPhoneAlt />
            01745689754
          </Link>
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-center border-y py-2 px-3">
            <h3 className=" text-[16px] text-blue-400">
              ঢাকার বাইরে ডেলিভারি খরচ
            </h3>
            <span className="font-semibold">৳ 120</span>
          </div>
          <div className="flex justify-between items-center border-b py-2 px-3">
            <h3 className="text-[16px] text-blue-400">
              ঢাকার ভিতরে ডেলিভারি খরচ
            </h3>
            <span className="font-semibold">৳ 60</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
