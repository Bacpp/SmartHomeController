import Door from "../DevicesType/Door/Door";
import SmartFridge from "../DevicesType/SmartFridge/SmartFridge";
import AirQuality from "../DevicesType/AirQuality/AirQuality";
import AutomaticWateringSystem from "../DevicesType/AutomaticWateringSystem/AutomaticWateringSystem";
import ElectricCarCharger from "../DevicesType/ElectricCarCharger/ElectricCarCharger";
import Light from "../DevicesType/Light/Light";
import SecurityCamera from "../DevicesType/SecurityCamera/SecurityCamera";
import SleepTracker from "../DevicesType/SleepTracker/SleepTracker";
import Thermostat from "../DevicesType/Thermostat/Thermostat";
import Window from "../DevicesType/Window/Window";

const RoomCard = ({ device }) => {
  const { id, room, type, state } = device;

  // Render different card layouts based on device type
  const renderCardByType = () => {
    switch (type) {
      case "Door":
        return (
          <Door
            id={id}
            room={room}
            status={state.status} // Use the initial state from JSON
            lastOpened={state.lastOpened}
          />
        );
      case "Light":
        return (
          <Light
            id={id}
            room={room}
            status={state.status} // Use optional chaining and a default value
            brightness={state.brightness}
          />
        );
      case "Window":
        return (
          <Window
            id={id}
            room={room}
            status={state.status}
            lastOpened={state.lastOpened}
          />
        );
      case "Security Camera":
        return (
          <SecurityCamera
            id={id}
            room={room}
            status={state.status}
            lastMotionDetected={state.lastMotionDetected}
          />
        );
      case "Thermostat":
        return (
          <Thermostat
            id={id}
            room={room}
            temperature={state.temperature}
            mode={state.mode}
          />
        );

      case "Air Quality Monitor":
        return (
          <AirQuality
            id={id}
            room={room}
            qualityIndex={state.qualityIndex}
            lastUpdated={state.lastUpdated}
          />
        );

      case "Automatic Watering System":
        return (
          <AutomaticWateringSystem
            id={id}
            room={room}
            status={state.status}
            lastWatered={state.lastWatered}
            nextWatering={state.nextWatering}
          />
        );
      case "Electric Car Charger":
        return (
          <ElectricCarCharger
            id={id}
            room={room}
            status={state.status}
            charging={state.charging}
            lastCharged={state.lastCharged}
          />
        );
      case "Sleep Tracker":
        return (
          <SleepTracker
            id={id}
            room={room}
            lastSleepScore={state.lastSleepScore}
            lastSleepDuration={state.lastSleepDuration}
            lastUpdated={state.lastUpdated}
          />
        );

      case "Smart Fridge":
        return (
          <SmartFridge
            id={id}
            room={room}
            status={state.status}
            temperature={state.temperature}
            items = {state.items}
          />
        );
      // Add more cases for other device types
      default:
        return (
          <div className="card default-card">
            {/* Render default content */}
          </div>
        );
    }
  };

  return <div className="room-card">{renderCardByType()}</div>;
};

export default RoomCard;
