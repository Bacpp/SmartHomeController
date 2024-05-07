import React from "react";
import classes from "./SmartFridge.module.css";
import fridge from "../../../images/devices/fridge.png";
import Slider from "../../DeviceStates/Slider/Slider";
import DeviceRemovalButton from "../../DeviceStates/DeviceRemoveButton/DeviceRemovalButton";
import ToggleSwitch from "../../DeviceStates/ToggleSwitch/ToggleSwitch";

const SmartFridge = ({ id, status, temperature, items }) => {
  const handleSliderChange = (newBrightness) => {
    // Handle brightness change here
  };

  return (
    <div className={classes.container}>
      <img className={classes.image} src={fridge} alt="fridge" />
      <Slider
        label="Temp. °F"
        min={15}
        max={80}
        brightness={temperature}
        onChange={handleSliderChange}
      />
      <DeviceRemovalButton id={id} />
      <div className={classes.inline}>
      <ToggleSwitch initialState={status} labels={["ON", "OFF", "Turn On/Off"]} />
      {/* items... */}
      
      <ol className={classes.ol}>
        <p className={classes.p}>Items:</p>
        {items.map((item, index) => (
          <li key={index} className={classes.li}>
            {item.name} - Exp: {item.expiryDate}
          </li>
        ))}

      </ol>
      </div>
    </div>
  );
};

export default SmartFridge;
