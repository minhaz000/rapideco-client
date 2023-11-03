import Brand from "@/components/Brand/Brand";
import Category from "@/components/Category/Category";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import Product from "@/components/Product/Product";
import React from "react";

const page = () => {
  return (
    <>
      <HomeBanner />
      <Category />
      <Product sectionTitle="Hot Deal" />
      <Product sectionTitle="Hot Deal" />
      <Product sectionTitle="Hot Deal" />
      {/* <Brand /> */}
    </>
  );
};

export default page;
