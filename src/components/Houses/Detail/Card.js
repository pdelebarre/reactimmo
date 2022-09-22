import React from "react";

import classes from "./Card.module.css";

import MapSection from "./Map";

const Card = (props) => {
  const location = {
    address: "Adriaan Pauwstraat 28, 2582 AS The Hague, Netherlands",
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <div className={classes.container}>
      {/* className = { classes.card__container } > */}
      <h2>DETAILS of {props.houseId}</h2>
      <div className={classes.carrousel__container}>
        <div className={classes.carrousel}> image carrousel</div>
        <div className={classes.map}>
          <MapSection location={location} zoomLevel={17} />
        </div>
      </div>
      <div className={classes.details__container}>property details</div>
    </div>
  );
};

export default Card;
