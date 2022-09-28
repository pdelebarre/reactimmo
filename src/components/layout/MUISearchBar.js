import React, { useState } from "react";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import InputBase from "@mui/material/InputBase";
import { IconButton } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const MUISearchBar = ({ setHousesHandler }) => {
  const [location, setLocation] = useState("");

  function changeHandler(event) {
    setLocation(event.target.value);
    console.log("location", location);
  }

  function clickHandler(e) {
    window.alert(e.target.value);
  }

  return (
    <Search>
      <IconButton type="submit" aria-label="search" onClick={clickHandler}>
        <SearchIcon />
        {/* <SearchIconWrapper>
        </SearchIconWrapper> */}
      </IconButton>
      <StyledInputBase
        type="text"
        value={location}
        placeholder="Entrez la ville de vos rêves"
        onChange={changeHandler}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default MUISearchBar;
