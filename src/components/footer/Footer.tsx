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
const Footer = () => {
  return (
    <section className="bg-[#3bb77e] pt-7 pb-3 mt-14">
      <div className="max-w-screen-xl mx-auto px-3 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div>
            <Link href="/" className="inline-block">
              <Image src={Logo} alt="" className="w-24 md:w-32 lg:w-40" />
            </Link>
            <p className="text-slate-100 text-sm mt-2">
              ওনেমার্ট ই-কমার্স ওয়েবসাইট একটি ব্যবসা প্ল্যাটফর্ম, যেখানে আপনি
              আপনার পছন্দের পণ্য অনলাইনে ক্রয় করতে পারেন। ওনেমার্টে আপনি বিভিন্ন
              ক্যাটেগরিতে পণ্য সন্ধান করতে পারেন, যেমন পোশাক, স্বাস্থ্য ও
              সৌন্দর্য, ইলেক্ট্রনিক্স, গৃহস্থালি, খাদ্য ও পানীয় সামগ্রী এবং
              অন্যান্য।
            </p>
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
              <Link href="/">হোম</Link>
              <Link href="/">অর্ডার ট্র্যাকিং</Link>
              <Link href="/">আমাদের সম্পর্কে</Link>
              <Link href="/">যোগাযোগ</Link>
              <Link href="/">লগইন</Link>
            </ul>
          </div>
          <div className="pt-4 lg:pe-5">
            <h3 className="text-white text-xl mb-4">ঠিকানা</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-100">
              <p>ঠিকানাঃ #০২, রোডঃ ০২,ঢাকা ।</p>
              <p>মোবাইলঃ +৮৮০ ০১৭৬০-১০৭৭৬৪ ।</p>
              <p> ইমেইলঃ rapidco@admin.com ।</p>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="md:flex items-center justify-between max-w-screen-xl mx-auto px-3 lg:px-10 border-t-[1px] border-slate-50 mt-8 pt-3">
        <p className="text-slate-100 text-sm">
          Copyright © {new Date().getFullYear()} Rapideco. All rights reserved.
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
