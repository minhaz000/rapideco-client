import BrandCarousel from "./BrandCarousel";
import "./Brand.css";
import axios from "@/hooks/hook.axios";
import SectionHeading from "../common/SectionHeading";
const Brand = async () => {
  const { data: Brands } = await axios.get(
    "/api/v0/brands?is_delete=false&featured=true"
  );

  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-10">
      <SectionHeading sectionTitle="Shop By Brands" />
      <div className="mt-4" id="shop-brand">
        <BrandCarousel Brands={Brands} />
      </div>
    </section>
  );
};

export default Brand;
