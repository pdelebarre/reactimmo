export function fetchHouses(zipCode) {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "ee888aa438mshf30944eae0cdbcap15616cjsn0f043cc99ba5",
  //       "X-RapidAPI-Host": "seloger.p.rapidapi.com",
  //     },
  //   };

  const url = `https://seloger.p.rapidapi.com/properties/list?zipCodes=${zipCode}&pageIndex=1&pageSize=2&realtyTypes=2&transactionType=2&sortBy=0&includeNewConstructions=true&maximumFloor=2&maximumPrice=700000&bedrooms=3%2C4%2C5`;

  fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ee888aa438mshf30944eae0cdbcap15616cjsn0f043cc99ba5",
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
      // setHouses(houses);
      // console.log(houses);
      //   console.log("houses :>> ", houses);
      return houses;
    })
    .catch((err) => console.error(err));
}
