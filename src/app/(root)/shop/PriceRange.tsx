"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const PriceRange = ({ min, max, price, setPrice }: { min: number; max: number; price: any; setPrice: any }) => {
  // const [values, setValues] = useState([min, max]);

  const handleSliderChange = (newValues: any) => {
    setPrice(newValues);
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-4">
      <Slider range min={min} max={max} value={price} onChange={handleSliderChange} />
      <div className="flex justify-between mt-2">
        <span>${price[0]}</span>
        <span>${price[1]}</span>
      </div>
    </div>
  );
};

export default PriceRange;
