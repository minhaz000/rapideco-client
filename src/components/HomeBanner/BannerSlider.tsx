import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useRootContext } from "@/context/root.context";
import { EffectFade } from "swiper/modules";
const BannerSlider = () => {
  const { settingsData }: any = useRootContext();
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 3000,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {settingsData?.body?.banner.map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <img
            src={item?.img_url}
            alt="Banner Image"
            className="w-full h-full md:h-[400px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
