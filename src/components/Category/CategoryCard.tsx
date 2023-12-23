import Image from "next/image";
import Link from "next/link";
const CategoryCard = ({ item }: { item: any }) => {
  return (
    <Link href={`/shop?cate=${item._id}`} className="group">
      <Image
        src={item?.icon?.img_url}
        height={140}
        width={200}
        alt={item?.name}
        className="w-full object-cover rounded h-[140px]"
      />
      <p className="text-center font-semibold mt-2 group-hover:text-red-600">
        {item?.name}
      </p>
    </Link>
  );
};

export default CategoryCard;
