import React from "react";

import { Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/Favorites";
import SearchPage from "./pages/Search";

import HeaderAppBar from "./components/layout/HeaderAppBar";
// import FooterNavigation from "./components/layout/FooterNavigation";

const App = () => {
  return (
    <>
      <HeaderAppBar />
      {/* <Route path="/" render={(history) => <HeaderAppBar />} /> */}
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      {/* <FooterNavigation /> */}
    </>
  );
};

export default App;
