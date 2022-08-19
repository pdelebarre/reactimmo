import React from "react";
import { useEffect, useState } from "react";
import House from "./House/House";

import classes from "./HouseList.module.css";

import { DUMMY_HOUSES } from "./dummy.js";

function HousesList() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "ee888aa438mshf30944eae0cdbcap15616cjsn0f043cc99ba5",
    //     "X-RapidAPI-Host": "seloger.p.rapidapi.com",
    //   },
    // };

    // const url =
    //   "https://seloger.p.rapidapi.com/properties/list?zipCodes=33&pageIndex=1&pageSize=2&realtyTypes=2&transactionType=2&sortBy=0&includeNewConstructions=true&maximumFloor=2&maximumPrice=700000&bedrooms=3%2C4%2C5";

    // fetch(url, {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "ee888aa438mshf30944eae0cdbcap15616cjsn0f043cc99ba5",
    //     "X-RapidAPI-Host": "seloger.p.rapidapi.com",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // console.log("data", data);
    //     const houses = [];
    //     for (const key in data.items) {
    //       houses.push({ ...data.items[key], id: key });
    //     }
    //     setHouses(houses);
    //     // console.log(houses);
    //   })
    //     .catch((err) => console.error(err));

    let aux = [];
    for (const key in DUMMY_HOUSES.items) {
      aux.push({ ...DUMMY_HOUSES.items[key], id: key });
    }
    setHouses(aux);
    // console.log("houses", houses);
  }, []);

  return (
    <div className={classes.container}>
      <h1>List of properties</h1>
      {houses.map((house) => (
        <House key={house.id} {...house} />
      ))}
    </div>
  );
}

export default HousesList;
