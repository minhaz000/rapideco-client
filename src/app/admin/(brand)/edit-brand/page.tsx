"use client";
import React, { useState } from "react";
import Img1 from "../../../../assets/img.png";
import Image from "next/image";
const EditBrand = () => {
  const [selectedBrand, setSelectedBrand] = useState(Img1);
  const handleBrand = (e: any) => {
    const icon = URL.createObjectURL(e.target.files[0]);
    setSelectedBrand(icon);
  };
  return (
    <div className="shadow-[0_0_10px_5px_#d7d7d7bf] px-6 py-8 lg:mx-10">
      <form>
        <div>
          <label htmlFor="name" className="mb-2 block">
            Brand Name
          </label>

          <input
            type="text"
            defaultValue="Acer"
            className="border w-full py-2 px-3  rounded-md outline-none"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="name" className="mb-2 block">
            Logo
          </label>

          <input
            type="file"
            className="border w-full py-2 px-3  rounded-md outline-none"
            onChange={handleBrand}
          />
          <div className="relative inline-block mt-2">
            <Image src={selectedBrand} alt="" width={80} height={80} />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="">Meta Title</label>
          <br />
          <input
            type="text"
            defaultValue="Meta Title"
            className="w-full border py-2 px-3 outline-none mt-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Meta description</label>
          <br />
          <textarea
            defaultValue={"Description"}
            className="w-full border py-2 px-3 outline-none mt-2 h-28"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Save"
          className="bg-red-600 text-white px-6 py-2 mt-4 rounded-md cursor-pointer"
        />
      </form>
    </div>
  );
};

export default EditBrand;
