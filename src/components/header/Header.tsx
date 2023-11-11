import Image from "next/image";
import Logo from "../../assets/logo.png";
import Tracking from "../../assets/finding.png";
import Cart from "../../assets/bag.png";
import Link from "next/link";
import SearchForm from "./SearchForm";
import SettingData from "../../../public/assets/site.settings.json";
const Header = () => {
  const headerBg = SettingData?.header?.color;
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
        <SearchForm headerBg={headerBg} />
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
            <div className="relative">
              <Link href="/cart">
                <Image src={Cart} alt="tracking icon" width={40} height={40} />
              </Link>
              <span
                style={{ backgroundColor: `${headerBg}` }}
                className={`absolute bg-[${headerBg}] top-0 -right-[5px] text-white text-[12px] px-[5px] rounded-full`}
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
        <ul className="flex gap-4 max-w-screen-xl mx-auto py-3 px-10 text-white text-[14px]">
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
