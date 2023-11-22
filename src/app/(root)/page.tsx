import Brand from "@/components/Brand/Brand";
import Category from "@/components/Category/Category";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import Product from "@/components/Product/Product";
import site from "../../../public/assets/site.settings.json";
const page = () => {
  return (
    <>
      <HomeBanner />
      <Category />

      {site.body.cat_menu.map((item, i) => (
        <Product key={i} categoryValue={item?.value} sectionTitle={item?.lavel} />
      ))}

      <Brand />
    </>
  );
};

export default page;
