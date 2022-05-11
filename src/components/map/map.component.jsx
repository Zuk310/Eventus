import { useContext } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import "./map.styles.scss";
import { MapContext } from "../../context/map.context";

const HomeMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAt8R4Za2KdFB7nVKKdEJ0fcKf9SHNjBjQ",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

const Map = () => {
  const {
    isMapOpen,
    setIsMapOpen,
    center,
    setCenter,
    setSearchLocation
  } = useContext(MapContext);
  // const [center, setCenter] = useContext({ lat: 44, lng: -80 })

  const toggleMapOpen = () => {
    setIsMapOpen(!isMapOpen);
  };

  const makerLocationHandler = (e) => {
    setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };
  return (
    <div className="map-window-container">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
        onClick={(e) => makerLocationHandler(e)}
      >
        <Marker position={center} draggable={true} />
      </GoogleMap>

      <button className="submit-location-btn" onClick={() => {
          toggleMapOpen();
          setSearchLocation(center);
          }}>
        Submit
      </button>
    </div>
  );
};

export default HomeMap;
