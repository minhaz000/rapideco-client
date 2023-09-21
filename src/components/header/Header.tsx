"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Tracking from "../../assets/finding.png";
import Cart from "../../assets/bag.png";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Img1 from "../../assets/iphone-dock-4.jpg";
const Header = () => {
  const [cartSidebar, setCartSidebar] = useState(false);
  return (
    <header className="pt-3">
      {/* Top bar */}
      <div className="flex flex-row justify-between items-center max-w-screen-xl mx-auto px-3 lg:px-10">
        <div className="basis-4/12 lg:basis-1/4">
          <Link href="/" className="inline-block">
            <Image
              src={Logo}
              alt="Logo image"
              className="w-24 md:w-32 lg:w-40"
            />
          </Link>
        </div>
        <div className="basis-8/12 lg:basis-1/2">
          <form className="flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full border rounded-s-md px-2 md:px-3 py-[6px] md:py-[10px] outline-none"
            />
            <button className="bg-[#3bb77e] text-white px-3 rounded-e-md">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="basis-1/4 ps-6 hidden lg:block text-center">
          <div className="flex items-center justify-end gap-5">
            <div>
              <Link href="/" className="flex items-center  gap-1">
                <Image
                  src={Tracking}
                  alt="tracking icon"
                  width={40}
                  height={40}
                />
                <span className="block text-center font-bold text-[14px]">
                  অর্ডার ট্র্যাক <br /> করুন
                </span>
              </Link>
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() => setCartSidebar(true)}
            >
              <Image src={Cart} alt="tracking icon" width={40} height={40} />
              <span className="absolute bg-[#3bb77e] top-0 -right-[5px] text-white text-[12px] px-[5px] rounded-full">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Cart sidebar */}
        <div
          className={`fixed w-full top-0 bottom-0 left-0 bg-black duration-200 ${
            cartSidebar
              ? "bg-opacity-60 z-[90] visible"
              : "bg-opacity-0 invisible"
          } `}
        ></div>
        <div
          className={`fixed right-0 top-0 bottom-0 transition-all duration-300 ${
            cartSidebar ? "-translate-x-0" : "translate-x-[500px]"
          } w-[330px] bg-white z-[100] flex flex-col`}
        >
          <div>
            <div className="flex justify-between items-center border-b px-4 py-4">
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              <button onClick={() => setCartSidebar(false)} className="text-sm">
                X Close
              </button>
            </div>
            <div className="flex pt-3 justify-between px-4">
              <div className="flex gap-3">
                <Image src={Img1} alt="" width={60} height={60} />
                <div>
                  <h3 className="mb-2 text-sm">Iphone Dock - Gray</h3>
                  <div className="flex gap-1 me-3">
                    <span className="border border-gray-300 px-1 rounded-sm cursor-pointer">
                      -
                    </span>
                    <input
                      type="number"
                      min={"1"}
                      max={"10"}
                      className="w-10 border border-gray-300 outline-none text-center"
                    />
                    <span className="border border-gray-300 px-1 rounded-sm cursor-pointer">
                      +
                    </span>
                  </div>
                  <span className="mt-1 block text-sm text-stone-700">
                    1 <small>x</small> $2000
                  </span>
                </div>
              </div>
              <button>X</button>
            </div>
          </div>
          <div className="px-4 mt-auto pb-6">
            <div className="flex justify-between items-center py-4 border-y mb-4">
              <h2 className="font-bold text-lg">Subtotal:</h2>
              <span>$230.00</span>
            </div>
            <button className=" w-full text-center py-2 border rounded">
              View Cart
            </button>
            <button className="bg-[#3bb77e] text-white w-full text-center py-2 mt-4 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
      {/* Main menu  */}
      <nav className="bg-[#3bb77e] mt-3 hidden lg:block">
        <ul className="flex gap-4 max-w-screen-xl mx-auto py-3 px-10 text-white text-[14px]">
          <li>
            <Link href="/">হোম </Link>
          </li>
          <li>
            <Link href="/">ছেলেদের পোশাক</Link>
          </li>
          <li>
            <Link href="/">মেয়েদের পোশাক</Link>
          </li>
          <li>
            <Link href="/">বাচ্চাদের পোষাক</Link>
          </li>
          <li>
            <Link href="/">প্রসাধনী সামগ্রী</Link>
          </li>
          <li>
            <Link href="/">গ্যাজেট</Link>
          </li>
          <li>
            <Link href="/">গৃহসজ্জা</Link>
          </li>
          <li>
            <Link href="/">হোলি ফ্রাইডে সেল</Link>
          </li>
          <li>
            <Link href="/">লগইন/সাইনআপ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
