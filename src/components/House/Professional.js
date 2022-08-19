import React from "react";

import classes from "./Professional.module.css";

const Professional = (props) => {
  return (
    <div className={classes.container}>
      <img
        className={classes.logo}
        src={props.professional.logoUrl}
        alt="no logo"
      />
      <div className={classes.name}>{props.professional.name}</div>
    </div>
  );
};

export default Professional;
