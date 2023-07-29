"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const PriceRange = ({ min, max }) => {
  const [values, setValues] = useState([min, max]);

  const handleSliderChange = (newValues) => {
    setValues(newValues);
  };
  return (
    <div className="w-full max-w-xs mx-auto mt-4">
      <Slider
        range
        min={min}
        max={max}
        value={values}
        onChange={handleSliderChange}
      />
      <div className="flex justify-between mt-2">
        <span>${values[0]}</span>
        <span>${values[1]}</span>
      </div>
    </div>
  );
};

export default PriceRange;
