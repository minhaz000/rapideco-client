"use client";
import Product from "@/components/Product/Product";
import { useRootContext } from "@/context/root.context";
const HomeProducts = () => {
  const { settingsData }: any = useRootContext();
  return (
    <>
      {settingsData?.body?.cat_menu?.map((item: any, i: any) => (
        <Product
          key={i}
          categoryValue={item?.value}
          sectionTitle={item?.lavel}
        />
      ))}
    </>
  );
};

export default HomeProducts;
