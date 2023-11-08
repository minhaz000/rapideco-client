import BrandCarousel from "./BrandCarousel";
import "./Brand.css";
import axios from "@/hooks/hook.axios";
const Brand = async () => {
  const { data: Brands } = await axios.get("/api/v0/brands?is_delete=false&featured=true");

  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-10">
      <h2 className="text-xl font-semibold text-[#3bb77e] capitalize">Shop By Brands</h2>
      <div className="mt-4" id="brand">
        <BrandCarousel Brands={Brands} />
      </div>
    </section>
  );
};

export default Brand;
