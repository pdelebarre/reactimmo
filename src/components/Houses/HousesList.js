import { Box } from "@mui/material";
import React from "react";

// import { theme } from "../theme/theme";

import House from "./House";
import classes from "./HouseList.module.css";

const HousesList = (props) => {
  let houses = props.houses;
  // console.log("houses :>> ", houses);

  return (
    <Box component="main" sx={{ maxHeight: "40em", overflow: "auto" }}>
      <div className={classes.container}>
        {houses.map((house) => (
          <House key={house.id} {...house} />
        ))}
      </div>
    </Box>
  );
};

export default HousesList;
