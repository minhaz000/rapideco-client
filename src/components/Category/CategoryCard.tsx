import Image from "next/image";

import Link from "next/link";
const CategoryCard = ({ item }: { item: any }) => {
  return (
    <Link href={"/"}>
      <Image src={item?.icon.img_url} height={200} width={200} alt={item?.name} className="w-full" />
      <p className="text-center text-[#3bb77e] font-semibold mt-2">{item?.name}</p>
    </Link>
  );
};

export default CategoryCard;
