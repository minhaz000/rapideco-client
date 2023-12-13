"use client";
import Link from "next/link";
import SearchForm from "./SearchForm";
import { FaPhoneAlt } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { useRootContext } from "@/context/root.context";
import Image from "next/image";

const HeaderTop = () => {
  const { Cart, settingsData }: any = useRootContext();
  const headerBg = settingsData?.header?.color;
  return (
    <div className="flex flex-row justify-between items-center max-w-screen-xl mx-auto px-3 lg:px-12">
      <div className="basis-4/12 lg:basis-1/4">
        <Link href="/" className="inline-block">
          {settingsData?.header?.logo ? (
            <Image
              src={settingsData?.header?.logo?.img_url}
              width={150}
              height={80}
              alt="Logo Image"
              style={{
                width: "100%",
                height: "auto",
              }}
              className="object-cover"
            />
          ) : (
            <h2 className="text-[26px] sm:text-[30px] md:text-[40px] font-semibold ">
              Your Logo
            </h2>
          )}
        </Link>
      </div>
      <SearchForm />
      <div className="basis-1/4 ps-6 pe-3 hidden lg:block">
        <div className="flex items-center justify-end gap-6">
          <div className="flex gap-4 items-center">
            <div>
              <FaPhoneAlt
                className="text-2xl"
                style={{ color: `${headerBg}` }}
              />
            </div>
            <div className="text-start">
              <span className="text-[15px] text-gray-600 block">Phone</span>
              <Link
                className="text-[13px]"
                href={`tel:${settingsData?.header?.phone_number}`}
              >
                {settingsData?.header?.phone_number}
              </Link>
            </div>
          </div>
          <div className="relative">
            <Link href="/cart">
              <BsCart className="text-3xl" />
            </Link>
            <span
              className={`absolute -top-[3px] -right-[6px] text-white text-[12px] px-[5px] rounded-full`}
              style={{ background: `${headerBg}` }}
            >
              {Cart?.data?.data ? Cart?.data?.data?.items?.length : 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
