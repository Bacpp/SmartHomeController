import React, { useState, useEffect, createContext, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [devices, setDevices] = useState([]);
  const [devicesCopy, setDevicesCopy] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/DimitarSD/mock-iot/db"
        );
        const data = await response.json();
        if (data && data.devices) {
          setDevices(data.devices);
          setDevicesCopy([...data.devices]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ devices, devicesCopy, setDevicesCopy }}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
