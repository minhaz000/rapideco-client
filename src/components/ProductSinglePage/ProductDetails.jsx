"use client";
import React, { useState } from "react";
import Link from "next/link";
import ReactImageMagnify from "react-image-magnify";
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [imageUrl, setImageUrl] = useState("https://i.ibb.co/0K6VWwq/p2.jpg");
  const handleQuantityPlus = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  const handleQuantityMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="lg:flex gap-5 items-center">
      <div className="basis-1/2">
        <p className="text-sm mb-2">
          <Link href="/">Home</Link> / Add product breadcrumb
        </p>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: imageUrl,
              width: 500,
              height: 380,
            },
            largeImage: {
              src: imageUrl,
              width: 1100,
              height: 1000,
            },
          }}
        />
        <div className="flex gap-3 mt-2">
          <img
            src="https://i.ibb.co/0K6VWwq/p2.jpg"
            className="w-24 h-24 rounded cursor-pointer"
            alt=""
            onClick={() => setImageUrl("https://i.ibb.co/0K6VWwq/p2.jpg")}
          />
          <img
            src="https://i.ibb.co/h7bn4QT/p1.jpg"
            className="w-24 h-24 rounded cursor-pointer"
            alt=""
            onClick={() => setImageUrl("https://i.ibb.co/h7bn4QT/p1.jpg")}
          />
          <img
            src="https://i.ibb.co/wLYhz09/p3.jpg"
            className="w-24 h-24 rounded cursor-pointer"
            alt=""
            onClick={() => setImageUrl("https://i.ibb.co/wLYhz09/p3.jpg")}
          />
        </div>
      </div>
      <div className="basis-1/2 pt-4 lg:pt-0">
        <h2 className="text-2xl font-medium">
          T9 Electric Rechargeable Trimer
        </h2>

        <div className="mt-2">
          <p>
            <b className="text-green-600 font-medium text-xl me-2"> Price:</b>
            <span className="text-green-600 font-medium text-xl me-2">
              Tk 200
            </span>
            <span className="line-through text-gray-500 ">Tk 100</span>
          </p>
        </div>
        <div className="mt-4">
          <h2 className="mb-2">Short Description:</h2>
          <p className="text-[13px] text-gray-500">
            আপনার যত প্রশ্ন আছে তা বর্ননার সাথে মিলিয়ে অথবা আমাদের কাছ থেকে জেনে
            পন্য অর্ডার করুন। ছবি এবং বর্ণনার সাথে পন্যের মিল থাকলে পণ্য ফেরত
            নেয়া হবে না । তবে আপনি চাইলে আপনার গ্রহন করা পন্যের সম মুল্যের কি বা
            বেশি মুল্যের পণ্য নিতে পারবেন (যে টাকা বেশি হবে তা প্রদান করতে হবে )
            । কম মুল্যের পণ্য নেয়া যাবে না । পণ্য আনা নেয়ার খরচ আপনাকে দিতে হবে।
            যে সকল পন্যে ওয়ারেন্টি আছে তার ওয়ারেন্টি সার্ভিস আমরা প্রদান
            করবো।তবে কিছু কিছু ক্ষেত্রে পন্যের ব্রান্ড আপনাকে সার্ভিস প্রদান
            করবে তবে সে ক্ষেত্রে আপনার নিকটস্থ সার্ভিস পয়েন্ট থেকে সার্ভিস নিতে
            পারবেন। পণ্য সার্ভিস করতে যাওয়া আসা বা পাঠানো এবং রিটার্ন করার খরজ
            আপনাকে বহন করতে হবে।
          </p>
        </div>
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
              defaultValue={quantity}
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
          <button className="bg-green-600 text-white px-6 rounded-sm py-1">
            Buy Now
          </button>
          <button className="bg-orange-600 text-white px-6 rounded-sm py-1">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
