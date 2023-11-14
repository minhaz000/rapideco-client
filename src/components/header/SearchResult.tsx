import Image from "next/image";
import Link from "next/link";
import P1 from "../../assets/img.png";

const SearchResult = () => {
  return (
    <div className="absolute bg-slate-50 border top-12 left-0 w-[95%] px-4 py-2 z-50">
      <h2 className="text-sm border-b pb-2 text-end">Products</h2>
      <div className="flex gap-3 flex-col mt-3">
        <Link href="/">
          <div className="flex gap-3 items-center">
            <Image src={P1} alt="" width={40} height={40} />
            <div>
              <h3 className="text-[12px]">
                FNOCKS Girls Kids Casual WEAR Slim FIT Trendy Stylish
              </h3>
              <span>$120</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SearchResult;
