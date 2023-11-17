import Image from "next/image";
import Logo from "../../assets/logo.png";
import Cart from "../../assets/bag.png";
import Link from "next/link";
import SearchForm from "./SearchForm";
import SettingData from "../../../public/assets/site.settings.json";
import { FaPhoneAlt } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
const Header = () => {
  const headerBg = SettingData?.header?.color;
  return (
    <header className="pt-3">
      {/* Top bar */}
      <div className="flex flex-row justify-between items-center max-w-screen-xl mx-auto px-3 lg:px-20">
        <div className="basis-4/12 lg:basis-1/4">
          <Link href="/" className="inline-block">
            <Image
              src={Logo}
              alt="Logo image"
              className="w-24 md:w-32 lg:w-40"
            />
          </Link>
        </div>
        <SearchForm headerBg={headerBg} />
        <div className="basis-1/4 ps-6 hidden lg:block">
          <div className="flex items-center justify-end gap-6">
            <div className="flex gap-4 items-center">
              <div>
                <FaPhoneAlt
                  className="text-2xl"
                  style={{ color: `${headerBg}` }}
                />
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
                style={{ backgroundColor: `${headerBg}` }}
                className={`absolute -top-[3px] -right-[6px] text-white text-[12px] px-[5px] rounded-full`}
              >
                0
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Main menu  */}
      <nav
        className={` mt-3 hidden lg:block`}
        style={{ backgroundColor: `${headerBg}` }}
      >
        <ul className="flex gap-4 max-w-screen-xl mx-auto py-3 lg:px-20 text-white text-[14px]">
          {SettingData?.header?.nav_menu?.map((item: any, index: number) => (
            <li key={index}>
              <Link href={item?.value}>{item?.lavel}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
