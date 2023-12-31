"use client";
type Props = {
  headerBg: string;
};
import React, { useState } from "react";
import { useQueryData } from "@/hooks/hook.query";
import Link from "next/link";
const SearchForm = ({ headerBg }: Props) => {
  const [query, setQuery] = useState("");
  const [isActive, setIsActive] = useState(false);
  const { data: results, refetch } = useQueryData(
    ["get search", query],
    `/api/v0/products?is_delete=false&status=active&s=${query}`
  );
  const HandleQuery = (e: any) => {
    e.preventDefault();
    setQuery(e.target.value);
    setIsActive(true);
  };
  const handleSearch = () => {
    setTimeout(() => {
      setIsActive(false);
      setQuery("");
    }, 500);
  };
  return (
    <div className="basis-8/12 lg:basis-1/2 relative">
      <form className="flex">
        <input
          type="text"
          placeholder="Search"
          className="w-full border rounded-s-md px-2 md:px-3 py-[6px] md:py-[10px] outline-none"
          onChange={HandleQuery}
          onBlur={handleSearch}
        />
        <button
          onChange={(e) => e.preventDefault()}
          className={` text-white px-3 rounded-e-md bg-[#BC5189]`}
        >
          Search
        </button>
      </form>
      {/* Search data show */}
      {isActive && (
        <div className="absolute bg-slate-50 border top-12 left-0 w-[95%] px-4 py-2 z-[999999]">
          <h2 className="text-sm border-b pb-2 text-end">Products</h2>
          {results?.data
            ? results.data.map((item: any) => (
                <div
                  key={item._id}
                  className="flex gap-3 flex-col mt-3"
                  onClick={handleSearch}
                >
                  <Link href={`/product?_id=${item._id}`}>
                    <div className="flex gap-3 items-center">
                      <img
                        src={item?.product_image?.img_url}
                        alt={""}
                        width={40}
                        height={40}
                      />
                      <div>
                        <h3 className="text-[12px]">{item?.title}</h3>
                        <span>
                          {item?.discount_price
                            ? item?.discount_price
                            : item?.regular_price}{" "}
                          ৳
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            : " no result found"}
        </div>
      )}
    </div>
  );
};

export default SearchForm;
