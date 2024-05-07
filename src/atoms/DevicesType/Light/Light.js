import React from "react";
import classes from "../Devices.module.css";
import light from "../../../images/devices/light.png";
import Slider from "../../DeviceStates/Slider/Slider";
import DeviceRemovalButton from "../../DeviceStates/DeviceRemoveButton/DeviceRemovalButton";
import ToggleSwitch from "../../DeviceStates/ToggleSwitch/ToggleSwitch";

const Light = ({ id, status, brightness }) => {
  const handleSliderChange = (newBrightness) => {
    // Handle brightness change here
  };

  return (
    <div className={classes.container}>
      <DeviceRemovalButton id={id} />

      <img src={light} alt="light" className={classes.image} />
      <Slider
        label="Brightness"
        brightness={brightness}
        onChange={handleSliderChange}
        min={0}
        max={100}
      />

      <ToggleSwitch initialState={status} labels={["ON", "OFF"]} />
    </div>
  );
};

export default Light;
