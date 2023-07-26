"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Img1 from "../../../../assets/img.png";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useAdminContext } from "@/context/admin.context";

const AllCategory = () => {
  const { Categories }: any = useAdminContext();
  const constes = useAdminContext();
  console.log(constes);
  const handleDelete = () => {
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
      }
    });
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg">All Categories</h2>
        <Link href={"/admin/add-category"} className="bg-sky-800 px-4 py-2 rounded text-white capitalize">
          Add new Categories
        </Link>
      </div>
      <div className="shadow-[0_0_10px_5px_#d7d7d7bf] mt-6">
        <div className="flex justify-between items-center border-b pb-3 px-4 pt-4 mb-4">
          <div>
            <h2 className="text-xl">Categories</h2>
            <div>
              <span className="text-[12px] underline text-slate-500 cursor-pointer mr-2">
                <Link href={"/admin/all-categories"}>All Categories(1)</Link>
              </span>
              <span className="text-[12px] underline text-slate-500 cursor-pointer">
                <Link href={"/admin/trash-category"}>Trash(5)</Link>
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <input
                onChange={() => {}}
                type="text"
                placeholder="Type name & Enter"
                className="border outline-none text-sm py-2 px-3 w-40"
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto mt-3 p-4">
          <table className="table  w-[1130px] lg:w-full border">
            <thead>
              <tr className="border text-xs font-normal ">
                <th className="py-3 text-slate-500 ps-4 text-start">#</th>
                <th className="py-3 text-slate-500 text-start">Name</th>
                <th className="py-3 text-slate-500 text-start">Parent Category</th>
                <th className="py-3 text-slate-500 text-start">products</th>
                {/* <th className="py-3 text-slate-500 text-start">Level</th> */}
                <th className="py-3 text-slate-500 text-start">Icon</th>
                <th className="py-3 text-slate-500 text-start">Cover Image</th>
                <th className="py-3 text-slate-500 text-start">Featured</th>
                <th className="py-3 text-slate-500 text-start">Action</th>
              </tr>
            </thead>
            <tbody className="border pt-2">
              {Categories.data?.data?.map((item, i: number) => {
                return (
                  <>
                    <tr className="text-xs font-normal text-start border-b">
                      <td className="py-5 ps-4">{i + 1}</td>
                      <td>{item.name}</td>
                      <td>{"root"}</td>
                      <td>{"item.products.lenght"}</td>
                      {/* <td>0</td> */}
                      <td>
                        <Image src={item.icon?.img_url} width={50} height={50} alt={item.name}></Image>
                      </td>
                      <td>
                        <Image src={item.imgURL?.img_url} width={50} height={50} alt={item.name}></Image>
                      </td>
                      <td>
                        <input type="checkbox" className="toggle toggle-success" />
                      </td>
                      <td>
                        <div className="flex gap-2 items-center">
                          <span
                            title="Edit"
                            className="bg-yellow-500 bg-opacity-50 text-white text-xs p-[5px] rounded-full cursor-pointer hover:bg-opacity-100"
                          >
                            <Link href={`/admin/edit-category/${item._id}`}>
                              <FaRegEdit />
                            </Link>
                          </span>

                          <span
                            onClick={handleDelete}
                            title="Delete"
                            className="bg-red-500 bg-opacity-50 text-white text-xs p-[5px] rounded-full cursor-pointer hover:bg-opacity-100"
                          >
                            <FaRegTrashAlt />
                          </span>
                        </div>
                      </td>
                    </tr>
                    {item.sub_cate.map((sub_item: any) => {
                      return (
                        <>
                          <tr className="text-xs font-normal text-start border-b">
                            <td className="py-5 ps-4">--</td>
                            <td>{sub_item._id}</td>
                            <td>{sub_item.parent_name}</td>
                            {/* <td>0</td>
                      <td>0</td> */}
                            <td>
                              <Image src={sub_item.icon?.img_url} width={50} height={50} alt={sub_item.name}></Image>
                            </td>
                            <td>
                              <Image src={sub_item.imgURL?.img_url} width={50} height={50} alt={sub_item.name}></Image>
                            </td>
                            <td>
                              <input type="checkbox" className="toggle toggle-success" checked />
                            </td>
                            <td>
                              <div className="flex gap-2 items-center">
                                <span
                                  title="Edit"
                                  className="bg-yellow-500 bg-opacity-50 text-white text-xs p-[5px] rounded-full cursor-pointer hover:bg-opacity-100"
                                >
                                  <FaRegEdit />
                                </span>

                                <span
                                  onClick={handleDelete}
                                  title="Delete"
                                  className="bg-red-500 bg-opacity-50 text-white text-xs p-[5px] rounded-full cursor-pointer hover:bg-opacity-100"
                                >
                                  <FaRegTrashAlt />
                                </span>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCategory;
