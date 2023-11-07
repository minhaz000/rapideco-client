"use client";
import React, { useEffect, useState } from "react";
import ShopProduct from "./ShopProduct";
import PriceRange from "./PriceRange";
// import { BsGrid, BsListTask } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
const Shop = () => {
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 4000);
  }, []);
  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-6 overflow-hidden  relative">
      {/* Breadcrumb section */}
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>Shop</li>
        </ul>
      </div>
      {/* Product area */}
      <div className="lg:flex mt-10 gap-8">
        <div
          className={`w-2/3 transition-all duration-300 ${
            isFilterOn
              ? "translate-x-0 opacity-100"
              : "translate-x-96 lg:translate-x-0 opacity-0 lg:opacity-100"
          } lg:basis-3/12 absolute right-0 top-14 lg:top-0 h-fit bg-slate-200 py-10 lg:py-0 px-2 lg:px-0 lg:bg-white lg:h-full lg:relative z-50`}
        >
          <div>
            <form>
              <input
                type="search"
                placeholder="Write & Enter"
                className="border w-full rounded-md px-2 py-2 outline-none text-[12px]"
              />
            </form>
          </div>
          <div className="border rounded-md mt-6 p-4">
            <h3 className="text-[15px] font-semibold">Categories</h3>
            <form>
              <div className="mt-4 flex flex-col gap-3">
                <div>
                  <label className="cursor-pointer flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="text-[13px] border cursor-pointer text-slate-300"
                    />
                    <span className="text-[12px]">Men Fashion (9)</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="text-[13px] border cursor-pointer text-slate-300"
                    />
                    <span className="text-[12px]">Women Fashion (4)</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="text-[13px] border cursor-pointer text-slate-300"
                    />
                    <span className="text-[12px]">Baby Fashion (3)</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="border rounded-md mt-6 p-4">
            <h3 className="text-[15px] font-semibold">Filter By Price</h3>
            <form>
              <div className="mt-4">
                <PriceRange min={10} max={500} />
              </div>
            </form>
          </div>
        </div>
        <div className="basis-9/12">
          <div className="flex gap-5 justify-between items-center mb-4">
            <div className="flex gap-3 items-center">
              <button
                className="text-[18px] text-slate-500 block lg:hidden"
                onClick={() => setIsFilterOn(!isFilterOn)}
              >
                <FiFilter />
              </button>
              {/* <button className="text-[18px] text-slate-500">
                <BsGrid />
              </button>
              <button className="text-[18px] text-slate-500">
                <BsListTask />
              </button> */}
            </div>
            <div>
              <label className="text-[15px] mr-4 text-slate-500">
                Sort By:
              </label>
              <select className="border text-[15px] text-slate-500 rounded-md p-1 outline-none">
                <option value="new-to-old">New To Old</option>
              </select>
            </div>
          </div>
          <ShopProduct />
        </div>
      </div>
    </section>
  );
};

export default Shop;
