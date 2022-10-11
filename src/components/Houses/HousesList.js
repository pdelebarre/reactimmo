import { Box } from "@mui/material";
import React from "react";

import House from "./House";

const HousesList = (props) => {
  let houses = props.houses;

  return (
    <Box component="main" sx={{ overflow: "auto", width: "60%" }}>
      {houses.map((house) => (
        <House key={house.id} {...house} />
      ))}
    </Box>
  );
};

export default HousesList;
