"use client";
import Link from "next/link";
import HeaderTop from "./HeaderTop";
import { useRootContext } from "@/context/root.context";
const Header = () => {
  const { collapseMenu, setCollapseMenu, settingsData }: any = useRootContext();
  const headerBg = settingsData?.header?.color;
  return (
    <header className="pt-2 shadow-md pb-2 mb-3 lg:mb-0 lg:pb-0 lg:shadow-none">
      {/* Top bar */}
      <HeaderTop />
      {/* Main menu  */}

      <nav
        className={`hidden lg:block mt-2`}
        style={{ backgroundColor: `${headerBg}` }}
      >
        <ul className="flex justify-center gap-5 max-w-screen-xl mx-auto py-[10px] lg:px-12 text-white text-[14px]">
          {settingsData?.header?.nav_menu?.map((item: any, index: number) => (
            <li key={index}>
              <Link className="text-[17px]" href={item?.value}>
                {item?.lavel}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* mobile menu */}
      <div
        onClick={() => setCollapseMenu(false)}
        className={`fixed  ${
          collapseMenu ? "block opacity-100" : "hidden opacity-0"
        } top-0 bottom-0 bg-black bg-opacity-50 z-10 h-screen w-full cursor-pointer duration-500`}
      ></div>
      <ul
        className={`flex flex-col gap-4 py-[16px] ps-4 lg:px-12 text-[14px] ${
          collapseMenu
            ? "visible opacity-100 -translate-x-0"
            : "invisible lg:invisible opacity-0 lg:opacity-0 block lg:hidden -translate-x-96"
        } h-screen fixed top-0 bottom-0  overflow-y-auto z-50 transition-all duration-500 ease-in-out w-[90%] sm:w-3/4 bg-white`}
      >
        <button
          className="bg-white text-center text-black w-8 h-8 rounded-full font-bold text-lg absolute right-3"
          onClick={() => setCollapseMenu(false)}
        >
          X
        </button>
        {settingsData?.header?.nav_menu?.map((item: any, index: number) => (
          <li key={index}>
            <Link
              className="text-[17px]"
              href={item?.value}
              onClick={() => setCollapseMenu(false)}
            >
              {item?.lavel}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
