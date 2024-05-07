import React from "react";
import classes from "../Devices.module.css";
import carcharger from "../../../images/devices/carcharger.png";
import DeviceRemovalButton from "../../DeviceStates/DeviceRemoveButton/DeviceRemovalButton";
import ToggleSwitch from "../../DeviceStates/ToggleSwitch/ToggleSwitch";

const ElectricCarCharger = ({ id, status, lastCharged }) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={carcharger} alt="carcharger" />
      <ToggleSwitch
        initialState={status}
        labels={["ON", "OFF", "Last Charged"]}
        lastUsed={lastCharged}
      />
      <DeviceRemovalButton id={id} />
    </div>
  );
};

export default ElectricCarCharger;
