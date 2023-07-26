"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import Link from "next/link";
import { useState } from "react";
import { FaRegBell, FaBars } from "react-icons/fa";
import AdminContext from "@/context/admin.context";
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenuShow = () => {
    setMobileMenu(true);
  };
  const handleMobileMenuHide = () => {
    setMobileMenu(false);
  };
  return (
    <AdminContext>
      <div className="relative">
        <div
          className={`bg-[#1E293B] ${
            mobileMenu
              ? "-translate-x-0 opacity-100 w-3/4"
              : "-translate-x-96 xl:w-80 xl:-translate-x-0 opacity-0 xl:opacity-100"
          }  h-screen absolute xl:fixed  overflow-y-auto px-6 pt-4 pb-3 z-10 transition-all duration-500 ease-in-out`}
        >
          <button
            className="absolute top-4 right-4 bg-sky-800 w-6 h-6 rounded-full text-white block xl:hidden"
            onClick={handleMobileMenuHide}
          >
            X
          </button>
          <Sidebar />
        </div>
        <div className="xl:ps-80">
          <div className="flex justify-between items-center border-b border-[#E9ECEF] py-4 px-3 xl:px-8 text-end">
            <div>
              <button className="block xl:hidden" onClick={handleMobileMenuShow}>
                <FaBars className="text-2xl" />
              </button>
            </div>
            <div className="flex items-center justify-end">
              <div className="me-4">
                <FaRegBell className="text-2xl cursor-pointer" />
              </div>
              <div className="relative">
                <div className="flex items-center justify-end gap-2 cursor-pointer">
                  <img src="https://i.ibb.co/vBH9ybB/2-1.jpg" className="rounded-full w-10 h-10" />
                  <span>Rapideco</span>
                </div>
                <div
                  onClick={() => setProfileOpen(!profileOpen)}
                  className={`bg-white border-l-4 border-cyan-700 shadow-lg w-32  rounded absolute top-10 -left-14 flex flex-col gap-3 py-3 px-2 ${
                    profileOpen ? "block" : "hidden"
                  }`}
                >
                  <Link href={"/profile"} className="text-start">
                    Profile
                  </Link>
                  <Link href={"/logout"} className="text-start">
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 px-3 xl:px-8">{children}</div>
        </div>
      </div>
    </AdminContext>
  );
}
