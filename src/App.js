import React, { useState, useContext, Suspense } from "react";
import {
  ChakraProvider,
  Box,
  Center,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";

import HousesList from "./components/HousesList";
import SearchBar from "./components/SearchBar";

import { DUMMY_HOUSES } from "./test/dummy";

import PreferencesContext from "./store/preferences-context";

function App() {
  const [houses, setHouses] = useState(DUMMY_HOUSES.items);

  // const pref = usePref();
  const pref = useContext(PreferencesContext);

  const toggleTestModeHandler = (e, data) => {
    e.preventDefault();

    pref.toggleTestMode();
  };

  function setHousesHandler(event, data) {
    setHouses(data);
  }

  return (
    <ChakraProvider>
      <Center>
        <Box
          boxShadow="xs"
          p="6"
          rounded="md"
          bg="white"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          alignItems="center"
          minW="3xl"
          maxW="3xl"
        >
          {!pref.testMode && (
            <SearchBar maxW="3em" setHousesHandler={setHousesHandler} />
          )}
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="test-mode" mb="0">
              Test mode
            </FormLabel>
            <Switch id="test-mode" onChange={toggleTestModeHandler} />
          </FormControl>
          <Suspense fallback={<h2>Loading...</h2>}>
            <HousesList houses={houses} />
          </Suspense>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
