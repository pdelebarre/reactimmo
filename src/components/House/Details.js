import React from "react";

import classes from "./Details.module.css";

const Details = (props) => {
  let transactionType =
    props.house.transactionType === 1 ? "A Louer" : "A Vendre";
  let description = `${props.house.level}' etage - ${props.house.rooms} pieces - ${props.house.bedrooms} chambre(s) - Living ${props.house.livingArea} ${props.house.livingAreaUnit}`;
  return (
    <div className={classes.container}>
      <div className={classes.type}>{transactionType}</div>
      <div className={classes.price}>{props.house.price} €</div>
      <div className={classes.title}>{props.house.title}</div>

      <div className={classes.description}>{description}</div>
      <div className={classes.location}>{props.house.city}</div>
    </div>
  );
};

export default Details;
