"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegClock, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQueryData } from "@/hooks/hook.query";
import axios from "@/hooks/hook.axios";
import { toast } from "react-toastify";
import { useAdminContext } from "@/context/admin.context";
import Pagination from "@/components/pagination/pagination";
const TrashProduct = () => {
  const [query, setQuery]: any = useState({
    s: "",
    category: "",
    brand: "",
    sort: "",
    status: "",
  });
  const { Brands, Categories }: any = useAdminContext();
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const { data: Products, refetch } = useQueryData(
    ["get all product", pagination, query],
    `/api/v0/products?is_delete=true&page=${pagination.page}&limit=${
      pagination.limit
    }&s=${query.s}&sort=${query.sort}&category_info._id=${query.category}${
      query.status && `&status=${query.status}`
    }${query.brand && `&brand_info._id=${query.brand} `}`
  );

  const handleDeleteProduct = (deleteID: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        axios
          .delete(`/api/v0/product/${deleteID}?permanent=true`)
          .then(async (res) => {
            // await deletePhoto.post("/api/delete", [res.data.data.imgURL, res.data.data.icon]);
            toast.success("Product deleted");
            refetch();
          })
          .catch((error: any) =>
            toast.error(error.message ? error.message : error?.data.message)
          );
      }
    });
  };
  useEffect(() => {
    const Debouncing = setTimeout(() => refetch, 1500);
    return () => clearTimeout(Debouncing);
  }, [pagination, query]);
  const handleRecover = (deleteID: string) => {
    axios
      .delete(`/api/v0/product/${deleteID}?recover=true`)
      .then(() => {
        toast.success("category restored");
        refetch();
      })
      .catch((error: any) =>
        toast.error(error.message ? error.message : error?.data.message)
      );
  };
  const HandleQuery = (e: any) => {
    e.preventDefault();
    setQuery((pre: any) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };
  console.log(Products);
  const trashProducts = Products?.data?.filter((p: any) => p.is_delete == true);
  return (
    <div>
      <div className="shadow-[0_0_10px_5px_#d7d7d7bf] mt-6">
        <div className="flex justify-between items-center border-b pb-3 px-4 pt-4 mb-4">
          <div>
            <h2 className="text-xl">Trash Products</h2>
            <div>
              <span className="text-[12px] underline text-slate-500 cursor-pointer mr-2">
                <Link href={"/admin/all-products"}>
                  All Products({Products?.details?.active})
                </Link>
              </span>
              <span className="text-[12px] underline text-slate-500 cursor-pointer">
                <Link href={"/admin/trash-product"}>
                  Trash({Products?.details?.trash})
                </Link>
              </span>
            </div>
          </div>
          <div className="grid lg:flex grid-cols-2 sm:grid-cols-3 gap-4 lg:w-8/12 mt-3 lg:mt-0">
            <select
              onChange={HandleQuery}
              name="brand"
              className="border py-2 px-3 outline-none w-30 text-xs text-slate-500"
            >
              <option value="">Brands</option>
              {Brands?.data?.data.map((item: any) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
            <select
              onChange={HandleQuery}
              name="category"
              className="border py-2 px-3 outline-none w-30 text-xs text-slate-500"
            >
              <option value="">Categories</option>
              {Categories?.data?.data.map((item: any) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
            <select
              onChange={HandleQuery}
              name="status"
              className="border py-2 px-3 outline-none w-30 text-xs text-slate-500"
            >
              <option value="">Status</option>
              <option value="active">active</option>
              <option value="deactive">deactive</option>
            </select>
            <select
              onChange={HandleQuery}
              name="sort"
              className="border py-2 px-3 outline-none w-30 text-xs text-slate-500"
            >
              <option value="">Sort By</option>
              <option value="">oldest</option>
              <option value="-createdAt">newest</option>
            </select>
            <div>
              <input
                onChange={HandleQuery}
                name="s"
                type="text"
                placeholder="Type & Enter"
                className="border outline-none text-sm py-2 px-3 w-40"
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto mt-3 p-4">
          <table className="table  w-[1130px] lg:w-full border">
            <thead>
              <tr className="border text-xs font-normal ">
                <th className="py-3 text-slate-500 ps-4 text-start">SL</th>
                <th className="py-3 text-slate-500 text-start">Image</th>
                <th className="py-3 text-slate-500 text-start">Title</th>
                <th className="py-3 text-slate-500 text-start">
                  Regular price
                </th>
                <th className="py-3 text-slate-500 text-start">
                  Discount price
                </th>
                <th className="py-3 text-slate-500 text-start">Stock</th>
                <th className="py-3 text-slate-500 text-start">Brand</th>
                <th className="py-3 text-slate-500 text-start">Status</th>
                <th className="py-3 text-slate-500 text-start">Action</th>
              </tr>
            </thead>
            <tbody className="border pt-2">
              {Products?.data?.map((item: any, i: number) => {
                return (
                  <tr
                    key={i}
                    className="text-xs font-normal text-start border-b"
                  >
                    <td className="py-5 ps-4">{i + 1}</td>
                    <td>
                      <Image
                        src={item.product_image?.img_url}
                        width={50}
                        height={50}
                        alt=""
                      ></Image>
                    </td>
                    <td>{item.title}</td>
                    <td>{item?.regular_price}</td>
                    <td>{item?.discount_price}</td>
                    <td>{item?.qantity}</td>
                    <td>Apple</td>
                    <td>
                      {item.status === "active" ? (
                        <span className="bg-green-500 bg-opacity-70 text-white text-sm p-1 rounded">
                          Active
                        </span>
                      ) : (
                        <span className="bg-red-500 bg-opacity-70 text-white text-sm p-1 rounded">
                          Deactive
                        </span>
                      )}
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <span
                          onClick={() => handleRecover(item._id)}
                          title="Restore"
                          className="bg-yellow-500 bg-opacity-50 text-white text-xs p-[5px] rounded-full cursor-pointer hover:bg-opacity-100"
                        >
                          <FaRegClock />
                        </span>
                        <span
                          onClick={() => handleDeleteProduct(item._id)}
                          title="Delete"
                          className="bg-red-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                        >
                          <FaRegTrashAlt />
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {Products?.data && (
          <div className="me-6 pb-4">
            <Pagination
              pagination={Products.pagination}
              setPagination={setPagination}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TrashProduct;
