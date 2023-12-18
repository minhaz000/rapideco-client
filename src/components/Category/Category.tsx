"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CategoryCard from "./CategoryCard";
import SectionHeading from "../common/SectionHeading";
import getCategories from "@/lib/getCategories";
import CategorySkeleton from "./CategorySkeleton";
const Category = () => {
  const { categories, isLoading } = getCategories();
  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-12 mt-10">
      <SectionHeading sectionTitle="SHOP BY CATEGORIES" />
      <div className="mt-3">
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
            {Array.from({ length: 6 }, (_, i) => (
              <CategorySkeleton key={i} />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Navigation]}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1020: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
          >
            {categories?.data?.map((item: any) => (
              <SwiperSlide key={item._id}>
                <CategoryCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Category;
