import Image from "next/image";

import Link from "next/link";
const CategoryCard = ({ image }) => {
  return (
    <Link href={"/"}>
      <Image src={image} alt="category" className="w-full" placeholder="blur" />
      <p className="text-center text-[#3bb77e] font-semibold mt-2">
        BABY’S SKIN CARE
      </p>
    </Link>
  );
};

export default CategoryCard;
