"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Img1 from "../../../../assets/img.png";
import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useAdminContext } from "@/context/admin.context";
import axios from "@/hooks/hook.axios";
import { toast } from "react-toastify";
const AllProduct = () => {
  const { Products }: any = useAdminContext();
  const handleDeleteProduct = (productID: string) => {
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
          .delete(`/api/v0/product/${productID}`)
          .then((res) => {
            console.log(res.data);
            toast.success("product moved to Trash");
            Products.refetch();
          })
          .catch((error: any) => toast.error(error.message ? error.message : error?.data.message));
      }
    });
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg">All Product</h2>
        <Link href={"/add-product"} className="bg-sky-800 px-4 py-2 rounded text-white capitalize">
          Add new Product
        </Link>
      </div>
      <div className="shadow-[0_0_10px_5px_#d7d7d7bf] mt-6">
        <div className="flex justify-between items-center border-b pb-3 px-4 pt-4 mb-4">
          <div>
            <h2 className="text-xl">All Product</h2>
            <div>
              <span className="text-[12px] underline text-slate-500 cursor-pointer mr-2">
                <Link href={"/admin/all-products"}>All Products(6)</Link>
              </span>
              <span className="text-[12px] underline text-slate-500 cursor-pointer">
                <Link href={"/admin/trash-product"}>Trash(5)</Link>
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <select name="" id="" className="border py-2 px-3 outline-none text-xs text-slate-500">
              <option value="">Bulk Action</option>
            </select>
            <select name="" id="" className="border py-2 px-3 outline-none w-40 text-xs text-slate-500">
              <option value="">All Sellers</option>
            </select>
            <select name="" id="" className="border py-2 px-3 outline-none w-40 text-xs text-slate-500">
              <option value="">Sort By</option>
            </select>
            <div>
              <input type="text" placeholder="Type & Enter" className="border outline-none text-sm py-2 px-3 w-40" />
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
                <th className="py-3 text-slate-500 text-start">Regular price</th>
                <th className="py-3 text-slate-500 text-start">Discount price</th>
                <th className="py-3 text-slate-500 text-start">Stock</th>
                <th className="py-3 text-slate-500 text-start">Brand</th>
                <th className="py-3 text-slate-500 text-start">Status</th>
                <th className="py-3 text-slate-500 text-start">Action</th>
              </tr>
            </thead>
            <tbody className="border pt-2">
              {Products?.data?.data.map((item: any, i: number) => {
                return (
                  <tr key={i} className="text-xs font-normal text-start border-b">
                    <td className="py-5 ps-4">{i + 1}</td>
                    <td>
                      <Image src={Img1} width={50} height={50} alt=""></Image>
                    </td>
                    <td>{item.title}</td>
                    <td>{item?.regular_price}</td>
                    <td>{item?.discount_price}</td>
                    <td>{item?.qantity}</td>
                    <td>Apple</td>
                    <td>
                      {item.status === "active" ? (
                        <span className="bg-green-500 bg-opacity-70 text-white text-sm p-1 rounded">Active</span>
                      ) : (
                        <span className="bg-red-500 bg-opacity-70 text-white text-sm p-1 rounded">Deactive</span>
                      )}
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <span
                          title="View"
                          className="bg-green-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                        >
                          <FaRegEye />
                        </span>
                        <span
                          title="Edit"
                          className="bg-yellow-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                        >
                          <FaRegEdit />
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
      </div>
    </div>
  );
};

export default AllProduct;
