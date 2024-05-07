import { Fragment } from "react";
import { useData } from "../components/DataFetcher";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const { devicesCopy } = useData();

  // Group devices by room and count the number of devices in each room
  const roomCounts = devicesCopy.reduce((counts, device) => {
    const { room } = device;
    counts[room] = (counts[room] || 0) + 1;
    return counts;
  }, {});

  const importRoomImage = (roomName) => {
    try {
      return require(`../images/rooms/${roomName
        .toLowerCase()
        .replace(/\s/g, "")}.png`);
    } catch (error) {
      // Handle the case where the image doesn't exist
      return null;
    }
  };

  const sortedRoomNames = Object.keys(roomCounts).sort((a, b) =>
    b.localeCompare(a)
  );
  return (
    <Fragment>
      <h1 className={styles.h1}>Home</h1>
      <div className={styles.flexContainer}>
        {sortedRoomNames.map((roomName) => (
          <div className={styles.container}>
            <NavLink
              className={styles.navlink}
              key={roomName}
              to={`/${roomName.toLowerCase().replace(/\s/g, "")}`}
            >
              {importRoomImage(roomName) && (
                <img
                  src={importRoomImage(roomName)}
                  alt={roomName}
                  className={styles.roomImage}
                />
              )}
              <p>{roomName}</p>
              <p>Number of Devices: {roomCounts[roomName]}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
