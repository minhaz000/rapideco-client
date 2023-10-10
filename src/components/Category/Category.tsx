import CategoryCard from "./CategoryCard";
import Cat1 from "../../assets/category/baby-carwe.png";
import Cat2 from "../../assets/category/2.png";
import Cat3 from "../../assets/category/3.png";
import Cat4 from "../../assets/category/4.png";
import Cat5 from "../../assets/category/5.png";
import Cat6 from "../../assets/category/mans-care-1.png";
const Category = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-10">
      <h2 className="text-xl font-semibold text-[#3bb77e] capitalize">
        SHOP BY CATEGORIES
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
        <CategoryCard image={Cat1} />
        <CategoryCard image={Cat2} />
        <CategoryCard image={Cat3} />
        <CategoryCard image={Cat4} />
        <CategoryCard image={Cat5} />
        <CategoryCard image={Cat6} />
      </div>
    </section>
  );
};

export default Category;
