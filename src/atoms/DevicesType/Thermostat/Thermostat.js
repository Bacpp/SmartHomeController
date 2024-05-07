import React from "react";
import classes from "../Devices.module.css";
import thermostat from "../../../images/devices/thermostat.png";
import Slider from "../../DeviceStates/Slider/Slider";
import ModeSelector from "../../DeviceStates/ModeSelector/ModeSelector";
import DeviceRemovalButton from "../../DeviceStates/DeviceRemoveButton/DeviceRemovalButton";

const Thermostat = ({ id, temperature, mode }) => {
  const handleSliderChange = (newBrightness) => {
    // Handle brightness change here
  };

  const handleModeChange = (newMode) => {
    // Handle mode here
  };

  return (
    <div className={classes.container}>
      <img className={classes.image} src={thermostat} alt="thermostat"  style={{ marginLeft: '26px' }} />
      <Slider
        label="Temp. °F"
        brightness={temperature}
        onChange={handleSliderChange}
        min={15}
        max={80}
      />
      <ModeSelector
        initialMode={mode}
        options={["COOL", "AUTO", "HEAT"]}
        onChange={handleModeChange}
      />
      <DeviceRemovalButton id={id} />
    </div>
  );
};

export default Thermostat;
