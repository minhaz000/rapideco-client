"use client";

import BrandCarousel from "./BrandCarousel";
import "./Brand.css";
const Brand = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-10">
      <h2 className="text-xl font-semibold text-[#3bb77e] capitalize">
        Shop By Brands
      </h2>
      <div className="mt-4" id="brand">
        <BrandCarousel />
      </div>
    </section>
  );
};

export default Brand;
