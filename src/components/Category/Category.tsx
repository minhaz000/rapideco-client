"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import CategoryCard from "./CategoryCard";
import axios from "@/hooks/hook.axios";
import SectionHeading from "../common/SectionHeading";

const Category = async () => {
  const { data: Categories } = await axios.get(
    "/api/v0/categories?is_delete=false&featured=true"
  );
  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-10">
      <SectionHeading sectionTitle="SHOP BY CATEGORIES" />
      <div className="mt-3">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
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
              spaceBetween: 15,
            },
          }}
        >
          {Categories?.data?.map((item: any) => (
            <SwiperSlide key={item.id}>
              <CategoryCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
