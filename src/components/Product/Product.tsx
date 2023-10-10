import Link from "next/link";
import ProductCard from "./ProductCard";
import { BsArrowRightShort } from "react-icons/bs";
import axios from "@/hooks/hook.axios";
const Product = async ({ sectionTitle }: { sectionTitle: string }) => {
  // const { data: products } = await axios.get("api/v0/products");
  const products = { data: [] };
  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-[#3bb77e] capitalize">{sectionTitle}</h2>
        <Link href="/" className="flex items-center gap-2 text-sm hover:text-[#3bb77e]">
          See More <BsArrowRightShort />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products?.data.map((product: any) => {
          return <ProductCard product={product} key={product._id} />;
          // return <> hrllo </>;
        })}
      </div>
    </section>
  );
};

export default Product;
