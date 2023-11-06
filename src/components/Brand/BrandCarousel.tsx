"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cat1 from "../../assets/category/2.png";
import Slider from "react-slick";
import Image from "next/image";
import brands from "@/interface/brand";
const BrandCarousel = ({ Brands }: { Brands: any }) => {
  console.log(Brands);
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    centerPadding: "50px",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {Brands.data.map((item: any) => (
        <div key={item._id}>
          {item.name}
          <Image src={Cat1} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default BrandCarousel;
