import React, { useContext, useEffect, useState } from "react";

import { ApiContext } from "../../context/api.context";
import { MapContext } from "../../context/map.context";

import { apiSearchFunction } from "../../utils/api.utils";
import mapSearchToCoords from "../../utils/maps.utils";

import HomeMap from "../../components/map/map.component";
import Input from "../../components/input/input.component";
import MapIcon from "../../components/map-icon/map-icon.component";
import Button from "../../components/button/button.component";
import EventCard from "../../components/event-card/event-card.component";

import "./search.styles.scss";

const defaultFormFields = {
  searchInput: "",
  locationInput: "",
};

const SearchPage = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { searchInput, locationInput } = formFields;
  const { apiData, setApiData } = useContext(ApiContext);
  const [apiSearchLat, setApiSearchLat] = useState("");
  const [apiSearchLng, setApiSearchLng] = useState("");
  const { isMapOpen, searchLocation } = useContext(MapContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handelCoords = async () => {
    if (locationInput === `${searchLocation.lat}, ${searchLocation.lng}`) {
      return;
    } else if (locationInput !== "") {
      const coordsRes = await mapSearchToCoords(locationInput);
      if (coordsRes !== undefined) {
        setApiSearchLat(coordsRes.geometry.location.lat);
        setApiSearchLng(coordsRes.geometry.location.lng);
      }
    }
  };

  const handelChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    handelCoords();
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    const res = await apiSearchFunction(
      searchInput,
      apiSearchLat,
      apiSearchLng
    );
    console.log(res.results);
    await setApiData(res.results);
    resetFormFields();
  };

  useEffect(() => {
    if (searchLocation.lat === undefined || searchLocation.lng === undefined) {
      return;
    } else {
      setFormFields({
        ...formFields,
        locationInput: `${searchLocation.lat}, ${searchLocation.lng}`,
      });
      setApiSearchLat(searchLocation.lat);
      setApiSearchLng(searchLocation.lng);
    }
  }, [searchLocation]);

  return (
    <div>
      <form
        action=""
        onSubmit={handelSubmit}
        className="search-events-form-container"
      >
        <Input
          label="Search for events or artists"
          type="text"
          onChange={handelChange}
          name="searchInput"
          value={searchInput}
        />

        <div className="locationSearch">
          <Input
            label="Search by location"
            type="text"
            onChange={handelChange}
            name="locationInput"
            value={locationInput}
          />
          <MapIcon className="map-icon" />
          {isMapOpen && <HomeMap className="map-window" />}
        </div>
        <Button text={"Search!"}></Button>
      </form>
      {/* {console.log(apiData)} */}
      {apiData && (
        <div className="results-container">
          {apiData.map((el) => {
            return <EventCard key={el.id} event={el} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
