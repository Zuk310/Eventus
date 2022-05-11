import { createContext, useState } from "react";

export const MapContext = createContext({
  isMapOpen: null,
  setIsMapOpen: () => null,
});

export const MapProvider = ({ children }) => {
  const [isMapOpen, setIsMapOpen] = useState(null);
  const [center, setCenter] = useState({ lat: 44, lng: -80 });
  const [searchLocation, setSearchLocation] = useState({});

  const value = {
    isMapOpen,
    setIsMapOpen,
    center,
    setCenter,
    searchLocation,
    setSearchLocation,
  };
  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
