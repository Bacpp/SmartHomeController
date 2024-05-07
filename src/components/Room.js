import React from "react";
import { useData } from "./DataFetcher";
import RoomCard from "../atoms/RoomCard/RoomCard";
import DeviceTypeDropdown from "../atoms/DeviceStates/DeviceAddDropDown/DeviceTypeDropDown";
import styles from "./Room.module.css";

const Room = ({ roomName }) => {
  const { devicesCopy, setDevicesCopy } = useData();

  const livingRoomDevices = devicesCopy.filter(
    (device) => device.room === roomName
  );

  return (
    <>
      <h1 className={styles.h1}>{roomName}</h1>
      <DeviceTypeDropdown
        devicesCopy={devicesCopy}
        setDevicesCopy={setDevicesCopy}
        roomName={roomName}
      />

      <div className={styles.flexContainer}>
        {livingRoomDevices.map((device) => (
          <div key={device.id}>
            <RoomCard device={device} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Room;
