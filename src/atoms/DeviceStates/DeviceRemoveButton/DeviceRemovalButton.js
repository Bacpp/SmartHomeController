import React from "react";
import classes from "./DeviceRemovalButton.module.css";
import { useData } from "../../../components/DataFetcher"; // Import the data context
import close from "../../../images/buttons/close.png";

const DeviceRemovalButton = ({ id }) => {
  const { devicesCopy, setDevicesCopy } = useData(); // Get access to devicesCopy and setDevicesCopy

  const handleRemoveClick = () => {
    const updatedDevices = devicesCopy.filter((device) => device.id !== id);
    setDevicesCopy(updatedDevices);
  };

  return (
    <button className={classes.button} onClick={handleRemoveClick}>
    <img src={close} alt="close" height={20} width={20}/>
    </button>
  );
};

export default DeviceRemovalButton;
