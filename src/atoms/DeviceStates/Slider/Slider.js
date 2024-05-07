import React, { useState } from "react";
import classes from "./Slider.module.css";

const Slider = ({ brightness, onChange, label, min, max }) => {
  const [sliderState, setSliderState] = useState(brightness);

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderState(newValue);
    onChange(newValue); // Notify parent component about the change
  };

  return (
    <div className={classes.sliderContainer}>
      <p className={classes.sliderValue}>
        {label}: {sliderState}
      </p>
      <input
        type="range"
        min={min}
        max={max}
        value={sliderState}
        onChange={handleSliderChange}
        className={classes.slider}
      />
    </div>
  );
};

export default Slider;
