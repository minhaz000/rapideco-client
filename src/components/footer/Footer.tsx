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
const Footer = async () => {
  const { footer } = SettingData;
  const { phone, email, address } = footer?.contact_info;
  return (
    <section className="bg-[#3bb77e] pt-7 pb-3 mt-14">
      <div className="max-w-screen-xl mx-auto px-3 lg:px-10">
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
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-3 lg:px-10 border-t-[1px] border-slate-50 mt-8 pt-3">
        <p className="text-slate-100 text-sm text-center md:text-left">
          {footer?.copyright}
        </p>
        <div className="flex gap-3 text-sm text-slate-100">
          <Link href="/">Terms of Service</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
