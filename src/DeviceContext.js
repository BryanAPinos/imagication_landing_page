import React, { createContext, useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import Bowser from "bowser";

// create context
const DeviceContext = createContext();

const DeviceContextProvider = ({ children }) => {
  const { width, height } = useWindowSize();
  const [device, setDevice] = useState("");

  const getDevice = () => {
    return Bowser.getParser(window.navigator.userAgent).getPlatformType();
  };

  function setCorrectDevice(device) {
    if (width <= 800 && device == "desktop") {
      setDevice("mobile");
    } else {
      setDevice(device);
    }
  }

  React.useEffect(() => {
    console.log(device);
  }, [device]);

  React.useEffect(() => {
    setCorrectDevice(getDevice());
  }, [width]);

  React.useEffect(() => {
    setCorrectDevice(getDevice());
  }, []);

  return (
    // the Provider gives access to the context to its children
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  );
};

export { DeviceContext, DeviceContextProvider };
