import Brand from "@/components/Brand/Brand";
import Category from "@/components/Category/Category";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import HomeProducts from "./HomeComponents/HomeProducts";
const page = () => {
  return (
    <>
      <HomeBanner />
      <Category />
      <HomeProducts />
      <Brand />
    </>
  );
};

export default page;
