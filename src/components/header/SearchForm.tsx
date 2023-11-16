"use client";
type Props = {
  headerBg: string;
};
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useQueryData } from "@/hooks/hook.query";
import Link from "next/link";
import Image from "next/image";
const SearchForm = ({ headerBg }: Props) => {
  const [query, setQuery] = useState({ s: "", active: false });
  const { data: results, refetch } = useQueryData(
    ["get search", query],
    `/api/v0/products?is_delete=false&status=active&s=${query.s}`
  );
  const HandleQuery = (e: any) => {
    e.preventDefault();
    setQuery({ active: true, s: e.target.value });
  };
  const HandleBur = (e: any) => {
    setQuery((pre) => ({ ...pre, active: false }));
  };
  return (
    <div className="basis-8/12 lg:basis-1/2 relative">
      <form className="flex">
        <input
          type="text"
          placeholder="Search"
          className="w-full border rounded-s-md px-2 md:px-3 py-[6px] md:py-[10px] outline-none"
          onChange={HandleQuery}
          onBlur={HandleBur}
        />
        <button
          onChange={(e) => e.preventDefault()}
          style={{ backgroundColor: `${headerBg}` }}
          className={` text-white px-3 rounded-e-md`}
        >
          <FaSearch />
        </button>
      </form>
      {/* Search data show */}
      {query.active && (
        <div className="absolute bg-slate-50 border top-12 left-0 w-[95%] px-4 py-2 z-50">
          <h2 className="text-sm border-b pb-2 text-end">Products</h2>
          {results?.data
            ? results.data.map((item: any) => (
                <div className="flex gap-3 flex-col mt-3">
                  <Link href={`/product?_id=${item._id}`}>
                    <div className="flex gap-3 items-center">
                      <Image
                        src={item?.product_image?.img_url}
                        alt=""
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
