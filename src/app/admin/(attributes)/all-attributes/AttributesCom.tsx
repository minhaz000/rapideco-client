"use client";
import Link from "next/link";
import { BsGear } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "@/hooks/hook.axios";
import { useAdminContext } from "@/context/admin.context";
const AttributesCom = () => {
  const { Atrribute }: any = useAdminContext();
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
          .delete(`/api/v0/attribute/${deleteId}?permanent=true`)
          .then(() => {
            toast.success("Brand deleted");
            Atrribute.refetch();
          })
          .catch((error: any) =>
            toast.error(error.message ? error.message : error?.data.message)
          );
      }
    });
  };
  return (
    <tbody className="border pt-2">
      {Atrribute?.data?.data.map((item: any, i: number) => {
        return (
          <tr key={i} className="text-xs font-normal text-start border-b">
            <td className="py-5 ps-4">{i + 1}</td>
            <td className="capitalize">{item.label}</td>
            <td>
              <div className="flex gap-1 items-center">
                {item.attribute_options.map((lb: any) => (
                  <span className="border py-1 rounded-md block px-2 text-[13px] capitalize">
                    {lb.label}
                  </span>
                ))}
              </div>
            </td>

            <td>
              <div className="flex gap-2 items-center">
                <span
                  title="Attributes values"
                  className="bg-blue-500 bg-opacity-50 text-white text-xs p-[5px] rounded-full cursor-pointer hover:bg-opacity-100"
                >
                  <Link href={`/admin/attribute-details/${item._id}`}>
                    <BsGear />
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
  );
};

export default AttributesCom;
