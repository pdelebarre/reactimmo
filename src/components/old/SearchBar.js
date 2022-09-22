import { Button, Input } from "@mui/material";
import React, { useState } from "react";

import classes from "./SearchBar.module.css";

// import { fetchHouses } from "../apis/fetch-houses";

const SearchBar = ({ setHousesHandler }) => {
  const [location, setLocation] = useState("");

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
            setHousesHandler(event, houses);
          });
      })

      .catch((err) => console.error(err));
  }

  function changeHandler(event) {
    setLocation(event.target.value);
    console.log("location", location);
  }

  return (
    <div className={classes.container}>
      <Input
        type="text"
        value={location}
        placeholder="Entrez la ville de vos reves"
        onChange={changeHandler}
      />
      <Button onClick={housesHandler}>OK</Button>
    </div>
  );
};

export default SearchBar;
