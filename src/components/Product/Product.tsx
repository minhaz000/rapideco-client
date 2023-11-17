import SectionHeading from "../common/SectionHeading";
import ProductCarousel from "./ProductCarousel";
const Product = ({
  sectionTitle,
  categoryValue,
}: {
  sectionTitle: string;
  categoryValue: string;
}) => {
  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-20 mt-10">
      <SectionHeading sectionTitle={sectionTitle} seeMoreUrl="/" />
      {<ProductCarousel categoryValue={categoryValue} />}
    </section>
  );
};

export default Product;
