import React from "react";

// import { Box, Text } from "@chakra-ui/react";
// import { theme } from "../theme/theme";

import House from "./House/House";
import classes from "./HouseList.module.css";

function HousesList(props) {
  let houses = props.houses;
  console.log("houses :>> ", houses);

  return (
    // <Box bg="teal" opacity=".5">
    <div className={classes.container}>
      {houses.map((house) => (
        <House key={house.id} {...house} />
      ))}
    </div>
    // </Box>
  );
}

export default HousesList;
