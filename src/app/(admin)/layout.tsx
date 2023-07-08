"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import Link from "next/link";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div className="relative">
      <div className="bg-[#1E293B] w-80 h-screen absolute lg:fixed opacity-0 lg:opacity-100 overflow-y-auto px-6 pt-4 pb-3">
        <Sidebar />
      </div>
      <div className="lg:ps-80">
        <div className="border-b border-[#E9ECEF] py-4 px-8 text-end">
          <div className="flex items-center justify-end">
            <div className="me-4">
              <FaRegBell className="text-2xl cursor-pointer" />
            </div>
            <div className="relative">
              <div className="flex items-center justify-end gap-2 cursor-pointer">
                <img
                  src="https://i.ibb.co/vBH9ybB/2-1.jpg"
                  className="rounded-full w-10 h-10"
                />
                <span>Rapideco</span>
              </div>
              <div
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
        <div className="pt-10 px-8">{children}</div>
      </div>
    </div>
  );
}
