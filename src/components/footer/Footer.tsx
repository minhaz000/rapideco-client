"use client";
import React from "react";
import Logo from "../../assets/logo-white1.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import SettingData from "../../../public/assets/site.settings.json";
import MobileBottomMenu from "./MobileBottomMenu";
import { BiHomeAlt, BiPhoneCall, BiCart } from "react-icons/bi";
import { AiOutlineBars } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { useRootContext } from "@/context/root.context";
const Footer = () => {
  const { collapseMenu, setCollapseMenu }: any = useRootContext();
  const { footer } = SettingData;
  const { phone, email, address } = footer?.contact_info;
  const handleRootMenu = () => {
    setCollapseMenu(!collapseMenu);
  };
  const headerBg = SettingData?.header?.color;
  return (
    <section
      className="pt-7 pb-3 mt-12 mb-16 md:mb-0"
      style={{ backgroundColor: `${headerBg}` }}
    >
      <div className="max-w-screen-xl mx-auto px-3 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div>
            <Link href="/" className="inline-block">
              <Image src={Logo} alt="" className="w-24 md:w-32 lg:w-40" />
            </Link>
            <p className="text-slate-100 text-sm mt-2">{footer?.description}</p>
            <div className="flex gap-4 mt-3 text-slate-100">
              <Link href="/">
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
            <h3 className="text-white text-xl mb-4">গুরুত্বপূর্ণ লিংক সমূহ</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-100">
              {footer?.links?.map((link: any, index: any) => (
                <li key={index}>
                  <Link href={link.value}>{link.lavel}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 lg:pe-5">
            <h3 className="text-white text-xl mb-4">ঠিকানা</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-100">
              <p>ঠিকানাঃ {address}।</p>
              <p>মোবাইলঃ {phone} ।</p>
              <p> ইমেইলঃ {email} ।</p>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-3 lg:px-12 border-t-[1px] border-slate-50 mt-8 pt-3">
        <p className="text-slate-100 text-sm text-center md:text-left">
          {footer?.copyright}
        </p>
        <div className="flex gap-3 text-sm text-slate-100">
          <Link href="/">Terms of Service</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
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
        <Link href="to:01760107764">
          <MobileBottomMenu Icon={BiPhoneCall} name="Phone" />
        </Link>
        <Link href={"/cart"}>
          {" "}
          <MobileBottomMenu Icon={BiCart} name="Cart" />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
