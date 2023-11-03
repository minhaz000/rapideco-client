"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";

import Tracking from "../../assets/finding.png";
import Cart from "../../assets/bag.png";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import SearchResult from "./SearchResult";

const Header = ({ data }: any) => {
  const [isSearchResult, setIsSearchResult] = useState("");

  return (
    <header className="pt-3">
      {/* Top bar */}
      <div className="flex flex-row justify-between items-center max-w-screen-xl mx-auto px-3 lg:px-10">
        <div className="basis-4/12 lg:basis-1/4">
          <Link href="/" className="inline-block">
            <Image src={Logo} alt="Logo image" className="w-24 md:w-32 lg:w-40" />
          </Link>
        </div>
        <div className="basis-8/12 lg:basis-1/2 relative">
          <form className="flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full border rounded-s-md px-2 md:px-3 py-[6px] md:py-[10px] outline-none"
              onChange={(e) => setIsSearchResult(e.target.value)}
            />
            <button className="bg-[#3bb77e] text-white px-3 rounded-e-md">
              <FaSearch />
            </button>
          </form>
          {/* Search data show */}
          {isSearchResult === "" ? "" : <SearchResult />}
        </div>
        <div className="basis-1/4 ps-6 hidden lg:block text-center">
          <div className="flex items-center justify-end gap-5">
            <div>
              <Link href="/" className="flex items-center  gap-1">
                <Image src={Tracking} alt="tracking icon" width={40} height={40} />
                <span className="block text-center font-bold text-[14px]">
                  অর্ডার ট্র্যাক <br /> করুন
                </span>
              </Link>
            </div>
            <div className="relative">
              <Link href="/cart">
                <Image src={Cart} alt="tracking icon" width={40} height={40} />
              </Link>
              <span className="absolute bg-[#3bb77e] top-0 -right-[5px] text-white text-[12px] px-[5px] rounded-full">
                0
              </span>
            </div>
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
