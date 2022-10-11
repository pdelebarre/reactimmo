import React, { Suspense } from "react";

import HousesList from "../components/Houses/HousesList";
// import SearchBar from "../components/Houses/SearchBar";

import { DUMMY_HOUSES } from "../test/dummy";

import { Box } from "@mui/material";

function SearchPage() {
  // const [houses, setHouses] = useState(DUMMY_HOUSES.items);
  const houses = DUMMY_HOUSES.items;

  // const pref = useContext(PreferencesContext);

  // const toggleTestModeHandler = (e, data) => {
  //   e.preventDefault();

  //   pref.toggleTestMode();
  // };

  // function setHousesHandler(event, data) {
  //   setHouses(data);
  // }

  return (
    <Box>
      {/* {!pref.testMode && (
        <SearchBar setHousesHandler={setHousesHandler} />
      )} */}
      {/* <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="test-mode" mb="0">
          Test mode
        </FormLabel>
        <Switch id="test-mode" onChange={toggleTestModeHandler} />
      </FormControl> */}

      <Suspense fallback={<div>loading...</div>}>
        <HousesList houses={houses} />
      </Suspense>
    </Box>
  );
}

export default SearchPage;
