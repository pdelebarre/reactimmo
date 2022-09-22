import React from "react";
import GoogleMapReact from "google-map-react";
import classes from "./Map.module.css";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ text }) => (
  <div className={classes["pin"]}>
    <Icon icon={locationIcon} className="pin-icon" />
    <p className={classes["pin-text"]}>{text}</p>
  </div>
);

const Map = ({ location, zoomLevel }) => (
  <div className={classes["map"]}>
    <h2 className={classes["map-h2"]}>Come Visit Us At Our Campus</h2>

    <div className={classes["google-map"]}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDehBtJAE1wd02MruLtnlUIp7_xeb3mZa0" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
