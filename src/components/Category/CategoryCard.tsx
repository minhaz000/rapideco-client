import Image from "next/image";

import Link from "next/link";
const CategoryCard = ({ item }: { item: any }) => {
  return (
    <Link href={"/"}>
      <Image
        src={item?.icon?.img_url}
        height={200}
        width={200}
        alt={item?.name}
        className="w-full h-[140px]"
      />
      <p className="text-center font-semibold mt-2">{item?.name}</p>
    </Link>
  );
};

export default CategoryCard;
