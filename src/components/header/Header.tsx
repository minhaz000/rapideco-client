"use client";
import Link from "next/link";
import HeaderTop from "./HeaderTop";
import { useRootContext } from "@/context/root.context";
import Image from "next/image";
const Header = () => {
  const { collapseMenu, setCollapseMenu, settingsData }: any = useRootContext();
  const headerBg = settingsData?.header?.color;
  if (!settingsData?.header) {
    return (
      <div className="justify-center items-center flex h-[100vh] absolute w-full top-0 bottom-0 left-0 z-20 bg-white">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
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
              <Link className="text-[17px] font-semibold" href={item?.value}>
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
        <div className="flex justify-between items-center border-b-2 pb-2">
          <Link href="/" className="inline-block">
            <Image
              src={settingsData?.header?.logo?.img_url}
              width={50}
              height={50}
              alt="Logo Image"
              style={{
                width: "30%",
                height: "auto",
              }}
              className="object-cover"
            />
          </Link>
          <button
            className="bg-white text-center w-8 h-8 rounded-full font-bold text-lg me-7"
            onClick={() => setCollapseMenu(false)}
          >
            X
          </button>
        </div>
        {settingsData?.header?.nav_menu?.map((item: any, index: number) => (
          <li key={index}>
            <Link
              className="text-[17px] font-semibold"
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
