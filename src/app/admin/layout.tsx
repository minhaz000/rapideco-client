"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminContext from "@/context/admin.context";
import UserProfileMenu from "@/components/DashboardHeader/UserProfileMenu";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenuShow = () => {
    setMobileMenu(true);
  };
  const handleMobileMenuHide = () => {
    setMobileMenu(false);
  };
  return (
    <AdminContext>
      <>
        <div
          onClick={() => setMobileMenu(false)}
          className={`fixed  ${
            mobileMenu ? "block opacity-100" : "hidden opacity-0"
          } top-0 bottom-0 bg-black bg-opacity-50 z-10 h-screen w-full cursor-pointer duration-500`}
        ></div>
        <div
          className={`bg-[#141423] ${
            mobileMenu
              ? "-translate-x-0 opacity-100 w-3/4 "
              : "-translate-x-96 xl:w-[300px] xl:-translate-x-0 opacity-0 xl:opacity-100"
          }  h-screen fixed top-0 bottom-0  overflow-y-auto px-6 pt-4 pb-3 z-20 transition-all duration-500 ease-in-out`}
        >
          <button
            className="absolute top-4 right-4 bg-sky-800 w-6 h-6 rounded-full text-white block xl:hidden"
            onClick={handleMobileMenuHide}
          >
            X
          </button>
          <Sidebar />
        </div>
        <div className="xl:ps-[300px]">
          <div className="flex justify-between items-center border-b border-[#E9ECEF] py-4 px-3 xl:px-8 text-end">
            <div>
              <button
                className="block xl:hidden"
                onClick={handleMobileMenuShow}
              >
                <FaBars className="text-2xl" />
              </button>
            </div>
            <UserProfileMenu />
          </div>
          <div className="px-3 xl:px-8 mt-8 mb-4">{children}</div>
        </div>
      </>
    </AdminContext>
  );
}
