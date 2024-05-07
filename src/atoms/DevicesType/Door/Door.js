import React from "react";
import classes from "../Devices.module.css";
import door from "../../../images/devices/door.png";
import DeviceRemovalButton from "../../DeviceStates/DeviceRemoveButton/DeviceRemovalButton";
import ToggleSwitch from "../../DeviceStates/ToggleSwitch/ToggleSwitch";


const Door = ({ id, status, lastOpened }) => {
  return (
    <div className={classes.container}>
      <img
        className={classes.image}
        src={door}
        alt="door"
        height={100}
        width={100}
      />
      {/* <p className={classes.p}>Last Opened: {lastOpened}</p> */}
      <ToggleSwitch
        initialState={status}
        labels={["OPEN", "CLOSE", "Last Opened"]}
        lastUsed={lastOpened}
      />
      <DeviceRemovalButton id={id} />
    </div>
  );
};

export default Door;
