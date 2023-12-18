"use client";
import React, { useEffect, useState } from "react";
import ShopProduct from "./ShopProduct";
import { useSearchParams } from "next/navigation";
import { FiFilter } from "react-icons/fi";
import { useQueryData } from "@/hooks/hook.query";
import Slider from "rc-slider";
import Pagination from "@/components/pagination/pagination";
import "rc-slider/assets/index.css";
import Loading from "@/components/common/Loading";

const ShopPage = () => {
  const params = useSearchParams();
  const cate = params?.getAll("cate");
  const [query, setQuery] = useState({
    categories: cate ? cate : [],
    price: [0, 10000],
    sort: "",
    s: "",
    update: false,
  });
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const { data: Categories, isLoading } = useQueryData(
    ["shop"],
    `/api/v0/categories?is_delete=false`
  );
  // prettier-ignore
  const url = `/api/v0/products?is_delete=false&status=active&page=${pagination.page}&s=${query.s}&limit=${pagination.limit}&sort=${query.sort}&category_info._id=${query.categories}&regular_price>${query.price[0]}`;
  const formate = query.update ? url + `&regular_price<${query.price[1]}` : url;
  const { data: products, refetch } = useQueryData(
    ["get shop products", pagination, query],
    formate
  );

  const [isFilterOn, setIsFilterOn] = useState(false);

  const HandleQuery = (e: any, ID?: string) => {
    e.preventDefault();
    if (e.target.name === "categories") {
      e.target.checked
        ? setQuery((pre: any) => ({
            ...pre,
            update: false,
            categories: [...pre.categories, ID],
          }))
        : setQuery((pre: any) => ({
            ...pre,
            update: false,
            categories: pre.categories?.filter((item: any) => item != ID),
          }));
    } else {
      setQuery((pre: any) => {
        return { ...pre, update: false, [e.target.name]: e.target.value };
      });
    }
  };
  const handePrice = (newValues: any) => {
    setQuery((pre: any) => ({ ...pre, update: true, price: newValues }));
    refetch;
  };
  useEffect(() => {
    const Debouncing = setTimeout(() => refetch, 1500);
    return () => clearTimeout(Debouncing);
  }, [pagination, query]);

  const categoryPHas = Categories?.data?.filter(
    (ct: any) => ct?.products?.length > 0
  );
  return (
    <>
      {products?.data?.length != 0 ? (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <section className="max-w-screen-xl mx-auto px-3 lg:px-12 mt-4 overflow-hidden  relative">
              {/* Product area */}
              <div className="lg:flex mt-5 gap-8">
                <div
                  className={`w-2/3 transition-all duration-300 ${
                    isFilterOn
                      ? "translate-x-0 opacity-100"
                      : "translate-x-96 lg:translate-x-0 opacity-0 lg:opacity-100"
                  } lg:basis-3/12 absolute right-0 top-14 lg:top-0 h-fit bg-slate-200 py-10 lg:py-0 px-2 lg:px-0 lg:bg-white lg:h-full lg:relative z-50`}
                >
                  <div>
                    <input
                      type="search"
                      placeholder="Write & Enter"
                      onChange={HandleQuery}
                      name="s"
                      className="border w-full rounded-md px-2 py-2 outline-none text-[12px]"
                    />
                    <input onChange={HandleQuery} type="submit" hidden />
                  </div>
                  <div className="border rounded-md mt-6 p-4">
                    <h3 className="text-[15px] font-semibold">Categories</h3>
                    <div className="mt-4 flex flex-col gap-3">
                      {categoryPHas?.map((item: any) => (
                        <div key={item._id}>
                          <label className="cursor-pointer flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="categories"
                              checked={
                                query.categories.includes(item._id)
                                  ? true
                                  : false
                              }
                              onChange={(e) => HandleQuery(e, item._id)}
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
                    <h3 className="text-[15px] font-semibold">
                      Filter By Price
                    </h3>
                    <div className="mt-4">
                      <div className="w-full max-w-xs mx-auto mt-4">
                        <Slider
                          range
                          min={0}
                          max={10000}
                          value={query.price}
                          onChange={handePrice}
                        />
                        <div className="flex justify-between mt-2">
                          <span>Tk {query.price[0]}</span>
                          <span>Tk {query.price[1]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-9/12">
                  <div className="flex gap-5 justify-between items-center mb-4">
                    <div className="flex gap-3 items-center">
                      <button
                        className="text-[18px] text-slate-500 block lg:hidden"
                        onClick={() => setIsFilterOn(!isFilterOn)}
                      >
                        <FiFilter />
                      </button>
                    </div>
                    <div>
                      <label className="text-[15px] mr-4 text-slate-500">
                        Sort By:
                      </label>
                      <select
                        name="sort"
                        onChange={HandleQuery}
                        className="border text-[15px] text-slate-500 rounded-md p-1 outline-none"
                      >
                        <option value="">Old</option>
                        <option value="-createdAt">New</option>
                      </select>
                    </div>
                  </div>
                  {products?.data && <ShopProduct products={products?.data} />}
                  {products?.data && (
                    <Pagination
                      pagination={products.pagination}
                      setPagination={setPagination}
                    />
                  )}
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <div className="mt-8">
          <h2 className="text-center text-3xl">
            আন্তরিকভাবে দুঃখিত কোন প্রোডাক্ট পাওয়া যাইনি
          </h2>
        </div>
      )}
    </>
  );
};

export default ShopPage;
