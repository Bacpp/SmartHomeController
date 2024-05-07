import React from "react";
import classes from "../Devices.module.css";
import sprinkler from "../../../images/devices/sprinkler.png";
import DeviceRemovalButton from "../../DeviceStates/DeviceRemoveButton/DeviceRemovalButton";
import ToggleSwitch from "../../DeviceStates/ToggleSwitch/ToggleSwitch";

const AutomaticWateringSystem = ({
  status,
  id,
  lastWatered,
  nexWatering,
}) => {

  return (
    <div className={classes.container}>
      <img src={sprinkler} alt="sprinkler" className={classes.image} />
      <p className={classes.p}>Next Watering: {nexWatering}</p>
      <ToggleSwitch initialState={status} labels={["ON", "OFF", "Last Watered"]} lastUsed={lastWatered}/>
      <DeviceRemovalButton id={id}/>
    </div>
  );
};

export default AutomaticWateringSystem;
