import CategoryCard from "./CategoryCard";
import Cat1 from "../../assets/category/baby-carwe.png";
import axios from "@/hooks/hook.axios";

const Category = async () => {
  const { data: Categories } = await axios.get("/api/v0/categories?is_delete=false&featured=true");

  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-10">
      <h2 className="text-xl font-semibold text-[#3bb77e] capitalize">SHOP BY CATEGORIES</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
        {Categories.data.map((item: any) => (
          <CategoryCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Category;
