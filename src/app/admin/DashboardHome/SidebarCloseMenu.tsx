"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import { useAdminContext } from "@/context/admin.context";
const SidebarCloseMenu = () => {
  const { mobileMenu, setMobileMenu }: any = useAdminContext();
  const handleMobileMenuHide = () => {
    setMobileMenu(false);
  };
  return (
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
  );
};

export default SidebarCloseMenu;
