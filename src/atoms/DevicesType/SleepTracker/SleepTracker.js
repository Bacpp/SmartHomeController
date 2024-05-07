import React from "react";
import classes from "../Devices.module.css";
import sleeptracker from "../../../images/devices/sleeptracker.png";
import DeviceRemovalButton from "../../DeviceStates/DeviceRemoveButton/DeviceRemovalButton";

const SleepTracker = ({ id, lastSleepScore, lastSleepDuration, lastUpdated }) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={sleeptracker} alt="sleeptracker" />
      <p className={classes.p}>Last Sleep Score: {lastSleepScore}</p>
      <p className={classes.p}>Last Sleep Duration: {lastSleepDuration}</p>
      <p className={classes.p}>Last Updated: <br /> {new Date(lastUpdated).toLocaleString()}</p>
      <DeviceRemovalButton id={id}/>
    </div>
  );
};

export default SleepTracker;
