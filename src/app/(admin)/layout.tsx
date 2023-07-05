import Sidebar from "@/components/sidebar/Sidebar";

import { FaRegBell } from "react-icons/fa";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="bg-[#1E293B] w-80 h-screen fixed overflow-y-auto px-6 pt-4 pb-3">
        <Sidebar />
      </div>
      <div className="ps-80">
        <div className="border-b border-[#E9ECEF] py-4 px-8 text-end">
          <div className="flex items-center justify-end">
            <div className="me-4">
              <FaRegBell className="text-2xl cursor-pointer" />
            </div>
            <div className="flex items-center justify-end gap-2 cursor-pointer">
              <img
                src="https://i.ibb.co/vBH9ybB/2-1.jpg"
                className="rounded-full w-10 h-10"
              />
              <span>Rapideco</span>
            </div>
          </div>
        </div>
        <div className="pt-8 px-8">{children}</div>
      </div>
    </div>
  );
}
