import React from "react";
import classes from "../Devices.module.css";
import air from "../../../images/devices/air.png";
import DeviceRemovalButton from "../../DeviceStates/DeviceRemoveButton/DeviceRemovalButton";

const AirQuality = ({ id, qualityIndex, lastUpdated }) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={air} alt="air" />
      <p className={classes.p}>Quality Index: {qualityIndex}</p>
      <p className={classes.p}>Last Updated: <br />{new Date(lastUpdated).toLocaleString()}</p>
      <DeviceRemovalButton id={id}/>
    </div>
  );
};

export default AirQuality;
