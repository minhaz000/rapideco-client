"use client";
import React, { useEffect, useState } from "react";
import ShopProduct from "./ShopProduct";
import PriceRange from "./PriceRange";
import { useRouter, useSearchParams } from "next/navigation";
// import { BsGrid, BsListTask } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { useQueryData } from "@/hooks/hook.query";
import axios from "@/hooks/hook.axios";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const priceRangeArry = [0, 10000];
const Shop = () => {
  const querry = useSearchParams();
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [prams, setParms] = useState([] as string[]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(1);
  const [price, setPrice] = useState({ priceRangeArry, update: false } as any);
  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState([]);
  const cate = querry?.getAll("cate");
  const [url, setUrl] = useState(`/api/v0/products?is_delete=false&category_info._id=${cate}`);
  const { data: Categories }: any = useQueryData(["shop"], `/api/v0/categories?is_delete=false`);

  const handleCate = (e: any, cate_ID: string) => {
    e.target.checked ? setParms((pre) => [...pre, cate_ID]) : setParms((pre) => pre.filter((item) => item != cate_ID));
    setPrice((pre: any) => {
      return { ...pre, update: false };
    });
  };
  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleSort = (e: any) => {
    e.preventDefault();
    setSort(parseInt(e.target.value));
  };
  const handleSliderChange = (newValues: any) => {
    setPrice({ priceRangeArry: newValues, update: true });
  };
  useEffect(() => {
    const Debouncing = setTimeout(() => {
      let fromate_url = url;
      prams.length > 0 && (fromate_url = url + prams);
      search.length > 0 && (fromate_url = fromate_url + `&s=${search}`);
      price.update &&
        (fromate_url =
          fromate_url + `&regular_price<${price.priceRangeArry[1]}&regular_price>${price.priceRangeArry[0]}`);
      sort < 0 && (fromate_url = fromate_url + `&sort=-createdAt`);
      axios.get(fromate_url).then((res) => {
        setLoader(true);
        setProducts(res.data.data);
      });

      console.log(fromate_url);
    }, 1500);
    return () => clearTimeout(Debouncing);
  }, [prams, price, search, sort]);
  console.log(prams);
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
            isFilterOn ? "translate-x-0 opacity-100" : "translate-x-96 lg:translate-x-0 opacity-0 lg:opacity-100"
          } lg:basis-3/12 absolute right-0 top-14 lg:top-0 h-fit bg-slate-200 py-10 lg:py-0 px-2 lg:px-0 lg:bg-white lg:h-full lg:relative z-50`}
        >
          <div>
            <input
              type="search"
              placeholder="Write & Enter"
              onChange={handleSearch}
              className="border w-full rounded-md px-2 py-2 outline-none text-[12px]"
            />
            <input onChange={handleSearch} type="submit" hidden />
          </div>
          <div className="border rounded-md mt-6 p-4">
            <h3 className="text-[15px] font-semibold">Categories</h3>
            <div className="mt-4 flex flex-col gap-3">
              {Categories?.data.map((item: any) => (
                <div key={item._id}>
                  <label className="cursor-pointer flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) => handleCate(e, item._id)}
                      className="text-[13px] border cursor-pointer text-slate-300"
                    />
                    <span className="text-[12px]">
                      {item.name} ({item.products.length})
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="border rounded-md mt-6 p-4">
            <h3 className="text-[15px] font-semibold">Filter By Price</h3>
            <div className="mt-4">
              <div className="w-full max-w-xs mx-auto mt-4">
                <Slider range min={0} max={1000} value={price.priceRangeArry} onChange={handleSliderChange} />
                <div className="flex justify-between mt-2">
                  <span>${price.priceRangeArry[0]}</span>
                  <span>${price.priceRangeArry[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-9/12">
          <div className="flex gap-5 justify-between items-center mb-4">
            <div className="flex gap-3 items-center">
              <button className="text-[18px] text-slate-500 block lg:hidden" onClick={() => setIsFilterOn(!isFilterOn)}>
                <FiFilter />
              </button>
            </div>
            <div>
              <label className="text-[15px] mr-4 text-slate-500">Sort By:</label>
              <select onChange={handleSort} className="border text-[15px] text-slate-500 rounded-md p-1 outline-none">
                <option value={1}>Old</option>
                <option value={-1}>New</option>
              </select>
            </div>
          </div>
          <ShopProduct products={products} />
        </div>
      </div>
    </section>
  );
};

export default Shop;
