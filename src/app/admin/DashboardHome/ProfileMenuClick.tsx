"use client";
import UserProfileMenu from "@/components/DashboardHeader/UserProfileMenu";
import { useAdminContext } from "@/context/admin.context";
import React from "react";
import { FaBars } from "react-icons/fa";

const ProfileMenuClick = () => {
  const { setMobileMenu }: any = useAdminContext();
  const handleMobileMenuShow = () => {
    setMobileMenu(true);
  };
  return (
    <div className="flex justify-between items-center border-b border-[#E9ECEF] py-4 px-3 xl:px-8 text-end sticky top-0 bg-white z-10">
      <div>
        <button className="block xl:hidden" onClick={handleMobileMenuShow}>
          <FaBars className="text-2xl" />
        </button>
      </div>
      <UserProfileMenu />
    </div>
  );
};

export default ProfileMenuClick;
