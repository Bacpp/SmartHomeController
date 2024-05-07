import React, { useState, useEffect } from "react";
import classes from "./ToggleSwitch.module.css";
//change
const ToggleSwitch = ({ initialState, labels, lastUsed }) => {
    const [internalToggle, setInternalToggle] = useState(
    initialState === labels[0]
  );
  const [buttonLastOpened, setButtonLastOpened] = useState(lastUsed);

  useEffect(() => {
    if (lastUsed === null && internalToggle) {
      const currentDate = new Date().toISOString();
      setButtonLastOpened(currentDate);
    }
  }, [lastUsed, internalToggle]);

  const toggleButtonState = () => {
    const newInternalToggle = !internalToggle;
    setInternalToggle(newInternalToggle);

    const newDeviceState = newInternalToggle ? labels[0] : labels[1];

    if (newDeviceState === labels[1]) {
      const currentDate = new Date().toISOString();
      setButtonLastOpened(currentDate);
    }
  };

  return (
    <>
      {lastUsed && (
        <p className={classes.status}>
          {labels[2]}: <br /> {new Date(buttonLastOpened).toLocaleString()}
        </p>
        
      )}
      <label className={classes.switch}>
        <input
          onClick={toggleButtonState}
          type="checkbox"
          checked={internalToggle}
          className={classes.input}
        />
        <span className={classes.slider}></span>
      </label>
    </>
  );
};

export default ToggleSwitch;



/*<p className={classes.status}>Status: {deviceStates}</p>
       <button className={classes.button} onClick={toggleButtonState}>
        Switch: {labels[0]} / {labels[1]}
      </button> */
