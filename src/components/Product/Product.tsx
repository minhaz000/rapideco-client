"use client";
import axios from "@/hooks/hook.axios";
import SectionHeading from "../common/SectionHeading";
import ProductCarousel from "./ProductCarousel";
const Product = async ({
  sectionTitle,
  categoryValue,
}: {
  sectionTitle: string;
  categoryValue: string;
}) => {
  // const { data: products } = await axios.get("api/v0/products");
  const { data: products } = await axios.get(
    `api/v0/products?is_delete=false&category_info._id=${categoryValue}`
  );
  console.log(products);
  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-10">
      <SectionHeading sectionTitle={sectionTitle} seeMoreUrl="/" />
      {<ProductCarousel products={products} />}
    </section>
  );
};

export default Product;
