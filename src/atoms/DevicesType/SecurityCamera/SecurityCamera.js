import React from "react";
import classes from "../Devices.module.css";
import camera from "../../../images/devices/camera.png";
import DeviceRemovalButton from "../../DeviceStates/DeviceRemoveButton/DeviceRemovalButton";
import ToggleSwitch from "../../DeviceStates/ToggleSwitch/ToggleSwitch";

const SecurityCamera = ({ id, status, lastMotionDetected }) => {
  
  if(lastMotionDetected === null) {
    lastMotionDetected = new Date().toISOString();
  }


  return (
    <div className={classes.container}>
      <img className={classes.image} src={camera} alt="camera" />
      <ToggleSwitch initialState={status} labels={["ON", "OFF", "Last Motion Detected"]} lastUsed={lastMotionDetected} />
      <DeviceRemovalButton id={id}/>
    </div>
  );
};

export default SecurityCamera;
