import Link from "next/link";
import SettingData from "../../../public/assets/site.settings.json";
import HeaderTop from "./HeaderTop";
const Header = () => {
  const headerBg = SettingData?.header?.color;
  return (
    <header className="pt-2">
      {/* Top bar */}
      <HeaderTop headerBg={headerBg} />
      {/* Main menu  */}
      <nav
        className={`hidden lg:block mt-2`}
        style={{ backgroundColor: `${headerBg}` }}
      >
        <ul className="flex justify-center gap-4 max-w-screen-xl mx-auto py-[8px] lg:px-12 text-white text-[14px]">
          {SettingData?.header?.nav_menu?.map((item: any, index: number) => (
            <li key={index}>
              <Link className="text-[17px]" href={item?.value}>
                {item?.lavel}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
