"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import MobileBottomMenu from "./MobileBottomMenu";
import { BiHomeAlt, BiPhoneCall, BiCart } from "react-icons/bi";
import { AiOutlineBars } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { useRootContext } from "@/context/root.context";
const Footer = () => {
  const { collapseMenu, setCollapseMenu, settingsData }: any = useRootContext();
  const handleRootMenu = () => {
    setCollapseMenu(!collapseMenu);
  };
  const headerBg = settingsData?.footer?.color;
  return (
    <footer
      className="pt-7 pb-3 mt-12 mb-16 md:mb-0"
      style={{ backgroundColor: `${headerBg}` }}
    >
      <div className="max-w-screen-xl mx-auto px-3 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src={settingsData?.footer?.logo?.img_url}
                alt=""
                className="w-24 md:w-32 lg:w-40"
                width={160}
                height={140}
              />
            </Link>
            <p className="text-slate-100 text-[16px] mt-2 leading-[30px]">
              {settingsData?.footer?.description}
            </p>
            <div className="flex gap-4 mt-3 text-slate-100">
              <Link href={"/"}>
                <FaFacebookF />
              </Link>
              <Link href="/">
                <FaLinkedinIn />
              </Link>
              <Link href="/">
                <FaInstagram />
              </Link>
              <Link href="/">
                <FaWhatsapp />
              </Link>
            </div>
          </div>
          <div className="pt-4 lg:ps-10">
            <h3 className="text-white text-xl mb-6 font-semibold">
              গুরুত্বপূর্ণ লিংক
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-100">
              {settingsData?.footer?.links?.map((link: any, index: any) => (
                <li key={index}>
                  <Link className="text-[16px]" href={link.value}>
                    {link.lavel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 lg:pe-5">
            <h3 className="text-white text-xl mb-6 font-semibold">ঠিকানা</h3>
            <div className="flex flex-col gap-3 text-[16px] text-slate-100">
              <p>ঠিকানাঃ {settingsData?.footer?.contact_info?.address}।</p>
              <p>মোবাইলঃ {settingsData?.footer?.contact_info?.phone} ।</p>
              <p> ইমেইলঃ {settingsData?.footer?.contact_info?.email} ।</p>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className=" max-w-screen-xl mx-auto px-3 lg:px-12 border-t-[1px] border-slate-50 mt-8 pt-3">
        <p className="text-slate-100 text-center text-[16px] capitalize">
          {settingsData?.footer?.copyright}
        </p>
      </div>
      {/* bottom menu */}
      <div className="fixed bottom-0 left-0 bg-white border-t-2 flex gap-3 justify-between items-center w-full px-6 py-2 lg:hidden z-[99]">
        <Link href="/">
          <MobileBottomMenu Icon={BiHomeAlt} name="Home" />
        </Link>
        <MobileBottomMenu
          Icon={RxDashboard}
          onSidebar={handleRootMenu}
          name="Category"
        />
        <Link href={"/shop"}>
          <MobileBottomMenu Icon={AiOutlineBars} name="Shop" />
        </Link>
        <Link href="to:01700000">
          <MobileBottomMenu Icon={BiPhoneCall} name="Phone" />
        </Link>
        <Link href={"/cart"}>
          <MobileBottomMenu Icon={BiCart} name="Cart" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
