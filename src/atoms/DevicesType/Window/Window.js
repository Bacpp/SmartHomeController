import React from "react";
import classes from "../Devices.module.css";
import window from "../../../images/devices/window.png";
import DeviceRemovalButton from "../../DeviceStates/DeviceRemoveButton/DeviceRemovalButton";
import ToggleSwitch from "../../DeviceStates/ToggleSwitch/ToggleSwitch";

const Window = ({ id, status, lastOpened }) => {
  return (
    <div className={classes.container}>
      <img src={window} alt="window" className={classes.image} />
      <ToggleSwitch initialState={status} labels={["OPEN", "CLOSED", "Last Opened"]} lastUsed={lastOpened} />
      <DeviceRemovalButton id={id}/>
    </div>
  );
};

export default Window;
