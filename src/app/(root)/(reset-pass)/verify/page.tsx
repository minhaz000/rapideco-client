import React from "react";
import verify from "@/assets/check.png";
import Image from "next/image";
const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] border shadow-md p-5 rounded max-w-sm mt-7 mx-auto">
      <Image src={verify} alt="image" width={80} />
      <h1 className="text-4xl font-bold text-gray-900 mb-3 mt-4">Success!</h1>
      <p className="text-lg text-gray-700">Your action was successful.</p>
    </div>
  );
};

export default SuccessPage;
