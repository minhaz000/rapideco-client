import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="py-10 text-center">
      <h2 className="text-3xl">
        ধন্যবাদ, আপনার অর্ডার টি গ্রহণ করা হয়েছে। আমাদের একজন প্রতিনিধি আপনার
        সাথে খুব শিগ্রয় যোগাযোগ করবেন।
      </h2>
      <Link
        href="/"
        className="bg-red-600 px-8 py-2 rounded text-white inline-block mt-3"
      >
        Go To Home
      </Link>
    </div>
  );
};

export default page;
