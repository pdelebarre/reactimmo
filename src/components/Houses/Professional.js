import { Box, CardMedia } from "@mui/material";
import React from "react";

import classes from "./Professional.module.css";

const Professional = (props) => {
  return (
    <Box>
      <CardMedia
        width="30"
        // height="20"
        component="img"
        src={props.professional.logoUrl}
        alt="no logo"
        sx={{
          borderRadius: 50,
          width: "clamp(30px, (304px - 100%) * 999 , 100%)",
        }}
      />
      <Box className={classes.name}>{props.professional.name}</Box>
    </Box>
  );
};

export default Professional;
