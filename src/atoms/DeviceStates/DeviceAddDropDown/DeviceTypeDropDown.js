import React, { useState } from "react";
import classes from "./DeviceTypeDropdown.module.css";

const DeviceTypeDropdown = ({ devicesCopy, setDevicesCopy, roomName }) => {
  const currentDate = new Date().toISOString();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getDefaultDeviceState = (deviceType) => {
    switch (deviceType) {
      case "Light":
        return { status: "OFF", brightness: 0 };
      case "Door":
        return { status: "CLOSED", lastOpened: currentDate };
      case "Window":
        return { status: "CLOSED", lastOpened: currentDate };
      case "Thermostat":
        return { temperature: 72, mode: "COOL" };
      case "Security Camera":
        return { status: "OFF", lastMotionDetected: currentDate };
      // Add cases for other device types
      case "Air Quality Monitor":
        return { qualityIndex: 0, lastUpdated: currentDate };
      case "Smart Fridge":
        return { status: "OFF", temperature: 4, items: [] };
      case "Electric Car Charger":
        return { status: "OFF", charging: false, lastCharged: currentDate };
      case "Sleep Tracker":
        return {
          lastSleepScore: 0,
          lastSleepDuration: "",
          lastUpdated: currentDate,
        };
      case "Automatic Watering System":
        return {
          status: "OFF",
          lastWatered: currentDate,
          nextWatering: null,
        };
      default:
        return {};
    }
  };

  const handleAddDevice = (selectedDeviceType) => {
    if (selectedDeviceType) {
      const newDevice = {
        id: Date.now(),
        room: roomName,
        type: selectedDeviceType,
        state: getDefaultDeviceState(selectedDeviceType),
      };

      setDevicesCopy([...devicesCopy, newDevice]);
    }
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.dropdown}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button className={classes.dropbtn}>Add Device</button>
        {isDropdownOpen && (
          <div className={classes.dropdownContent}>
            <button
              onMouseDown={() => {
                handleAddDevice("Light");
              }}
            >
              Light
            </button>
            <button
              onMouseDown={() => {
                handleAddDevice("Door");
              }}
            >
              Door
            </button>
            <button
              onMouseDown={() => {
                handleAddDevice("Window");
              }}
            >
              Window
            </button>
            <button
              onMouseDown={() => {
                handleAddDevice("Thermostat");
              }}
            >
              Thermostat
            </button>
            <button
              onMouseDown={() => {
                handleAddDevice("Security Camera");
              }}
            >
              Security Camera
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceTypeDropdown;
