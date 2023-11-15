import Link from "next/link";
import ProductCard from "./ProductCard";
import { BsArrowRightShort } from "react-icons/bs";
import axios from "@/hooks/hook.axios";
import SectionHeading from "../common/SectionHeading";
import ProductCarousel from "./ProductCarousel";
const Product = async ({ sectionTitle, categoryValue }: { sectionTitle: string; categoryValue: string }) => {
  // const { data: products } = await axios.get("api/v0/products");
  const { data: products } = await axios.get(`api/v0/products?is_delete=false&category_info._id=${categoryValue}`);

  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-10">
      <div className="flex justify-between items-center mb-5">
        <SectionHeading sectionTitle={sectionTitle} />
        <Link href="/" className="flex items-center gap-2 text-sm hover:text-[#3bb77e]">
          See More <BsArrowRightShort />
        </Link>
      </div>
      <ProductCarousel products={products} />
    </section>
  );
};

export default Product;
