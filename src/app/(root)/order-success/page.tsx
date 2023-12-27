import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
const OrderSuccess = () => {
  return (
    <div className="text-center h-[70vh] flex justify-center items-center ">
      <div className="lg:w-3/6 border shadow rounded p-8">
        <div className="bg-green-500 text-white font-bold w-16 h-16 rounded grid place-items-center mx-auto">
          <FaCheck className="text-xl sm:text-2xl md:text-3xl" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-2 mt-4 font-semibold">
          ধন্যবাদ, আপনার অর্ডার টি গ্রহণ করা হয়েছে।
        </h2>
        <p>আমাদের একজন প্রতিনিধি আপনার সাথে খুব শিগ্রয় যোগাযোগ করবেন।</p>
        <Link
          href="/"
          className="bg-green-600 px-8 py-3 rounded text-white inline-block mt-3 font-semibold"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
