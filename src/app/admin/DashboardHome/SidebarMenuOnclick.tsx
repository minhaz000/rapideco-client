"use client"
import { useAdminContext } from "@/context/admin.context";
import React from "react";

const SidebarMenuOnclick = () => {
  const { mobileMenu, setMobileMenu }: any = useAdminContext();
  return (
    <div
      onClick={() => setMobileMenu(false)}
      className={`fixed  ${
        mobileMenu ? "block opacity-100" : "hidden opacity-0"
      } top-0 bottom-0 bg-black bg-opacity-50 z-10 h-screen w-full cursor-pointer duration-500`}
    ></div>
  );
};

export default SidebarMenuOnclick;
