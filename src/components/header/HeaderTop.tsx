"use client";
import Link from "next/link";
import SearchForm from "./SearchForm";
import { FaPhoneAlt } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { useRootContext } from "@/context/root.context";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
const HeaderTop = () => {
  const { Cart, settingsData }: any = useRootContext();
  const headerBg = settingsData?.header?.color;
  return (
    <div className="flex flex-row justify-between items-center max-w-screen-xl mx-auto px-3 lg:px-12">
      <div className="basis-4/12 lg:basis-1/4">
        {settingsData?.header ? (
          <Link href="/" className="inline-block">
            <Image
              src={settingsData?.header?.logo?.img_url}
              width={130}
              height={50}
              alt="Logo Image"
              className="object-cover w-[90%] sm:w-[130px]"
            />
          </Link>
        ) : (
          <Skeleton width={130} height={50} />
        )}
      </div>
      <SearchForm />
      <div className="basis-1/4 ps-6 pe-3 hidden lg:block">
        {settingsData?.header ? (
          <div className="flex items-center justify-end gap-6">
            <Link href={`tel:${settingsData?.header?.phone_number}`}>
              <div className="flex gap-4 items-center">
                <div>
                  <FaPhoneAlt
                    className="text-2xl"
                    style={{ color: `${headerBg}` }}
                  />
                </div>
                <div className="text-start">
                  <span className="text-[15px] text-gray-600 block font-semibold">
                    Phone
                  </span>
                  <p className="text-[13px] block">
                    {settingsData?.header?.phone_number}
                  </p>
                </div>
              </div>
            </Link>
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
        ) : (
          <Skeleton height={50} />
        )}
      </div>
    </div>
  );
};

export default HeaderTop;
