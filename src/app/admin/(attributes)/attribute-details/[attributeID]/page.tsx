"use client";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useForm as useform, SubmitHandler } from "react-hook-form";
import FormValues from "@/interface/attributes";

import { useMutationData, useQueryData } from "@/hooks/hook.query";
import { useAdminContext } from "@/context/admin.context";
import axios from "@/hooks/hook.axios";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { attributeID: string[] } }) => {
  const [reload, setReload] = useState(true);
  const { Atrribute }: any = useAdminContext();
  const { data: oldAttribute, refetch } = useQueryData(
    ["get single attribute"],
    `/api/v0/attribute/${params.attributeID}`
  );
  const updateAttribute = useMutationData(
    ["update new attribute"],
    "put",
    `/api/v0/attribute/${params.attributeID}`
  );
  const { register, reset, handleSubmit, setValue } = useform<FormValues>();
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleUpdateAtrribute: SubmitHandler<FormValues> = async (
    data: any
  ) => {
    console.log(data);
    const url =
      oldAttribute?.data.label !== data.label
        ? `/api/v0/attribute/${params.attributeID}`
        : `/api/v0/attribute/${params.attributeID}?add=true`;
    const postData = oldAttribute?.data.label !== data.label ? data : data.key;
    console.log(url);
    console.log(postData);
    axios.put(url, postData).then(() => {
      toast.success("category updated");
      reset();
      refetch();
    });

    // updateAttribute.mutate(data, {
    //   onSuccess: async () => {
    //     toast.success("atrrbute updated");
    //     reset();
    //     refetch().then((res) => {
    //       // setValue("slug", res.data.data.slug);
    //     });
    //     Atrribute.refetch();
    //   },
    //   onError: (error: any) => toast.error(error.message ? error.message : error?.data.message),
    // });
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
          .put(`/api/v0/attribute/${deleteId}?remove=true`, { deleteId })
          .then(() => {
            toast.success("atrribute updated");
            refetch();
          })
          .catch((error: any) =>
            toast.error(error.message ? error.message : error?.data.message)
          );
      }
    });
  };
  useEffect(() => {
    reset(oldAttribute?.data);
  }, [oldAttribute]);
  return (
    <div>
      <h2 className="text-xl">All Details</h2>
      <div className="flex lg:flex-row flex-col-reverse gap-6 mt-6">
        <div className="basis-7/12 shadow-[0_0_10px_5px_#d7d7d7bf]">
          <div className="flex justify-between items-center border-b px-6 py-4">
            <h2>Size</h2>
            {/* <input type="text" placeholder="Type name & enter" className="border outline-none py-2 px-2" /> */}
          </div>
          <div className="overflow-x-auto mt-3 p-4">
            <table className="table  w-[700px] lg:w-full border">
              <thead>
                <tr className="border text-xs font-normal ">
                  <th className="py-3 text-slate-500 ps-4 text-start">#</th>
                  <th className="py-3 text-slate-500 text-start">key</th>
                  <th className="py-3 text-slate-500 text-start">Value</th>
                  <th className="py-3 text-slate-500 text-start">Action</th>
                </tr>
              </thead>
              <tbody className="border pt-2">
                {oldAttribute?.data?.attribute_options.map(
                  (item: any, i: number) => {
                    return (
                      <tr
                        key={i}
                        className="text-xs font-normal text-start border-b"
                      >
                        <td className="py-5 ps-4">{i + 1}</td>
                        <td>
                          <span className=" py-1 rounded-md px-2">
                            {item.label}
                          </span>
                        </td>
                        <td>
                          <span
                            className=" py-[6px] rounded-md px-2 capitalize text-white"
                            style={{ background: `${item.value}` }}
                          >
                            {item.value}
                          </span>
                        </td>

                        <td>
                          <div className="flex gap-2 items-center">
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
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="basis-5/12 shadow-[0_0_10px_5px_#d7d7d7bf] pb-6">
          <h2 className="border px-6 py-4 text-xl font-semibold">
            Add New Attribute Value
          </h2>
          <div className="px-6 pt-4">
            <form onSubmit={handleSubmit(HandleUpdateAtrribute)}>
              <div>
                <label htmlFor="name" className="mb-2 block">
                  Attributes Name + {oldAttribute?.data.label}
                </label>

                <input
                  defaultValue={oldAttribute?.data.label}
                  {...register("label")}
                  type="text"
                  placeholder="Size"
                  className="border w-full py-2 px-3  rounded-md outline-none"
                />
              </div>
              {oldAttribute?.data?.label === "color" ? (
                <>
                  <div className="mt-2">
                    <label htmlFor="name" className="mb-2 block">
                      Attributes Key
                    </label>

                    <input
                      {...register("key.label")}
                      type="text"
                      placeholder="Label"
                      className="border w-full py-2 px-3  rounded-md outline-none"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="name" className="mb-2 block">
                      Attributes Value
                    </label>

                    <input
                      {...register("key.value")}
                      type="color"
                      className="border w-full  rounded-md outline-none h-6"
                    />
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div>
                    <label htmlFor="name" className="mb-2 block">
                      Attributes Key
                    </label>

                    <input
                      {...register("key.label")}
                      type="text"
                      placeholder="key"
                      className="border w-full py-2 px-3  rounded-md outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="mb-2 block">
                      Attributes Value
                    </label>

                    <input
                      {...register("key.value")}
                      type="text"
                      placeholder="value"
                      className="border w-full py-2 px-3  rounded-md outline-none"
                    />
                  </div>
                </>
              )}
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

export default Page;
