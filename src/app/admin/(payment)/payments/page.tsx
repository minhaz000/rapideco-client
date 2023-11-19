"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Img1 from "@/assets/img.png";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useForm as useform, SubmitHandler } from "react-hook-form";
import FormValues from "@/interface/payment";
import { useAdminContext } from "@/context/admin.context";
import { useMutationData, useQueryData } from "@/hooks/hook.query";
import axios from "@/hooks/hook.axios";
import slugify from "slugify";
import Upload from "@/hooks/hook.upload";
import Link from "next/link";

const Payment = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { data: allPayment, refetch } = useQueryData(
    ["get all payent"],
    "api/v0/payments"
  );
  const newPayment = useMutationData(
    ["add new payament"],
    "post",
    "api/v0/payment"
  );
  const { register, reset, handleSubmit, setValue } = useform<FormValues>();
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleAddPayment: SubmitHandler<FormValues> = async (data) => {
    data.method_code = slugify(data.method_code, { lower: true });
    data.method_img =
      data.method_img.length > 0 && (await Upload(data.method_img));
    newPayment.mutate(data as any, {
      onSuccess: () => {
        toast.success("payment added");
        reset();
        refetch();
      },
      onError: (error: any) =>
        toast.error(error.message ? error.message : error?.data.message),
    });

    console.log(data);
  };

  const handleImage = (e: any) => {
    setSelectedImage(e.target.files[0]);
    setValue("method_img", e.target.files);
  };

  const handleDelete = (deleteId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES ",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        axios
          .delete(`/api/v0/payment/${deleteId}?permanent=true`)
          .then(() => {
            toast.success("method deleted");
            refetch();
          })
          .catch((error: any) =>
            toast.error(error.message ? error.message : error?.data.message)
          );
      }
    });
  };

  const validationError = newPayment.error?.data.errors;
  return (
    <div>
      <h2 className="text-xl">All Payment</h2>
      <div className="lg:flex gap-6 mt-6">
        <div className="lg:basis-7/12 shadow-[0_0_10px_5px_#d7d7d7bf]">
          <div className="flex justify-between items-center border-b px-6 py-4">
            <h2>Payment Method</h2>
            <input
              type="text"
              placeholder="Type name & enter"
              className="border outline-none py-2 px-2"
            />
          </div>
          <div className="overflow-x-auto mt-3 p-4">
            <table className="table  w-[1130px] lg:w-full border">
              <thead>
                <tr className="border text-xs font-normal ">
                  <th className="py-3 text-slate-500 ps-4 text-start">#</th>
                  <th className="py-3 text-slate-500 text-start">Name</th>
                  <th className="py-3 text-slate-500 text-start">Logo</th>
                  <th className="py-3 text-slate-500 text-start">Action</th>
                </tr>
              </thead>
              <tbody className="border pt-2">
                {allPayment?.data.map((item: any, i: number) => {
                  return (
                    <tr
                      key={i}
                      className="text-xs font-normal text-start border-b"
                    >
                      <td className="py-5 ps-4">{i + 1}</td>
                      <td>{item.method_name}</td>
                      <td>
                        <Image
                          src={item?.method_img?.img_url}
                          width={50}
                          height={50}
                          alt=""
                        ></Image>
                      </td>

                      <td>
                        <div className="flex gap-2 items-center">
                          <span
                            title="Edit"
                            className="bg-yellow-500 bg-opacity-50 text-white text-xs p-[5px] rounded-full cursor-pointer hover:bg-opacity-100"
                          >
                            <Link href={`/admin/edit-payment/${item._id}`}>
                              <FaRegEdit />
                            </Link>
                          </span>
                          <span
                            onClick={() => handleDelete(item._id)}
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
        <div className="mf:basis-5/12 shadow-[0_0_10px_3px_#d7d7d7bf] pb-6">
          <h2 className="border px-6 py-4 text-xl font-semibold">
            Add New Method
          </h2>
          <div className="px-6 pt-4">
            <form onSubmit={handleSubmit(HandleAddPayment)}>
              <div>
                <label htmlFor="name" className="mb-2 block">
                  Method Name
                </label>

                <input
                  {...register("method_name")}
                  type="text"
                  placeholder="Method Name"
                  className="border w-full py-2 px-3  rounded-md outline-none"
                />
              </div>
              <div>
                <label htmlFor="name" className="mb-2 block">
                  Method Code
                </label>

                <input
                  {...register("method_code")}
                  type="text"
                  placeholder="Method Name"
                  className="border w-full py-2 px-3  rounded-md outline-none"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="">Method description</label>
                <br />
                <textarea
                  {...register("method_descrption")}
                  placeholder="Meta description"
                  className="w-full border py-2 px-3 outline-none mt-2 h-28"
                ></textarea>
              </div>

              <div className="mt-4">
                <label htmlFor="">Method Number</label>
                <br />
                <input
                  {...register("payment_number")}
                  type="text"
                  placeholder="Meta Title"
                  className="w-full border py-2 px-3 outline-none mt-2"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="">Logo</label>
                <br />
                <input
                  onChange={handleImage}
                  name="icon"
                  type="file"
                  className="w-full file-input file-input-bordered file-input-xs  outline-none mt-2 "
                />
                {selectedImage && (
                  <div className="my-3">
                    <Image
                      src={URL.createObjectURL(selectedImage)}
                      alt="icon"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <input
                type="submit"
                value="Save"
                className="bg-red-600 text-white px-6 py-2 mt-4 rounded-md cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
