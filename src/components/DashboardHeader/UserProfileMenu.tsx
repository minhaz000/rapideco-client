"use client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "../../hooks/hook.axios";
import user from "@/assets/user.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
const UserProfileMenu = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    axios
      .delete("auth/v0/logout")
      .then((res) => {
        toast.success("Successfully Logout!!");
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="">
      <div className="relative">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setProfileOpen(!profileOpen)}
        >
          <Image
            src={user}
            className="rounded-full w-10 h-10 bg-blue-600"
            alt=""
            width={40}
            height={40}
          />
          <div className="text-left">
            <h3 className="text-lg font-semibold leading-4">Isoftex</h3>
            <span className="opacity-90 text-sm">Admin</span>
          </div>
        </div>
        <div
          className={`bg-white border-l-4 border-cyan-700 shadow-lg w-40  rounded absolute top-14 -left-14 duration-300 transition-all flex flex-col gap-3 py-3 px-2 z-50 ${
            profileOpen
              ? "visible opacity-100 translate-y-2"
              : "invisible opacity-0 translate-y-12"
          }`}
        >
          <div className="text-start" onClick={() => setProfileOpen(false)}>
            <Link href={"/admin/profile"}>Profile</Link>
          </div>
          <button className="text-start" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileMenu;
