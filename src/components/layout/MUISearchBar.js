import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import InputBase from "@mui/material/InputBase";
import { Button, IconButton } from "@mui/material";

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

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
  const [showSearchButton, setShowSearchButton] = useState(false);

  function housesHandler(event) {
    let url = `https://seloger.p.rapidapi.com/locations/search?searchTerm=${location}`;
    console.log("location", location);

    fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ee888aa438mshf30944eae0cdbcap15616cjsn0f043cc99ba5",
        "X-RapidAPI-Host": "seloger.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("data", data[0].postalCode.replaceAll("|", ","));

        let zipCode = data[0].postalCode.replaceAll("|", ",");
        console.log("zipCode", zipCode);

        let url = `https://seloger.p.rapidapi.com/properties/list?zipCodes=${zipCode}&pageIndex=1&pageSize=2&realtyTypes=2&transactionType=2&sortBy=0&includeNewConstructions=true&maximumFloor=2&maximumPrice=700000&bedrooms=3%2C4%2C5`;

        fetch(url, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "ee888aa438mshf30944eae0cdbcap15616cjsn0f043cc99ba5",
            "X-RapidAPI-Host": "seloger.p.rapidapi.com",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            let houses = [];
            console.log("data", data);
            for (const key in data.items) {
              //   console.log("...data[key]", ...data[key]);
              houses.push({ ...data.items[key], id: key });
            }
            console.log("houses :>> ", houses);
            setHousesHandler(houses);
          });
      })

      .catch((err) => console.error(err));
  }

  function changeHandler(event) {
    setLocation(event.target.value);
    console.log("location", location);
    setShowSearchButton(location.length > 3);
  }

  function clickHandler(e) {
    // housesHandler(e);
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
      {/* {showSearchButton && (
        <Button sx={{ bgcolor: "red", color: "white" }} onClick={clickHandler}>
          Rechercher
        </Button>
      )} */}
    </Search>
  );
};

export default MUISearchBar;
