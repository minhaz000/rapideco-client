import HomeBanner from "@/components/HomeBanner/HomeBanner";
import Product from "@/components/Product/Product";
import React from "react";

const page = () => {
  return (
    <>
      <HomeBanner />
      <Product sectionTitle="Hot Deal" />
      <Product sectionTitle="Hot Deal" />
      <Product sectionTitle="Hot Deal" />
    </>
  );
};

export default page;
