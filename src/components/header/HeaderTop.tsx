import Link from "next/link";
import SearchForm from "./SearchForm";
import { FaPhoneAlt } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

const HeaderTop = ({ headerBg }: any) => {
  return (
    <div className="flex flex-row justify-between items-center max-w-screen-xl mx-auto px-3 lg:px-12">
      <div className="basis-4/12 lg:basis-1/4">
        <Link href="/" className="inline-block">
          <h2 className="text-[26px] sm:text-[30px] md:text-[40px] font-semibold ">
            Isoftex
          </h2>
        </Link>
      </div>
      <SearchForm headerBg={headerBg} />
      <div className="basis-1/4 ps-6 pe-3 hidden lg:block">
        <div className="flex items-center justify-end gap-6">
          <div className="flex gap-4 items-center">
            <div>
              <FaPhoneAlt className="text-2xl text-[#BC5189]" />
            </div>
            <div className="text-start">
              <span className="text-[15px] text-gray-600">Phone</span>
              <p className="text-[13px]">০১৭৬০১০৭৭৬৪</p>
            </div>
          </div>
          <div className="relative">
            <Link href="/cart">
              <BsCart className="text-3xl" />
            </Link>
            <span
              className={`absolute -top-[3px] -right-[6px] text-white text-[12px] px-[5px] rounded-full bg-[#BC5189]`}
            >
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
