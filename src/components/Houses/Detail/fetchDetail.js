const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ee888aa438mshf30944eae0cdbcap15616cjsn0f043cc99ba5",
    "X-RapidAPI-Host": "seloger.p.rapidapi.com",
  },
};

fetch("https://seloger.p.rapidapi.com/properties/detail?id=180523003", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
